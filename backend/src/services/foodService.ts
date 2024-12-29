import { Food } from "../entities/food";

const foodService = {
  getOneAdById: async (id: number): Promise<Food> => {
    try {
      const result = await Food.find({
        where: { id: id },
      });
      console.log("result from getOneFoodById", result);
      return result[0];
    } catch (err) {
      console.log("err", err);
      return err;
    }
  },
};

export default foodService;
