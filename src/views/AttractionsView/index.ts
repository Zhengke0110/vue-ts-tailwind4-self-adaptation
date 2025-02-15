import Attractions from "./AttractionsView.vue";
export default Attractions;

import Banner from "@/assets/images/attractions/banner.png";
export { Banner };

// 定义设施接口
interface Facilities {
  dining: string;
  parking: string;
  restroom: string;
  rest: string;
}

// 定义详细信息接口
interface DetailedInfo {
  highlights: string[];
  mustSee: string[];
  bestTime: string;
  tips: string;
  facilities: Facilities;
}

// 定义价格接口
interface Price {
  adult: string;
  child: string;
  senior: string;
  cableway?: string; // 可选属性,因为不是所有景点都有缆车
}

// 定义交通接口
interface Transportation {
  bus: string;
  drive: string;
  recommended: string;
}

// 定义联系方式接口
interface Contact {
  phone: string;
  website: string;
}

// 定义主要接口
export interface Attraction {
  id: string;
  title: string;
  description: string;
  detailedInfo: DetailedInfo;
  image: string;
  category: "natural" | "historical" | "cultural";
  rating: number;
  reviews: number;
  location: string;
  price: Price | string; // 可以是对象或字符串(比如"免费")
  openTime: string;
  transportation: Transportation;
  suggestedTime: string;
  contact: Contact;
}

