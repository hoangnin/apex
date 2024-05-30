import jsonwebtoken from 'jsonwebtoken';

export const createToken = (id) => {
   return jsonwebtoken.sign(
      { data: id },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: '6h' }
   );
};