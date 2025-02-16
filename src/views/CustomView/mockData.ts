export interface Attraction {
  id: string;
  name: string;
  type: string[];
  duration: number; // 建议游玩时长（小时）
  cost: number; // 预计费用
  description: string;
  bestTimeSlot: string[]; // 适合的时间段
}

export interface Restaurant {
  id: string;
  name: string;
  type: string[];
  cost: number;
  description: string;
  bestTimeSlot: string[];
}

// 新增住宿接口
export interface Hotel {
  id: string;
  name: string;
  type: string; // 'luxury' | 'boutique' | 'business' | 'economic' | 'homestay'
  cost: number;
  description: string;
  location: string;
  facilities: string[];
  rating: number;
}

// 新增特色体验接口
export interface Experience {
  id: string;
  name: string;
  type: string[];
  duration: number;
  cost: number;
  description: string;
  bestTimeSlot: string[];
  seasonal: string[]; // 适合的季节
  minPeople: number;
}

export const attractions: Attraction[] = [
  {
    id: "1",
    name: "金华古城墙",
    type: ["history", "culture"],
    duration: 2,
    cost: 50,
    description: "始建于南宋时期的古城墙，是金华市重要的历史文化遗产",
    bestTimeSlot: ["morning", "afternoon"],
  },
  {
    id: "2",
    name: "双龙洞",
    type: ["nature", "leisure"],
    duration: 3,
    cost: 80,
    description: "国家4A级景区，具有独特的喀斯特地貌",
    bestTimeSlot: ["morning", "afternoon"],
  },
  {
    id: "3",
    name: "八咏楼",
    type: ["history", "culture"],
    duration: 1.5,
    cost: 40,
    description: "金华市标志性建筑，始建于南宋",
    bestTimeSlot: ["morning", "afternoon"],
  },
  {
    id: "4",
    name: "金华山",
    type: ["nature", "leisure", "culture"],
    duration: 4,
    cost: 100,
    description: "金华市著名风景区，集自然景观和人文景观于一体",
    bestTimeSlot: ["morning"],
  },
  {
    id: "5",
    name: "兰溪诸葛八卦村",
    type: ["history", "culture"],
    duration: 3,
    cost: 60,
    description: "中国历史文化名村，诸葛亮后裔聚居地",
    bestTimeSlot: ["morning", "afternoon"],
  },
  {
    id: "6",
    name: "金华夜市",
    type: ["food", "shopping", "leisure"],
    duration: 2,
    cost: 100,
    description: "体验金华本地夜生活的最佳去处",
    bestTimeSlot: ["evening"],
  },
  {
    id: "7",
    name: "江南长城",
    type: ["history", "nature"],
    duration: 3,
    cost: 70,
    description: "南方罕见的古长城遗址",
    bestTimeSlot: ["morning", "afternoon"],
  },
  {
    id: "8",
    name: "甘棠公园",
    type: ["nature", "leisure", "culture"],
    duration: 2,
    cost: 0,
    description: "金华市区最大的综合性公园，是市民休闲娱乐的好去处",
    bestTimeSlot: ["morning", "afternoon"],
  },
  {
    id: "9",
    name: "金华火腿博物馆",
    type: ["culture", "food"],
    duration: 1.5,
    cost: 30,
    description: "了解金华火腿历史文化的专业博物馆",
    bestTimeSlot: ["morning", "afternoon"],
  },
  {
    id: "10",
    name: "东阳木雕城",
    type: ["culture", "shopping"],
    duration: 3,
    cost: 0,
    description: "中国著名的木雕艺术集散地，展示销售东阳木雕艺术品",
    bestTimeSlot: ["morning", "afternoon"],
  },
  {
    id: "11",
    name: "武义温泉",
    type: ["leisure"],
    duration: 4,
    cost: 188,
    description: '享誉浙中的天然温泉，素有"江南第一温泉"的美誉',
    bestTimeSlot: ["morning", "afternoon", "evening"],
  },
  {
    id: "12",
    name: "横店影视城",
    type: ["culture", "leisure", "entertainment"],
    duration: 6,
    cost: 280,
    description: "亚洲最大的影视拍摄基地，体验影视文化",
    bestTimeSlot: ["morning", "afternoon"],
  },
];

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "老字号金华火腿店",
    type: ["food"],
    cost: 150,
    description: "百年老字号，正宗金华火腿",
    bestTimeSlot: ["noon", "evening"],
  },
  {
    id: "2",
    name: "金华酱鸭专门店",
    type: ["food"],
    cost: 80,
    description: "传统金华酱鸭，本地特色美食",
    bestTimeSlot: ["noon", "evening"],
  },
  {
    id: "3",
    name: "武义白族三合豆腐",
    type: ["food"],
    cost: 50,
    description: "独特的白族豆腐制作工艺",
    bestTimeSlot: ["morning", "noon"],
  },
  {
    id: "4",
    name: "金华大酒店中餐厅",
    type: ["food"],
    cost: 200,
    description: "提供正宗的金华本地特色菜",
    bestTimeSlot: ["noon", "evening"],
  },
  {
    id: "5",
    name: "老街坊特色小吃",
    type: ["food"],
    cost: 30,
    description: "汇集金华各类特色小吃",
    bestTimeSlot: ["morning", "noon", "evening"],
  },
  {
    id: "6",
    name: "东阳卤味馆",
    type: ["food"],
    cost: 60,
    description: "正宗的东阳卤味，当地特色美食",
    bestTimeSlot: ["noon", "evening"],
  },
];