const attractions: Attraction[] = [
  {
    id: "1",
    title: "东白山",
    description:
      '国家4A级景区，海拔1194米，以原始森林、奇石怪洞、飞瀑流泉闻名，有"浙中第一山"之称。山中云海缭绕，瀑布飞流，是徒步登山、避暑纳凉的绝佳去处。',
    detailedInfo: {
      highlights: [
        "原始森林景观",
        "奇石怪洞",
        "飞瀑流泉",
        "云海日出",
        "避暑胜地",
      ],
      mustSee: ["东白山顶观景台", "仙人洞", "百丈飞瀑", "杜鹃花园", "白云索道"],
      bestTime: "4-10月，其中4-5月杜鹃花开，秋季层林尽染最适合观赏",
      tips: "山顶温差大，建议携带保暖衣物；雨天路滑需注意安全；建议携带登山手杖",
      facilities: {
        dining: "山顶设有餐厅，提供农家菜；沿途设有小卖部",
        parking: "景区设有大型停车场，可容纳200辆车",
        restroom: "各景点均设有公共卫生间",
        rest: "设有休息亭和观景平台",
      },
    },
    image: "@/assets/images/places/dongbaishan.jpg",
    category: "natural",
    rating: 4.5,
    reviews: 1283,
    location: "金华市婺城区西北部",
    price: {
      adult: "80元/人",
      child: "40元/人",
      senior: "40元/人",
      cableway: "40元/人(单程)",
    },
    openTime: "全年开放 07:30-17:00",
    transportation: {
      bus: "金华客运中心乘坐东白山专线直达",
      drive: "导航东白山景区停车场，距离金华市区约45分钟车程",
      recommended: "自驾最为便捷",
    },
    suggestedTime: "建议游玩4-6小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.dbshan.com",
    },
  },
  {
    id: "2",
    title: "金华山",
    description:
      "浙江省著名山脉，国家AAAA级旅游景区。以山势雄伟、古迹众多、佛教文化深厚著称。金华双龙洞、万佛塔、九层塔等历史遗迹环绕其中，是金华市的标志性景观。",
    detailedInfo: {
      highlights: ["雄伟山势", "古迹众多", "佛教文化", "双龙洞", "万佛塔"],
      mustSee: ["双龙洞", "万佛塔", "九层塔", "金华山顶观景台", "金华山寺庙"],
      bestTime: "4-10月，其中春季和秋季景色最美",
      tips: "山路较陡，建议穿着舒适的登山鞋；带足饮用水；注意防晒",
      facilities: {
        dining: "景区内设有餐厅和小吃摊",
        parking: "景区设有多个停车场",
        restroom: "各主要景点均设有公共卫生间",
        rest: "设有休息亭和观景平台",
      },
    },
    image: "@/assets/images/places/jinhuashan.jpg",
    category: "natural",
    rating: 4.3,
    reviews: 982,
    location: "金华市婺城区南部",
    price: {
      adult: "65元/人",
      child: "30元/人",
      senior: "30元/人",
    },
    openTime: "全年开放 08:00-17:30",
    transportation: {
      bus: "金华市区乘坐公交车至金华山景区",
      drive: "导航金华山景区停车场，距离金华市区约30分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩3-5小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.jinhuashan.com",
    },
  },
  {
    id: "3",
    title: "双龙洞",
    description:
      '国家4A级景区，素有"江南第一洞"之称。洞内钟乳石景观绚丽多彩，形态各异，集溶洞奇观、佛教文化、历史遗迹于一体，是金华著名的喀斯特地貌溶洞景观。',
    detailedInfo: {
      highlights: ["钟乳石景观", "溶洞奇观", "佛教文化", "历史遗迹"],
      mustSee: ["双龙洞主洞", "钟乳石景观", "佛教石刻", "溶洞探险"],
      bestTime: "全年适宜游玩，夏季最为凉爽",
      tips: "洞内温度较低，建议携带外套；注意脚下湿滑",
      facilities: {
        dining: "景区内设有餐厅和小吃摊",
        parking: "景区设有停车场",
        restroom: "景区内设有公共卫生间",
        rest: "设有休息区",
      },
    },
    image: "@/assets/images/places/shuanglongdong.jpg",
    category: "historical",
    rating: 4.7,
    reviews: 2156,
    location: "金华市婺城区城北",
    price: {
      adult: "60元/人",
      child: "30元/人",
      senior: "30元/人",
    },
    openTime: "全年开放 08:30-16:30",
    transportation: {
      bus: "金华市区乘坐公交车至双龙洞景区",
      drive: "导航双龙洞景区停车场，距离金华市区约20分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩2-3小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.shuanglongdong.com",
    },
  },
  {
    id: "4",
    title: "兰溪诸葛八卦村",
    description:
      "中国历史文化名村，始建于南宋，是我国现存规模最大、保存最完整的八卦村落。整个村落按八卦方位布局，充分展现了中国传统的风水文化与建筑智慧。",
    detailedInfo: {
      highlights: ["八卦布局", "风水文化", "古建筑群", "历史文化"],
      mustSee: ["八卦村主街", "古建筑群", "风水文化展示", "历史文化展览"],
      bestTime: "春秋季节最佳，气候宜人",
      tips: "村内道路较窄，建议步行游览；注意保护文物",
      facilities: {
        dining: "村内设有餐厅和小吃摊",
        parking: "村外设有停车场",
        restroom: "村内设有公共卫生间",
        rest: "设有休息区",
      },
    },
    image: "@/assets/images/places/baguacun.jpg",
    category: "cultural",
    rating: 4.6,
    reviews: 1677,
    location: "兰溪市诸葛镇",
    price: {
      adult: "45元/人",
      child: "20元/人",
      senior: "20元/人",
    },
    openTime: "全年开放 08:00-17:00",
    transportation: {
      bus: "兰溪市区乘坐公交车至诸葛八卦村",
      drive: "导航诸葛八卦村停车场，距离兰溪市区约30分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩2-3小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.baguacun.com",
    },
  },
  {
    id: "5",
    title: "金华火腿博物馆",
    description:
      "国内首家火腿主题博物馆，全面展示了金华火腿的历史文化、制作工艺和科技成果。馆内设有互动体验区，游客可以了解金华火腿的前世今生。",
    detailedInfo: {
      highlights: ["火腿历史文化", "制作工艺展示", "互动体验区"],
      mustSee: ["火腿历史展览", "制作工艺展示", "互动体验区"],
      bestTime: "全年适宜游览",
      tips: "博物馆内禁止吸烟；请勿触摸展品",
      facilities: {
        dining: "博物馆内设有小吃摊",
        parking: "博物馆设有停车场",
        restroom: "博物馆内设有公共卫生间",
        rest: "设有休息区",
      },
    },
    image: "@/assets/images/places/huotuibowuguan.jpg",
    category: "cultural",
    rating: 4.4,
    reviews: 856,
    location: "金华市婺城区宾虹路",
    price: "免费",
    openTime: "周二至周日 09:00-16:30",
    transportation: {
      bus: "金华市区乘坐公交车至火腿博物馆",
      drive: "导航火腿博物馆停车场，距离金华市区约15分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩1-2小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.huotuibowuguan.com",
    },
  },
  {
    id: "6",
    title: "方岩风景区",
    description:
      "国家4A级景区，以奇特的丹霞地貌著称。景区内怪石林立，古刹悠远，是道教名山。春天山花烂漫，秋季层林尽染，四季景色各具特色。",
    detailedInfo: {
      highlights: ["丹霞地貌", "怪石林立", "古刹悠远", "道教名山"],
      mustSee: ["方岩主峰", "古刹", "怪石景观", "道教文化展示"],
      bestTime: "春秋季节最佳，气候宜人",
      tips: "山路较陡，建议穿着舒适的登山鞋；带足饮用水；注意防晒",
      facilities: {
        dining: "景区内设有餐厅和小吃摊",
        parking: "景区设有停车场",
        restroom: "各主要景点均设有公共卫生间",
        rest: "设有休息亭和观景平台",
      },
    },
    image: "@/assets/images/places/fangyan.jpg",
    category: "natural",
    rating: 4.8,
    reviews: 1432,
    location: "浦江县方岩乡",
    price: {
      adult: "70元/人",
      child: "35元/人",
      senior: "35元/人",
    },
    openTime: "全年开放 07:00-17:30",
    transportation: {
      bus: "浦江县城乘坐公交车至方岩风景区",
      drive: "导航方岩风景区停车场，距离浦江县城约20分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩3-4小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.fangyan.com",
    },
  },
  {
    id: "7",
    title: "永康青铜博物馆",
    description:
      "展示永康深厚的青铜文化，馆藏青铜器具品类丰富，制作精美。通过现代化展示手段，生动呈现了永康青铜器发展史。",
    detailedInfo: {
      highlights: ["青铜文化", "丰富馆藏", "现代化展示"],
      mustSee: ["青铜器展览", "青铜文化展示", "互动体验区"],
      bestTime: "全年适宜游览",
      tips: "博物馆内禁止吸烟；请勿触摸展品",
      facilities: {
        dining: "博物馆内设有小吃摊",
        parking: "博物馆设有停车场",
        restroom: "博物馆内设有公共卫生间",
        rest: "设有休息区",
      },
    },
    image: "@/assets/images/places/qingtongbowuguan.jpg",
    category: "cultural",
    rating: 4.2,
    reviews: 463,
    location: "永康市城区",
    price: "免费",
    openTime: "周二至周日 09:00-17:00",
    transportation: {
      bus: "永康市区乘坐公交车至青铜博物馆",
      drive: "导航青铜博物馆停车场，距离永康市区约10分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩1-2小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.qingtongbowuguan.com",
    },
  },
  {
    id: "8",
    title: "南孔庙",
    description:
      "始建于北宋年间，是江南地区规模最大的孔庙建筑群之一。庙内保存着众多珍贵的文物，体现了金华深厚的文化底蕴和儒家文化传承。",
    detailedInfo: {
      highlights: ["孔庙建筑群", "珍贵文物", "儒家文化"],
      mustSee: ["孔庙主殿", "文物展览", "儒家文化展示"],
      bestTime: "春秋季节最佳，气候宜人",
      tips: "庙内禁止吸烟；请勿触摸文物",
      facilities: {
        dining: "庙内设有小吃摊",
        parking: "庙外设有停车场",
        restroom: "庙内设有公共卫生间",
        rest: "设有休息区",
      },
    },
    image: "@/assets/images/places/nankongmiao.jpg",
    category: "historical",
    rating: 4.5,
    reviews: 892,
    location: "金华市婺城区城中心",
    price: {
      adult: "40元/人",
      child: "20元/人",
      senior: "20元/人",
    },
    openTime: "全年开放 08:30-17:00",
    transportation: {
      bus: "金华市区乘坐公交车至南孔庙",
      drive: "导航南孔庙停车场，距离金华市区约10分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩1-2小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.nankongmiao.com",
    },
  },
  {
    id: "9",
    title: "金华博物馆",
    description:
      "金华市重要的文化地标，馆藏文物丰富，包括金华历史文化展、考古发现展等。新馆采用现代化展示手段，生动展现金华悠久历史文化。",
    detailedInfo: {
      highlights: ["丰富馆藏", "历史文化展", "考古发现展"],
      mustSee: ["历史文化展览", "考古发现展览", "互动体验区"],
      bestTime: "全年适宜游览",
      tips: "博物馆内禁止吸烟；请勿触摸展品",
      facilities: {
        dining: "博物馆内设有小吃摊",
        parking: "博物馆设有停车场",
        restroom: "博物馆内设有公共卫生间",
        rest: "设有休息区",
      },
    },
    image: "@/assets/images/places/jinhuabowuguan.jpg",
    category: "cultural",
    rating: 4.4,
    reviews: 725,
    location: "金华市婺城区宾虹西路",
    price: "免费",
    openTime: "周二至周日 09:00-17:00",
    transportation: {
      bus: "金华市区乘坐公交车至金华博物馆",
      drive: "导航金华博物馆停车场，距离金华市区约15分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩1-2小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.jinhuabowuguan.com",
    },
  },
  {
    id: "10",
    title: "浦江郑义门",
    description:
      "始建于明朝嘉靖年间，是浙江省规模最大、保存最完整的明代牌坊建筑群。以其精湛的石雕艺术和深厚的历史文化价值闻名。",
    detailedInfo: {
      highlights: ["明代牌坊建筑群", "精湛石雕艺术", "历史文化价值"],
      mustSee: ["牌坊建筑群", "石雕艺术展览", "历史文化展示"],
      bestTime: "春秋季节最佳，气候宜人",
      tips: "景区内禁止吸烟；请勿触摸文物",
      facilities: {
        dining: "景区内设有小吃摊",
        parking: "景区设有停车场",
        restroom: "景区内设有公共卫生间",
        rest: "设有休息区",
      },
    },
    image: "@/assets/images/places/zhengyimen.jpg",
    category: "historical",
    rating: 4.6,
    reviews: 1089,
    location: "浦江县郑宅镇",
    price: {
      adult: "35元/人",
      child: "15元/人",
      senior: "15元/人",
    },
    openTime: "全年开放 08:00-17:00",
    transportation: {
      bus: "浦江县城乘坐公交车至郑义门",
      drive: "导航郑义门停车场，距离浦江县城约20分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩1-2小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.zhengyimen.com",
    },
  },
  {
    id: "11",
    title: "武义牛头山",
    description:
      "国家4A级景区，以奇特的石林地貌和丰富的温泉资源闻名。山中石笋林立，温泉密布，集观光、休闲、养生于一体。",
    detailedInfo: {
      highlights: ["石林地貌", "温泉资源", "观光休闲"],
      mustSee: ["石林景观", "温泉体验", "观光休闲区"],
      bestTime: "春秋季节最佳，气候宜人",
      tips: "山路较陡，建议穿着舒适的登山鞋；带足饮用水；注意防晒",
      facilities: {
        dining: "景区内设有餐厅和小吃摊",
        parking: "景区设有停车场",
        restroom: "各主要景点均设有公共卫生间",
        rest: "设有休息亭和观景平台",
      },
    },
    image: "@/assets/images/places/niutoushan.jpg",
    category: "natural",
    rating: 4.5,
    reviews: 1566,
    location: "武义县牛头山镇",
    price: {
      adult: "75元/人",
      child: "35元/人",
      senior: "35元/人",
    },
    openTime: "全年开放 07:30-16:30",
    transportation: {
      bus: "武义县城乘坐公交车至牛头山",
      drive: "导航牛头山景区停车场，距离武义县城约30分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩3-4小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.niutoushan.com",
    },
  },
  {
    id: "13",
    title: "兰溪灵山禅寺",
    description:
      "始建于东晋年间的千年古刹，是浙江省重点文物保护单位。寺内古木参天，殿宇庄严，保存有多件珍贵文物和历代碑刻。",
    detailedInfo: {
      highlights: ["千年古刹", "古木参天", "珍贵文物"],
      mustSee: ["寺庙主殿", "古木参天", "文物展览"],
      bestTime: "春秋季节最佳，气候宜人",
      tips: "寺庙内禁止吸烟；请勿触摸文物",
      facilities: {
        dining: "寺庙内设有小吃摊",
        parking: "寺庙外设有停车场",
        restroom: "寺庙内设有公共卫生间",
        rest: "设有休息区",
      },
    },
    image: "@/assets/images/places/lingshansi.jpg",
    category: "historical",
    rating: 4.3,
    reviews: 678,
    location: "兰溪市灵山街道",
    price: {
      adult: "30元/人",
      child: "15元/人",
      senior: "15元/人",
    },
    openTime: "全年开放 08:00-16:30",
    transportation: {
      bus: "兰溪市区乘坐公交车至灵山禅寺",
      drive: "导航灵山禅寺停车场，距离兰溪市区约20分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩1-2小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.lingshansi.com",
    },
  },
  {
    id: "14",
    title: "义乌城中街",
    description:
      "始建于明清时期的传统商业街，是义乌小商品市场的发源地。街道保留了明清建筑风貌，既是重要的历史文化街区，也是现代商贸旅游区。",
    detailedInfo: {
      highlights: ["传统商业街", "明清建筑风貌", "历史文化"],
      mustSee: ["传统商业街", "明清建筑", "历史文化展示"],
      bestTime: "全年适宜游览",
      tips: "街区内禁止吸烟；请勿触摸文物",
      facilities: {
        dining: "街区内设有餐厅和小吃摊",
        parking: "街区外设有停车场",
        restroom: "街区内设有公共卫生间",
        rest: "设有休息区",
      },
    },
    image: "@/assets/images/places/chengzhongjie.jpg",
    category: "cultural",
    rating: 4.4,
    reviews: 2145,
    location: "义乌市中心城区",
    price: "免费",
    openTime: "全天开放",
    transportation: {
      bus: "义乌市区乘坐公交车至城中街",
      drive: "导航城中街停车场，距离义乌市区约10分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩1-2小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.chengzhongjie.com",
    },
  },
  {
    id: "15",
    title: "磐安花溪谷",
    description:
      "国家4A级景区，以溪流峡谷、瀑布群和原始森林闻名。谷中溪水潺潺，花木繁茂，是亲近自然、避暑休闲的理想去处。",
    detailedInfo: {
      highlights: ["溪流峡谷", "瀑布群", "原始森林"],
      mustSee: ["溪流景观", "瀑布群", "原始森林"],
      bestTime: "夏季最佳，气候凉爽",
      tips: "景区内禁止吸烟；请勿触摸植物",
      facilities: {
        dining: "景区内设有餐厅和小吃摊",
        parking: "景区设有停车场",
        restroom: "各主要景点均设有公共卫生间",
        rest: "设有休息亭和观景平台",
      },
    },
    image: "@/assets/images/places/huaxigu.jpg",
    category: "natural",
    rating: 4.7,
    reviews: 892,
    location: "磐安县尖山乡",
    price: {
      adult: "65元/人",
      child: "30元/人",
      senior: "30元/人",
    },
    openTime: "全年开放 08:00-16:30",
    transportation: {
      bus: "磐安县城乘坐公交车至花溪谷",
      drive: "导航花溪谷景区停车场，距离磐安县城约30分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩2-3小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.huaxigu.com",
    },
  },
  {
    id: "16",
    title: "东阳木雕城",
    description:
      "中国最大的木雕艺术品交易中心，集木雕艺术展示、交易、体验于一体。可以欣赏到精美的东阳木雕作品，了解非物质文化遗产的魅力。",
    detailedInfo: {
      highlights: ["木雕艺术品", "艺术展示", "交易中心"],
      mustSee: ["木雕艺术品展览", "木雕制作展示", "互动体验区"],
      bestTime: "全年适宜游览",
      tips: "展区内禁止吸烟；请勿触摸展品",
      facilities: {
        dining: "展区内设有餐厅和小吃摊",
        parking: "展区设有停车场",
        restroom: "展区内设有公共卫生间",
        rest: "设有休息区",
      },
    },
    image: "@/assets/images/places/mudiaocheng.jpg",
    category: "cultural",
    rating: 4.5,
    reviews: 1234,
    location: "东阳市吴宁街道",
    price: "免费",
    openTime: "全年开放 09:00-17:00",
    transportation: {
      bus: "东阳市区乘坐公交车至木雕城",
      drive: "导航木雕城停车场，距离东阳市区约15分钟车程",
      recommended: "自驾或乘坐公交车",
    },
    suggestedTime: "建议游玩1-2小时",
    contact: {
      phone: "0579-82XXXXX",
      website: "http://www.mudiaocheng.com",
    },
  },
];

export { attractions };
