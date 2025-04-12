import{d as _,a as E,z as V,e as n,c as l,b as e,q as d,A as I,u as a,B as N,F as B,s as f,n as r,k as y,p,y as T,t as c,w as M,f as G,v as R,H as A,o as i,_ as U}from"./index-CD233zg-.js";import{S as Y,Y as H,h as k,G as L}from"./transition-DJ8c_wtb.js";const O={class:"relative h-48 w-full overflow-hidden md:h-56 lg:h-72"},P=["src"],Q={class:"relative flex h-full flex-col px-4 py-4 md:px-6 lg:px-8"},J={class:"flex items-center justify-between"},K={class:"mt-auto space-y-2"},W={class:"flex flex-wrap gap-2"},X={class:"relative px-4 py-4 md:px-6 lg:px-8 lg:py-8"},Z={key:0,class:"lg:sticky lg:top-8"},ee={class:"rounded-xl bg-white p-6 shadow-sm"},te={class:"flex flex-col space-y-2"},se=["onClick"],ae={class:"flex-1 text-left"},oe={class:"text-sm text-gray-400"},le={class:"flex-1"},ie={key:0,class:"mb-6 md:mb-8"},ne={class:"hide-scrollbar flex space-x-2 overflow-x-auto pb-2"},re=["onClick"],ce=["onClick"],de={class:"relative aspect-[4/3] overflow-hidden"},ge=["src","alt"],pe={class:"flex flex-1 flex-col p-4"},ue={class:"mb-2 flex items-start justify-between gap-2"},Ee={class:"truncate font-medium text-gray-900 transition-colors duration-300 group-hover:text-orange-500"},Be={class:"flex-shrink-0 rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-500"},fe={class:"mb-3 line-clamp-2 flex-1 text-sm text-gray-500"},ve={class:"mb-3 flex flex-wrap gap-1.5"},me={class:"flex items-center justify-between"},he={class:"flex items-center space-x-1"},xe={class:"text-xs text-gray-500"},ye=["onClick"],be={class:"fixed inset-0"},we={class:"flex min-h-full items-start justify-center p-4"},_e={class:"relative"},Ae=_({__name:"ShoppingView",setup(ze){const b=N(),m=E(!1),u=E(""),h=E("all"),x=E("all"),w=[{value:"all",label:"全部",icon:"fas fa-th-large"},{value:"local",label:"特产",icon:"fas fa-gift"},{value:"craft",label:"工艺品",icon:"fas fa-palette"},{value:"market",label:"市场",icon:"fas fa-store-alt"}],v=E(Ce),C=V(()=>{const o=n.value.isDesktop?h.value:x.value;return o==="all"?v.value:v.value.filter(s=>s.category===o)}),z=o=>o==="all"?v.value.length:v.value.filter(s=>s.category===o).length,q=_({props:{rating:Number},setup(o){return()=>A("div",{class:"flex text-yellow-400"},Array.from({length:5},(s,t)=>A("i",{key:t,class:["fas fa-star text-sm transition-all duration-300",t<(o.rating||0)?"text-yellow-400":"text-gray-300"]})))}}),D=()=>{m.value=!0},F=()=>{m.value=!1,u.value=""},j=o=>{b.push(`/shopping/${o.id}`)},S=o=>{console.log("Toggle favorite:",o)},$=o=>(console.log("isFavorite",o),!1);return(o,s)=>(i(),l("div",{class:r(["min-h-screen bg-orange-50",{"lg:px-[var(--viewport-padding)] lg:py-8":a(n).isDesktop}])},[e("div",{class:r({"mx-auto lg:max-w-6xl lg:overflow-hidden lg:rounded-2xl lg:bg-white lg:shadow-xl":a(n).isDesktop})},[e("header",O,[e("img",{src:a(ke),alt:"金华特色购物",class:"absolute inset-0 h-full w-full object-cover transition-transform duration-700"},null,8,P),s[7]||(s[7]=I('<div class="absolute inset-0" data-v-8ee7ea31><div class="absolute inset-0 backdrop-blur-[2px]" data-v-8ee7ea31></div><div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" data-v-8ee7ea31></div><div class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" data-v-8ee7ea31></div><div class="absolute inset-0 bg-black/5" data-v-8ee7ea31></div></div>',1)),e("div",Q,[e("div",J,[e("button",{class:"text-white transition-transform hover:scale-105",onClick:s[0]||(s[0]=t=>a(b).back())},s[3]||(s[3]=[e("i",{class:"fas fa-arrow-left text-xl"},null,-1)])),e("div",{class:"flex items-center space-x-4"},[e("button",{class:"text-white transition-transform hover:scale-105",onClick:D},s[4]||(s[4]=[e("i",{class:"fas fa-search text-xl"},null,-1)]))])]),e("div",K,[s[5]||(s[5]=e("h1",{class:"text-2xl font-bold text-white drop-shadow-lg md:text-3xl lg:text-4xl"}," 特色购物 ",-1)),s[6]||(s[6]=e("p",{class:"text-sm text-white/90 drop-shadow md:text-base lg:w-2/3"}," 探索金华特色商品，体验本地购物文化 ",-1)),e("div",W,[(i(),l(B,null,f(["地方特产","工艺品","批发市场","文创商品"],t=>e("span",{key:t,class:"rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white shadow-sm backdrop-blur-md"},c(t),1)),64))])])])]),e("main",X,[e("div",{class:r(["w-full",{"lg:grid lg:grid-cols-[280px_1fr] lg:gap-8":a(n).isDesktop}])},[a(n).isDesktop?(i(),l("aside",Z,[e("div",ee,[s[8]||(s[8]=e("h3",{class:"mb-4 text-lg font-semibold"},"商品分类",-1)),e("div",te,[(i(),l(B,null,f(w,t=>e("button",{key:t.value,class:r(["flex items-center space-x-3 rounded-lg px-4 py-3 transition-all hover:bg-orange-50",h.value===t.value?"bg-orange-50 text-orange-500":"text-gray-600"]),onClick:g=>h.value=t.value},[e("i",{class:r([t.icon,"w-5"])},null,2),e("span",ae,c(t.label),1),e("span",oe,c(z(t.value)),1)],10,se)),64))])])])):y("",!0),e("div",le,[a(n).isDesktop?y("",!0):(i(),l("div",ie,[e("div",ne,[(i(),l(B,null,f(w,t=>e("button",{key:t.value,class:r(["inline-flex shrink-0 items-center space-x-2 rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors",x.value===t.value?"bg-orange-500 text-white":"bg-white text-gray-600"]),onClick:g=>x.value=t.value},[e("i",{class:r(t.icon)},null,2),e("span",null,c(t.label),1)],10,re)),64))])])),e("div",{class:r(["grid gap-4 sm:gap-6 lg:gap-8",{"grid-cols-1":a(n).isMobile,"grid-cols-2":a(n).isTablet,"grid-cols-2 xl:grid-cols-3":a(n).isDesktop}])},[d(T,{name:"fade",appear:"",tag:"div",class:"contents"},{default:p(()=>[(i(!0),l(B,null,f(C.value,t=>(i(),l("div",{key:t.id,class:"group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",onClick:g=>j(t)},[e("div",de,[e("img",{src:t.image,alt:t.title,class:"h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"},null,8,ge),s[9]||(s[9]=e("div",{class:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"},null,-1))]),e("div",pe,[e("div",ue,[e("h3",Ee,c(t.title),1),e("span",Be," ¥"+c(t.price),1)]),e("p",fe,c(t.description),1),e("div",ve,[(i(!0),l(B,null,f(t.tags,g=>(i(),l("span",{key:g,class:"rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"},c(g),1))),128))]),e("div",me,[e("div",he,[d(a(q),{rating:t.rating},null,8,["rating"]),e("span",xe,c(t.reviews)+"条点评",1)]),e("button",{class:"transform text-gray-400 transition-all duration-300 hover:scale-110 hover:text-orange-500",onClick:M(g=>S(t),["stop"])},[e("i",{class:r(["fas fa-heart",{"text-red-500":$(t)}])},null,2)],8,ye)])])],8,ce))),128))]),_:1})],2)])],2)]),d(a(Y),{appear:"",show:m.value,as:"template"},{default:p(()=>[d(a(H),{as:"div",class:"relative z-50",onClose:F},{default:p(()=>[d(a(k),{enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>s[10]||(s[10]=[e("div",{class:"fixed inset-0 bg-black/30 backdrop-blur-sm"},null,-1)])),_:1}),e("div",be,[e("div",we,[d(a(k),{enter:"duration-300 ease-out","enter-from":"opacity-0 -translate-y-4","enter-to":"opacity-100 translate-y-0",leave:"duration-200 ease-in","leave-from":"opacity-100 translate-y-0","leave-to":"opacity-0 -translate-y-4"},{default:p(()=>[d(a(L),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all"},{default:p(()=>[e("div",_e,[G(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>u.value=t),type:"text",placeholder:"搜索商品...",class:"w-full rounded-lg border border-gray-200 px-4 py-2 pr-10 focus:border-orange-500 focus:outline-none"},null,512),[[R,u.value]]),u.value?(i(),l("button",{key:0,class:"absolute top-1/2 right-3 -translate-y-1/2 text-gray-400",onClick:s[2]||(s[2]=t=>u.value="")},s[11]||(s[11]=[e("i",{class:"fas fa-times"},null,-1)]))):y("",!0)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],2)],2))}}),Fe=U(Ae,[["__scopeId","data-v-8ee7ea31"]]),ke="/assets/banner-DFP8UkRi.png",Ce=[{id:"1",title:"金华火腿礼盒",description:"精选3年以上陈化火腿，传统工艺制作，色泽红润，肉质细腻，营养丰富，送礼佳品。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF%E7%A4%BC%E7%9B%92/%E7%81%AB%E8%85%BF%E7%A4%BC%E7%9B%92-2.jpg",category:"local",rating:4.8,reviews:256,price:"688",location:"金华市火腿文化园",tags:["送礼首选","传统美食","地理标志产品"]},{id:"2",title:"东阳木雕套装",description:"国家级非遗传承作品，纯手工雕刻，选用上等香樟木，古色古香，雕工精湛。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B8%9C%E9%98%B3%E6%9C%A8%E9%9B%95/%E6%9C%A8%E9%9B%95-2.jpg",category:"craft",rating:4.7,reviews:128,price:"1288",location:"东阳木雕城",tags:["非遗文化","收藏价值","手工艺品"]},{id:"3",title:"义乌小商品市场精选",description:"汇集全球小商品，包括饰品、文具、日用品等，一站式采购天堂。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E5%B0%8F%E5%95%86%E5%93%81/%E5%95%86%E5%93%81-2.jpg",category:"market",rating:4.5,reviews:398,price:"不限",location:"义乌国际商贸城",tags:["批发采购","品类齐全","价格实惠"]},{id:"4",title:"兰溪红糖礼盒",description:"传统手工熬制，原料为本地甘蔗，无添加纯天然，营养丰富。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E5%85%B0%E6%BA%AA%E7%BA%A2%E7%B3%96/%E7%BA%A2%E7%B3%96.jpg",category:"local",rating:4.6,reviews:167,price:"128",location:"兰溪市特产中心",tags:["纯天然","养生保健","传统工艺"]},{id:"5",title:"横店影视道具集",description:"横店影视城特色道具，包括古装服饰、装饰品等，影视文化纪念品。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E6%A8%AA%E5%BA%97%E5%BD%B1%E8%A7%86%E9%81%93%E5%85%B7%E9%9B%86.png",category:"craft",rating:4.3,reviews:89,price:"199",location:"横店影视城",tags:["影视文化","收藏纪念","特色礼品"]},{id:"6",title:"婺州窑瓷器",description:"千年窑口传承，青瓷工艺精湛，釉色典雅，器型优美。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E5%A9%BA%E5%B7%9E%E7%93%B7%E5%99%A8.png",category:"craft",rating:4.9,reviews:156,price:"488",location:"金华市博物馆文创店",tags:["文化遗产","艺术收藏","送礼佳品"]},{id:"7",title:"浦江水晶饰品",description:"采用优质水晶原料，工艺精细，璀璨夺目，时尚精美。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E6%B5%A6%E6%B1%9F%E6%B0%B4%E6%99%B6%E9%A5%B0%E5%93%81.png",category:"craft",rating:4.6,reviews:245,price:"299",location:"浦江水晶市场",tags:["时尚饰品","品质保证","个性定制"]},{id:"8",title:"武义养生茶叶",description:"武义高山有机茶，包括白茶、红茶、绿茶等，清香醇厚。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E5%85%BB%E7%94%9F%E8%8C%B6.png",category:"local",rating:4.7,reviews:178,price:"368",location:"武义茶叶市场",tags:["有机认证","养生保健","礼盒装"]},{id:"9",title:"义乌圣诞用品",description:"全球最大圣诞用品集散地，品种齐全，价格优惠。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E5%9C%A3%E8%AF%9E%E7%94%A8%E5%93%81.png",category:"market",rating:4.4,reviews:423,price:"批发价",location:"义乌国际商贸城",tags:["节日用品","批发零售","出口品质"]},{id:"10",title:"东阳黄花梨家具",description:"采用优质黄花梨木材，传统榫卯工艺，做工精细，历久弥新。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B8%9C%E9%98%B3%E9%BB%84%E8%8A%B1%E6%A2%A8%E5%AE%B6%E5%85%B7.png",category:"craft",rating:4.8,reviews:92,price:"定制",location:"东阳红木家具城",tags:["传统工艺","高端定制","收藏价值"]},{id:"11",title:"兰溪豆腐干",description:"采用非转基因黄豆，传统手工制作，口感细腻，营养丰富。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E5%85%B0%E6%BA%AA%E8%B1%86%E8%85%90%E5%B9%B2.png",category:"local",rating:4.5,reviews:334,price:"68",location:"兰溪特产市场",tags:["地方特产","传统美食","真空包装"]},{id:"12",title:"义乌文具套装",description:"创意文具大集合，品质优良，款式新颖，适合学生办公。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E6%96%87%E5%85%B7%E5%A5%97%E8%A3%85.png",category:"market",rating:4.3,reviews:567,price:"99",location:"义乌文具市场",tags:["学习用品","创意设计","性价比高"]},{id:"13",title:"永康五金工具",description:"专业五金工具套装，质量可靠，品种齐全，价格实惠。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E6%B0%B8%E5%BA%B7%E4%BA%94%E9%87%91%E5%B7%A5%E5%85%B7.png",category:"market",rating:4.6,reviews:289,price:"199",location:"永康五金市场",tags:["品质保证","专业工具","实用耐用"]},{id:"14",title:"磐安山核桃油",description:"纯天然压榨，营养丰富，助力健康，送礼佳品。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E7%A3%90%E5%AE%89%E5%B1%B1%E6%A0%B8%E6%A1%83%E6%B2%B9.png",category:"local",rating:4.7,reviews:145,price:"238",location:"磐安特产中心",tags:["天然制品","营养保健","礼盒装"]},{id:"15",title:"浦江珠宝首饰",description:"精选优质珠宝玉石，工艺精湛，款式时尚，绚丽多彩。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E6%B5%A6%E6%B1%9F%E7%8F%A0%E5%AE%9D%E9%A6%96%E9%A5%B0.png",category:"craft",rating:4.8,reviews:176,price:"588",location:"浦江珠宝城",tags:["时尚饰品","精工制作","送礼优选"]},{id:"16",title:"义乌帽子专区",description:"各类时尚帽子，从运动到礼帽，应有尽有，四季可选。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E5%B8%BD%E5%AD%90%E4%B8%93%E5%8C%BA.png",category:"market",rating:4.4,reviews:445,price:"35",location:"义乌国际商贸城",tags:["时尚单品","批发零售","多款可选"]}];export{ke as Banner,Fe as default,Ce as shoppingItems};
