import { Like } from "typeorm";
import { Food } from "../entities/food";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Article } from "../entities/article";

@InputType()
class NewFoodInput implements Partial<Food> {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => String, { nullable: true })
  imgUrl?: string | undefined;

  @Field()
  emoji: string;

  @Field()
  continent: string;

  @Field()
  price: string;
}

@Resolver(Food)
class FoodResolver {
  @Query(() => [Food])
  async getAllFoods() {
    const foods = await Food.find({ relations: ["articles"] });
    return foods;
  }

  @Mutation(() => Food)
  async createNewFood(@Arg("data") newFoodData: NewFoodInput) {
    const resultFromSave = await Food.save({
      ...newFoodData,
    });

    return resultFromSave;
  }

  @Query(() => Food)
  async getOneFoodById(@Arg("productId") foodId: string) {
    const food = await Food.findOne({
      where: { id: Number.parseInt(foodId) },
      relations: ["articles"],
    });
    return food;
  }

  @Query(() => [Food])
  async searchFoods(@Arg("keyword") keyword: string) {
    const foods = await Food.find({
      where: [{ name: Like(`%${keyword}%`) }],
    });
    return foods;
  }

  @Mutation(() => Food)
  async editFood(
    @Arg("foodId") foodId: string,
    @Arg("data") newFoodData: NewFoodInput
  ) {
    const food = await Food.findOneByOrFail({
      id: Number.parseInt(foodId),
    });

    food.name = newFoodData.name;
    food.description = newFoodData.description;
    food.price = newFoodData.price;
    if (newFoodData.imgUrl !== undefined) {
      food.imgUrl = newFoodData.imgUrl;
    }

    const updatedFood = await food.save();
    return updatedFood;
  }

  @Mutation(() => String)
  async deleteFood(@Arg("id") idToDelete: string) {
    const articlesToDelete = await Article.find({
      where: { food: { id: Number(idToDelete) } },
    });
    articlesToDelete.map((article) => Article.delete(article.id));
    await Food.delete(idToDelete);
    return `Food deleted successfully`;
  }
}

export default FoodResolver;

// import { Food } from "../entities/food";
// import { Query, Resolver, Mutation, Arg, InputType, Field } from "type-graphql";

// @InputType()
// export class NewFoodInput implements Partial<Food> {
//   @Field()
//   code: string;

//   @Field()
//   name: string;

//   @Field()
//   emoji: string;

//   @Field()
//   description: string;

//   @Field()
//   imgUrl: string;

//   @Field()
//   continent: string;

//   @Field()
//   price: string;
// }

// @Resolver(Food)
// export class FoodResolver {
//   @Query(() => [Food])
//   async foods(): Promise<Food[]> {
//     return Food.find();
//   }

//   @Mutation(() => Food)
//   async createNewFood(@Arg("data") newFoodData: NewFoodInput) {
//     const resultFromSave = await Food.save({
//       ...newFoodData,
//     });
//     return resultFromSave;
//   }

//   @Query(() => Food)
//   async getFoodByCode(@Arg("FoodCode") FoodCode: string) {
//     const food = await Food.findOneByOrFail({ code: FoodCode });
//     return food;
//   }

//   @Query(() => Food)
//   async getFoodByContinent(@Arg("FoodContinent") FoodContinent: string) {
//     const food1 = await Food.findOneByOrFail({
//       continent: FoodContinent,
//     });
//     return food1;
//   }
// }

// export default FoodResolver;
