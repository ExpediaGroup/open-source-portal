(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{60:function(e,a,n){"use strict";n.r(a);var r,t=n(3),o=n(132),l=n(0),i=n.n(l),c=n(67),m=n(133),p=n.n(m),s=n(114),u=n(20),E=n(61),d=n.n(E),w=n(134),h=new w.ApolloClient({link:new w.HttpLink({uri:"https://api.github.com/graphql",fetch:p.a,headers:{Authorization:"bearer PUT YOUR GITHUB TOKEN HERE"}}),cache:new w.InMemoryCache}),f=Object(w.gql)(r||(r=Object(o.a)(["\n  query ($owner: String!, $name: String!) {\n    repository(owner: $owner, name: $name) {\n      name\n      description\n      openGraphImageUrl\n    }\n  }\n"]))),g=[{owner:"ExpediaGroup",name:"apiary"},{owner:"ExpediaGroup",name:"beekeeper"},{owner:"ExpediaGroup",name:"catalyst-render"},{owner:"ExpediaGroup",name:"catalyst-server"},{owner:"ExpediaGroup",name:"dr-shadow"},{owner:"ExpediaGroup",name:"drone-fly"},{owner:"ExpediaGroup",name:"flyte"},{owner:"ExpediaGroup",name:"fpsmeter"},{owner:"ExpediaGroup",name:"graphql-component"},{owner:"ExpediaGroup",name:"graphql-kotlin"},{owner:"ExpediaDotCom",name:"haystack"}];function b(){return i.a.createElement("section",{className:d.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},g.map((function(e,a){return i.a.createElement(y,Object(t.a)({key:a},e))})))))}function y(e){var a=e.owner,n=e.name,r=Object(w.useQuery)(f,{variables:{owner:a,name:n}}),t=r.loading,o=r.error,l=r.data;if(t)return i.a.createElement("p",null,"Loading...");if(o)return i.a.createElement("p",null,"Error: ",JSON.stringify(o));var m=l.repository;return i.a.createElement("div",{className:Object(c.a)("col col--4",d.a.feature)},i.a.createElement("div",{className:"text--center"},i.a.createElement("img",{className:d.a.featureImage,src:m.openGraphImageUrl,alt:m.name})),i.a.createElement("h3",null,m.name),i.a.createElement("p",null,m.description))}a.default=function(){var e=Object(u.default)().siteConfig;return i.a.createElement(s.a,{title:e.title,description:e.tagline},i.a.createElement("header",{className:Object(c.a)("hero hero--primary",d.a.heroBanner)},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"hero__title"},e.title),i.a.createElement("p",{className:"hero__subtitle"},e.tagline))),i.a.createElement("main",null,i.a.createElement(w.ApolloProvider,{client:h},i.a.createElement(b,null))))}}}]);