import RouteDetail from "./RouteDetail.vue";
export default RouteDetail;


// 类型定义
interface Spot {
  id: string;
  name: string;
  duration: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  openTime: string;
  ticket: string;
  location: string;
  recommendFood?: string[]; // 可选属性
}

interface DayItinerary {
  title: string;
  description: string;
  spots: Spot[];
}

// 完善交通详情的类型定义
interface TransportationDetail {
  lines?: string[];
  stations?: string;
  frequency?: string;
  operatingHours?: string;
  parkingLots?: Array<{
    name: string;
    address: string;
    spaces: number;
    rate: string;
  }>;
  routes?: string[];
  startPrice?: string;
  perKilometer?: string;
  companies?: string[];
  hotline?: string;
  brands?: string[];
  price?: string;
  tips?: string;
}

interface Transportation {
  type: string;
  icon: string;
  description: string;
  detail?: TransportationDetail;
}

interface Hotel {
  name: string;
  type: string;
  rating: number;
  price: string;
  address: string;
  features: string[];
}

interface Accommodation {
  recommended: Hotel[];
}

interface TravelRoute {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  duration: string;
  distance: string;
  price: string;
  rating: number;
  reviewCount: number;
  itinerary: DayItinerary[];
  spots: Spot[];
  transportation: Transportation[];
  tags: string[];
  highlights: string[];
  accommodation: Accommodation;
  tips: string[];
}

