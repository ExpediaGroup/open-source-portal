"use strict";(self.webpackChunkexpediagroup_github_io=self.webpackChunkexpediagroup_github_io||[]).push([[195],{5338:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var r=a(7294),i=a(6932),n=a(2263),c=a(3968);const o="heroBanner_Gb1t";var l=a(6447),s=a(1711),m=a(7157),u=a(5461),d=a(9477);const p=(new m.J).parse(u);(0,l.l7)({TextGeometry:s.M});const g=function(e){let{text:t,size:a=1,color:i="black",positionY:n=0,stopAfterLoops:c=4}=e;const o=(0,r.useRef)(),[s,m]=(0,r.useState)(0),[u,g]=(0,r.useState)({direction:!1,count:0,active:!0}),{invalidate:h}=(0,l.Ky)();(0,r.useEffect)((()=>m(-function(e){var t,a,r;null==e||null==(t=e.geometry)||t.computeBoundingBox();const i=new d.Vector3;return null==e||null==(a=e.geometry)||null==(r=a.boundingBox)||r.getSize(i),i.x}(o.current)/2)),[]),(0,l.xQ)((()=>{if(u.active){h();const e=performance.now(),t=Math.sin(.001*e)+n,a=o.current.position.y;o.current.position.y=t,f(a,t)}}));const f=(e,t)=>{const a=t-e;if(a>=0&&u.direction||a<0&&!u.direction){const e=!u.direction,t=u.count+1;g({direction:e,count:t,active:t<=c})}};return r.createElement("mesh",{ref:o,position:[s,n,0]},r.createElement("textGeometry",{args:[t,{font:p,size:a,height:.15}]}),r.createElement("meshStandardMaterial",{color:i}))};var h=a(1104),f=a(3660);(0,l.l7)({Water:f.B});const E=function(e){let{sunDirection:t=new d.Vector3}=e;const a=(0,r.useRef)(),i=(0,l.Ky)((e=>e.gl)),n=(0,l.U2)(d.TextureLoader,"/img/waternormals.jpg");n.wrapS=n.wrapT=d.RepeatWrapping;const c=(0,r.useMemo)((()=>new d.PlaneGeometry(1e4,1e4)),[]),o=(0,r.useMemo)((()=>({textureWidth:512,textureHeight:512,waterNormals:n,sunDirection:t,sunColor:16777215,waterColor:1618851,distortionScale:1,fog:!1,format:i.encoding})),[n]);return(0,l.xQ)(((e,t)=>a.current.material.uniforms.time.value+=t/3)),r.createElement("water",{ref:a,args:[c,o],"rotation-x":-Math.PI/2})};const v=function(){const e=(0,r.useMemo)((()=>{const e=d.MathUtils.degToRad(89.9),t=d.MathUtils.degToRad(130),a=new d.Vector3;return a.setFromSphericalCoords(1,e,t),a}));return r.createElement(r.Suspense,{fallback:null},r.createElement(E,{sunDirection:e}),r.createElement(h.q,{scale:1e4,sunPosition:e,turbidity:10,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8}))},x=[0,2,9],k="rgb(0, 0, 153)";const b=function(e){let{title:t,subtitle:a}=e;return r.createElement("header",{className:o},r.createElement(l.Xz,{camera:{position:x,far:50},dpr:[1,2],frameloop:"demand"},r.createElement(v,null),r.createElement("pointLight",{position:x,intensity:2}),r.createElement(g,{text:t,size:1.5,color:k,positionY:2,stopAfterLoops:2}),r.createElement(g,{text:a,size:1,color:k,positionY:0,stopAfterLoops:2})))};var w=a(5385),y=a(4387);const N="social_k8ol",_="socialColumn_omUb",C="socialHeaderAndBody_TxKv",M="socialBody_oQsG",S="careersImage_rXQC";var U=a(3054),T=a.n(U);const A=function(e){let{twitterLink:t}=e;return T()({src:"https://platform.twitter.com/widgets.js"}),r.createElement("div",null,r.createElement("a",{className:"twitter-timeline",href:t,"data-height":"525","data-chrome":"noheader nofooter"},r.createElement("h3",null,"Loading tweets..")))},J="posts_DFiM",L="post_Xcxy",R="postImageColumn_hkdq",D="postDetailColumn_xYOL",K="postTitle_OYlL",G="postCreationInfo_LoK2",O="creator_Eou_",P="date_kSbf";function Z(e){let{post:t}=e;return r.createElement("div",{className:L},r.createElement("div",{className:R},r.createElement("a",{href:t.link,target:"_blank"},r.createElement("img",{src:t.imageUrl}))),r.createElement("div",{className:D},r.createElement("div",{className:K},r.createElement("a",{href:t.link,target:"_blank"},r.createElement("h4",null,t.title))),r.createElement("div",{className:G},r.createElement("span",{className:O},t.creator),r.createElement("span",{className:P},t.date))))}const j=function(e){let{posts:t}=e;return r.createElement("div",{className:J},t.map((e=>r.createElement(Z,{key:e.title,post:e}))))},B=JSON.parse('[{"title":"Creating Shareable Experiences in the Tech World","creator":"Tanvi Johari","link":"https://medium.com/expedia-group-tech/creating-shareable-experiences-in-the-tech-world-cef196fdb95?source=rss----38998a53046f---4","date":"Jul 21, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*ic85DtvFOhy5aEAQ"},{"title":"Unlocking the Value of AI and Generative AI in Travel","creator":"Rathi Murthy","link":"https://medium.com/expedia-group-tech/unlocking-the-value-of-ai-and-generative-ai-in-travel-2994712d0a0?source=rss----38998a53046f---4","date":"Jul 17, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*fv0-2Fb-Ebxqc0Q_"},{"title":"Demystifying Technical Program Management in Data Science at Expedia Group","creator":"Simple Wadhwa","link":"https://medium.com/expedia-group-tech/demystifying-technical-program-management-in-data-science-at-expedia-group-b068d1fd01b0?source=rss----38998a53046f---4","date":"Jul 13, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*R3gwP-V1cPK5jggZ"},{"title":"Karmada A Multi-Cloud, Multi-Cluster Kubernetes Orchestration: Part-2","creator":"Rajatporwal","link":"https://medium.com/expedia-group-tech/karmada-a-multi-cloud-multi-cluster-kubernetes-orchestration-part-2-1a55f9c22cf5?source=rss----38998a53046f---4","date":"Jun 27, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*5xd2ZW3IynSJ7uze"},{"title":"Karmada A Multi-Cloud, Multi-Cluster Kubernetes Orchestration: Part-1","creator":"Rajatporwal","link":"https://medium.com/expedia-group-tech/karmada-a-multi-cloud-multi-cluster-kubernetes-orchestration-part-1-c53f13c263e5?source=rss----38998a53046f---4","date":"Jun 20, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*YyJdcNJKLX-VsSGh"},{"title":"Understanding Real-Time Application Monitoring","creator":"Ritesh Kapoor","link":"https://medium.com/expedia-group-tech/essential-application-monitoring-metrics-a08519ecab9d?source=rss----38998a53046f---4","date":"Jun 13, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*MB_t_dcoAS72giYj"},{"title":"Generating Diverse Travel Recommendations","creator":"Lucy (Jingyu) Zou","link":"https://medium.com/expedia-group-tech/generating-diverse-travel-recommendations-76688f49c812?source=rss----38998a53046f---4","date":"May 25, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*GY4MHmSq6OYsZlqp"},{"title":"Using Terraform to Provision Spinnaker on Kubernetes","creator":"Manoj Tiwari","link":"https://medium.com/expedia-group-tech/installing-spinnaker-in-the-cloud-c7f518c98dc1?source=rss----38998a53046f---4","date":"May 9, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*jDc12QyCDNHyfk88"},{"title":"How Expedia Reviews Engineering Is Using Event Streams as a Source Of Truth","creator":"Ritesh Kapoor","link":"https://medium.com/expedia-group-tech/how-expedia-reviews-engineering-is-using-event-streams-as-a-source-of-truth-d3df616cccd8?source=rss----38998a53046f---4","date":"Apr 25, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*eZcUC0BVcFIvGOS-"},{"title":"Marketing Attribution","creator":"Emily Cai","link":"https://medium.com/expedia-group-tech/marketing-attribution-f76ac15c804e?source=rss----38998a53046f---4","date":"Apr 11, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*8zJlAyoLA0POoXAw"}]'),I="socialHeader_Sy3J";const Y=function(e){let{title:t}=e;return r.createElement("div",{className:I},r.createElement("h1",null,t))},z="socialFooter_fNQX";var F=a(4823);const Q=function(e){let{text:t,link:a}=e;return r.createElement("div",{className:z},r.createElement("p",null,t),r.createElement(F.Z,{link:a}))},V=a.p+"assets/images/careers-c3b09f03295d4898cfcc83801b133ee2.jpg";const H=function(e){let{socialConfig:t}=e;return r.createElement("section",{className:N},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--4"},r.createElement("div",{className:_},r.createElement("div",{className:C},r.createElement(Y,{title:t.blog.title}),r.createElement("div",{className:M},r.createElement(j,{posts:B}))),r.createElement(Q,{text:t.blog.footerText,link:t.blog.link}))),r.createElement("div",{className:"col col--4"},r.createElement("div",{className:_},r.createElement("div",{className:C},r.createElement(Y,{title:t.careers.title}),r.createElement("div",{className:M},r.createElement("a",{href:t.careers.link,target:"_blank"},r.createElement("img",{className:S,src:V,alt:t.careers.title})))),r.createElement(Q,{text:t.careers.footerText,link:t.careers.link}))),r.createElement("div",{className:"col col--4"},r.createElement("div",{className:_},r.createElement("div",{className:C},r.createElement(Y,{title:t.twitter.title}),r.createElement("div",{className:M},r.createElement(A,{twitterLink:t.twitter.link}))),r.createElement(Q,{text:t.twitter.footerText,link:t.twitter.link}))))))};const W=function(){const e=(0,n.Z)(),{siteConfig:t}=e,{heroConfig:a,repositoriesConfig:o,socialConfig:l}=t.customFields;return r.createElement(i.Z,{title:t.title,description:t.tagline},a.hero3d.enabled?r.createElement(b,{title:a.hero3d.title,subtitle:a.hero3d.subtitle}):r.createElement(c.Z,{title:a.hero2d.title,subtitle:a.hero2d.subtitle,imageUrl:a.hero2d.imageUrl}),r.createElement("main",null,r.createElement(y.Z,{reposData:w,reposConfig:o,showOnlyFeatured:!0}),r.createElement(H,{socialConfig:l})))}}}]);