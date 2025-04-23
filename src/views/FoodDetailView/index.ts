export interface Food {
    id: string;
    title: string;
    description: string;
    image: string;
    category: "local" | "snack" | "restaurant"; // 限定分类类型
    rating: number;
    reviews: number;
}

// 导入FoodView中的foods数据
import { foods } from "../FoodView/index.ts";

// 获取食品数据的函数
export const getFoodById = (id: string): Food | undefined => {
    return foods.find(food => food.id === id);
};

// 获取相关推荐的函数 (同类别的其他食品)
export const getRelatedFoods = (currentFood: Food, limit: number = 3): Food[] => {
    if (!currentFood) return [];
    
    return foods
        .filter(food => food.category === currentFood.category && food.id !== currentFood.id)
        .slice(0, limit);
};

import FoodDetailView from "./FoodDetailView.vue";
export default FoodDetailView;