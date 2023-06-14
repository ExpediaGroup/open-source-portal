"use strict";(self.webpackChunkexpediagroup_github_io=self.webpackChunkexpediagroup_github_io||[]).push([[195],{5338:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var r=a(7294),i=a(6932),n=a(2263),o=a(3968);const c="heroBanner_Gb1t";var s=a(6447),l=a(1711),m=a(7157),d=a(5461),u=a(9477);const p=(new m.J).parse(d);(0,s.l7)({TextGeometry:l.M});const g=function(e){let{text:t,size:a=1,color:i="black",positionY:n=0,stopAfterLoops:o=4}=e;const c=(0,r.useRef)(),[l,m]=(0,r.useState)(0),[d,g]=(0,r.useState)({direction:!1,count:0,active:!0}),{invalidate:f}=(0,s.Ky)();(0,r.useEffect)((()=>m(-function(e){var t,a,r;null==e||null==(t=e.geometry)||t.computeBoundingBox();const i=new u.Vector3;return null==e||null==(a=e.geometry)||null==(r=a.boundingBox)||r.getSize(i),i.x}(c.current)/2)),[]),(0,s.xQ)((()=>{if(d.active){f();const e=performance.now(),t=Math.sin(.001*e)+n,a=c.current.position.y;c.current.position.y=t,h(a,t)}}));const h=(e,t)=>{const a=t-e;if(a>=0&&d.direction||a<0&&!d.direction){const e=!d.direction,t=d.count+1;g({direction:e,count:t,active:t<=o})}};return r.createElement("mesh",{ref:c,position:[l,n,0]},r.createElement("textGeometry",{args:[t,{font:p,size:a,height:.15}]}),r.createElement("meshStandardMaterial",{color:i}))};var f=a(1104),h=a(3660);(0,s.l7)({Water:h.B});const E=function(e){let{sunDirection:t=new u.Vector3}=e;const a=(0,r.useRef)(),i=(0,s.Ky)((e=>e.gl)),n=(0,s.U2)(u.TextureLoader,"/img/waternormals.jpg");n.wrapS=n.wrapT=u.RepeatWrapping;const o=(0,r.useMemo)((()=>new u.PlaneGeometry(1e4,1e4)),[]),c=(0,r.useMemo)((()=>({textureWidth:512,textureHeight:512,waterNormals:n,sunDirection:t,sunColor:16777215,waterColor:1618851,distortionScale:1,fog:!1,format:i.encoding})),[n]);return(0,s.xQ)(((e,t)=>a.current.material.uniforms.time.value+=t/3)),r.createElement("water",{ref:a,args:[o,c],"rotation-x":-Math.PI/2})};const x=function(){const e=(0,r.useMemo)((()=>{const e=u.MathUtils.degToRad(89.9),t=u.MathUtils.degToRad(130),a=new u.Vector3;return a.setFromSphericalCoords(1,e,t),a}));return r.createElement(r.Suspense,{fallback:null},r.createElement(E,{sunDirection:e}),r.createElement(f.q,{scale:1e4,sunPosition:e,turbidity:10,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8}))},v=[0,2,9],k="rgb(0, 0, 153)";const b=function(e){let{title:t,subtitle:a}=e;return r.createElement("header",{className:c},r.createElement(s.Xz,{camera:{position:v,far:50},dpr:[1,2],frameloop:"demand"},r.createElement(x,null),r.createElement("pointLight",{position:v,intensity:2}),r.createElement(g,{text:t,size:1.5,color:k,positionY:2,stopAfterLoops:2}),r.createElement(g,{text:a,size:1,color:k,positionY:0,stopAfterLoops:2})))};var w=a(5385),N=a(4387);const y="social_k8ol",U="socialColumn_omUb",_="socialHeaderAndBody_TxKv",C="socialBody_oQsG",M="careersImage_rXQC";var S=a(3054),T=a.n(S);const A=function(e){let{twitterLink:t}=e;return T()({src:"https://platform.twitter.com/widgets.js"}),r.createElement("div",null,r.createElement("a",{className:"twitter-timeline",href:t,"data-height":"525","data-chrome":"noheader nofooter"},r.createElement("h3",null,"Loading tweets..")))},L="posts_DFiM",O="post_Xcxy",B="postImageColumn_hkdq",D="postDetailColumn_xYOL",F="postTitle_OYlL",G="postCreationInfo_LoK2",H="creator_Eou_",J="date_kSbf";function R(e){let{post:t}=e;return r.createElement("div",{className:O},r.createElement("div",{className:B},r.createElement("a",{href:t.link,target:"_blank"},r.createElement("img",{src:t.imageUrl}))),r.createElement("div",{className:D},r.createElement("div",{className:F},r.createElement("a",{href:t.link,target:"_blank"},r.createElement("h4",null,t.title))),r.createElement("div",{className:G},r.createElement("span",{className:H},t.creator),r.createElement("span",{className:J},t.date))))}const z=function(e){let{posts:t}=e;return r.createElement("div",{className:L},t.map((e=>r.createElement(R,{key:e.title,post:e}))))},Y=JSON.parse('[{"title":"Understanding Real-Time Application Monitoring","creator":"Ritesh Kapoor","link":"https://medium.com/expedia-group-tech/essential-application-monitoring-metrics-a08519ecab9d?source=rss----38998a53046f---4","date":"Jun 13, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*MB_t_dcoAS72giYj"},{"title":"Generating Diverse Travel Recommendations","creator":"Lucy (Jingyu) Zou","link":"https://medium.com/expedia-group-tech/generating-diverse-travel-recommendations-76688f49c812?source=rss----38998a53046f---4","date":"May 25, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*GY4MHmSq6OYsZlqp"},{"title":"Using Terraform to Provision Spinnaker on Kubernetes","creator":"Manoj Tiwari","link":"https://medium.com/expedia-group-tech/installing-spinnaker-in-the-cloud-c7f518c98dc1?source=rss----38998a53046f---4","date":"May 9, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*jDc12QyCDNHyfk88"},{"title":"How Expedia Reviews Engineering Is Using Event Streams as a Source Of Truth","creator":"Ritesh Kapoor","link":"https://medium.com/expedia-group-tech/how-expedia-reviews-engineering-is-using-event-streams-as-a-source-of-truth-d3df616cccd8?source=rss----38998a53046f---4","date":"Apr 25, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*eZcUC0BVcFIvGOS-"},{"title":"Marketing Attribution","creator":"Emily Cai","link":"https://medium.com/expedia-group-tech/marketing-attribution-f76ac15c804e?source=rss----38998a53046f---4","date":"Apr 11, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*8zJlAyoLA0POoXAw"},{"title":"How to Size For Online Experiments With Ratio Metrics","creator":"Wenkai Bao","link":"https://medium.com/expedia-group-tech/how-to-size-for-online-experiments-with-ratio-metrics-3d57362f1967?source=rss----38998a53046f---4","date":"Mar 28, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*Wwf6mBPmQ3LUs3b5"},{"title":"Unified Machine Learning Platform at Expedia Group","creator":"Hisham Mohamed","link":"https://medium.com/expedia-group-tech/unified-machine-learning-platform-at-expedia-group-5aee72606c74?source=rss----38998a53046f---4","date":"Mar 14, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*xeYUOCxXz4I6UkyO"},{"title":"Market Segmentation for Geo-Testing at Scale","creator":"Jasmine Holdsworth","link":"https://medium.com/expedia-group-tech/market-segmentation-for-geo-testing-at-scale-8d593e0aa755?source=rss----38998a53046f---4","date":"Feb 28, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/1*APmjOEcsH59wxjrDC3b43g.jpeg"},{"title":"Four Key Differences Between \u201cOnline Travel\u201d and \u201cOnline Shopping\u201d E-commerce","creator":"John James","link":"https://medium.com/expedia-group-tech/four-key-differences-between-online-travel-and-online-shopping-e-commerce-8512cc47b0bf?source=rss----38998a53046f---4","date":"Feb 14, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*pi3qo8rWH35Y1S8J"},{"title":"Creating a More Sustainable and Accessible Future for Travelers","creator":"Aditi Mohapatra","link":"https://medium.com/expedia-group-tech/creating-a-more-sustainable-and-accessible-future-for-travelers-3f1f60b36e83?source=rss----38998a53046f---4","date":"Jan 31, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*qWtCVTl64UroqKcr"}]'),j="socialHeader_Sy3J";const K=function(e){let{title:t}=e;return r.createElement("div",{className:j},r.createElement("h1",null,t))},P="socialFooter_fNQX";var W=a(4823);const Z=function(e){let{text:t,link:a}=e;return r.createElement("div",{className:P},r.createElement("p",null,t),r.createElement(W.Z,{link:a}))},q=a.p+"assets/images/careers-c3b09f03295d4898cfcc83801b133ee2.jpg";const I=function(e){let{socialConfig:t}=e;return r.createElement("section",{className:y},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--4"},r.createElement("div",{className:U},r.createElement("div",{className:_},r.createElement(K,{title:t.blog.title}),r.createElement("div",{className:C},r.createElement(z,{posts:Y}))),r.createElement(Z,{text:t.blog.footerText,link:t.blog.link}))),r.createElement("div",{className:"col col--4"},r.createElement("div",{className:U},r.createElement("div",{className:_},r.createElement(K,{title:t.careers.title}),r.createElement("div",{className:C},r.createElement("a",{href:t.careers.link,target:"_blank"},r.createElement("img",{className:M,src:q,alt:t.careers.title})))),r.createElement(Z,{text:t.careers.footerText,link:t.careers.link}))),r.createElement("div",{className:"col col--4"},r.createElement("div",{className:U},r.createElement("div",{className:_},r.createElement(K,{title:t.twitter.title}),r.createElement("div",{className:C},r.createElement(A,{twitterLink:t.twitter.link}))),r.createElement(Z,{text:t.twitter.footerText,link:t.twitter.link}))))))};const Q=function(){const e=(0,n.Z)(),{siteConfig:t}=e,{heroConfig:a,repositoriesConfig:c,socialConfig:s}=t.customFields;return r.createElement(i.Z,{title:t.title,description:t.tagline},a.hero3d.enabled?r.createElement(b,{title:a.hero3d.title,subtitle:a.hero3d.subtitle}):r.createElement(o.Z,{title:a.hero2d.title,subtitle:a.hero2d.subtitle,imageUrl:a.hero2d.imageUrl}),r.createElement("main",null,r.createElement(N.Z,{reposData:w,reposConfig:c,showOnlyFeatured:!0}),r.createElement(I,{socialConfig:s})))}}}]);