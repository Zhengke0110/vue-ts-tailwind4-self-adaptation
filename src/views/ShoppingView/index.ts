import ShoppingView from "./ShoppingView.vue";
// 导入背景图片
import Banner from "@/assets/images/shopping/banner.png";
export { Banner };

export default ShoppingView;
export interface ShoppingItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "local" | "craft" | "market";
  rating: number;
  reviews: number;
  price: string;
  location: string;
  tags: string[];
}

export type ShoppingCategory = {
  value: "all" | "local" | "craft" | "market";
  label: string;
  icon: string;
};

export const shoppingItems: ShoppingItem[] = [
  {
    id: "1",
    title: "金华火腿礼盒",
    description:
      "精选3年以上陈化火腿，传统工艺制作，色泽红润，肉质细腻，营养丰富，送礼佳品。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF%E7%A4%BC%E7%9B%92/%E7%81%AB%E8%85%BF%E7%A4%BC%E7%9B%92-2.jpg",
    category: "local",
    rating: 4.8,
    reviews: 256,
    price: "688",
    location: "金华市火腿文化园",
    tags: ["送礼首选", "传统美食", "地理标志产品"],
  },
  {
    id: "2",
    title: "东阳木雕套装",
    description:
      "国家级非遗传承作品，纯手工雕刻，选用上等香樟木，古色古香，雕工精湛。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B8%9C%E9%98%B3%E6%9C%A8%E9%9B%95/%E6%9C%A8%E9%9B%95-2.jpg",
    category: "craft",
    rating: 4.7,
    reviews: 128,
    price: "1288",
    location: "东阳木雕城",
    tags: ["非遗文化", "收藏价值", "手工艺品"],
  },
  {
    id: "3",
    title: "义乌小商品市场精选",
    description: "汇集全球小商品，包括饰品、文具、日用品等，一站式采购天堂。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E5%B0%8F%E5%95%86%E5%93%81/%E5%95%86%E5%93%81-2.jpg",
    category: "market",
    rating: 4.5,
    reviews: 398,
    price: "不限",
    location: "义乌国际商贸城",
    tags: ["批发采购", "品类齐全", "价格实惠"],
  },
  {
    id: "4",
    title: "兰溪红糖礼盒",
    description: "传统手工熬制，原料为本地甘蔗，无添加纯天然，营养丰富。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E5%85%B0%E6%BA%AA%E7%BA%A2%E7%B3%96/%E7%BA%A2%E7%B3%96.jpg",
    category: "local",
    rating: 4.6,
    reviews: 167,
    price: "128",
    location: "兰溪市特产中心",
    tags: ["纯天然", "养生保健", "传统工艺"],
  },
  {
    id: "5",
    title: "横店影视道具集",
    description: "横店影视城特色道具，包括古装服饰、装饰品等，影视文化纪念品。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E6%A8%AA%E5%BA%97%E5%BD%B1%E8%A7%86%E9%81%93%E5%85%B7%E9%9B%86.png",
    category: "craft",
    rating: 4.3,
    reviews: 89,
    price: "199",
    location: "横店影视城",
    tags: ["影视文化", "收藏纪念", "特色礼品"],
  },
  {
    id: "6",
    title: "婺州窑瓷器",
    description: "千年窑口传承，青瓷工艺精湛，釉色典雅，器型优美。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E5%A9%BA%E5%B7%9E%E7%93%B7%E5%99%A8.png",
    category: "craft",
    rating: 4.9,
    reviews: 156,
    price: "488",
    location: "金华市博物馆文创店",
    tags: ["文化遗产", "艺术收藏", "送礼佳品"],
  },
  {
    id: "7",
    title: "浦江水晶饰品",
    description: "采用优质水晶原料，工艺精细，璀璨夺目，时尚精美。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E6%B5%A6%E6%B1%9F%E6%B0%B4%E6%99%B6%E9%A5%B0%E5%93%81.png",
    category: "craft",
    rating: 4.6,
    reviews: 245,
    price: "299",
    location: "浦江水晶市场",
    tags: ["时尚饰品", "品质保证", "个性定制"],
  },
  {
    id: "8",
    title: "武义养生茶叶",
    description: "武义高山有机茶，包括白茶、红茶、绿茶等，清香醇厚。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E5%85%BB%E7%94%9F%E8%8C%B6.png",
    category: "local",
    rating: 4.7,
    reviews: 178,
    price: "368",
    location: "武义茶叶市场",
    tags: ["有机认证", "养生保健", "礼盒装"],
  },
  {
    id: "9",
    title: "义乌圣诞用品",
    description: "全球最大圣诞用品集散地，品种齐全，价格优惠。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E5%9C%A3%E8%AF%9E%E7%94%A8%E5%93%81.png",
    category: "market",
    rating: 4.4,
    reviews: 423,
    price: "批发价",
    location: "义乌国际商贸城",
    tags: ["节日用品", "批发零售", "出口品质"],
  },
  {
    id: "10",
    title: "东阳黄花梨家具",
    description: "采用优质黄花梨木材，传统榫卯工艺，做工精细，历久弥新。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B8%9C%E9%98%B3%E9%BB%84%E8%8A%B1%E6%A2%A8%E5%AE%B6%E5%85%B7.png",
    category: "craft",
    rating: 4.8,
    reviews: 92,
    price: "定制",
    location: "东阳红木家具城",
    tags: ["传统工艺", "高端定制", "收藏价值"],
  },
  {
    id: "11",
    title: "兰溪豆腐干",
    description: "采用非转基因黄豆，传统手工制作，口感细腻，营养丰富。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E5%85%B0%E6%BA%AA%E8%B1%86%E8%85%90%E5%B9%B2.png",
    category: "local",
    rating: 4.5,
    reviews: 334,
    price: "68",
    location: "兰溪特产市场",
    tags: ["地方特产", "传统美食", "真空包装"],
  },
  {
    id: "12",
    title: "义乌文具套装",
    description: "创意文具大集合，品质优良，款式新颖，适合学生办公。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E6%96%87%E5%85%B7%E5%A5%97%E8%A3%85.png",
    category: "market",
    rating: 4.3,
    reviews: 567,
    price: "99",
    location: "义乌文具市场",
    tags: ["学习用品", "创意设计", "性价比高"],
  },
  {
    id: "13",
    title: "永康五金工具",
    description: "专业五金工具套装，质量可靠，品种齐全，价格实惠。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E6%B0%B8%E5%BA%B7%E4%BA%94%E9%87%91%E5%B7%A5%E5%85%B7.png",
    category: "market",
    rating: 4.6,
    reviews: 289,
    price: "199",
    location: "永康五金市场",
    tags: ["品质保证", "专业工具", "实用耐用"],
  },
  {
    id: "14",
    title: "磐安山核桃油",
    description: "纯天然压榨，营养丰富，助力健康，送礼佳品。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E7%A3%90%E5%AE%89%E5%B1%B1%E6%A0%B8%E6%A1%83%E6%B2%B9.png",
    category: "local",
    rating: 4.7,
    reviews: 145,
    price: "238",
    location: "磐安特产中心",
    tags: ["天然制品", "营养保健", "礼盒装"],
  },
  {
    id: "15",
    title: "浦江珠宝首饰",
    description: "精选优质珠宝玉石，工艺精湛，款式时尚，绚丽多彩。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E6%B5%A6%E6%B1%9F%E7%8F%A0%E5%AE%9D%E9%A6%96%E9%A5%B0.png",
    category: "craft",
    rating: 4.8,
    reviews: 176,
    price: "588",
    location: "浦江珠宝城",
    tags: ["时尚饰品", "精工制作", "送礼优选"],
  },
  {
    id: "16",
    title: "义乌帽子专区",
    description: "各类时尚帽子，从运动到礼帽，应有尽有，四季可选。",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E5%B8%BD%E5%AD%90%E4%B8%93%E5%8C%BA.png",
    category: "market",
    rating: 4.4,
    reviews: 445,
    price: "35",
    location: "义乌国际商贸城",
    tags: ["时尚单品", "批发零售", "多款可选"],
  },
];
