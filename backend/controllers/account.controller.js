import responseHandler from "../handlers/response.handler.js";
import accountModel from "../models/account.model.js";
import Restaurant from "../models/restaurant.model.js";
import customerModel from "../models/customer.model.js";
import employeeModel from "../models/employee.model.js";
import { ROLES_LIST } from "../config/enum.config.js";
import { createToken } from "../utils/token.util.js";

const signup = async (req, res) => {
  try {
    const { username, displayName, password, role, phoneNumber, email } =
      req.body;

    const isExisted = await accountModel.findOne({ username });

    if (isExisted)
      return responseHandler.badRequest(res, "Tài khoản đã tồn tại!");

    const account = new accountModel({
      username,
      displayName,
      email,
      phoneNumber,
      role:
        role === ROLES_LIST.restaurant
          ? ROLES_LIST.restaurant
          : (role === ROLES_LIST.employee
            ? ROLES_LIST.employee
            : ROLES_LIST.customer),
    });
    account.setPassword(password);
    await account.save();
    let restaurant = null;
    let employee = null;
    if (role === ROLES_LIST.restaurant) {
      const { location, restaurant_name } = req.body;
      restaurant = new Restaurant({
        account: account.id,
        name: restaurant_name,
        location: location,
        cuisine: "",
        description: "",
        openingHours: "",
        closingHours: "",
        menu: [],
      });
      await restaurant.save();
    }else if (role === ROLES_LIST.employee) {
      // const { location, employee_name } = req.body;
      employee = new employeeModel({
        account: account.id,
      });
      await employee.save();
    }else {
      const customer = new customerModel({
        account: account.id,
      });
      await customer.save();
    }

    const token = createToken(account.id);

    account.password = undefined;
    account.salt = undefined;

    responseHandler.created(res, {
      token,
      ...account._doc,
      userData: restaurant ? restaurant : {},
    });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};


const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userData = {};

    const account = await accountModel.findOne({ username })
      .select("id username displayName password salt phoneNumber email role avatar");


    // if (account.role === ROLES_LIST.photographer) {
    //   const photographer = await photographerModel.findOne({ account: account.id })
    //     .select("location status gender age description experienceYears bookingCount type_of_account");
    //   userData.location = photographer.location;
    //   userData.status = photographer.status;
    //   userData.gender = photographer.gender;
    //   userData.age = photographer.age;
    //   userData.description = photographer.description;
    //   userData.experienceYears = photographer.experienceYears;
    //   userData.bookingCount = photographer.bookingCount;
    //   userData.type_of_account = photographer.type_of_account;
    // }

    if (account == null) return responseHandler.notfound(res, "Tài khoản không tìm thấy !");

    if (!account.validatePassword(password)) return responseHandler.badRequest(res, "Sai mật khẩu !");

    const token = createToken(account.id);

    account.password = undefined;
    account.salt = undefined;
    userData.token = token;

    responseHandler.created(res, {
      token,
      id: account.id,
      ...account._doc,
      userData,
    });
    req.account = account;
    next();
  } catch {
    responseHandler.error(res);
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const account = await accountModel.findById(req.account.id);
    if (!account.validatePassword(oldPassword)) {
      return responseHandler.badRequest(res, "Mật khẩu cũ không chính xác !");
    }
    account.setPassword(newPassword);
    await account.save();
    responseHandler.ok(res, "Đổi mật khẩu thành công !");
  }
  catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
}

export default { 
  signup,
  login,
  changePassword
};