import FoodView from "./FoodView.vue";
export default FoodView;

import Banner from "@/assets/images/foods/banner.png";
export { Banner };

// 定义Food接口
interface Food {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "local" | "snack" | "restaurant"; // 限定分类类型
  rating: number;
  reviews: number;
}

// 使用接口定义数据
const foods: Food[] = [
  {
    id: "1",
    title: "金华火腿",
    description: "中国四大火腿之一，以其独特的咸鲜味和浓郁的香气闻名",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF-3.jpg",
    category: "local",
    rating: 4.8,
    reviews: 256,
  },
  {
    id: "2",
    title: "婺州麻糍",
    description: "金华特色小吃，外皮柔韧，内馅香甜",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E5%A9%BA%E5%B7%9E%E9%BA%BB%E7%B3%8D/%E5%A1%94%E7%9F%B3%E9%BA%BB%E7%B3%8D.jpg",
    category: "snack",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "3",
    title: "义乌麦饼",
    description: "酥脆可口，香甜适中，是义乌最具代表性的特色小吃",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E4%B9%89%E4%B9%8C%E9%BA%A6%E9%A5%BC/%E4%B9%89%E4%B9%8C%E9%BA%A6%E9%A5%BC.jpg",
    category: "snack",
    rating: 4.3,
    reviews: 98,
  },
  {
    id: "4",
    title: "兰溪糕点",
    description: "历史悠久的传统糕点，以其精致的做工和独特的口感著称",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E5%85%B0%E6%BA%AA%E7%B3%95%E7%82%B9/%E9%BB%91%E8%8A%9D%E9%BA%BB%E6%93%A6%E9%85%A5.jpg",
    category: "local",
    rating: 4.6,
    reviews: 167,
  },
  {
    id: "5",
    title: "腌笃鲜",
    description: "金华火腿的经典吃法，将火腿与新鲜春笋、肋排一同炖煮",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF/%E8%85%8C%E7%AC%83%E9%B2%9C.png",
    category: "local",
    rating: 4.9,
    reviews: 312,
  },
  {
    id: "6",
    title: "油炸臭豆腐",
    description: "外酥内嫩，搭配特制酱料，香气四溢的街边小吃",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E6%B2%B9%E7%82%B8%E8%87%AD%E8%B1%86%E8%85%90.png",
    category: "snack",
    rating: 4.4,
    reviews: 245,
  },
  {
    id: "7",
    title: "梅干菜烧肉",
    description: "婺城区特色菜品，梅干菜与五花肉的完美结合",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B8%9C%E9%98%B3/%E7%BE%8E%E9%A3%9F/%E9%9C%89%E5%B9%B2%E8%8F%9C.png",
    category: "local",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: "8",
    title: "横店馄饨",
    description: "皮薄馅大，汤鲜味美，是当地人喜爱的早餐选择",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B8%9C%E9%98%B3/%E7%BE%8E%E9%A3%9F/%E6%A8%AA%E5%BA%97%E9%A6%84%E9%A5%A8.png",
    category: "snack",
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "9",
    title: "东阳卤鸭",
    description: "采用独特卤制工艺，肉质鲜嫩，味道醇厚",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B8%9C%E9%98%B3/%E7%BE%8E%E9%A3%9F/%E4%B8%9C%E9%98%B3%E5%8D%A4%E9%B8%AD.png",
    category: "local",
    rating: 4.6,
    reviews: 178,
  },
  {
    id: "10",
    title: "老火靓汤馆",
    description: "主打各类养生汤品，以火腿老鸭汤最为出名",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B8%9C%E9%98%B3/%E7%BE%8E%E9%A3%9F/%E8%80%81%E7%81%AB%E9%9D%93%E6%B1%A4%E9%A6%86.png",
    category: "restaurant",
    rating: 4.8,
    reviews: 234,
  },
  {
    id: "11",
    title: "婺州大院",
    description: "传统徽派建筑风格餐厅，提供正宗的金华本地菜",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%A9%BA%E5%9F%8E/%E9%A5%AE%E9%A3%9F/%E5%A9%BA%E5%AE%B6%E5%A4%A7%E9%99%A2.png",
    category: "restaurant",
    rating: 4.7,
    reviews: 289,
  },
  {
    id: "12",
    title: "油焖春笋",
    description: "金华特色菜，选用当地鲜嫩春笋，口感清脆爽滑",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%A9%BA%E5%9F%8E/%E9%A5%AE%E9%A3%9F/%E6%B2%B9%E7%84%96%E6%98%A5%E7%AC%8B.png",
    category: "local",
    rating: 4.5,
    reviews: 167,
  },
  {
    id: "13",
    title: "金华面馆",
    description: "百年老字号，以招牌阳春面和牛肉面闻名",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%A9%BA%E5%9F%8E/%E9%A5%AE%E9%A3%9F/%E9%87%91%E5%8D%8E%E9%9D%A2%E9%A6%86.png",
    category: "restaurant",
    rating: 4.6,
    reviews: 345,
  },
  {
    id: "14",
    title: "酱鸭舌",
    description: "特色卤味小吃，口感韧性十足，味道鲜美",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%A9%BA%E5%9F%8E/%E9%A5%AE%E9%A3%9F/%E9%85%B1%E9%B8%AD%E8%88%8C.png",
    category: "snack",
    rating: 4.4,
    reviews: 198,
  },
  {
    id: "15",
    title: "农家乐山庄",
    description: "以农家菜为主，可以品尝到地道的土菜和山珍",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%A9%BA%E5%9F%8E/%E4%BD%8F%E5%AE%BF/%E5%86%9C%E5%AE%B6%E4%B9%90.png",
    category: "restaurant",
    rating: 4.5,
    reviews: 267,
  },
];

export { type Food, foods };
