import RouteRecommendationView from "./RouteRecommendationView.vue";
export default RouteRecommendationView;

import Banner from "@/assets/images/route/banner.png";
import Empty from "@/assets/images/empty.png";

export { Banner, Empty };
export type Route = {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "easy" | "moderate" | "challenging";
  coverImage: string;
  attractions: string[];
  highlights: string[];
};

export const routes: Route[] = [
  {
    id: "1",
    title: "金华山文化之旅",
    description:
      "探索金华山的自然风光和历史文化，体验千年古刹与自然奇观的完美融合",
    duration: "1-2天",
    difficulty: "moderate",
    coverImage:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E5%B1%B1/%E9%87%91%E5%8D%8E%E5%B1%B1.jpg",
    attractions: [
      "金华山国家森林公园",
      "仙华山",
      "双龙洞",
      "万丈岩",
      "灵岩寺",
      "九华洞天",
    ],
    highlights: [
      "原始森林景观",
      "千年古刹文化",
      "独特地质景观",
      "佛教文化遗产",
      "登山健行体验",
      "观景平台揽胜",
    ],
  },
  {
    id: "2",
    title: "东阳木雕文化之旅",
    description: "深入了解东阳传统木雕工艺，感受非物质文化遗产的魅力",
    duration: "半天",
    difficulty: "easy",
    coverImage:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B8%9C%E9%98%B3/%E6%99%AF%E7%82%B9/%E4%B8%AD%E5%9B%BD%E6%9C%A8%E9%9B%95%E6%96%87%E5%8C%96%E5%8D%9A%E8%A7%88%E5%9F%8E.png",
    attractions: [
      "东阳木雕博物馆",
      "东阳木雕城",
      "横店影视城木雕园",
      "花园村木雕市场",
      "传统木雕工坊",
      "东阳古街",
    ],
    highlights: [
      "非遗文化体验",
      "木雕制作工艺展示",
      "传统手工艺术",
      "木雕工艺品购买",
      "匠人现场演示",
      "文化体验活动",
    ],
  },
  {
    id: "3",
    title: "横店影视文化探索",
    description: "走进亚洲最大的影视基地，感受影视文化魅力",
    duration: "2-3天",
    difficulty: "easy",
    coverImage:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B8%9C%E9%98%B3/%E6%99%AF%E7%82%B9/%E6%A8%AA%E5%BA%97%E5%BD%B1%E8%A7%86%E5%9F%8E.png",
    attractions: [
      "秦王宫",
      "广州街·香港街",
      "明清宫苑",
      "圆明新园",
      "梦幻谷",
      "秦皇宫",
    ],
    highlights: [
      "影视拍摄场景",
      "明清建筑群",
      "大型表演秀",
      "互动体验项目",
      "古装体验",
      "夜游项目",
    ],
  },
  {
    id: "4",
    title: "兰溪诗画江南游",
    description: "探访兰江两岸风光，体验诗画江南的独特韵味",
    duration: "1天",
    difficulty: "easy",
    coverImage:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%85%B0%E6%BA%AA/%E6%99%AF%E7%82%B9/%E5%85%B0%E6%B1%9F%E9%A3%8E%E6%99%AF%E5%8C%BA.png",
    attractions: [
      "诗画江南文化园",
      "兰江风景区",
      "张岭古村",
      "六洞山",
      "永昌堰",
      "诗画长廊",
    ],
    highlights: [
      "江南水乡风光",
      "古村落探访",
      "传统民居建筑",
      "山水田园风光",
      "水利工程遗产",
      "民俗文化体验",
    ],
  },
  {
    id: "5",
    title: "武义温泉养生之旅",
    description: "享受天然温泉，体验养生休闲度假",
    duration: "2天",
    difficulty: "easy",
    coverImage:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E6%B8%B8/%E6%AD%A6%E5%99%A8%E6%B8%A9%E6%B3%89.png",
    attractions: [
      "武义温泉",
      "唐风温泉",
      "郑氏界村",
      "泗联深度度假区",
      "黄龙山",
      "熹园",
    ],
    highlights: [
      "温泉养生",
      "古村落文化",
      "山水风光",
      "休闲度假",
      "养生美食",
      "户外运动",
    ],
  },
  {
    id: "6",
    title: "永康五金文化探秘",
    description: '探索"中国五金之都"的产业文化与创新发展',
    duration: "1天",
    difficulty: "easy",
    coverImage:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E6%B8%B8/%E6%B0%B8%E5%BA%B7%E4%BA%94%E9%87%91%E5%9F%8E.png",
    attractions: [
      "中国五金博物馆",
      "永康五金城",
      "永康工业设计中心",
      "龙山工业旅游区",
      "科技创新园",
      "工匠文化街",
    ],
    highlights: [
      "五金制造工艺",
      "产业发展历史",
      "现代工业设计",
      "智能制造展示",
      "传统手工艺",
      "产品创新体验",
    ],
  },
  {
    id: "7",
    title: "磐安山水生态游",
    description: "探访浙江最美生态县，体验原始自然风光",
    duration: "2天",
    difficulty: "challenging",
    coverImage:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E7%A3%90%E5%AE%89/%E6%99%AF%E7%82%B9/%E7%9B%98%E9%BE%99%E6%A2%AF%E7%94%B0.png",
    attractions: [
      "天华山景区",
      "深溪峡谷",
      "倒挂冰景区",
      "尖山风景区",
      "江南养生谷",
      "天下银坑",
    ],
    highlights: [
      "原始森林探索",
      "地质奇观观赏",
      "生态徒步体验",
      "溪流探险",
      "森林氧吧",
      "户外探险活动",
    ],
  },
  {
    id: "8",
    title: "浦江水晶艺术之旅",
    description: '探索"中国水晶之都"的璀璨文化',
    duration: "1天",
    difficulty: "easy",
    coverImage:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E6%B8%B8/%E6%B5%A6%E6%B1%9F%E6%B0%B4%E6%99%B6.png",
    attractions: [
      "浦江水晶博物馆",
      "水晶艺术街",
      "水晶制作工坊",
      "水晶市场",
      "水晶文化园",
      "创意园区",
    ],
    highlights: [
      "水晶制作工艺",
      "艺术品展示",
      "DIY体验",
      "文创产品",
      "非遗传承",
      "工艺品购买",
    ],
  },
  {
    id: "9",
    title: "义乌小商品城探秘",
    description: "走进世界最大小商品市场，感受国际贸易魅力",
    duration: "1-2天",
    difficulty: "easy",
    coverImage:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E5%B0%8F%E5%95%86%E5%93%81/%E5%95%86%E5%93%81-3.jpg",
    attractions: [
      "义乌国际商贸城",
      "宾王商业街",
      "义乌商贸博物馆",
      "创意设计中心",
      "进口商品城",
      "夜市文化街",
    ],
    highlights: [
      "国际贸易体验",
      "商品采购",
      "创意市集",
      "商贸文化",
      "小商品集散",
      "夜市购物",
    ],
  },
  {
    id: "10",
    title: "婺州古城文化游",
    description: "探访千年古城，感受历史文化底蕴",
    duration: "1天",
    difficulty: "easy",
    coverImage:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E6%B8%B8/%E5%A9%BA%E5%B7%9E%E5%8F%A4%E5%9F%8E.png",
    attractions: [
      "婺州古城墙",
      "双溪书院",
      "八咏楼",
      "清末民初街",
      "江南第一楼",
      "古城文化园",
    ],
    highlights: [
      "古城文化",
      "历史建筑",
      "传统美食",
      "文化遗产",
      "古街探访",
      "民俗体验",
    ],
  },
];
