import HomeView from "./HomeView.vue";
export default HomeView;

import ImportHomeBanner from "@/assets/images/home/home-banner.png";
export { ImportHomeBanner as HomeBanner };
import Avatar from "@/assets/images/avatar.jpg";
export { Avatar };
interface Route {
  id: number;
  title: string;
  image: string;
  description: string;
}

const routeRecommendations: Route[] = [
  {
    id: 1,
    title: "金华民俗文化三日游",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E6%B8%B8/%E6%B0%91%E4%BF%97%E6%96%87%E5%8C%96.png",
    description: "探索金华独特的民俗文化...",
  },
  {
    id: 2,
    title: "婺城文化底蕴一日游",
    description: "探访古城，体验金华独特文化",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E6%B8%B8/%E5%A9%BA%E5%B7%9E%E5%8F%A4%E5%9F%8E.png",
  },
  {
    id: 3,
    title: "婺城文化底蕴二日游",
    description: "深度体验金华文化与美食",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E6%B8%B8/%E5%A9%BA%E5%9F%8E%E6%96%87%E5%8C%96.png",
  },
  {
    id: 4,
    title: "婺城文化底蕴三日游",
    description: "完整体验金华文化与风景",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E6%B8%B8/%E5%A9%BA%E5%9F%8E%E6%96%87%E5%8C%961.png",
  },
];

export { type Route, routeRecommendations };

interface Feature {
  id: number;
  icon: string;
  name: string;
  route: string;
}

const features: Feature[] = [
  { id: 1, icon: "🏛️", name: "景点", route: "/attractions" },
  { id: 2, icon: "🍽️", name: "美食", route: "/food" },
  { id: 3, icon: "📈", name: "路线推荐", route: "/routes" },
  { id: 4, icon: "⭐", name: "好评榜", route: "/recommendations" },
  { id: 5, icon: "✍️", name: "行程定制", route: "/custom" },
  { id: 6, icon: "🏛️", name: "人文景艺", route: "/culture" },
  { id: 7, icon: "🏠", name: "酒店民宿", route: "/hotels" },
  { id: 8, icon: "🛍️", name: "特产好物", route: "/shopping" },
];

export { type Feature, features };

