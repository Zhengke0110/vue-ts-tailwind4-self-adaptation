import HotelsView from "./HotelsView.vue";
import HotelBanner from "@/assets/images/hotel/banner.png";

export interface Hotel {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  features: string[];
  address: string;
}

export const Banner = HotelBanner;
export default HotelsView;

export const hotels: Hotel[] = [
  {
    id: "1",
    title: "金华山庄度假酒店",
    description:
      "坐落于金华山脚下，环境优美，设施齐全的度假胜地。配备室外泳池、温泉SPA、健身中心等高端设施，让您享受难忘的度假体验。",
    image: "@/assets/images/hotels/shanzhuang.jpg",
    category: "resort",
    rating: 4.7,
    reviews: 256,
    price: "688",
    features: ["免费WiFi", "停车场", "健身房", "游泳池", "温泉"],
    address: "浙江省金华市婺城区金华山风景区内",
  },
  {
    id: "2",
    title: "婺城老宅民宿",
    description:
      "改造自百年老宅，完美保留传统建筑风格，融入现代设计元素。每个房间都独具特色，让您体验最地道的金华生活方式。",
    image: "@/assets/images/hotels/laozhai.jpg",
    category: "homestay",
    rating: 4.5,
    reviews: 128,
    price: "428",
    features: ["免费早餐", "古典园林", "茶室", "免费WiFi"],
    address: "浙江省金华市婺城区西关街历史文化街区",
  },
  {
    id: "3",
    title: "东阳木雕主题客栈",
    description:
      "以东阳木雕为主题的特色民宿，室内装饰均采用传统木雕工艺。提供木雕体验课程，让您深入了解非物质文化遗产。",
    image: "@/assets/images/hotels/mudiao.jpg",
    category: "homestay",
    rating: 4.3,
    reviews: 98,
    price: "368",
    features: ["木雕工作坊", "文化体验", "免费WiFi", "手工艺品店"],
    address: "浙江省东阳市横店影视城附近",
  },
  {
    id: "4",
    title: "浦江山水度假村",
    description:
      "依山傍水，环境清幽的综合度假区。设有观景露台、有机农场、野外烧烤区，是亲近自然的绝佳选择。",
    image: "@/assets/images/hotels/pujiang.jpg",
    category: "resort",
    rating: 4.6,
    reviews: 167,
    price: "528",
    features: ["观景平台", "农家乐", "烧烤区", "儿童乐园"],
    address: "浙江省浦江县浦阳江生态园区",
  },
  {
    id: "5",
    title: "横店影视主题酒店",
    description:
      "以电影为主题的豪华酒店，每间客房都以经典电影场景布置。proximity邻近横店影视城，是影视爱好者的理想之选。",
    image: "@/assets/images/hotels/yingshi.jpg",
    category: "hotel",
    rating: 4.8,
    reviews: 342,
    price: "888",
    features: ["电影主题房", "健身中心", "影院", "餐厅", "酒吧"],
    address: "浙江省东阳市横店影视城核心区",
  },
  {
    id: "6",
    title: "兰溪江畔精品民宿",
    description:
      "位于兰溪江边的现代化精品民宿，拥有无敌江景。独特的落地窗设计，让您在房间内就能欣赏美丽江景。",
    image: "@/assets/images/hotels/lanxi.jpg",
    category: "homestay",
    rating: 4.4,
    reviews: 156,
    price: "458",
    features: ["江景房", "观景台", "咖啡厅", "自行车租赁"],
    address: "浙江省兰溪市兰江街道滨江路",
  },
  {
    id: "7",
    title: "金华国际大酒店",
    description:
      "市中心五星级商务酒店，临近火车站和商圈。提供高端商务服务，是商务出行的首选住宿地。",
    image: "@/assets/images/hotels/guoji.jpg",
    category: "hotel",
    rating: 4.9,
    reviews: 425,
    price: "928",
    features: ["商务中心", "会议室", "健身房", "餐厅", "酒吧"],
    address: "浙江省金华市婺城区双龙南街",
  },
  {
    id: "8",
    title: "武义温泉山庄",
    description:
      "著名的温泉度假胜地，拥有多个天然温泉池。结合中医养生理念，提供专业的养生保健服务。",
    image: "@/assets/images/hotels/wenquan.jpg",
    category: "resort",
    rating: 4.7,
    reviews: 289,
    price: "728",
    features: ["温泉", "养生中心", "中医理疗", "瑜伽室"],
    address: "浙江省武义县温泉镇温泉路",
  },
  {
    id: "9",
    title: "义乌商贸主题酒店",
    description:
      "位于义乌国际商贸城附近的商务酒店，为商务客人提供一站式服务。设有商品展示厅和洽谈空间。",
    image: "@/assets/images/hotels/shangmao.jpg",
    category: "hotel",
    rating: 4.5,
    reviews: 312,
    price: "568",
    features: ["商务中心", "展示厅", "接待室", "翻译服务"],
    address: "浙江省义乌市福田街道商城大道",
  },
  {
    id: "10",
    title: "永康古村落民宿",
    description:
      "位于历史悠久的古村落内，完整保留明清建筑风格。体验传统村落生活，感受历史文化魅力。",
    image: "@/assets/images/hotels/gucunluo.jpg",
    category: "homestay",
    rating: 4.6,
    reviews: 145,
    price: "398",
    features: ["古建筑", "文化体验", "茶艺室", "农家饭"],
    address: "浙江省永康市古山镇古村",
  },
  {
    id: "11",
    title: "磐安森林度假村",
    description:
      "被原始森林环绕的生态度假村，空气清新，环境优美。提供森林探险、野外露营等特色活动。",
    image: "@/assets/images/hotels/senlin.jpg",
    category: "resort",
    rating: 4.4,
    reviews: 178,
    price: "468",
    features: ["森林探险", "露营基地", "烧烤区", "观星台"],
    address: "浙江省磐安县尖山风景区",
  },
  {
    id: "12",
    title: "金华艺术酒店",
    description:
      "以现代艺术为主题的精品酒店，每个房间都由知名艺术家设计。定期举办艺术展览和文化活动。",
    image: "@/assets/images/hotels/yishu.jpg",
    category: "hotel",
    rating: 4.8,
    reviews: 234,
    price: "798",
    features: ["艺术画廊", "创意空间", "艺术沙龙", "咖啡厅"],
    address: "浙江省金华市婺城区文化路",
  },
  {
    id: "13",
    title: "东阳竹园民宿",
    description:
      "位于竹林深处的特色民宿，建筑采用传统竹建筑工艺。提供竹艺制作体验，让您感受竹文化的魅力。",
    image: "@/assets/images/hotels/zhuyuan.jpg",
    category: "homestay",
    rating: 4.5,
    reviews: 167,
    price: "438",
    features: ["竹艺工作室", "茶室", "竹林冥想", "有机餐厅"],
    address: "浙江省东阳市南马镇竹林村",
  },
  {
    id: "14",
    title: "浦江溪畔度假酒店",
    description:
      "坐落在浦阳江畔的现代化度假酒店，设有私人码头和游艇俱乐部。提供水上运动和休闲娱乐设施。",
    image: "@/assets/images/hotels/xipan.jpg",
    category: "resort",
    rating: 4.7,
    reviews: 289,
    price: "868",
    features: ["游艇会", "水上运动", "spa中心", "无边泳池"],
    address: "浙江省浦江县浦阳江观景区",
  },
  {
    id: "15",
    title: "义乌万豪酒店",
    description:
      "国际连锁五星级酒店，位于义乌商贸中心地带。提供高端商务服务和奢华住宿体验。",
    image: "@/assets/images/hotels/wanhao.jpg",
    category: "hotel",
    rating: 4.9,
    reviews: 456,
    price: "1288",
    features: ["行政酒廊", "会议中心", "健身房", "高端餐厅"],
    address: "浙江省义乌市稠城街道商城大道",
  },
  {
    id: "16",
    title: "武义山居民宿",
    description:
      "依山而建的特色民宿，采用本地山石建造。每个房间都有独立庭院，让您享受私密空间。",
    image: "@/assets/images/hotels/shanju.jpg",
    category: "homestay",
    rating: 4.6,
    reviews: 198,
    price: "528",
    features: ["私人庭院", "观景露台", "农家菜园", "烤火房"],
    address: "浙江省武义县白洋村",
  },
  {
    id: "17",
    title: "横店古文化主题酒店",
    description:
      "以中国古代文化为主题的特色酒店，环境典雅，文化氛围浓厚。提供传统文化体验活动。",
    image: "@/assets/images/hotels/guwenhua.jpg",
    category: "hotel",
    rating: 4.7,
    reviews: 267,
    price: "668",
    features: ["文化讲堂", "国学馆", "茶艺室", "戏曲表演"],
    address: "浙江省东阳市横店影视城古文化街区",
  },
  {
    id: "18",
    title: "磐安溪谷度假村",
    description:
      "位于深山溪谷中的度假村，以生态环保为理念。提供户外探险和自然教育活动。",
    image: "@/assets/images/hotels/xigu.jpg",
    category: "resort",
    rating: 4.5,
    reviews: 189,
    price: "598",
    features: ["生态步道", "科普基地", "农耕体验", "野炊区"],
    address: "浙江省磐安县溪谷生态园",
  },
  {
    id: "19",
    title: "金华禅意主题民宿",
    description:
      "以禅文化为主题的精品民宿，环境幽静，适合心灵休憩。提供禅修课程和素食料理。",
    image: "@/assets/images/hotels/chanyi.jpg",
    category: "homestay",
    rating: 4.8,
    reviews: 145,
    price: "468",
    features: ["禅修室", "素食餐厅", "茶道室", "冥想花园"],
    address: "浙江省金华市婺城区双龙禅寺附近",
  },
  {
    id: "20",
    title: "兰溪江景酒店",
    description:
      "现代化江景酒店，所有房间均面向兰江，视野开阔。配套设施完善，服务周到。",
    image: "@/assets/images/hotels/jiangjing.jpg",
    category: "hotel",
    rating: 4.6,
    reviews: 278,
    price: "628",
    features: ["全江景房", "空中花园", "观景餐厅", "健身中心"],
    address: "浙江省兰溪市兰江街道滨江路",
  },
];
