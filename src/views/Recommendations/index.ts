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

export const categoryLabel = {
  culture: "文化体验",
  nature: "自然探索",
  food: "美食之旅",
  adventure: "探险活动",
};

// Header banner image
import Banner from "@/assets/images/recommend/Banner.png";
export { Banner };