interface Location {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface LocationTab {
  id: string;
  name: string;
  locations: Location[];
}

const locationTabs: LocationTab[] = [
  {
    id: "play",
    name: "玩",
    locations: [
      {
        id: 1,
        name: "东白山",
        description:
          "东白山位于浙江省金华市浦江县、开化县交界处，是浙江省级风景名胜区。",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B8%9C%E9%98%B3/%E6%99%AF%E7%82%B9/%E4%B8%9C%E7%99%BD%E5%B1%B1.png",
      },
      {
        id: 2,
        name: "金华山",
        description: "金华山风景名胜区，以奇特的山体、丰富的人文古迹闻名于世。",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E5%B1%B1/%E9%87%91%E5%8D%8E%E5%B1%B1%E5%B0%8F%E5%86%B0%E5%B2%9B.jpg",
      },
      {
        id: 3,
        name: "双龙洞",
        description: "国家4A级景区，以溶洞奇观和佛教文化为特色的自然人文景区。",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E5%8F%8C%E9%BE%99%E6%B4%9E/%E5%8F%8C%E9%BE%99%E6%B4%9E-4.jpg",
      },
      {
        id: 4,
        name: "兰溪诸葛八卦村",
        description: "中国历史文化名村，以八卦形布局闻名，展现古代建筑智慧。",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E5%85%B0%E6%BA%AA%E8%AF%B8%E8%91%9B%E5%85%AB%E5%8D%A6%E6%9D%91/%E5%85%AB%E5%8D%A6%E6%9D%91-2.jpg",
      },
    ],
  },
  {
    id: "eat",
    name: "吃",
    locations: [
      {
        id: 5,
        name: "金华火腿",
        description: "中国四大火腿之一，以其独特的咸鲜味和浓郁的香气闻名。",
        // image: "@/assets/images/food/huotui.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF-1.jpg",
      },
      {
        id: 6,
        name: "婺州麻糍",
        description: "金华特色小吃，外皮柔韧，内馅香甜，是传统美食。",
        // image: "@/assets/images/food/maci.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E5%A9%BA%E5%B7%9E%E9%BA%BB%E7%B3%8D/%E5%A1%94%E7%9F%B3%E9%BA%BB%E7%B3%8D.jpg",
      },
      {
        id: 7,
        name: "义乌麦饼",
        description: "酥脆可口，香甜适中，是义乌最具代表性的特色小吃。",
        // image: "@/assets/images/food/maibing.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E4%B9%89%E4%B9%8C%E9%BA%A6%E9%A5%BC/%E4%B9%89%E4%B9%8C%E9%BA%A6%E9%A5%BC.jpg",
      },
      {
        id: 8,
        name: "兰溪糕点",
        description: "历史悠久的传统糕点，以其精致的做工和独特的口感著称。",
        // image: "@/assets/images/food/gaodian.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E5%85%B0%E6%BA%AA%E7%B3%95%E7%82%B9/%E6%B8%85%E6%98%8E%E7%A8%9E.jpg",
      },
    ],
  },
  {
    id: "live",
    name: "住",
    locations: [
      {
        id: 9,
        name: "金华山庄度假酒店",
        description:
          "背靠金华山，面朝双龙洞，溪水潺潺，绿树环绕，仿佛步入了一幅山水画中。",
        // image: "@/assets/images/hotels/shanzhuang.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E9%87%91%E5%8D%8E%E5%B1%B1%E5%BA%84%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/%E6%B4%9E%E5%A4%A9%E5%BA%9C%E9%82%B8%C2%B7%E5%8F%8C%E9%BE%99%E6%B4%9E%E9%85%92%E5%BA%97/%E9%85%92%E5%BA%97-4.jpg",
      },
      {
        id: 10,
        name: "婺城老宅民宿",
        description: "改造自百年老宅，保留传统建筑风格，体验本地生活。",
        // image: "@/assets/images/hotels/laozhai.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E5%A9%BA%E5%9F%8E%E8%80%81%E5%AE%85%E6%B0%91%E5%AE%BF/%E5%B1%B1%E6%B0%B4%E9%97%B4%C2%B7%E5%AE%BF%E5%9C%A8%E5%B1%B1%E9%97%B4/%E5%B1%B1%E6%B0%B4%E9%97%B4-1.jpg",
      },
      {
        id: 11,
        name: "东阳木雕主题客栈",
        description: "以东阳木雕为主题的特色民宿，感受传统工艺魅力。",
        //   image: "@/assets/images/hotels/mudiao.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E4%B8%9C%E9%98%B3%E6%9C%A8%E9%9B%95%E4%B8%BB%E9%A2%98%E5%AE%A2%E6%A0%88/%E4%B8%9C%E9%98%B3%E5%92%8C%E7%BE%8E%E9%85%92%E5%BA%97/%E4%B8%9C%E9%98%B3%E5%92%8C%E7%BE%8E%E9%85%92%E5%BA%97-2.jpg",
      },
      {
        id: 12,
        name: "浦江登云山居民宿",
        description: "依山傍水，环境清幽，是放松身心的绝佳选择。",
        //   image: "@/assets/images/hotels/pujiang.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E6%B5%A6%E6%B1%9F/%E4%BD%8F%E5%AE%BF/%E6%B5%A6%E6%B1%9F%E7%99%BB%E4%BA%91%E5%B1%B1%E5%B1%85%E6%B0%91%E5%AE%BF.png",
      },
    ],
  },
  {
    id: "buy",
    name: "买",
    locations: [
      {
        id: 13,
        name: "金华火腿礼盒",
        description: "精选上等火腿，传统工艺制作，是馈赠亲友的佳品。",
        // image: "@/assets/images/shopping/huotui-gift.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF%E7%A4%BC%E7%9B%92/%E7%81%AB%E8%85%BF%E7%A4%BC%E7%9B%92-1.jpg",
      },
      {
        id: 14,
        name: "东阳木雕",
        description: "国家级非物质文化遗产，精湛的雕刻工艺，是收藏佳品。",
        //   image: "@/assets/images/shopping/mudiao.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B8%9C%E9%98%B3%E6%9C%A8%E9%9B%95/%E6%9C%A8%E9%9B%95-1.jpg",
      },
      {
        id: 15,
        name: "义乌小商品",
        description: "种类繁多的小商品，价格实惠，是采购的理想选择。",
        //   image: "@/assets/images/shopping/xiaoshangpin.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E5%B0%8F%E5%95%86%E5%93%81/%E5%95%86%E5%93%81-1.jpg",
      },
      {
        id: 16,
        name: "兰溪红糖",
        description: "传统手工制作，口感醇厚，营养丰富的特产。",
        //   image: "@/assets/images/shopping/hongtang.jpg",
        image:
          "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E5%85%B0%E6%BA%AA%E7%BA%A2%E7%B3%96/%E7%BA%A2%E7%B3%96.jpg",
      },
    ],
  },
];

export { type Location, type LocationTab, locationTabs };

interface PopularItem {
  id: number;
  image: string;
  title: string;
  author: {
    avatar: string;
    name: string;
  };
}

const popularItems: PopularItem[] = [
  {
    id: 1,
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E7%81%AF%E4%BC%9A/%E7%81%AF%E4%BC%9A-1.jpg",
    title: "金华灯会",
    author: {
      avatar: Avatar,
      name: "兔子摄影",
    },
  },
  {
    id: 2,
    title: "金华火腿文化",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF%E6%96%87%E5%8C%96/%E7%81%AB%E8%85%BF%E6%96%87%E5%8C%96-1.jpg",
    author: {
      avatar: Avatar,
      name: "兔子摄影",
    },
  },
  {
    id: 3,
    title: "婺剧表演艺术",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E5%A9%BA%E5%89%A7%E8%A1%A8%E6%BC%94%E8%89%BA%E6%9C%AF/%E5%A9%BA%E5%89%A7-2.jpg",
    author: {
      avatar: Avatar,
      name: "兔子摄影",
    },
  },
  {
    id: 4,
    title: "金华历史古迹",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E5%8E%86%E5%8F%B2%E5%8F%A4%E8%BF%B9/%E4%B8%9C%E9%98%B3%E5%8D%A2%E5%AE%85.jpg",
    author: {
      avatar: Avatar,
      name: "兔子摄影",
    },
  },
  {
    id: 5,
    title: "非物质文化遗产",
    image:
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%9D%9E%E7%89%A9%E8%B4%A8%E6%96%87%E5%8C%96%E9%81%97%E4%BA%A7/%E4%B8%9C%E9%98%B3%E6%9C%A8%E9%9B%95.jpg",
    author: {
      avatar: Avatar,
      name: "兔子摄影",
    },
  },
];

export { type PopularItem, popularItems };