export const mockRouteData: TravelRoute = {
  id: 1,
  title: "婺城文化底蕴二日游",
  description:
    "深度体验金华文化与美食，探索古城风韵，品尝地道美食，感受千年历史文化的魅力",
  coverImage: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E5%8E%86%E5%8F%B2%E5%8F%A4%E8%BF%B9/%E5%A9%BA%E5%B7%9E%E5%8F%A4%E5%9F%8E-1.jpg",
  duration: "2天1晚",
  distance: "约30公里",
  price: "￥398起",
  rating: 4.8,
  reviewCount: 526,
  tags: ["文化遗产", "美食", "古城", "亲子", "摄影"],
  highlights: [
    "探访保存完好的南宋古城墙",
    "体验非遗文化婺剧表演",
    "品尝正宗金华火腿美食",
    "游览双龙洞溶洞奇观",
  ],
  itinerary: [
    {
      title: "古城文化探索之旅",
      description: "第一天主要游览金华古城区域，体验深厚的历史文化底蕴",
      spots: [
        {
          id: "1",
          name: "金华古城墙",
          duration: "2小时",
          description:
            "始建于南宋，是江南地区保存最完整的古城墙之一。可以登城俯瞰金华古城全貌，感受千年古城的历史沧桑。",
          image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E5%8F%A4%E5%9F%8E%E5%A2%99.png",
          rating: 4.5,
          reviews: 128,
          openTime: "08:00-17:30",
          ticket: "￥40/人",
          location: "浙江省金华市婺城区城墙街",
        },
        {
          id: "2",
          name: "双龙洞",
          duration: "3小时",
          description:
            "国家4A级景区，以溶洞奇观和佛教文化为特色。洞内钟乳石造型奇特，还有众多佛教造像和壁画。",
          image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E5%8F%8C%E9%BE%99%E6%B4%9E/%E5%8F%8C%E9%BE%99%E6%B4%9E-4.jpg",
          rating: 4.7,
          reviews: 256,
          openTime: "08:30-16:30",
          ticket: "￥65/人",
          location: "浙江省金华市婺城区双龙南街",
        },
        {
          id: "3",
          name: "黄大仙宫",
          duration: "1.5小时",
          description:
            "道教洞天福地，集自然风光、凉爽气候、丰富生态与深厚文化底蕴于一体，是避暑、观光、朝圣的绝佳去处，奇石怪立，湖光山色，宛如人间仙境。",
          image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E6%B8%B8/%E9%BB%84%E5%A4%A7%E4%BB%99%E5%AE%AB.png",
          rating: 4.6,
          reviews: 189,
          openTime: "07:30-17:00",
          ticket: "￥15/人",
          location: "金华市婺城区双龙景区内",
        },
      ],
    },
    {
      title: "非遗美食体验日",
      description: "第二天以美食文化和非物质文化遗产体验为主",
      spots: [
        {
          id: "4",
          name: "金华火腿博物馆",
          duration: "1.5小时",
          description:
            "了解金华火腿的历史文化和制作工艺，可以参与火腿品鉴，还有互动制作体验。",
          image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF%E6%96%87%E5%8C%96/%E7%81%AB%E8%85%BF%E6%96%87%E5%8C%96-2.jpg",
          rating: 4.3,
          reviews: 89,
          openTime: "09:00-16:30",
          ticket: "免费",
          location: "浙江省金华市婺城区宾虹路",
        },
        {
          id: "5",
          name: "婺剧艺术中心",
          duration: "2小时",
          description:
            "欣赏传统婺剧表演，感受非遗文化魅力。可以近距离了解婺剧服装、道具和化妆过程。",
          image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E5%A9%BA%E5%89%A7%E8%A1%A8%E6%BC%94%E8%89%BA%E6%9C%AF/%E5%A9%BA%E5%89%A7-3.jpg",
          rating: 4.6,
          reviews: 167,
          openTime: "10:00-21:00",
          ticket: "￥80/人",
          location: "浙江省金华市婺城区文化中心路",
        },
        {
          id: "6",
          name: "老街美食文化区",
          duration: "2.5小时",
          description:
            "汇集金华特色小吃，可以品尝火腿炖汤、麦糕、咸菜等地道美食。",
          image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E6%B8%B8/%E8%80%81%E8%A1%97%E7%BE%8E%E9%A3%9F%E6%96%87%E5%8C%96%E5%8C%BA.png",
          rating: 4.8,
          reviews: 312,
          openTime: "全天",
          ticket: "免费",
          recommendFood: ["金华火腿炖汤", "婺城麦糕", "油焖笋", "梅干菜扣肉"],
          location: "浙江省金华市婺城区解放东路",
        },
      ],
    },
  ],
  spots: [], // 将与 itinerary 中的景点相同
  transportation: [
    {
      type: "公共交通",
      icon: "fas fa-bus",
      description:
        "可乘坐2路、5路公交车直达景区，票价2元/人。建议购买金华市民卡，可享受公交优惠。",
      detail: {
        lines: ["2路", "5路", "11路", "33路"],
        stations: "古城墙站、双龙洞站、文化中心站",
        frequency: "约10-15分钟一班",
        operatingHours: "06:30-21:30",
      },
    },
    {
      type: "自驾",
      icon: "fas fa-car",
      description:
        "导航至金华古城停车场，停车费10元/小时。建议选择P1或P2停车场，距离景点较近。",
      detail: {
        parkingLots: [
          {
            name: "P1古城北停车场",
            address: "城墙街120号",
            spaces: 200,
            rate: "10元/小时",
          },
          {
            name: "P2文化中心地下停车场",
            address: "文化中心路88号",
            spaces: 300,
            rate: "8元/小时",
          },
        ],
        routes: [
          "杭金衢高速 -> 金华北出口 -> 城墙街",
          "金丽温高速 -> 金华东出口 -> 双龙南街",
        ],
      },
    },
    {
      type: "出租车",
      icon: "fas fa-taxi",
      description: "市区打车约15分钟，费用约25元。可使用滴滴打车等网约车服务。",
      detail: {
        startPrice: "10元/3公里",
        perKilometer: "2.5元",
        companies: ["金华出租", "婺城快车"],
        hotline: "0579-82345678",
      },
    },
    {
      type: "共享单车",
      icon: "fas fa-bicycle",
      description: "景区周边设有多个共享单车停放点，骑行游览更便捷环保。",
      detail: {
        brands: ["哈啰", "美团"],
        price: "1.5元/30分钟",
        stations: "景区主要路口均有停放点",
        tips: "建议下载APP提前注册绑定",
      },
    },
  ],
  accommodation: {
    recommended: [
      {
        name: "金华古城文化主题酒店",
        type: "精品酒店",
        price: "398起/晚",
        rating: 4.7,
        address: "城墙街88号",
        features: ["文化主题房", "免费早餐", "proximity to attractions"],
      },
      {
        name: "婺州府邸民宿",
        type: "特色民宿",
        price: "268起/晚",
        rating: 4.8,
        address: "双龙南街120号",
        features: ["古建筑改造", "庭院茶室", "当地特色早餐"],
      },
    ],
  },
  tips: [
    "建议早上9点前到达古城墙，避开人流高峰",
    "双龙洞内温度较低，建议携带外套",
    "婺剧演出需提前预约购票",
    "老街美食区建议午后2点后前往，人流较少",
    "遇雨天请注意路滑，特别是古城墙台阶",
  ],
};


