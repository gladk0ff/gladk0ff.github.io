var ne=Object.defineProperty;var ie=(t,s,n)=>s in t?ne(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n;var l=(t,s,n)=>ie(t,typeof s!="symbol"?s+"":s,n);import{p as u,j as e,F as d,U as ae,b as c,r as y,I as f,D as re,B as m,c as oe,d as le,T as S,s as M,e as ce,A as de,f as W,g as ue,M as G,P as H,h as he,i as pe,k as me,l as J,m as ge,n as xe,o as fe,q as je,t as ye,u as we,v as Te,w as V,x as ke,y as be,z as Ie,C as Se,E as ve,G as Ae,H as Pe,J as Ee,K as Ce,L as Re,N as Oe,O as Q,Q as L,S as qe,V as Ue,W as Le,X as _e,Y as ze,Z as Fe,_ as Be,$ as $e,a0 as De}from"./vendor-BZkvJGvq.js";import{r as E,O as Y,u as _,a as A,b as z,c as K,d as Ne,e as Me,f as X,g as Z,L as R,h as We,i as Ge,R as He}from"./@react-router-CI0f_2Yo.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const Je="#CDE1E1",Ve={secondary:Je},B={cssVar:!0,token:{fontSize:16,colorPrimary:"#7CB2B0",colorBgLayout:"none",colorLink:"#7CB2B0",colorBorder:"#D2D7E3",colorTextPlaceholder:"var(--ant-color-text-secondary)",boxShadow:"0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 0 24px 0 rgba(0, 0, 0, 0.75)"},components:{Layout:{siderBg:Ve.secondary},Input:{colorBgBase:"none",colorBgContainer:"none"},Typography:{titleMarginBottom:"none",titleMarginTop:"none"}}},p={BASE:"/",STATISTIC:"/statistic",TASKS:"/tasks",LOGOUT:"/logout",AUTH:"/auth",SIGN_IN:"/auth/sign-in",SIGN_UP:"/auth/sign-up",RESET_PASSWORD:"/auth/reset-password",UPDATE_PASSWORD:"/auth/update-password",INFO:"/info"},Qe=t=>()=>t.user?E(p.BASE):null,Ye=()=>e.jsx(Ke,{vertical:!0,gap:"middle",align:"center",justify:"center",children:e.jsxs(Xe,{vertical:!0,align:"center",justify:"center",children:[e.jsx("h1",{children:"7S"}),e.jsx(Y,{})]})}),Ke=u(d)`
	width: 100%;
	height: 100%;
`,Xe=u(d)`
	max-width: 400px;
	min-width: 300px;
	width: 100%;
`,Ze=(t,s)=>{const n=new FileReader;n.addEventListener("load",()=>s(n.result)),n.readAsDataURL(t)},et=t=>{const s=t.type==="image/jpeg"||t.type==="image/png";if(!s)return"Загрузить можно только файлы в формате: jpeg, png";const n=t.size/1024/1024<2;return n?s&&n:"Файл должен быть меньше 2MB"},tt=({onCancel:t})=>{const[s]=c.useForm(),[n,a]=y.useState(!1),[i,r]=y.useState(),o=x=>{console.log("Submitted values:",x)},g=x=>{console.log(x)},w=x=>{x.file.originFileObj&&(a(!0),Ze(x.file.originFileObj,P=>{a(!1),r(P)}))},j=e.jsxs("button",{style:{border:0,background:"none"},type:"button",children:[n?e.jsx(oe,{}):e.jsx(le,{}),e.jsx(S,{style:{marginTop:8},children:"Загрузить аватар"})]}),h=()=>{s.validateFields().then(x=>{g(x),s.resetFields(),t()}).catch(x=>{console.log("Validation failed:",x)})},T=x=>{const P=et(x),F=typeof P!="string";return F||M.error(P),F};return e.jsxs(c,{onFinish:o,labelAlign:"left",layout:"vertical",labelWrap:!0,size:"large",style:{position:"relative",maxWidth:"600px"},children:[e.jsx(st,{name:"avatar",listType:"picture-card",showUploadList:!1,customRequest:()=>{},beforeUpload:T,onChange:w,children:i?e.jsx("img",{src:i,alt:"avatar",style:{width:"100%"}}):j}),e.jsx(c.Item,{label:"Логин",name:"login",wrapperCol:{span:14},children:e.jsx(f,{})}),e.jsx(c.Item,{label:"Дата рождения",name:"birthdate",wrapperCol:{span:14},children:e.jsx(re,{style:{width:"100%"},placeholder:"Укажите дату рождения"})}),e.jsx(c.Item,{label:"Фамилия",name:"lastName",children:e.jsx(f,{})}),e.jsx(c.Item,{label:"Имя",name:"firstName",children:e.jsx(f,{})}),e.jsx(c.Item,{label:"Отчество",name:"middleName",children:e.jsx(f,{})}),e.jsxs(d,{gap:16,justify:"end",children:[e.jsx(m,{type:"primary",htmlType:"submit",children:"Сохранить"}),e.jsx(m,{type:"default",onClick:h,children:"Отмена"})]})]})},st=u(ae)`
	position: absolute;
	right: 0;
	top: 50px;
	width: unset !important;
	z-index: 1;
	.ant-upload {
		width: 150px !important;
		height: 150px !important;
	}
`;function nt(){const[t,s]=y.useState(!1);return e.jsxs(ce.Ribbon,{text:e.jsx(S,{children:"Hippies"}),children:[e.jsxs(it,{vertical:!0,gap:16,children:[e.jsxs(d,{gap:16,children:[e.jsx(de,{shape:"square",size:64,icon:e.jsx(W,{})}),e.jsxs(d,{vertical:!0,gap:16,children:[e.jsx(S,{children:"@gladk0ff"}),e.jsx(S,{children:"sergladkov@outlook.com"}),e.jsx(S,{children:"Гладков Андрей"})]})]}),e.jsx(at,{icon:e.jsx(ue,{}),size:"large",type:"text",onClick:()=>s(!0)})]}),e.jsx(G,{open:t,closable:!1,footer:null,centered:!0,destroyOnClose:!0,title:"Реадктирование данных профиля",children:e.jsx(tt,{onCancel:()=>{s(!1)}})})]})}const it=u(d)`
	min-width: 400px;
	padding: 1rem;
`,at=u(m)`
	position: absolute;
	right: 0;
	bottom: 0;
	transform: translate(-25%, -25%);
`,rt=()=>{const[t,s]=y.useState(!1),n=_(),a=A();return e.jsxs(lt,{children:[e.jsxs("div",{children:[e.jsx(m,{type:"primary",shape:"circle",icon:e.jsx(W,{}),onClick:()=>s(!0)}),e.jsx(H,{placement:"bottomLeft",content:e.jsx(nt,{}),overlayInnerStyle:{padding:0},arrow:!1,open:t,trigger:"click",onOpenChange:i=>s(i),children:e.jsx(ot,{})})]}),e.jsx(S.Title,{level:1,children:"7S"}),e.jsxs(d,{gap:16,children:[e.jsx(m,{type:"primary",shape:"circle",icon:e.jsx(he,{}),title:"Статистика",onClick:()=>{a(p.STATISTIC)}}),e.jsx(m,{type:"primary",shape:"circle",icon:e.jsx(pe,{}),title:"Выход",onClick:()=>{n(null,{method:"post",action:p.LOGOUT})}})]})]})},ot=u.div`
	transform: translate(-10px, -40px);
`,lt=u.header`
	display: flex;
	justify-content: space-between;
	position: relative;
	width: 100%;
	top: 0;
	padding: 1rem 2rem;
	background: lightgrey;
	align-items: center;
	border-bottom-left-radius: 16px;
`,ct={name:"",email:"",message:""},dt=({close:t})=>{const[s]=c.useForm(),n=a=>{console.log("Received values:",a),s.resetFields(),t()};return e.jsxs(c,{name:"feedback_form",layout:"vertical",onFinish:n,form:s,initialValues:ct,size:"large",children:[e.jsx(c.Item,{label:"Имя",name:"name",rules:[{required:!0,message:"Пожалуйста, введите ваше имя!"}],children:e.jsx(f,{})}),e.jsx(c.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Пожалуйста, введите ваш email!"}],children:e.jsx(f,{})}),e.jsx(c.Item,{label:"Сообщение",name:"message",rules:[{required:!0,message:"Пожалуйста, введите ваше сообщение!"}],children:e.jsx(f.TextArea,{rows:7,style:{resize:"none"}})}),e.jsx(d,{justify:"end",children:e.jsx(m,{type:"primary",htmlType:"submit",children:"Отправить"})})]})},ut=()=>{const t=A(),[s,n]=y.useState(!1);return e.jsxs(ht,{children:[e.jsxs(d,{gap:16,children:[e.jsx(m,{icon:e.jsx(me,{}),onClick:()=>n(!0),size:"large",shape:"circle",type:"primary",title:"О приложении"}),e.jsx(m,{icon:e.jsx(J,{}),onClick:()=>t(p.INFO),size:"large",shape:"circle",type:"primary"})]}),e.jsx("div",{children:"сделано gladk0ff"}),e.jsx(G,{title:"Форма обратной связи",open:s,onCancel:()=>n(!1),footer:null,children:e.jsx(dt,{close:()=>n(!1)})})]})},ht=u.footer`
	display: flex;
	justify-content: space-between;
	position: relative;
	width: 100%;
	padding: 1rem 2rem;
	background: gray;
	align-items: center;
	border-top-left-radius: ${t=>t.theme.borderRadiusLG}px;
	z-index: ${t=>t.theme.zIndexPopupBase};
`,k={soul:{id:"soul",title:"Дух",icon_src:"AliwangwangOutlined ",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni aliquam deserunt suscipit odit similique quos natus cum quia facilis nemo sit, repellendus culpa maiores quo minima eius non? Perferendis?"},health:{id:"health",title:"Здоровье",icon_src:"AliwangwangOutlined ",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni aliquam deserunt suscipit odit similique quos natus cum quia facilis nemo sit, repellendus culpa maiores quo minima eius non? Perferendis?"},social:{id:"social",title:"Социум",icon_src:"AliwangwangOutlined ",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni aliquam deserunt suscipit odit similique quos natus cum quia facilis nemo sit, repellendus culpa maiores quo minima eius non? Perferendis?"},life:{id:"life",title:"Быт",icon_src:"AliwangwangOutlined ",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni aliquam deserunt suscipit odit similique quos natus cum quia facilis nemo sit, repellendus culpa maiores quo minima eius non? Perferendis?"},growth:{id:"growth",title:"Развитие",icon_src:"AliwangwangOutlined ",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni aliquam deserunt suscipit odit similique quos natus cum quia facilis nemo sit, repellendus culpa maiores quo minima eius non? Perferendis?"},mind:{id:"mind",title:"Интеллект",icon_src:"AliwangwangOutlined ",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni aliquam deserunt suscipit odit similique quos natus cum quia facilis nemo sit, repellendus culpa maiores quo minima eius non? Perferendis?"},rest:{id:"rest",title:"Отдых",icon_src:"AliwangwangOutlined ",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni aliquam deserunt suscipit odit similique quos natus cum quia facilis nemo sit, repellendus culpa maiores quo minima eius non? Perferendis?"}};Object.keys(k).map(t=>k[t]);const pt=[{subject:k.soul.id,A:120,B:110,fullMark:150},{subject:k.health.id,A:98,B:130,fullMark:150},{subject:k.life.id,A:86,B:130,fullMark:150},{subject:k.growth.id,A:99,B:100,fullMark:150},{subject:k.mind.id,A:85,B:90,fullMark:150},{subject:k.rest.id,A:65,B:85,fullMark:150},{subject:k.social.id,A:15,B:53,fullMark:150}],mt=()=>e.jsx(ge,{width:"100%",height:"100%",children:e.jsxs(xe,{cx:"50%",cy:"50%",outerRadius:"80%",data:pt,children:[e.jsx(fe,{}),e.jsx(je,{dataKey:"subject"}),e.jsx(ye,{}),e.jsx(we,{name:"Mike",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6})]})}),gt=t=>async()=>t.user?null:E(p.SIGN_IN),xt=()=>e.jsxs(ft,{vertical:!0,gap:"0",align:"center",justify:"space-between",children:[e.jsx(rt,{}),e.jsx(Y,{}),e.jsx(ut,{})]}),ft=u(d)`
	width: 100%;
	height: 100%;
`,C=u(f)`
	border-top: none;
	border-left: none;
	border-right: none;
	box-shadow: none !important;
	border-width: ${t=>{var s,n;return t!=null&&t.priority?(s=t.theme)==null?void 0:s.lineWidthBold:(n=t.theme)==null?void 0:n.lineWidth}}px;
	border-bottom-color: ${t=>{const s=t.theme;switch(t==null?void 0:t.priority){case 1:return s.colorError;case 2:return s.colorWarning;case 3:return s.colorSuccess;default:return"none"}}};
`,ee=(t,s)=>{const[n,a]=y.useState(t.text),i=Ae(n,300);return y.useEffect(()=>{i!==t.text&&s(t.id,{text:i})},[i]),{value:n,setValue:a}},jt=({task:t,deleteTask:s,updateTask:n})=>{const{id:a,done:i,priority:r=0}=t,[o,g]=y.useState(!1),{value:w,setValue:j}=ee(t,n);return e.jsxs(d,{justify:"space-between",align:"center",gap:16,children:[e.jsx(te,{checked:o||i,onClick:()=>g(!o)}),e.jsx(C,{value:w,priority:r,onChange:h=>{j(h.target.value)}}),e.jsxs(Tt,{justify:"end",children:[e.jsx(O,{icon:e.jsx(ke,{}),shape:"circle",type:"text"}),e.jsx(O,{icon:e.jsx(be,{}),shape:"circle",type:"text"}),e.jsx(se,{icon:e.jsx(V,{}),shape:"circle",type:"text"}),e.jsx(m,{icon:e.jsx(Ie,{}),onClick:()=>s(a),shape:"circle",type:"text"})]})]})},yt=({task:t,deleteTask:s,updateTask:n})=>{const{id:a}=t,{value:i,setValue:r}=ee(t,n);return e.jsxs(d,{justify:"space-between",align:"center",gap:16,children:[e.jsx(m,{icon:e.jsx(Se,{}),shape:"circle",type:"text"}),e.jsx(C,{value:i,onChange:o=>{r(o.target.value)}}),e.jsx(m,{icon:e.jsx(ve,{}),onClick:()=>s(a),shape:"circle",type:"text"})]})},wt=({text:t})=>e.jsxs(d,{justify:"space-between",align:"center",gap:16,children:[e.jsx(te,{}),e.jsx(C,{value:t,readOnly:!0}),e.jsx(m,{icon:e.jsx(V,{}),shape:"circle",type:"text"})]}),te=u(Te)`
	z-index: 2;
	height: 100%;
	color: ${t=>t.theme.colorSuccess};
`,se=u(m)`
	opacity: 0;
	transition: all 0.2s;
`,O=u(m)`
	opacity: 0;
	transition: all 0.2s;
`,Tt=u(d)`
	width: 30px;
	background: none;
	transition: all 0.3s;
	&:hover {
		background: gray;
		width: 100px;
		${O} ,
		${se} {
			opacity: 1;
		}
	}
`;var I=(t=>(t.active="active",t.completed="completed",t.new="new",t))(I||{});const $=({title:t,total:s=0,complite:n=0,tasks:a,taskStatus:i})=>{const[r,o]=y.useState(!1),g=z(),w=h=>{g.submit(h,{method:"delete",encType:"text/plain"})},j=(h,T)=>{console.log("updateTask ",h,T)};return e.jsxs(bt,{taskstatus:i,title:e.jsxs(d,{justify:"space-between",align:"center",children:[e.jsx("span",{children:t}),e.jsx("span",{children:n?`${n}/${s}`:s})]}),children:[e.jsx(kt,{onFinish:({task:h})=>{g.submit({text:h,taskStatus:i},{method:"post",encType:"application/json"})},children:e.jsx(c.Item,{noStyle:!0,name:"task",rules:[{required:!0,message:"Please input your username!"}],children:e.jsxs(d,{onClick:()=>o(!0),onBlur:()=>o(!1),children:[r?e.jsx(Ee,{}):e.jsx(Ce,{}),e.jsx(C,{placeholder:r?"":"Создать задачу"})]})})}),e.jsx(It,{vertical:!0,children:a.map((h,T)=>{let x=null;return h.status_id===I.active&&(x=jt),h.status_id===I.new&&(x=yt),x?e.jsx(x,{task:h,deleteTask:w,updateTask:j},h.id+T):null})})]})},kt=u(c)`
	padding: ${t=>t.theme.paddingSM}px 0;
`,bt=u(Pe)`
	width: 100%;
	height: ${t=>t.taskstatus===I.active?30:70}%;
	background-color: ${t=>t.taskstatus===I.active?t.theme["orange-2"]:t.theme["green-1"]};
	overflow: hidden;
	.ant-card-body {
		height: calc(100% - 60px);
		padding: 0 ${t=>t.theme.paddingMD}px;
	}
`,It=u(d)`
	overflow: auto;
	/* TODO разобраться с высотой */
	height: calc(100% - 50px); //вычитаем  высоту заголовка и инпута формы
`,St=100,vt=({active:t=!1,tasks:s=[],completedTasks:n=[]})=>{const[a,i]=y.useState(!1),r=K();if(y.useEffect(()=>{!t&&a&&i(!1)},[t]),!r.typeId)return null;const o=k[r.typeId],{activeTasks:g=[],newTasks:w=[]}=s.reduce((h,T)=>(T.status_id==="new"&&h.newTasks.push(T),T.status_id==="active"&&h.activeTasks.push(T),h),{newTasks:[],activeTasks:[]}),j=g.filter(({done:h})=>h).length;return e.jsxs(At,{vertical:!0,align:"start",gap:8,children:[e.jsxs(Pt,{vertical:!0,style:{width:"100%"},children:[e.jsx($,{title:"В работе",complite:j,total:g.length,taskStatus:I.active,tasks:g}),e.jsx($,{title:"Запланированы",total:w.length,taskStatus:I.new,tasks:w})]}),e.jsxs(d,{justify:"space-between",style:{width:"100%"},children:[e.jsx(m,{type:"text",htmlType:"button",onClick:h=>{h.stopPropagation(),i(!0)},children:"Показать выполненные"}),o&&e.jsx(H,{content:e.jsx("div",{style:{width:500},children:o.info}),title:"Разяснение в помощь о текуших задач",children:e.jsx(m,{shape:"circle",icon:e.jsx(J,{}),size:"large",type:"text"})})]}),e.jsx(Re,{title:e.jsxs(S,{children:[" Звершенные задачи :",St]}),placement:"bottom",size:"large",onClose:h=>{h.stopPropagation(),i(!1)},open:a,getContainer:!1,children:e.jsx(d,{vertical:!0,gap:16,style:{padding:"0rem 1rem"},children:n.map((h,T)=>y.createElement(wt,{...h,key:T}))})})]})},At=u(d)`
	height: 100%;
	width: 100%;
	padding: 0.5rem 1rem 0rem;
	h2 {
		text-transform: uppercase;
		margin-left: 2rem;
	}
`;u(m)`
	position: absolute;
	right: 1rem;
	top: 1rem;
`;const Pt=u(d)`
	width: 100%;
	flex: 1;
	gap: 32px;
`,Et=({data:t,onClick:s,active:n=!1})=>e.jsxs(Rt,{vertical:!0,active:n?"true":"false",justify:"space-between",onClick:a=>{a.stopPropagation(),s(t.id)},children:[e.jsx(Ct,{children:t.title}),e.jsxs(d,{justify:"space-between",children:[e.jsxs(d,{vertical:!0,children:[e.jsxs("span",{children:["Текущие: ",t.inWork]}),e.jsxs("span",{children:["Всего: ",t.all]})]}),e.jsx(Oe,{style:{fontSize:48}})]})]}),Ct=u.span`
	font-weight: bold;
	font-size: 1.7rem;
`,Rt=u(d)`
	cursor: pointer;
	width: 250px;
	height: 150px;
	flex-shrink: 0;
	padding: 1rem;
	background-color: darkgray;
	border-radius: ${t=>t.theme.borderRadiusLG}px;
	box-shadow: ${t=>t.active==="true"?t.theme.boxShadow:"none"};
	transition: all 0.3s;
`,{Content:Ot,Sider:qt}=Q,Ut=({AuthService:t,TaskService:s})=>async({params:n})=>(s.taskTypes.length||await s.loadTaskType(),!s.hasUserTasks&&t.user&&(await s.loadUserTasks(t.user.id),s.calcTasksInfo()),{commonTasksInfo:s.commonTasksInfo,selectedTypeTasks:n.typeId&&s.userTasks?s.userTasks[n.typeId]:[]}),D=({TaskService:t,AuthService:s})=>async({request:n,params:a})=>{const i=a.typeId;if(!i)return null;switch(n.method){case"POST":{let r=await n.json();return await t.createTask({text:r.text,type_id:i,status_id:r.taskStatus,author_id:s.user.id})}case"DELETE":{const r=await n.text();return await t.delete({id:r,type_id:i}),new Response(null,{status:200})}case"PATCH":{const r=await n.json();return console.log("task",r),new Response(null,{status:200})}}},Lt=()=>{const t=A(),s=K(),n=Ne(),{commonTasksInfo:a,selectedTypeTasks:i}=Me(),r=o=>{t(s.typeId===o?p.BASE:`/${o}`)};return e.jsxs(_t,{children:[e.jsx(zt,{onClick:()=>{console.log("location.pathname",n.pathname),n.pathname!==p.BASE&&t(p.BASE)},children:e.jsx(Ft,{children:a&&Object.keys(a).map(o=>e.jsx(Et,{active:s.typeId===o,onClick:r,data:a[o]},a[o].id))})}),e.jsx(Bt,{trigger:null,collapsed:!s.typeId,collapsible:!0,defaultCollapsed:!0,collapsedWidth:0,width:"40%",children:e.jsx(vt,{tasks:i,active:!!s.typeId,closeForm:()=>t(p.BASE)})})]})},_t=u(Q)`
	display: flex;
	width: 100%;
	height: 100%;
`,zt=u(Ot)`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`,Ft=u(d)`
	display: flex;
	gap: 16px;
	width: 100%;
	align-items: center;
	justify-content: center;
	max-width: 619px;
	flex-wrap: wrap;
`,Bt=u(qt)`
	z-index: 999;
	transition: all 0.3s cubic-bezier();
	opacity: ${t=>t.collapsed?0:1};
	background: rgb(211, 211, 211) !important;
	background: linear-gradient(180deg, rgba(211, 211, 211, 1) 63%, rgba(128, 128, 128, 1) 100%) !important;
`,b={REQUIRED:"Поле обязательно",PASSWORD_DUPLICATE:"Пароли должны совпадать"},$t=t=>async({request:s})=>{const n=await s.json();try{return await t.signIn(n),E(p.BASE)}catch(a){return a}},Dt=()=>{const t=_(),s=X(),n=Z(),a=i=>{t({email:i.email,password:i.password},{method:"post",encType:"application/json"})};return e.jsxs(e.Fragment,{children:[e.jsxs(c,{name:"sign-in",layout:"vertical",style:{width:"100%"},onFinish:a,children:[!!n&&e.jsx(L,{message:n.message||"",type:"error"}),e.jsx(c.Item,{name:"email",label:"Почта пользователя",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(f,{size:"large",type:"email"})}),e.jsx(c.Item,{name:"password",label:"Пароль",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(f.Password,{size:"large",type:"password"})}),e.jsx(c.Item,{style:{textAlign:"center"},children:e.jsx(m,{type:"primary",htmlType:"submit",block:!0,size:"large",loading:s.state=="submitting",children:"Войти"})})]}),e.jsxs(Nt,{align:"center",justify:"space-between",children:[e.jsx(R,{to:p.RESET_PASSWORD,children:"Забыли пароль ?"}),e.jsx(R,{to:p.SIGN_UP,children:"Регистрация"})]})]})},Nt=u(d)`
	width: 100%;
`,Mt=t=>async({request:s})=>{const n=await s.json();try{return await t.signUp(n),E(p.BASE)}catch(a){return a}},Wt=()=>{const t=_(),s=X(),n=Z(),a=({email:i,password:r})=>{t({email:i,password:r},{method:"post",encType:"application/json"})};return e.jsxs(c,{layout:"vertical",style:{width:"100%"},onFinish:a,children:[!!n&&e.jsx(Gt,{message:n.message||"",type:"error"}),e.jsx(c.Item,{name:"email",label:"Почта",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(f,{size:"large",type:"email"})}),e.jsx(c.Item,{name:"password",label:"Пароль",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(f.Password,{size:"large",type:"password"})}),e.jsx(c.Item,{name:"passwordRepeat",dependencies:["password"],label:"Повторите пароль",rules:[{required:!0,message:b.REQUIRED},({getFieldValue:i})=>({validator(r,o){return!o||i("password")===o?Promise.resolve():Promise.reject(new Error(b.PASSWORD_DUPLICATE))}})],children:e.jsx(f.Password,{size:"large",type:"password"})}),e.jsx(c.Item,{style:{textAlign:"center"},children:e.jsx(m,{type:"primary",htmlType:"submit",block:!0,size:"large",loading:s.state=="submitting",children:"Зарегестрироваться"})})]})},Gt=u(L)`
	margin: 10px 0;
`,Ht=t=>async({request:s})=>{const n=await s.json();try{return await t.resetPassword(n),{isSendPasswordEmail:!0}}catch(a){return{error:a}}},Jt=()=>{var a;const t=z(),s=t.state=="submitting",n=({email:i})=>{t.submit({email:i},{method:"post",encType:"application/json"})};return e.jsxs(e.Fragment,{children:[(a=t.data)!=null&&a.isSendPasswordEmail?e.jsx("h1",{children:"Письмо отправлено на email"}):e.jsxs(c,{name:"sign-in",layout:"vertical",style:{width:"100%"},onFinish:n,children:[e.jsx(c.Item,{name:"email",label:"Почта пользователя",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(f,{size:"large",type:"email"})}),e.jsx(c.Item,{style:{textAlign:"center"},children:e.jsx(m,{type:"primary",htmlType:"submit",block:!0,size:"large",loading:s,children:"Сбросить пароль"})})]}),e.jsx(d,{align:"center",justify:"center",children:e.jsx(R,{to:p.SIGN_IN,children:"К форме аторизации"})})]})},Vt=t=>async({request:s})=>{const n=await s.json();try{return await t.updatePassword(n),{updatePassword:!0}}catch(a){return{error:a}}},Qt=()=>{var o;const{data:t,state:s,submit:n}=z(),a=A(),i=s=="submitting";y.useEffect(()=>{t!=null&&t.updatePassword&&(M.info("Пароль успешно обновлен"),a(p.SIGN_IN))},[t]);const r=({password:g})=>{n({password:g},{method:"post",encType:"application/json"})};return e.jsxs(c,{name:"sign-in",layout:"vertical",style:{width:"100%"},onFinish:r,children:[!!(t!=null&&t.error)&&e.jsx(L,{message:((o=t==null?void 0:t.error)==null?void 0:o.message)||"",type:"error"}),e.jsx(c.Item,{name:"password",label:"Новый пароль",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(f.Password,{size:"large",type:"password"})}),e.jsx(c.Item,{name:"passwordRepeat",dependencies:["password"],label:"Повторите пароль",rules:[{required:!0,message:b.REQUIRED},({getFieldValue:g})=>({validator(w,j){return!j||g("password")===j?Promise.resolve():Promise.reject(new Error(b.PASSWORD_DUPLICATE))}})],children:e.jsx(f.Password,{size:"large",type:"password"})}),e.jsx(c.Item,{style:{textAlign:"center"},children:e.jsx(m,{type:"primary",htmlType:"submit",block:!0,size:"large",loading:i,children:"Обновить пароль"})})]})},Yt=()=>{const t=A();return e.jsxs(d,{vertical:!0,flex:1,style:{height:"100%",width:"100%"},children:[e.jsx(d,{children:e.jsx(m,{type:"text",icon:e.jsx(qe,{}),title:"Статистика",onClick:()=>{t(-1)},children:"Назад"})}),e.jsx(mt,{})]})},{Title:Kt}=S,Xt=()=>e.jsx(Zt,{children:e.jsx(Kt,{level:1,children:"О приложении"})}),Zt=u(d)`
	height: 100%;
	width: 100%;
`,es=t=>[{path:p.BASE,loader:gt(t.AuthService),element:e.jsx(xt,{}),action:({request:s,params:n})=>(console.log("a main",s,n),null),children:[{path:"/:typeId?",loader:Ut(t),action:D(t),element:e.jsx(Lt,{})},{path:p.STATISTIC,action:D(t),element:e.jsx(Yt,{})}]},{path:p.LOGOUT,action:()=>(t.AuthService.logOut(),We(p.SIGN_IN))},{path:p.AUTH,loader:Qe(t.AuthService),element:e.jsx(Ye,{}),children:[{path:p.SIGN_IN,action:$t(t.AuthService),element:e.jsx(Dt,{})},{path:p.SIGN_UP,action:Mt(t.AuthService),element:e.jsx(Wt,{})},{action:Ht(t.AuthService),path:p.RESET_PASSWORD,element:e.jsx(Jt,{})},{action:Vt(t.AuthService),path:p.UPDATE_PASSWORD,element:e.jsx(Qt,{})}]},{path:p.INFO,element:e.jsx(Xt,{})}];class q{constructor(s){l(this,"name");l(this,"message");l(this,"code");this.message=s.message,this.name=s.name,s.code&&(this.code=s.code)}}const ts=()=>Ue("https://bezykkplqcrsoettxmqn.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlenlra3BscWNyc29ldHR4bXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzMzUxMTUsImV4cCI6MjAyNTkxMTExNX0.vxAZ78i4fJs8x3WYn9W_vxxTMz8DiQuJngbP_upuz40"),U=t=>{if(t instanceof Error)throw new q(t);if(t!=null&&t.code)throw console.log("DataProvider?.checkApiError",t),t};class ss{constructor(s){l(this,"tokenName","sb-bezykkplqcrsoettxmqn-auth-token");l(this,"user",null);l(this,"setUser",s=>{this.user=s});l(this,"signIn",async({email:s,password:n})=>{const{data:a}=await this.provider.signIn({email:s,password:n});return a.user&&this.setUser(a.user),a});l(this,"signUp",async({email:s,password:n})=>{const{data:a,error:i}=await this.provider.signUp({email:s,password:n});if(i)throw Le(i)?{name:"Недопустимый пароль",message:i.message}:{name:i.name,message:i.message};return a.user&&this.setUser(a.user),{data:a}});l(this,"resetPassword",async({email:s})=>{const{data:n}=await this.provider.resetPassword(s);return n});l(this,"updatePassword",async({password:s})=>{const{data:n,error:a}=await this.provider.updatePassword(s);return U(a),{data:n}});l(this,"logOut",()=>{localStorage.removeItem(this.tokenName),this.user=null});this.provider=s,this.checkAuth()}get isAuth(){return!!this.user}get token(){return localStorage.getItem(this.tokenName)}checkAuth(){if(console.log("import.meta.env.VITE_TOKEN_KEY","bezykkplqcrsoettxmqn"),this.token){const s=JSON.parse(this.token);console.log(" token",s),this.user=s.user}}}class ns{constructor(s){l(this,"taskTypes",[]);l(this,"userTasks",null);l(this,"commonTasksInfo",null);l(this,"loadTaskType",async()=>{console.log("loadTaskType");const{data:s,error:n}=await this.provider.getTaskTypes();U(n),this.taskTypes=s});l(this,"buildAllUserTasksGroup",()=>{this.taskTypes.forEach(s=>{var n;(n=this.userTasks)!=null&&n[s.id]||(this.userTasks[s.id]=[])})});l(this,"loadUserTasks",async s=>{const{data:n,error:a}=await this.provider.getUserTasks(s);U(a),this.userTasks=n.reduce((i,r)=>(i[r.type_id]?i[r.type_id].push(r):i[r.type_id]=[r],i),{}),this.buildAllUserTasksGroup()});l(this,"getCurrentTypsTasks",s=>{var n;return(n=this.userTasks)==null?void 0:n[s]});l(this,"calcTasksInfo",()=>{!this.taskTypes.length||!this.userTasks||(this.commonTasksInfo=this.taskTypes.reduce((s,n)=>{var a,i,r,o,g,w;return s[n.id]={...n,all:((i=(a=this.userTasks)==null?void 0:a[n.id])==null?void 0:i.length)||0,inWork:((o=(r=this.userTasks)==null?void 0:r[n.id])==null?void 0:o.filter(({status_id:j})=>j===I.active).length)||0},console.log("==>",(w=(g=this.userTasks)==null?void 0:g[n.id])==null?void 0:w.filter(({status_id:j})=>j===I.active)),s},{}))});l(this,"updateCommonTypeInfo",s=>{var n,a,i,r;this.commonTasksInfo&&(this.commonTasksInfo[s]={...this.commonTasksInfo[s],all:((a=(n=this.userTasks)==null?void 0:n[s])==null?void 0:a.length)||0,inWork:((r=(i=this.userTasks)==null?void 0:i[s])==null?void 0:r.filter(({status_id:o})=>o===I.active).length)||0})});l(this,"createTask",async({author_id:s,text:n,type_id:a,status_id:i})=>{var g;const{data:r,error:o}=await this.provider.createTask({author_id:s,text:n,type_id:a,status_id:i});if(o)throw console.log("createTask",o),new q({...o,name:"Не удалость"});return(g=this.userTasks)==null||g[a].push(r[0]),this.updateCommonTypeInfo(a),r});l(this,"delete",async({id:s,type_id:n})=>{var i;const{error:a}=await this.provider.delete(s);if(a)throw console.log("createTask",a),new q({...a,name:"Не удалость"});(i=this.userTasks)!=null&&i[n]&&(this.userTasks[n]=this.userTasks[n].filter(({id:r})=>r!==s),this.updateCommonTypeInfo(n))});this.provider=s}get hasUserTasks(){return!!this.userTasks&&!!Object.keys(this.userTasks).length}}class is{constructor(s){l(this,"passwordResetUrl","http://localhost:5173/auth/update-password");l(this,"signIn",async({email:s,password:n})=>await this.client.auth.signInWithPassword({email:s,password:n}));l(this,"signUp",async({email:s,password:n})=>await this.client.auth.signUp({email:s,password:n}));l(this,"resetPassword",async s=>await this.client.auth.resetPasswordForEmail(s,{redirectTo:this.passwordResetUrl}));l(this,"updatePassword",async s=>await this.client.auth.updateUser({password:s}));this.client=s}}class as{constructor(s){l(this,"getTaskTypes",()=>this.client.from("task_types").select("*"));l(this,"getUserTasks",s=>this.client.from("tasks").select("*").eq("author_id",s));l(this,"createTask",s=>this.client.from("tasks").insert(s).select());l(this,"delete",s=>this.client.from("tasks").delete().eq("id",s));this.client=s}}const{useToken:rs}=$e,N=ts(),os={AuthService:new ss(new is(N)),TaskService:new ns(new as(N))},ls=es(os),cs=()=>{const t=Ge(ls),{token:s}=rs();return e.jsx(y.StrictMode,{children:e.jsx(ze,{theme:B,children:e.jsxs(Fe,{theme:{...s,...B.token},children:[e.jsx(ds,{}),e.jsx(He,{router:t,fallbackElement:e.jsx(Be,{})})]})})})},ds=_e`
::-webkit-scrollbar {
    width: 8px; /* Ширина полосы прокрутки для Chrome/Safari */
}

/* Полоса прокрутки для Firefox */
* {
    scrollbar-width: thin;
    /* scrollbar-color: #000 transparent; */
}

/* Стилизация полосы прокрутки для IE и Edge */
* {
    -ms-overflow-style: -ms-autohiding-scrollbar;
}

 * {
	box-sizing: border-box;
 }
  body {
	position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
	font-size: 18px;
	--s: 60px;
    --_g: #0000 79%, #d3d3d3 -215% 2%, #0000 84%;
    background: radial-gradient(27% 29% at right, var(--_g)) calc(var(--s) / 2) var(--s), radial-gradient(27% 29% at left, var(--_g)) calc(var(--s) / -2) var(--s), radial-gradient(29% 27% at top, var(--_g)) 0 calc(var(--s) / 2), radial-gradient(29% 27% at bottom, var(--_g)) 0 calc(var(--s) / -2) #fff5f5;
    background-size: calc(2* var(--s)) calc(2* var(--s));
  }
  h1 {
	font-size: 2rem;
	margin-block-start: 0;
	margin-block-end: 0;
  }
  h2 {
	font-size: 1.5rem;
  }
  h3 {
	font-size: 1rem;
  }
  #root {
	position:relative;
	width:100%;
	height:100vh;
	max-width: 1920px;
  }
`;let v=document.getElementById("root");v||(v=document.createElement("div"),v.id="root",document.body.appendChild(v));De(v).render(e.jsx(cs,{}));
