import{d as _,a as E,z as V,e as c,c as d,b as e,q as l,u as i,B as Y,p as n,F as f,s as h,n as r,k as b,y as G,T as O,i as C,t as p,w as R,f as H,v as Q,H as k,o as u,_ as U}from"./index-CD233zg-.js";import{g as J,S as K,M as P,b as D}from"./menu-CgzuMj1U.js";import{S as W,Y as X,h as T,G as Z}from"./transition-DJ8c_wtb.js";const ee={class:"relative h-48 w-full overflow-hidden md:h-56 lg:h-72"},te=["src"],se={class:"relative flex h-full flex-col px-4 py-4 md:px-6 lg:px-8"},ae={class:"flex items-center justify-between"},ie={class:"flex items-center space-x-4"},oe={class:"mt-auto space-y-2"},le={class:"flex flex-wrap gap-2"},ne={class:"relative px-4 py-4 md:px-6 lg:px-8 lg:py-8"},re={key:0,class:"lg:sticky lg:top-8"},ce={class:"rounded-xl bg-white p-6 shadow-sm"},de={class:"flex flex-col space-y-2"},ue=["onClick"],pe={class:"flex-1 truncate text-left"},ge={class:"flex-shrink-0 text-sm text-gray-400"},Ee={class:"flex-1"},me={key:0,class:"mb-6 md:mb-8"},fe={class:"hide-scrollbar flex space-x-2 overflow-x-auto pb-2"},he=["onClick"],xe=["onClick"],ve={class:"relative aspect-[4/3] overflow-hidden"},ye=["src","alt"],Be={class:"flex flex-1 flex-col p-4"},be={class:"mb-2 flex items-start justify-between gap-2"},we={class:"truncate font-medium text-gray-900 transition-colors duration-300 group-hover:text-indigo-500"},Ae={class:"flex-shrink-0 rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-500"},_e={class:"mb-3 line-clamp-2 flex-1 text-sm text-gray-500"},Ce={class:"flex items-center justify-between"},ke={class:"flex items-center space-x-1"},De={class:"text-xs text-gray-500"},Te=["onClick"],Ie={class:"fixed inset-0"},qe={class:"flex min-h-full items-start justify-center p-4"},ze={class:"relative"},Fe=_({__name:"CultureView",setup(Le){const A=Y(),x=E(!1),g=E(""),v=E("all"),y=E("all"),I=E("default"),B=[{value:"all",label:"全部",icon:"fas fa-th-large"},{value:"heritage",label:"非遗文化",icon:"fas fa-landmark"},{value:"history",label:"历史典故",icon:"fas fa-book-open"},{value:"art",label:"艺术表演",icon:"fas fa-palette"}],q=V(()=>{let a=[...w];const s=c.value.isDesktop?v.value:y.value;if(s!=="all"&&(a=a.filter(t=>t.category===s)),g.value.trim()){const t=g.value.toLowerCase().trim();a=a.filter(o=>o.title.toLowerCase().includes(t)||o.description.toLowerCase().includes(t)||o.location.toLowerCase().includes(t)||o.features.some(m=>m.toLowerCase().includes(t)))}return a.sort((t,o)=>{switch(I.value){case"rating":return o.rating-t.rating;case"reviews":return o.reviews-t.reviews;default:const m=o.recommendIndex-t.recommendIndex;return m!==0?m:o.rating-t.rating}}),a}),z=()=>{x.value=!0},F=()=>{x.value=!1,g.value=""},j=a=>{A.push(`/culture/${a.id}`)},S=a=>a==="all"?w.length:w.filter(s=>s.category===a).length,L=a=>{const s=B.find(t=>t.value===a);return s?s.label:a},$=a=>{console.log("Toggle favorite:",a)},M=a=>(console.log("isFavorite",a),!1),N=_({props:{rating:Number},setup(a){return()=>k("div",{class:"flex text-yellow-400"},Array.from({length:5},(s,t)=>k("i",{key:t,class:["fas fa-star text-sm transition-all duration-300",t<(a.rating||0)?"text-yellow-400":"text-gray-300"]})))}});return(a,s)=>(u(),d("div",{class:r(["min-h-screen bg-indigo-50",{"lg:px-[var(--viewport-padding)] lg:py-8":i(c).isDesktop}])},[e("div",{class:r({"mx-auto lg:max-w-6xl lg:overflow-hidden lg:rounded-2xl lg:bg-white lg:shadow-xl":i(c).isDesktop})},[e("header",ee,[e("img",{src:i(Se),alt:"金华文化",class:"absolute inset-0 h-full w-full object-cover transition-transform duration-700"},null,8,te),s[10]||(s[10]=e("div",{class:"absolute inset-0"},[e("div",{class:"absolute inset-0 backdrop-blur-[2px]"}),e("div",{class:"absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"}),e("div",{class:"absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent"})],-1)),e("div",se,[e("div",ae,[e("button",{class:"text-white transition-transform hover:scale-105",onClick:s[0]||(s[0]=t=>i(A).back())},s[3]||(s[3]=[e("i",{class:"fas fa-arrow-left text-xl"},null,-1)])),e("div",ie,[e("button",{class:"text-white transition-transform hover:scale-105",onClick:z},s[4]||(s[4]=[e("i",{class:"fas fa-search text-xl"},null,-1)])),l(i(J),{as:"div",class:"relative"},{default:n(()=>[l(i(K),{class:"text-white"},{default:n(()=>s[5]||(s[5]=[e("i",{class:"fas fa-ellipsis-h text-xl"},null,-1)])),_:1}),l(O,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:n(()=>[l(i(P),{class:"ring-opacity-5 absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 ring-1 shadow-lg ring-black focus:outline-none"},{default:n(()=>[l(i(D),null,{default:n(({active:t})=>[e("button",{class:r(["flex w-full items-center px-4 py-2 text-sm",t?"bg-indigo-50 text-indigo-500":"text-gray-700"])},s[6]||(s[6]=[e("i",{class:"fas fa-heart mr-3"},null,-1),C("收藏 ")]),2)]),_:1}),l(i(D),null,{default:n(({active:t})=>[e("button",{class:r(["flex w-full items-center px-4 py-2 text-sm",t?"bg-indigo-50 text-indigo-500":"text-gray-700"])},s[7]||(s[7]=[e("i",{class:"fas fa-share-alt mr-3"},null,-1),C("分享 ")]),2)]),_:1})]),_:1})]),_:1})]),_:1})])]),e("div",oe,[s[8]||(s[8]=e("h1",{class:"text-2xl font-bold text-white drop-shadow-lg md:text-3xl lg:text-4xl"}," 金华文化 ",-1)),s[9]||(s[9]=e("p",{class:"text-sm text-white/90 drop-shadow md:text-base lg:w-2/3"}," 探索金华传统文化，感受非遗魅力，传承历史记忆 ",-1)),e("div",le,[(u(),d(f,null,h(["非遗文化","历史典故","艺术表演","传统工艺"],t=>e("span",{key:t,class:"rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md"},p(t),1)),64))])])])]),e("main",ne,[e("div",{class:r(["w-full",{"lg:grid lg:grid-cols-[300px_1fr] lg:gap-8":i(c).isDesktop}])},[i(c).isDesktop?(u(),d("aside",re,[e("div",ce,[s[11]||(s[11]=e("h3",{class:"mb-4 truncate text-lg font-semibold"},"文化分类",-1)),e("div",de,[(u(),d(f,null,h(B,t=>e("button",{key:t.value,class:r(["flex min-w-0 items-center space-x-3 rounded-lg px-4 py-3 transition-all hover:bg-indigo-50",v.value===t.value?"bg-indigo-50 text-indigo-500":"text-gray-600"]),onClick:o=>v.value=t.value},[e("i",{class:r([t.icon,"w-5 flex-shrink-0"])},null,2),e("span",pe,p(t.label),1),e("span",ge,p(S(t.value)),1)],10,ue)),64))])])])):b("",!0),e("div",Ee,[i(c).isDesktop?b("",!0):(u(),d("div",me,[e("div",fe,[(u(),d(f,null,h(B,t=>e("button",{key:t.value,class:r(["inline-flex shrink-0 items-center space-x-2 rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors",y.value===t.value?"bg-indigo-500 text-white":"bg-white text-gray-600"]),onClick:o=>y.value=t.value},[e("i",{class:r(t.icon)},null,2),e("span",null,p(t.label),1)],10,he)),64))])])),e("div",{class:r(["grid gap-4 sm:gap-6 lg:gap-8",{"grid-cols-1":i(c).isMobile,"grid-cols-2":i(c).isTablet,"grid-cols-2 xl:grid-cols-3":i(c).isDesktop}])},[l(G,{name:"fade",appear:"",tag:"div",class:"contents"},{default:n(()=>[(u(!0),d(f,null,h(q.value,t=>(u(),d("div",{key:t.id,class:"group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",onClick:o=>j(t)},[e("div",ve,[e("img",{src:t.image,alt:t.title,class:"h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"},null,8,ye),s[12]||(s[12]=e("div",{class:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"},null,-1))]),e("div",Be,[e("div",be,[e("h3",we,p(t.title),1),e("span",Ae,p(L(t.category)),1)]),e("p",_e,p(t.description),1),e("div",Ce,[e("div",ke,[l(i(N),{rating:t.rating},null,8,["rating"]),e("span",De,p(t.reviews)+"条点评",1)]),e("button",{class:"transform text-gray-400 transition-all duration-300 hover:scale-110 hover:text-indigo-500",onClick:R(o=>$(t),["stop"])},[e("i",{class:r(["fas fa-heart",{"text-red-500":M(t)}])},null,2)],8,Te)])])],8,xe))),128))]),_:1})],2)])],2)]),l(i(W),{appear:"",show:x.value,as:"template"},{default:n(()=>[l(i(X),{as:"div",class:"relative z-50",onClose:F},{default:n(()=>[l(i(T),{enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>s[13]||(s[13]=[e("div",{class:"fixed inset-0 bg-black/30 backdrop-blur-sm"},null,-1)])),_:1}),e("div",Ie,[e("div",qe,[l(i(T),{enter:"duration-300 ease-out","enter-from":"opacity-0 -translate-y-4","enter-to":"opacity-100 translate-y-0",leave:"duration-200 ease-in","leave-from":"opacity-100 translate-y-0","leave-to":"opacity-0 -translate-y-4"},{default:n(()=>[l(i(Z),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all"},{default:n(()=>[e("div",ze,[H(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>g.value=t),type:"text",placeholder:"搜索文化内容...",class:"w-full rounded-lg border border-gray-200 px-4 py-2 pr-10 focus:border-indigo-500 focus:outline-none"},null,512),[[Q,g.value]]),g.value?(u(),d("button",{key:0,class:"absolute top-1/2 right-3 -translate-y-1/2 text-gray-400",onClick:s[2]||(s[2]=t=>g.value="")},s[14]||(s[14]=[e("i",{class:"fas fa-times"},null,-1)]))):b("",!0)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],2)],2))}}),Ve=U(Fe,[["__scopeId","data-v-24d57b64"]]),je="/assets/banner-Yft-5Yq8.png",Se=je,w=[{id:"1",title:"婺剧艺术",description:"浙江省非物质文化遗产，独特的地方戏曲艺术形式",detailDescription:"婺剧是流行于浙江金华及周边地区的地方戏曲剧种，具有鲜明的地方特色和艺术魅力。其表演风格细腻传神，唱腔优美动人。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E5%A9%BA%E5%89%A7%E8%A1%A8%E6%BC%94%E8%89%BA%E6%9C%AF/%E5%A9%BA%E5%89%A7-4.jpg",category:"art",rating:4.7,reviews:256,location:"金华市婺城区文化中心",openTime:"周二至周日 9:00-17:00",price:"50-180元/场",contact:"0579-82168888",recommendIndex:5,features:["传统戏曲","地方特色","文化展演"],yearEstablished:1956},{id:"2",title:"东阳木雕",description:"国家级非物质文化遗产，精湛的传统雕刻工艺",detailDescription:"东阳木雕是中国传统雕刻艺术的代表之一，以其精湛的技艺和丰富的文化内涵著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%9D%9E%E7%89%A9%E8%B4%A8%E6%96%87%E5%8C%96%E9%81%97%E4%BA%A7/%E4%B8%9C%E9%98%B3%E6%9C%A8%E9%9B%95.jpg",category:"heritage",rating:4.8,reviews:128,location:"东阳市木雕博物馆",openTime:"周一至周日 8:30-17:00",price:"30元/人",contact:"0579-86668888",recommendIndex:5,features:["传统工艺","雕刻艺术","文化遗产"],yearEstablished:1980},{id:"3",title:"金华火腿文化",description:"中国四大火腿之一，承载着深厚的饮食文化历史",detailDescription:"金华火腿是中国传统名产，以其独特的制作工艺和美味的口感闻名。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%9D%9E%E7%89%A9%E8%B4%A8%E6%96%87%E5%8C%96%E9%81%97%E4%BA%A7/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF%E8%85%8C%E5%88%B6%E6%8A%80%E8%89%BA.jpg",category:"history",rating:4.5,reviews:98,location:"金华市火腿博物馆",openTime:"周二至周日 9:00-16:30",price:"20元/人",contact:"0579-82368888",recommendIndex:4,features:["传统美食","文化传承","历史悠久"],yearEstablished:1995},{id:"4",title:"婺州瓷器",description:"明清时期著名瓷器产地，工艺精湛，风格独特",detailDescription:"婺州瓷器是浙江省金华市的传统工艺品，以其精湛的技艺和独特的风格著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%9D%9E%E7%89%A9%E8%B4%A8%E6%96%87%E5%8C%96%E9%81%97%E4%BA%A7/%E5%A9%BA%E5%B7%9E%E7%AA%91%E9%99%B6%E7%93%B7%E7%83%A7%E5%88%B6%E6%8A%80%E8%89%BA.jpg",category:"heritage",rating:4.6,reviews:167,location:"金华市婺州瓷器博物馆",openTime:"周一至周日 9:00-17:00",price:"40元/人",contact:"0579-82268888",recommendIndex:5,features:["传统工艺","瓷器艺术","文化遗产"],yearEstablished:1985},{id:"5",title:"兰溪扇画",description:"传统工艺美术，融合书画艺术的扇面创作",detailDescription:"兰溪扇画是浙江省兰溪市的传统工艺美术，以其精美的扇面书画艺术著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E6%89%87%E7%94%BB.png",category:"art",rating:4.4,reviews:89,location:"兰溪市扇画博物馆",openTime:"周二至周日 9:00-16:30",price:"25元/人",contact:"0579-88768888",recommendIndex:4,features:["传统工艺","书画艺术","文化遗产"],yearEstablished:1990},{id:"6",title:"义乌南官古村",description:"历史文化名村，保存完好的明清建筑群",detailDescription:"义乌南官古村是浙江省义乌市的历史文化名村，以其保存完好的明清建筑群和丰富的历史文化内涵著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B9%89%E4%B9%8C/%E6%99%AF%E7%82%B9/%E4%B9%89%E4%B9%8C%E5%8D%97%E5%AE%98%E5%8F%A4%E6%9D%91.png",category:"history",rating:4.7,reviews:145,location:"义乌市南官古村",openTime:"全天开放",price:"免费",contact:"0579-85568888",recommendIndex:5,features:["历史建筑","文化遗产","旅游景点"],yearEstablished:1600},{id:"7",title:"浦江剪纸",description:"独具特色的民间艺术，寓意美好吉祥",detailDescription:"浦江剪纸是浙江省浦江县的传统民间艺术，以其独特的剪纸技艺和美好的寓意著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%9D%9E%E7%89%A9%E8%B4%A8%E6%96%87%E5%8C%96%E9%81%97%E4%BA%A7/%E6%B5%A6%E6%B1%9F%E5%89%AA%E7%BA%B8.jpg",category:"heritage",rating:4.5,reviews:112,location:"浦江县剪纸博物馆",openTime:"周一至周日 9:00-17:00",price:"20元/人",contact:"0579-84168888",recommendIndex:4,features:["传统工艺","剪纸艺术","文化遗产"],yearEstablished:1988},{id:"8",title:"金华山古文化",description:"道教名山，历史文化积淀深厚",detailDescription:"金华山是浙江省金华市的道教名山，以其深厚的历史文化积淀和独特的自然风光著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E5%B1%B1/%E9%87%91%E5%8D%8E%E5%B1%B1.jpg",category:"history",rating:4.8,reviews:234,location:"金华市金华山",openTime:"全天开放",price:"免费",contact:"0579-82968888",recommendIndex:5,features:["道教名山","历史文化","自然风光"],yearEstablished:1e3},{id:"9",title:"武义张灯结彩",description:"传统民俗活动，展现浓郁的地方特色",detailDescription:"武义张灯结彩是浙江省武义县的传统民俗活动，以其浓郁的地方特色和热闹的节庆氛围著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E6%AD%A6%E4%B9%89%E5%BC%A0%E7%81%AF%E7%BB%93%E5%BD%A9.png",category:"heritage",rating:4.3,reviews:78,location:"武义县张灯结彩广场",openTime:"每年正月初一至十五",price:"免费",contact:"0579-87668888",recommendIndex:4,features:["传统民俗","节庆活动","地方特色"],yearEstablished:1800},{id:"10",title:"磐安民间音乐",description:"独特的山区民间音乐艺术形式",detailDescription:"磐安民间音乐是浙江省磐安县的传统民间艺术，以其独特的山区音乐风格和丰富的文化内涵著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E7%A3%90%E5%AE%89%E6%B0%91%E9%97%B4%E9%9F%B3%E4%B9%90.png",category:"art",rating:4.4,reviews:92,location:"磐安县民间音乐博物馆",openTime:"周二至周日 9:00-16:30",price:"20元/人",contact:"0579-84868888",recommendIndex:4,features:["传统音乐","民间艺术","文化遗产"],yearEstablished:1985},{id:"11",title:"永康百工坊",description:"传统手工艺聚集地，展现工匠精神",detailDescription:"永康百工坊是浙江省永康市的传统手工艺聚集地，以其丰富的手工艺品和工匠精神著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E6%B0%B8%E5%BA%B7/%E6%99%AF%E7%82%B9/%E6%B0%B8%E5%BA%B7%E7%99%BE%E5%B7%A5%E5%9D%8A.png",category:"heritage",rating:4.6,reviews:156,location:"永康市百工坊",openTime:"周一至周日 9:00-17:00",price:"30元/人",contact:"0579-87568888",recommendIndex:5,features:["传统工艺","手工艺品","文化遗产"],yearEstablished:1990},{id:"12",title:"东阳花边",description:"精美的传统手工艺品，工艺独特",detailDescription:"东阳花边是浙江省东阳市的传统手工艺品，以其精美的工艺和独特的风格著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E4%B8%9C%E9%98%B3%E8%8A%B1%E8%BE%B9.png",category:"heritage",rating:4.5,reviews:143,location:"东阳市花边博物馆",openTime:"周一至周日 9:00-17:00",price:"25元/人",contact:"0579-86668888",recommendIndex:4,features:["传统工艺","手工艺品","文化遗产"],yearEstablished:1988},{id:"13",title:"义乌民间故事",description:"流传广泛的民间传说和历史故事",detailDescription:"义乌民间故事是浙江省义乌市的传统文化，以其丰富的民间传说和历史故事著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E4%B9%89%E4%B9%8C%E6%B0%91%E9%97%B4%E6%95%85%E4%BA%8B.png",category:"history",rating:4.2,reviews:87,location:"义乌市民间故事博物馆",openTime:"周二至周日 9:00-16:30",price:"20元/人",contact:"0579-85568888",recommendIndex:4,features:["民间传说","历史故事","文化遗产"],yearEstablished:1990},{id:"14",title:"金华皮影戏",description:"独特的民间艺术表演形式",detailDescription:"金华皮影戏是浙江省金华市的传统民间艺术表演形式，以其独特的表演风格和丰富的文化内涵著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E7%9A%AE%E5%BD%B1%E6%88%8F.png",category:"art",rating:4.6,reviews:134,location:"金华市皮影戏博物馆",openTime:"周二至周日 9:00-16:30",price:"30元/人",contact:"0579-82268888",recommendIndex:5,features:["传统表演","民间艺术","文化遗产"],yearEstablished:1985},{id:"15",title:"浦江醋文化",description:"历史悠久的传统酿造工艺",detailDescription:"浦江醋文化是浙江省浦江县的传统酿造工艺，以其悠久的历史和独特的酿造技艺著称。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%86%8B.png",category:"heritage",rating:4.7,reviews:178,location:"浦江县醋文化博物馆",openTime:"周一至周日 9:00-17:00",price:"20元/人",contact:"0579-84168888",recommendIndex:5,features:["传统酿造","文化遗产","历史悠久"],yearEstablished:1988},{id:"16",title:"金华古城墙",description:"见证金华历史变迁的城市印记",detailDescription:"金华古城墙始建于南宋时期，是江南地区保存较为完整的古城墙之一，全长约6公里，体现了古代军事防御建筑的特点。",image:"https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E5%8F%A4%E5%9F%8E%E5%A2%99.png",category:"history",rating:4.9,reviews:267,location:"金华市婺城区城隍头街道",openTime:"全天开放",price:"免费",contact:"0579-82166666",recommendIndex:5,features:["古迹","城市地标","历史遗迹"],yearEstablished:1208,preservationLevel:"省级文物保护单位",tourDuration:"建议游览2小时"}];export{Se as Banner,w as culturalNotes,Ve as default};
