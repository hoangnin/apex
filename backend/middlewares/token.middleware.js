import jsonwebtoken from 'jsonwebtoken';
import responseHandler from '../handlers/response.handler.js';
import accountModel from '../models/account.model.js';
import { ROLES_LIST } from '../config/enum.config.js';

const tokenDecode = (req) => {
     try {
          const bearerHeader = req.headers['authorization'];

          if (bearerHeader) {
               const token = bearerHeader.split(" ")[1];
               return jsonwebtoken.verify(
                    token, process.env.TOKEN_SECRET_KEY
               )
          }
          return false;
     } catch {
          return false; 
     }
}

const authenticate = async (req, res, next) => {
     const tokenDecoded = tokenDecode(req);
     if (!tokenDecoded) return responseHandler.unAuthorize(res);

     const account = await accountModel.findById(tokenDecoded.data);
     if (!account) return responseHandler.unAuthorize(res);
     req.account = account;
     next();
}

const authorize = async (req, res, next) => {
     try {
          const { account } = req.account;
          if (account.role == ROLES_LIST.photographer) {
               next();
          } else return responseHandler.unAuthorize(res);
     } catch {
          responseHandler.error(res);
     }
}
const adminAuthorize = async (req, res, next) => {
     try {
          const  account  = req.account;
          if ( account.role == ROLES_LIST.admin) {
               next();
          } else return responseHandler.unAuthorize(res);
     } catch (error) {
          responseHandler.error(res);
     }
}


export default { authenticate, tokenDecode, authorize, adminAuthorize };
