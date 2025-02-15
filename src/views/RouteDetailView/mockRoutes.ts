import type { TravelRoute } from "./index";

// 使用同样的图片资源
import {
  HomeBanner,
  cityWall,
  dragonCave,
  hamMuseum,
  wujuArt,
  lanhuaTemple,
  foodStreet,
} from "./index";

export const mockRoutes: TravelRoute[] = [
  {
    id: 1,
    title: "婺城文化底蕴二日游",
    description:
      "深度体验金华文化与美食，探索古城风韵，品尝地道美食，感受千年历史文化的魅力",
    coverImage: HomeBanner,
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
            image: cityWall,
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
            image: dragonCave,
            rating: 4.7,
            reviews: 256,
            openTime: "08:30-16:30",
            ticket: "￥65/人",
            location: "浙江省金华市婺城区双龙南街",
          },
          {
            id: "3",
            name: "兰花禅寺",
            duration: "1.5小时",
            description:
              "始建于唐代的千年古刹，以精美的唐代建筑和兰花文化闻名，春季可赏名贵兰花。",
            image: lanhuaTemple,
            rating: 4.6,
            reviews: 189,
            openTime: "07:30-17:00",
            ticket: "￥30/人",
            location: "浙江省金华市婺城区兰溪街",
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
            image: hamMuseum,
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
            image: wujuArt,
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
            image: foodStreet,
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
        description:
          "市区打车约15分钟，费用约25元。可使用滴滴打车等网约车服务。",
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
  },
  {
    id: 2,
    title: "金华山水三日游",
    description: "探索金华自然风光与山水胜景，感受大自然的鬼斧神工",
    coverImage: HomeBanner,
    duration: "3天2晚",
    distance: "约50公里",
    price: "￥598起",
    rating: 4.7,
    reviewCount: 328,
    tags: ["自然风光", "徒步", "摄影", "地质奇观", "户外"],
    highlights: [
      "探秘金华山地质公园",
      "游览双龙洞溶洞群",
      "体验金华山涉溪徒步",
      "观赏金华山日出",
    ],
    itinerary: [
      {
        title: "地质奇观探索日",
        description: "第一天主要探索金华独特的地质景观",
        spots: [
          {
            id: "21",
            name: "双龙洞景区",
            duration: "4小时",
            description: "探索溶洞群的神秘地下世界，欣赏钟乳石奇观",
            image: dragonCave,
            rating: 4.7,
            reviews: 256,
            openTime: "08:30-16:30",
            ticket: "￥65/人",
            location: "浙江省金华市婺城区双龙南街",
          },
          // ...其他景点
        ],
      },
      // ...其他行程日
    ],
    spots: [],
    transportation: [
      {
        type: "自驾",
        icon: "fas fa-car",
        description: "景区间距离较远，建议自驾出行，设有专门停车场",
        detail: {
          parkingLots: [
            {
              name: "金华山游客中心停车场",
              address: "金华山脚下",
              spaces: 300,
              rate: "10元/次",
            },
          ],
        },
      },
      // ...其他交通方式
    ],
    accommodation: {
      recommended: [
        {
          name: "金华山景区度假酒店",
          type: "度假酒店",
          price: "488起/晚",
          rating: 4.6,
          address: "金华山风景区内",
          features: ["景区内住宿", "观景房", "自助早餐"],
        },
      ],
    },
    tips: [
      "徒步需穿着舒适的登山鞋",
      "携带充足的饮用水",
      "建议准备防晒和防蚊用品",
      "景区内手机信号可能不稳定",
    ],
  },
  {
    id: 3,
    title: "金华美食文化一日游",
    description: "体验金华地道美食文化，品尝传统特色小吃",
    coverImage: foodStreet,
    duration: "1天",
    distance: "约15公里",
    price: "￥198起",
    rating: 4.9,
    reviewCount: 426,
    tags: ["美食", "文化体验", "市井生活", "特色小吃"],
    highlights: [
      "品尝正宗金华火腿",
      "体验特色小吃制作",
      "探访百年老字号",
      "逛吃美食街区",
    ],
    itinerary: [
      {
        title: "舌尖上的金华",
        description: "一整天的美食文化探索之旅",
        spots: [
          {
            id: "31",
            name: "金华火腿文化馆",
            duration: "2小时",
            description: "了解金华火腿的历史文化，参与火腿品鉴",
            image: hamMuseum,
            rating: 4.8,
            reviews: 189,
            openTime: "09:00-17:00",
            ticket: "免费",
            location: "浙江省金华市婺城区",
          },
          // ...其他景点
        ],
      },
    ],
    spots: [],
    transportation: [
      {
        type: "公共交通",
        icon: "fas fa-bus",
        description: "市区公交便利，可购买一日券",
        detail: {
          lines: ["1路", "3路", "7路"],
          frequency: "约8-10分钟一班",
        },
      },
    ],
    accommodation: {
      recommended: [], // 一日游不需要住宿推荐
    },
    tips: [
      "建议空腹出发",
      "准备现金支付小吃",
      "建议避开用餐高峰时段",
      "部分老店铺可能需要排队",
    ],
  },
];
