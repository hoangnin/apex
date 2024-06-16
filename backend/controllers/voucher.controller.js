import responseHandler from "../handlers/response.handler.js";
import voucherModel from "../models/voucher.model.js";
import accountModel from "../models/account.model.js";

const createVoucher = async (req, res) => {
  try {
    const voucher = new voucherModel({
      ...req.body,
    });

    await voucher.save();

    responseHandler.created(res, { ...voucher._doc });
  } catch (error) {
    console.log("Error in create voucher: ", error.message);
    responseHandler.error(res);
  }
}

const convertPointsToVoucher = async (req, res) => {
  try {
    const { voucherId } = req.body;
    const userId = req.account.id;

    // Fetch the user (account) and the voucher from the database
    const customer = await Customer.findOne({ account: req.account.id });
    if (customer){
      customer.accumulated_points += 1;
      await customer.save();

      
    }
    const accountFromDB = await accountModel.findById(userId).populate('customer');
    const voucher = await voucherModel.findById(voucherId);

    // Check if the user has enough points
    if (accountFromDB.customer.accumulate_point < voucher.points) {
      return responseHandler.error(res, 'Not enough points to convert to a voucher');
    }

    // Subtract the required points from the user's total
    accountFromDB.customer.accumulate_point -= voucher.points;
    await accountFromDB.customer.save();

    // Add the voucher to the user's voucher history
    const voucherHistory = new voucherHistoryModel({
      user: userId,
      voucher: voucher._id,
    });

    await voucherHistory.save();

    responseHandler.created(res, { ...voucher._doc });
  } catch (error) {
    console.log("Error in convert points to voucher: ", error.message);
    responseHandler.error(res);
  }
}


export default { createVoucher, convertPointsToVoucher };