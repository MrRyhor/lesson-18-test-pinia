"use strict";(self["webpackChunktask_pinia"]=self["webpackChunktask_pinia"]||[]).push([[977],{977:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var i=n(3396);const s=e=>((0,i.dD)("data-v-67984711"),e=e(),(0,i.Cn)(),e),l={class:"asignments-container"},a=s((()=>(0,i._)("h1",null,"Asignments list:",-1)));function d(e,t,n,s,d,o){const c=(0,i.up)("asignments-list"),m=(0,i.up)("asignments-select"),u=(0,i.up)("main-master-page");return(0,i.wg)(),(0,i.j4)(u,null,{default:(0,i.w5)((()=>[(0,i._)("div",l,[a,(0,i.Wm)(c),(0,i.Wm)(m)])])),_:1})}var o=n(8642),c=n(7139);const m=e=>((0,i.dD)("data-v-53b6811d"),e=e(),(0,i.Cn)(),e),u={key:0},r=m((()=>(0,i._)("div",null,"--",-1))),g={key:1,class:"no-results"},v=m((()=>(0,i._)("h1",null,"No Results",-1))),f=[v];function _(e,t,n,s,l,a){const d=(0,i.up)("v-btn");return e.getAsignmentsList.length?((0,i.wg)(),(0,i.iD)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.getAsignmentsList,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.id,class:"asignment-container"},[(0,i._)("div",null,[(0,i._)("h3",null,(0,c.zw)(t.friend),1)]),r,(0,i._)("div",null,[(0,i._)("h3",null,(0,c.zw)(t.gift),1)]),(0,i.Wm)(d,{density:"default",variant:"outlined",onClick:n=>e.removeFromAsignmentsList(t.id)},{default:(0,i.w5)((()=>[(0,i.Uk)("Delete")])),_:2},1032,["onClick"])])))),128))])):((0,i.wg)(),(0,i.iD)("div",g,f))}var p=n(2578),k=n(3848),b={name:"AsignmentsList",computed:{...(0,p.rn)(k.b,["getAsignmentsList"])},methods:{...(0,p.nv)(k.b,["removeFromAsignmentsList"])}},A=n(89);const h=(0,A.Z)(b,[["render",_],["__scopeId","data-v-53b6811d"]]);var w=h;const L=e=>((0,i.dD)("data-v-0254aea5"),e=e(),(0,i.Cn)(),e),C={class:"selection-container"},j=L((()=>(0,i._)("h2",null,"Selection panel:",-1))),D={class:"friends-selection"},O={class:"gifts-selection"};function V(e,t,n,s,l,a){const d=(0,i.up)("v-select"),o=(0,i.up)("v-btn");return(0,i.wg)(),(0,i.iD)("div",C,[j,(0,i._)("div",D,[(0,i.Uk)(" Friends list: "),(0,i.Wm)(d,{modelValue:l.selectionObj.friend,"onUpdate:modelValue":t[0]||(t[0]=e=>l.selectionObj.friend=e),items:e.friendsList,"item-title":"title","item-value":"id",label:"Friend"},null,8,["modelValue","items"])]),(0,i._)("div",O,[(0,i.Uk)(" Gifts list: "),(0,i.Wm)(d,{modelValue:l.selectionObj.gift,"onUpdate:modelValue":t[1]||(t[1]=e=>l.selectionObj.gift=e),items:e.giftsList,"item-title":"title","item-value":"id",label:"Gift"},null,8,["modelValue","items"])]),(0,i.Wm)(o,{density:"default",variant:"outlined",onClick:a.onAddClick},{default:(0,i.w5)((()=>[(0,i.Uk)("Add to asignments")])),_:1},8,["onClick"])])}var U=n(2707),W=n(6700),y={name:"AsignmentsSelect",data(){return{selectionObj:{}}},computed:{...(0,p.rn)(U.C,["friendsList"]),...(0,p.rn)(W.j,["giftsList"])},methods:{...(0,p.nv)(k.b,["addToAsignmentsList"]),onAddClick(){this.addToAsignmentsList(this.selectionObj),this.selectionObj={}}}};const F=(0,A.Z)(y,[["render",V],["__scopeId","data-v-0254aea5"]]);var Z=F,I={name:"AsignmentsView",components:{MainMasterPage:o.Z,AsignmentsList:w,AsignmentsSelect:Z}};const S=(0,A.Z)(I,[["render",d],["__scopeId","data-v-67984711"]]);var z=S}}]);
//# sourceMappingURL=977.e1f82109.js.map