// 确保导出类型定义
export type {
  Spot,
  DayItinerary,
  Transportation,
  TransportationDetail,
  Hotel,
  Accommodation,
  TravelRoute,
};

interface Comment {
  id: string;
  userId: string;
  username: string;
  avatar?: string;
  rating: number;
  content: string;
  date: string;
  images?: string[];
}

const mockCommentsData: Comment[] = [
  {
    id: "1",
    userId: "user123",
    username: "文化探索者",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    rating: 5,
    content:
      "金华古城的文化底蕴太震撼了！特别是古城墙的保存完好程度令人惊叹。双龙洞的溶洞景观也非常震撼，整个行程安排得很合理，让我们能充分感受到婺城的历史文化魅力。",
    date: "2024-03-15",
    images: [
      "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1599707367765-ae8d0f38de56?w=800&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: "2",
    userId: "user456",
    username: "美食达人",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kitty",
    rating: 4,
    content:
      "作为一个美食爱好者，金华火腿博物馆让我大开眼界！不仅了解了火腿的制作工艺，还品尝到了正宗的金华火腿。老街的特色小吃也很地道，特别推荐婺城麦糕！",
    date: "2024-03-12",
    images: [
      "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=800&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: "3",
    userId: "user789",
    username: "带娃游世界",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucy",
    rating: 5,
    content:
      "带着孩子来体验非常棒！婺剧表演让孩子大开眼界，特别喜欢那些华丽的戏服。景点之间距离适中，对带孩子的家庭很友好。另外，讲解员的讲解生动有趣，孩子听得很入神。",
    date: "2024-03-10",
    images: [
      "https://images.unsplash.com/photo-1624866527497-834703f33591?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1624866527655-03a26677094e?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1624866527731-0714bff916ac?w=800&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: "4",
    userId: "user101",
    username: "摄影爱好者",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Max",
    rating: 5,
    content:
      "从摄影角度来说，这条路线简直是宝藏！古城墙的日落太美了，双龙洞的光影效果绝佳。建议早上去古城墙，光线最好，适合拍照。兰花禅寺的建筑细节也很适合取景。",
    date: "2024-03-08",
    images: [
      "https://images.unsplash.com/photo-1624866527731-0714bff916ac?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1624866527497-834703f33591?w=800&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: "5",
    userId: "user202",
    username: "历史研究者",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver",
    rating: 4,
    content:
      "作为一个历史爱好者，这次旅程让我收获颇丰。古城墙的导游讲解很专业，了解到很多鲜为人知的历史细节。建议可以在兰花禅寺多停留一会，细细品味唐代建筑的特色。",
    date: "2024-03-05",
  },
  {
    id: "6",
    userId: "user303",
    username: "周末探险家",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    rating: 5,
    content:
      "非常适合周末短途游！交通便利，景点集中，两天时间安排得很合理。特别喜欢在老街的体验，能真实感受到当地人的生活气息。住宿的民宿也很有特色，老板很热情。",
    date: "2024-03-01",
    images: [
      "https://images.unsplash.com/photo-1624866527655-03a26677094e?w=800&auto=format&fit=crop&q=60",
    ],
  },
];

export { type Comment, mockCommentsData };
