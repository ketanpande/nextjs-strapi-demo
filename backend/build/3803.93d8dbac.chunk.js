"use strict";(self.webpackChunkmyshop_strapi=self.webpackChunkmyshop_strapi||[]).push([[3803],{63803:(W,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var a=_(92132),P=_(91271),n=_(17209),A=_(21272),C=_(55506),R=_(14718),i=_(37754),U=_(55151),v=_(79077),B=_(18920),t=_(15126),l=_(63299),L=_(67014),I=_(59080),d=_(79275),O=_(82437),T=_(61535),o=_(5790),E=_(12083),M=_(35223),K=_(5409),D=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(56336),S=_(13426),y=_(84624),j=_(77965),N=_(54257),H=_(71210),x=_(51187),F=_(39404),G=_(58692),V=_(501),$=_(57646),z=_(23120),X=_(44414),c=_(25962),Q=_(14664),Y=_(42588),Z=_(90325),e=_(62785),J=_(87443),u=_(41032),p=_(22957),k=_(93179),w=_(73055),b=_(15747),q=_(85306),__=_(26509),E_=_(32058),t_=_(81185),s_=_(82261),O_=_(49782),o_=_(67031);const m=()=>((0,n.u)(),(0,a.jsx)(P.HomePageCE,{}))},17209:(W,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),P=_(55506),n=_(67031),A=_(54894),C=_(17703),R=_(18920);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:I}=(0,R.m)(),d=(0,P.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:o,licenseLimitStatus:E,isHostedOnStrapiCloud:M}=l??{};a.useEffect(()=>{if(L||I)return;const K=!n(o)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let D;E==="OVER_LIMIT"?D="warning":E==="AT_LIMIT"&&(D="softWarning"),K&&d({type:D,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:o}),link:{url:M?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:M})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,o,E,T,M,L])}}}]);