// 新增住宿数据
export const hotels: Hotel[] = [
  {
    id: "1",
    name: "金华万豪酒店",
    type: "luxury",
    cost: 800,
    description: "五星级酒店，位于市中心，环境优雅",
    location: "婺城区双龙南街",
    facilities: ["停车场", "健身房", "游泳池", "商务中心"],
    rating: 4.8,
  },
  {
    id: "2",
    name: "金华古城青年旅舍",
    type: "economic",
    cost: 120,
    description: "位于古城区，交通便利，适合背包客",
    location: "婺城区古城街",
    facilities: ["公共厨房", "免费WiFi", "行李寄存"],
    rating: 4.3,
  },
  {
    id: "3",
    name: "武义温泉度假酒店",
    type: "boutique",
    cost: 580,
    description: "依山傍水，自带温泉设施",
    location: "武义县温泉镇",
    facilities: ["温泉", "餐厅", "会议室", "SPA"],
    rating: 4.6,
  },
];

// 新增特色体验
export const experiences: Experience[] = [
  {
    id: "1",
    name: "金华火腿制作体验",
    type: ["food", "culture"],
    duration: 3,
    cost: 200,
    description: "跟随匠人学习传统火腿制作工艺",
    bestTimeSlot: ["morning"],
    seasonal: ["autumn", "winter"],
    minPeople: 2,
  },
  {
    id: "2",
    name: "东阳木雕DIY课程",
    type: ["culture", "art"],
    duration: 2,
    cost: 150,
    description: "在木雕大师指导下制作简单的木雕作品",
    bestTimeSlot: ["afternoon"],
    seasonal: ["spring", "summer", "autumn", "winter"],
    minPeople: 1,
  },
  {
    id: "3",
    name: "横店影视城跟剧组体验",
    type: ["entertainment", "culture"],
    duration: 4,
    cost: 300,
    description: "体验影视拍摄过程，参与群演",
    bestTimeSlot: ["morning", "afternoon"],
    seasonal: ["spring", "autumn"],
    minPeople: 5,
  },
];

// 行程模板
export const itineraryTemplates = {
  history: [
    { time: "09:00", attraction: "金华古城墙" },
    { time: "11:00", attraction: "八咏楼" },
    { time: "14:00", attraction: "兰溪诸葛八卦村" },
  ],
  nature: [
    { time: "09:00", attraction: "金华山" },
    { time: "14:00", attraction: "双龙洞" },
    { time: "16:30", attraction: "江南长城" },
  ],
  food: [
    { time: "10:00", attraction: "金华火腿博物馆" },
    { time: "12:00", restaurant: "老字号金华火腿店" },
    { time: "15:00", restaurant: "金华酱鸭专门店" },
    { time: "18:00", attraction: "金华夜市" },
  ],
  leisure: [
    { time: "10:00", attraction: "双龙洞" },
    { time: "14:00", attraction: "甘棠公园" },
    { time: "16:00", attraction: "金华夜市" },
  ],
  culture: [
    { time: "09:00", attraction: "东阳木雕城" },
    { time: "14:00", attraction: "横店影视城" },
    { time: "18:00", experience: "横店影视城跟剧组体验" },
  ],
  wellness: [
    { time: "10:00", attraction: "武义温泉" },
    { time: "15:00", attraction: "甘棠公园" },
    { time: "18:00", hotel: "武义温泉度假酒店" },
  ],
  shopping: [
    { time: "09:00", attraction: "东阳木雕城" },
    { time: "14:00", experience: "东阳木雕DIY课程" },
    { time: "16:00", attraction: "金华夜市" },
  ],
};

// 根据预算等级的推荐行程
export const budgetPlans = {
  low: {
    perDay: 300,
    attractions: ["金华古城墙", "八咏楼", "金华夜市"],
    restaurants: ["金华酱鸭专门店"],
  },
  medium: {
    perDay: 500,
    attractions: ["双龙洞", "金华山", "兰溪诸葛八卦村"],
    restaurants: ["老字号金华火腿店", "金华酱鸭专门店"],
  },
  high: {
    perDay: 800,
    attractions: ["金华山", "双龙洞", "兰溪诸葛八卦村", "江南长城"],
    restaurants: ["老字号金华火腿店", "武义白族三合豆腐"],
  },
  premium: {
    perDay: 1500,
    attractions: ["横店影视城", "武义温泉", "东阳木雕城"],
    restaurants: ["金华大酒店中餐厅"],
    hotels: ["金华万豪酒店"],
    experiences: ["横店影视城跟剧组体验", "东阳木雕DIY课程"],
  },
};

// 时间段定义
export const timeSlots = {
  morning: "09:00-12:00",
  noon: "12:00-14:00",
  afternoon: "14:00-17:00",
  evening: "17:00-21:00",
  night: "21:00-23:00",
  dawn: "05:00-07:00", // 适合一些特殊活动，如看日出
};

// 季节性推荐
export const seasonalRecommendations = {
  spring: ["金华山", "甘棠公园", "双龙洞"],
  summer: ["武义温泉", "横店影视城", "金华夜市"],
  autumn: ["金华古城墙", "八咏楼", "兰溪诸葛八卦村"],
  winter: ["武义温泉", "东阳木雕城", "金华火腿博物馆"],
};
