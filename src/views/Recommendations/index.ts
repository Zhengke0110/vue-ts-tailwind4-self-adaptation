import RecommendationsView from "./RecommendationsView.vue";
export default RecommendationsView;

export type Recommendation = {
  id: string;
  title: string;
  description: string;
  category: "culture" | "nature" | "food" | "adventure";
  image: string;
  rating: number;
  tags: string[];
};

export type CategoryType = "all" | "culture" | "nature" | "food" | "adventure";

export const categories = [
  { value: "all" as CategoryType, label: "全部推荐", icon: "fas fa-th-large" },
  {
    value: "culture" as CategoryType,
    label: "文化体验",
    icon: "fas fa-theater-masks",
  },
  {
    value: "nature" as CategoryType,
    label: "自然探索",
    icon: "fas fa-mountain",
  },
  { value: "food" as CategoryType, label: "美食之旅", icon: "fas fa-utensils" },
  {
    value: "adventure" as CategoryType,
    label: "探险活动",
    icon: "fas fa-compass",
  },
] as const;

export const categoryLabel = {
  culture: "文化体验",
  nature: "自然探索",
  food: "美食之旅",
  adventure: "探险活动",
};

// Header banner image
import Banner from "@/assets/images/recommend/Banner.png";
export { Banner };
