(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,a){"use strict";var r=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var n=a(0);t.default=function(e){var t=e.src,a=e.checkForExisting,o=void 0!==a&&a,c=r(e,["src","checkForExisting"]),s=n.useState(Boolean(t)),l=s[0],m=s[1],d=n.useState(null),p=d[0],u=d[1];return n.useEffect((function(){if(i&&t){if(o)if(document.querySelectorAll('script[src="'+t+'"]').length>0)return void m(!1);var e=document.createElement("script");e.setAttribute("src",t),Object.keys(c).forEach((function(t){void 0===e[t]?e.setAttribute(t,c[t]):e[t]=c[t]}));var a=function(){m(!1)},r=function(e){u(e)};return e.addEventListener("load",a),e.addEventListener("error",r),document.body.appendChild(e),function(){e.removeEventListener("load",a),e.removeEventListener("error",r)}}}),[t]),[l,p]};var i="undefined"!=typeof window&&void 0!==window.document},69:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(71),o=a(82),c=a(15),s=a(62),l=a.n(s),m=a(99),d=a(3),p=a(63),u=a.n(p),f=a(64),g=a.n(f);var h=function(e){var t=e.link;return n.a.createElement("a",{href:t,target:"_blank"},n.a.createElement("svg",{className:g.a.arrowImage,viewBox:"0 0 7.3365 3.9447"},n.a.createElement("g",{transform:"translate(22.946 -57.633)"},n.a.createElement("path",{d:"m-18.159 57.65a0.086607 0.086607 0 0 0-0.12092 0.01705 0.086607 0.086607 0 0 0 0.01757 0.12144l2.2975 1.7224h-6.8947a0.086607 0.086607 0 0 0-0.08682 0.08682 0.086607 0.086607 0 0 0 0.08682 0.0863h6.9117l-2.3146 1.7368a0.086607 0.086607 0 0 0-0.01757 0.12144 0.086607 0.086607 0 0 0 0.06615 0.03514 0.086607 0.086607 0 0 0 0.05529-0.01705l2.5141-1.8872a0.086616 0.086616 0 0 0 0-0.13849zm2.3136 1.9503 0.0047 0.0036-0.03256 0.02429a0.086607 0.086607 0 0 0 0.02791-0.02791z"}))))};function b(e){var t=e.name,a=e.description,r=e.imageUrl,o=e.repoUrl;return n.a.createElement("div",{className:Object(i.a)("col col--4",u.a.repository)},n.a.createElement("div",{className:"text--center"},n.a.createElement("a",{href:o,target:"_blank"},n.a.createElement("img",{className:u.a.repositoryImage,src:r,alt:t}))),n.a.createElement("div",{className:u.a.repositoryTitle},n.a.createElement("a",{href:o,target:"_blank"},n.a.createElement("h3",null,t)),n.a.createElement(h,{link:o})),n.a.createElement("p",{className:u.a.repositoryDescription},a))}function v(e){var t=e.text,a=e.link;return n.a.createElement("a",{className:Object(i.a)("button button--primary",u.a.exploreMore),href:a,target:"_blank"},t)}var E=function(e){var t=e.reposData,a=e.reposConfig;return n.a.createElement("section",{className:u.a.repositoriesSection},n.a.createElement("div",{className:Object(i.a)("container",u.a.repositoriesContainer)},n.a.createElement("div",{className:"row"},t.map((function(e){return n.a.createElement(b,Object(d.a)({key:e.name},e))})))),n.a.createElement(v,{text:a.exploreMoreText,link:a.allReposLink}))},y=a(65),k=a.n(y),w=a(81),N=a.n(w);var x=function(e){var t=e.twitterLink;return N()({src:"https://platform.twitter.com/widgets.js"}),n.a.createElement("div",null,n.a.createElement("a",{className:"twitter-timeline",href:t,"data-height":"525","data-chrome":"noheader nofooter"},n.a.createElement("h3",null,"Loading tweets..")))},O=a(66),j=a.n(O);var U=function(e){var t=e.link;return N()({src:"https://medium-widget.pixelpoint.io/widget.js",onload:function(){MediumWidget.Init({renderTo:"."+j.a.mediumWidgetPosts,params:{resource:""+t,postsPerLine:1,limit:10,picture:"small",fields:["description","author","publishAt"],ratio:"square"}})}}),n.a.createElement("div",{className:j.a.mediumWidget},n.a.createElement("div",{className:j.a.mediumWidgetPosts},n.a.createElement("h3",null,"Loading posts..")))},_=a(67),C=a.n(_);var L=function(e){var t=e.title;return n.a.createElement("div",{className:C.a.socialHeader},n.a.createElement("h1",null,t))},S=a(68),G=a.n(S);var A=function(e){var t=e.text,a=e.link;return n.a.createElement("div",{className:G.a.socialFooter},n.a.createElement("p",null,t),n.a.createElement(h,{link:a}))},B=a.p+"assets/images/careers-c3b09f03295d4898cfcc83801b133ee2.jpg";var P=function(e){var t=e.socialConfig;return n.a.createElement("section",{className:k.a.social},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--4"},n.a.createElement("div",{className:k.a.socialColumn},n.a.createElement("div",{className:k.a.socialHeaderAndBody},n.a.createElement(L,{title:t.blog.title}),n.a.createElement("div",{className:k.a.socialBody},n.a.createElement(U,{link:t.blog.link}))),n.a.createElement(A,{text:t.blog.footerText,link:t.blog.link}))),n.a.createElement("div",{className:"col col--4"},n.a.createElement("div",{className:k.a.socialColumn},n.a.createElement("div",{className:k.a.socialHeaderAndBody},n.a.createElement(L,{title:t.careers.title}),n.a.createElement("div",{className:k.a.socialBody},n.a.createElement("a",{href:t.careers.link,target:"_blank"},n.a.createElement("img",{className:k.a.careersImage,src:B,alt:t.careers.title})))),n.a.createElement(A,{text:t.careers.footerText,link:t.careers.link}))),n.a.createElement("div",{className:"col col--4"},n.a.createElement("div",{className:k.a.socialColumn},n.a.createElement("div",{className:k.a.socialHeaderAndBody},n.a.createElement(L,{title:t.twitter.title}),n.a.createElement("div",{className:k.a.socialBody},n.a.createElement(x,{twitterLink:t.twitter.link}))),n.a.createElement(A,{text:t.twitter.footerText,link:t.twitter.link}))))))};t.default=function(){var e=Object(c.default)().siteConfig,t=e.customFields,a=t.heroConfig,r=t.repositoriesConfig,s=t.socialConfig;return n.a.createElement(o.a,{title:e.title,description:e.tagline},n.a.createElement("header",{className:Object(i.a)("hero hero--primary",l.a.heroBanner)},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:Object(i.a)("hero__title",l.a.heroTitle)},a.title),n.a.createElement("p",{className:Object(i.a)("hero__subtitle",l.a.heroSubtitle)},a.subtitle))),n.a.createElement("main",null,n.a.createElement(E,{reposData:m,reposConfig:r}),n.a.createElement(P,{socialConfig:s})))}},81:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(100);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}})},99:function(e){e.exports=JSON.parse('[{"name":"apiary","description":"Apiary provides modules which can be combined to create a federated cloud data lake","imageUrl":"https://repository-images.githubusercontent.com/128752984/e774bf00-80c6-11eb-88db-337cf4a24fda","repoUrl":"https://github.com/ExpediaGroup/apiary"},{"name":"beekeeper","description":"Service for automatically managing and cleaning up unreferenced data","imageUrl":"https://repository-images.githubusercontent.com/200810412/100eb900-76c4-11eb-991a-1ebaec51af11","repoUrl":"https://github.com/ExpediaGroup/beekeeper"},{"name":"drone-fly","description":"A service which allows Hive Metastore Listeners to be deployed outside of the Hive Metastore Service","imageUrl":"https://repository-images.githubusercontent.com/279279234/15f29a00-80c7-11eb-8cb4-11daa9f550e9","repoUrl":"https://github.com/ExpediaGroup/drone-fly"},{"name":"flyte","description":"Flyte binds together the tools you use into easily defined, automated workflows","imageUrl":"https://repository-images.githubusercontent.com/129653023/73858c80-9216-11eb-8c14-f87c97aa8bad","repoUrl":"https://github.com/ExpediaGroup/flyte"},{"name":"fpsmeter","description":"Optimized javascript utility for measuring frames per second in a browser environment. Useful for observing end-user client run-time performance without adversly impacting performance.","imageUrl":"https://avatars.githubusercontent.com/u/38541875?s=400&v=4","repoUrl":"https://github.com/ExpediaGroup/fpsmeter"},{"name":"graphql-kotlin","description":"Libraries for running GraphQL in Kotlin","imageUrl":"https://repository-images.githubusercontent.com/148706161/542afb00-3ebf-11ea-9aec-6bc282c8bd3a","repoUrl":"https://github.com/ExpediaGroup/graphql-kotlin"},{"name":"jenkins-spock","description":"Unit-test Jenkins pipeline code with Spock","imageUrl":"https://avatars.githubusercontent.com/u/38541875?s=400&v=4","repoUrl":"https://github.com/ExpediaGroup/jenkins-spock"},{"name":"pitchfork","description":"Convert tracing data between Zipkin and Haystack formats","imageUrl":"https://repository-images.githubusercontent.com/153086272/a8143080-6ea7-11e9-9205-99177e5c524a","repoUrl":"https://github.com/ExpediaGroup/pitchfork"},{"name":"stream-registry","description":"Stream Discovery and Stream Orchestration","imageUrl":"https://repository-images.githubusercontent.com/159537834/eca8ed80-65c4-11e9-9920-6734cb2355c8","repoUrl":"https://github.com/ExpediaGroup/stream-registry"}]')}}]);