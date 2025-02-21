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
    title: "洞天府邸·双龙洞酒店",
    description:
      "背靠金华山，面朝双龙洞，溪水潺潺，绿树环绕，仿佛步入了一幅山水画中。酒店共有37间客房，每间都面朝山野，窗外绿意盎然。房间内设施齐全，智能化控制系统、中央空调、地暖等一应俱全。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E9%87%91%E5%8D%8E%E5%B1%B1%E5%BA%84%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/%E6%B4%9E%E5%A4%A9%E5%BA%9C%E9%82%B8%C2%B7%E5%8F%8C%E9%BE%99%E6%B4%9E%E9%85%92%E5%BA%97/%E9%85%92%E5%BA%97-2.jpg",
    category: "resort",
    rating: 4.7,
    reviews: 256,
    price: "688",
    features: ["免费WiFi", "停车场", "空调", "智能化"],
    address: "浙江省金华市婺城区罗店镇洞前村双龙洞口西南侧",
  },
  {
    id: "2",
    title: "山水间·宿在山间",
    description:
      "位于天然氧吧莘畈乡，景色优美仙舟湖畔。人文与自然是宿在山间的设计主题，优质的自然禀赋和独特的在地文化相结合，追求无设计的美感。民宿共4层11个房间，配套有书屋、咖啡吧、观景台、餐厅、会议室等公共设施。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E5%A9%BA%E5%9F%8E%E8%80%81%E5%AE%85%E6%B0%91%E5%AE%BF/%E5%B1%B1%E6%B0%B4%E9%97%B4%C2%B7%E5%AE%BF%E5%9C%A8%E5%B1%B1%E9%97%B4/%E5%B1%B1%E6%B0%B4%E9%97%B4-1.jpg",
    category: "homestay",
    rating: 4.5,
    reviews: 128,
    price: "428",
    features: ["免费早餐", "古典园林", "茶室", "免费WiFi"],
    address: "金华市婺城区莘畈乡和尚廖村登科形自然村",
  },
  {
    id: "3",
    title: "林栖三十六院",
    description:
      "四周群山环绕，竹翠掩映，仿佛一幅流动的山水画卷。民宿的建筑是以原木的装修风格打造，它没有华丽的装饰，不需要复杂的设计，自然朴实的木质质感深得人心，让人感受到了一种温暖和平静",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E4%B8%9C%E9%98%B3%E6%9C%A8%E9%9B%95%E4%B8%BB%E9%A2%98%E5%AE%A2%E6%A0%88/%E6%9E%97%E6%A0%96%E4%B8%89%E5%8D%81%E5%85%AD%E9%99%A2/%E4%B8%89%E5%8D%81%E5%85%AD%E9%99%A2-2.jpg",
    category: "homestay",
    rating: 4.3,
    reviews: 98,
    price: "368",
    features: ["文化体验", "免费WiFi", "手工艺品店"],
    address: "金华市东阳三单乡联合村",
  },
  {
    id: "4",
    title: "浦江山水度假村",
    description:
      "依山傍水，环境清幽的综合度假区。设有观景露台、有机农场、野外烧烤区，是亲近自然的绝佳选择。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E6%B5%A6%E6%B1%9F/%E4%BD%8F%E5%AE%BF/%E5%8D%81%E9%87%8C%E6%9D%BE%E9%97%B4.png",
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
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E6%A8%AA%E5%BA%97%E6%A2%A6%E5%B9%BB%E8%B0%B7%E9%85%92%E5%BA%97.png",
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
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%85%B0%E6%BA%AA/%E4%BD%8F%E5%AE%BF/%E6%B8%B8%E5%9F%A0%E5%AE%89%E8%8B%A5%E5%B0%8F%E9%99%A2%E6%B0%91%E5%AE%BF.png",
    category: "homestay",
    rating: 4.4,
    reviews: 156,
    price: "458",
    features: ["江景房", "观景台", "咖啡厅", "自行车租赁"],
    address: "近游埠古镇，私享超大观景庭院",
  },
  {
    id: "7",
    title: "金华国际大酒店",
    description:
      "市中心五星级商务酒店，临近火车站和商圈。提供高端商务服务，是商务出行的首选住宿地。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%A9%BA%E5%9F%8E/%E4%BD%8F%E5%AE%BF/%E9%87%91%E5%8D%8E%E5%9B%BD%E9%99%85%E9%85%92%E5%BA%97.png",
    category: "hotel",
    rating: 4.9,
    reviews: 425,
    price: "928",
    features: ["商务中心", "会议室", "健身房", "餐厅", "酒吧"],
    address: "浙江省金华市婺城区双龙南街",
  },
  {
    id: "8",
    title: "伴山悬崖温泉美宿",
    description:
      "著名的温泉度假胜地，拥有多个天然温泉池。结合中医养生理念，提供专业的养生保健服务。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E6%AD%A6%E4%B9%89/%E4%BD%8F%E5%AE%BF/%E4%BC%B4%E5%B1%B1%E6%82%AC%E5%B4%96%E6%B8%A9%E6%B3%89%E7%BE%8E%E5%AE%BF.png",
    category: "resort",
    rating: 4.7,
    reviews: 289,
    price: "728",
    features: ["温泉", "养生中心", "中医理疗", "瑜伽室"],
    address: "靠近延福寺，环境优美且安静",
  },
  {
    id: "9",
    title: "义乌万豪酒店",
    description:
      "位于义乌国际商贸城附近的商务酒店，为商务客人提供一站式服务。设有商品展示厅和洽谈空间。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B9%89%E4%B9%8C/%E4%BD%8F%E5%AE%BF/%E4%B9%89%E4%B9%8C%E4%B8%87%E8%B1%AA%E9%85%92%E5%BA%97.png",
    category: "hotel",
    rating: 4.5,
    reviews: 312,
    price: "568",
    features: ["商务中心", "展示厅", "接待室", "翻译服务"],
    address: "义乌国际商贸城附近",
  },
  {
    id: "10",
    title: "永康大陈十八间民宿",
    description:
      "位于前仓镇大陈村。体验传统村落生活，感受历史文化魅力。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E6%B0%B8%E5%BA%B7/%E4%BD%8F%E5%AE%BF/%E6%B0%B8%E5%BA%B7%E5%A4%A7%E9%99%88%E5%8D%81%E5%85%AB%E9%97%B4%E6%B0%91%E5%AE%BF.png",
    category: "homestay",
    rating: 4.6,
    reviews: 145,
    price: "398",
    features: ["古建筑", "文化体验", "茶艺室", "农家饭"],
    address: "浙江省永康市前仓镇大陈村",
  },
  {
    id: "11",
    title: "磐安云上花溪度假酒店",
    description:
      "被原始森林环绕的生态度假村，空气清新，环境优美。提供森林探险、野外露营等特色活动。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E7%A3%90%E5%AE%89/%E4%BD%8F%E5%AE%BF/%E7%A3%90%E5%AE%89%E4%BA%91%E4%B8%8A%E8%8A%B1%E6%BA%AA%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97.png",
    category: "resort",
    rating: 4.4,
    reviews: 178,
    price: "468",
    features: ["森林探险", "露营基地", "烧烤区", "观星台"],
    address: "浙江省磐安县坐落于磐安南郊",
  },
  {
    id: "12",
    title: "金华茉莉香榭艺术酒店",
    description:
      "酒店设计风格出自名家手笔，容简约、至尊、时尚温馨于一体，让您体验宾至如归的感受",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E9%87%91%E5%8D%8E%E8%8C%89%E8%8E%89%E9%A6%99%E6%A6%AD%E8%89%BA%E6%9C%AF%E9%85%92%E5%BA%97.png",
    category: "hotel",
    rating: 4.8,
    reviews: 234,
    price: "798",
    features: ["艺术画廊", "创意空间", "艺术沙龙", "咖啡厅"],
    address: "浙江省金华市婺城区金磐路428号",
  },
  {
    id: "13",
    title: "东阳笛乡民宿",
    description:
      "民宿座落于中国着名笛子演奏家赵松庭先生的故乡东阳市巍山镇，院子里有鱼池、秋千，旁边有竹林小溪。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E4%B8%9C%E9%98%B3%E7%AC%9B%E4%B9%A1%E6%B0%91%E5%AE%BF.png",
    category: "homestay",
    rating: 4.5,
    reviews: 167,
    price: "438",
    features: ["竹艺工作室", "茶室", "竹林冥想", "有机餐厅"],
    address: "浙江省东阳巍山镇中横街309号",
  },
  {
    id: "14",
    title: "浦江仙华檀宫国际度假酒店",
    description:
      "地处于4A级仙华山风景区的森林之中，是华东地区较大的集温泉养生、休闲度假、商务会议、特色餐饮、康体娱乐、户外拓展为一体的综合性、原生态休闲度假的旅游胜地。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E6%B5%A6%E6%B1%9F/%E4%BD%8F%E5%AE%BF/%E6%B5%A6%E6%B1%9F%E4%BB%99%E5%8D%8E%E6%AA%80%E5%AE%AB%E5%9B%BD%E9%99%85%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97.png",
    category: "resort",
    rating: 4.7,
    reviews: 289,
    price: "868",
    features: ["游艇会", "水上运动", "spa中心", "无边泳池"],
    address: "浙江省浦江仙华路388号",
  },
  {
    id: "15",
    title: "义乌万豪酒店",
    description:
      "国际连锁五星级酒店，位于义乌商贸中心地带。提供高端商务服务和奢华住宿体验。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B9%89%E4%B9%8C/%E4%BD%8F%E5%AE%BF/%E4%B9%89%E4%B9%8C%E4%B8%87%E8%B1%AA%E9%85%92%E5%BA%97.png",
    category: "hotel",
    rating: 4.9,
    reviews: 456,
    price: "1288",
    features: ["行政酒廊", "会议中心", "健身房", "高端餐厅"],
    address: "浙江省义乌市稠城街道商城大道",
  },
  {
    id: "16",
    title: "武义阳春山居民宿",
    description:
      "离城市喧嚣，风景这边独好！民宿地处素有“萤石之乡，温泉之城”美称的浙江武义。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E6%AD%A6%E4%B9%89/%E4%BD%8F%E5%AE%BF/%E6%AD%A6%E4%B9%89%E9%98%B3%E6%98%A5%E5%B1%B1%E5%B1%85%E6%B0%91%E5%AE%BF.png",
    category: "homestay",
    rating: 4.6,
    reviews: 198,
    price: "528",
    features: ["私人庭院", "观景露台", "农家菜园", "烤火房"],
    address: "武义俞源乡俞源村太极路1号",
  },
  {
    id: "17",
    title: "横店影视城广州街影视主题精品酒店",
    description:
      "民宿在延续百年老香港的韵味下深度挖掘影视元素，并将其融入到主题民宿、主题商业、主题演艺、主题博物馆中去，并开放夜游，打造以影视元素为内涵的沉浸式互动体验主题度假综合体。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E6%A8%AA%E5%BA%97%E5%BD%B1%E8%A7%86%E5%9F%8E%E5%B9%BF%E5%B7%9E%E8%A1%97%E5%BD%B1%E8%A7%86%E4%B8%BB%E9%A2%98%E7%B2%BE%E5%93%81%E9%85%92%E5%BA%97.png",
    category: "hotel",
    rating: 4.7,
    reviews: 267,
    price: "668",
    features: ["文化讲堂", "国学馆", "茶艺室", "戏曲表演"],
    address: "浙江省东阳横店镇广州街香港街景区北门西侧",
  },
  {
    id: "18",
    title: "维也纳国际酒店(磐安云山溪谷店)",
    description:
      "是集住宿、餐饮、休闲、商务会议、为一体的综合型中高档酒店。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E7%BB%B4%E4%B9%9F%E7%BA%B3%E5%9B%BD%E9%99%85%E9%85%92%E5%BA%97.png",
    category: "resort",
    rating: 4.5,
    reviews: 189,
    price: "598",
    features: ["商务", "大型会议室", "大型停车场", "豪华早餐厅"],
    address: "浙江省磐安安文镇安文街道金蟾路1号",
  },
  {
    id: "19",
    title: "金华华漫主题酒店",
    description:
      "金华华漫主题酒店座落于金华市政府，优越的地理位置使它成为金华一个令人向往的住宿选择。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E9%87%91%E5%8D%8E%E5%8D%8E%E6%BC%AB%E4%B8%BB%E9%A2%98%E9%85%92%E5%BA%97.png",
    category: "homestay",
    rating: 4.8,
    reviews: 145,
    price: "468",
    features: ["经济实惠", "干净整洁", "洗衣房", "会议厅"],
    address: "金华婺城区三江街道环城南路西段1226号",
  },
  {
    id: "20",
    title: "兰溪今朝酒店",
    description:
      "是一家精品商务酒店，采用中国非物质文化遗产传人陆光正大师木雕艺术品为装修特色，拥有各式精致客房可供您选择。",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E5%85%B0%E6%BA%AA%E4%BB%8A%E6%9C%9D%E9%85%92%E5%BA%97.png",
    category: "hotel",
    rating: 4.6,
    reviews: 278,
    price: "628",
    features: ["茶室", "空中花园", "观景餐厅", "健身中心"],
    address: "浙江省兰溪劳动路78号",
  },
];
