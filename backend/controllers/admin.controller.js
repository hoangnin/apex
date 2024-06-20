import restaurantModel from '../models/restaurant.model.js';
import responseHandler from '../handlers/response.handler.js';

const activeRestaurant = async (req, res) => {
      try {
            const restaurant = await restaurantModel.findById(req.params.restaurantId);
            
            if (!restaurant) {
                return responseHandler.notFound(res);
            }
            restaurant.set({ active: true });
            await restaurant.save();
            responseHandler.ok(res, restaurant);
      } catch (error) {
            console.error(error);
            responseHandler.error(res);
      }
  }

const blockRestaurant = async (req, res) => {
      try {
            const restaurant = await restaurantModel.findById(req.params.restaurantId);
            if (!restaurant) {
                return responseHandler.notFound(res);
            }
            restaurant.set({ active: false });
            await restaurant.save();
            responseHandler.ok(res, restaurant);
      } catch (error) {
            console.error(error);
            responseHandler.error(res);
      }
  }

export default { activeRestaurant, blockRestaurant};