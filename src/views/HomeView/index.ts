import HomeView from "./HomeView.vue";
export default HomeView;

import ImportHomeBanner from "@/assets/images/home/home-banner.png";
export { ImportHomeBanner as HomeBanner };

import ImportRoute1 from "@/assets/images/home/route/route1.png";
import ImportRoute2 from "@/assets/images/home/route/route2.png";
import ImportRoute3 from "@/assets/images/home/route/route3.png";
import ImportRoute4 from "@/assets/images/home/route/route4.png";

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
    image: ImportRoute1,
    description: "探索金华独特的民俗文化...",
  },
  {
    id: 2,
    title: "婺城文化底蕴一日游",
    description: "探访古城，体验金华独特文化",
    image: ImportRoute2,
  },
  {
    id: 3,
    title: "婺城文化底蕴二日游",
    description: "深度体验金华文化与美食",
    image: ImportRoute3,
  },
  {
    id: 4,
    title: "婺城文化底蕴三日游",
    description: "完整体验金华文化与风景",
    image: ImportRoute4,
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

import InportLocationPlay1 from "@/assets/images/home/location/dongbaishan.png";
import InportLocationPlay2 from "@/assets/images/home/location/孝顺革命烈士陵园.png";
import InportLocationPlay3 from "@/assets/images/home/location/shuanglongdong.png";
import InportLocationPlay4 from "@/assets/images/home/location/baguacun.png";

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
        image: InportLocationPlay1,
      },
      {
        id: 2,
        name: "金华山",
        description: "金华山风景名胜区，以奇特的山体、丰富的人文古迹闻名于世。",
        image: InportLocationPlay2,
      },
      {
        id: 3,
        name: "双龙洞",
        description: "国家4A级景区，以溶洞奇观和佛教文化为特色的自然人文景区。",
        image: InportLocationPlay3,
      },
      {
        id: 4,
        name: "兰溪诸葛八卦村",
        description: "中国历史文化名村，以八卦形布局闻名，展现古代建筑智慧。",
        image: InportLocationPlay4,
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
        image: "",
      },
      {
        id: 6,
        name: "婺州麻糍",
        description: "金华特色小吃，外皮柔韧，内馅香甜，是传统美食。",
        // image: "@/assets/images/food/maci.jpg",
        image: "",
      },
      {
        id: 7,
        name: "义乌麦饼",
        description: "酥脆可口，香甜适中，是义乌最具代表性的特色小吃。",
        // image: "@/assets/images/food/maibing.jpg",
        image: "",
      },
      {
        id: 8,
        name: "兰溪糕点",
        description: "历史悠久的传统糕点，以其精致的做工和独特的口感著称。",
        // image: "@/assets/images/food/gaodian.jpg",
        image: "",
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
        description: "坐落于金华山脚下，环境优美，设施齐全的度假胜地。",
        // image: "@/assets/images/hotels/shanzhuang.jpg",
        image: "",
      },
      {
        id: 10,
        name: "婺城老宅民宿",
        description: "改造自百年老宅，保留传统建筑风格，体验本地生活。",
        // image: "@/assets/images/hotels/laozhai.jpg",
        image: "",
      },
      {
        id: 11,
        name: "东阳木雕主题客栈",
        description: "以东阳木雕为主题的特色民宿，感受传统工艺魅力。",
        //   image: "@/assets/images/hotels/mudiao.jpg",
        image: "",
      },
      {
        id: 12,
        name: "浦江山水度假村",
        description: "依山傍水，环境清幽，是放松身心的绝佳选择。",
        //   image: "@/assets/images/hotels/pujiang.jpg",
        image: "",
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
        image: "",
      },
      {
        id: 14,
        name: "东阳木雕",
        description: "国家级非物质文化遗产，精湛的雕刻工艺，是收藏佳品。",
        //   image: "@/assets/images/shopping/mudiao.jpg",
        image: "",
      },
      {
        id: 15,
        name: "义乌小商品",
        description: "种类繁多的小商品，价格实惠，是采购的理想选择。",
        //   image: "@/assets/images/shopping/xiaoshangpin.jpg",
        image: "",
      },
      {
        id: 16,
        name: "兰溪红糖",
        description: "传统手工制作，口感醇厚，营养丰富的特产。",
        //   image: "@/assets/images/shopping/hongtang.jpg",
        image: "",
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
    image: "/path-to-lantern-image.jpg",
    title: "金华灯会",
    author: {
      avatar: "/path-to-avatar.jpg",
      name: "兔子摄影",
    },
  },
  {
    id: 2,
    title: "金华火腿文化",
    image: "@/assets/images/culture/huotui.jpg",
    author: {
      avatar: "/path-to-avatar.jpg",
      name: "兔子摄影",
    },
  },
  {
    id: 3,
    title: "婺剧表演艺术",
    image: "@/assets/images/culture/wuju.jpg",
    author: {
      avatar: "/path-to-avatar.jpg",
      name: "兔子摄影",
    },
  },
  {
    id: 4,
    title: "金华历史古迹",
    image: "@/assets/images/culture/guji.jpg",
    author: {
      avatar: "/path-to-avatar.jpg",
      name: "兔子摄影",
    },
  },
  {
    id: 5,
    title: "非物质文化遗产",
    image: "@/assets/images/culture/feiyi.jpg",
    author: {
      avatar: "/path-to-avatar.jpg",
      name: "兔子摄影",
    },
  },
];

export { type PopularItem, popularItems };
