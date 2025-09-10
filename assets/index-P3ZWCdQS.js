var ae=Object.defineProperty;var ne=(t,s,a)=>s in t?ae(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;var l=(t,s,a)=>ne(t,typeof s!="symbol"?s+"":s,a);import{aM as u,aN as e,r as y,aO as re,aP as ie,aQ as oe,aR as le,aS as ce,aT as de,aU as ue,aV as he,aW as pe,aX as me,aY as xe,aZ as ge}from"./vendor-BORkbKP0.js";import{r as P,O as q,u as F,a as C,b as B,c as W,d as je,e as fe,f as G,g as J,L as A,h as ye,i as we,R as ke}from"./@react-router-CVNU_20E.js";import{F as d,R as p,U as be,w as c,I as j,x as Te,B as m,y as Ie,z as ve,H as v,J as V,K as Se,L as Ce,M as Q,N as Ee,O as Y,P as H,Q as Pe,X as Re,Y as Ae,Z as X,_ as I,$ as Oe,a0 as K,a1 as Ue,a2 as ze,a3 as Fe,a4 as Be,a5 as $e,a6 as Le,a7 as _e,a8 as Ne,a9 as De,aa as Me,ab as Z,ac as $,ad as b,ae as qe,af as We,ag as Ge,ah as Je}from"./ant-BvHWVyON.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const Ve="#CDE1E1",Qe={secondary:Ve},_={cssVar:!0,token:{fontSize:16,colorPrimary:"#7CB2B0",colorBgLayout:"none",colorLink:"#7CB2B0",colorBorder:"#D2D7E3",colorTextPlaceholder:"var(--ant-color-text-secondary)",boxShadow:"0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 0 24px 0 rgba(0, 0, 0, 0.75)"},components:{Layout:{siderBg:Qe.secondary},Input:{colorBgBase:"none",colorBgContainer:"none"},Typography:{titleMarginBottom:"none",titleMarginTop:"none"}}},Ye=t=>()=>t.user?P(p.BASE):null,He=()=>e.jsx(Xe,{vertical:!0,gap:"middle",align:"center",justify:"center",children:e.jsxs(Ke,{vertical:!0,align:"center",justify:"center",children:[e.jsx("h1",{children:"7S"}),e.jsx(q,{})]})}),Xe=u(d)`
	width: 100%;
	height: 100%;
`,Ke=u(d)`
	max-width: 400px;
	min-width: 300px;
	width: 100%;
`,Ze=(t,s)=>{const a=new FileReader;a.addEventListener("load",()=>s(a.result)),a.readAsDataURL(t)},et=t=>{const s=t.type==="image/jpeg"||t.type==="image/png";if(!s)return"Загрузить можно только файлы в формате: jpeg, png";const a=t.size/1024/1024<2;return a?s&&a:"Файл должен быть меньше 2MB"},tt=({onCancel:t})=>{const[s]=c.useForm(),[a,r]=y.useState(!1),[n,i]=y.useState(),o=g=>{console.log("Submitted values:",g)},x=g=>{console.log(g)},w=g=>{g.file.originFileObj&&(r(!0),Ze(g.file.originFileObj,E=>{r(!1),i(E)}))},f=e.jsxs("button",{style:{border:0,background:"none"},type:"button",children:[a?e.jsx(Ie,{}):e.jsx(ve,{}),e.jsx(v,{style:{marginTop:8},children:"Загрузить аватар"})]}),h=()=>{s.validateFields().then(g=>{x(g),s.resetFields(),t()}).catch(g=>{console.log("Validation failed:",g)})},k=g=>{const E=et(g),L=typeof E!="string";return L||V.error(E),L};return e.jsxs(c,{onFinish:o,labelAlign:"left",layout:"vertical",labelWrap:!0,size:"large",style:{position:"relative",maxWidth:"600px"},children:[e.jsx(st,{name:"avatar",listType:"picture-card",showUploadList:!1,customRequest:()=>{},beforeUpload:k,onChange:w,children:n?e.jsx("img",{src:n,alt:"avatar",style:{width:"100%"}}):f}),e.jsx(c.Item,{label:"Логин",name:"login",wrapperCol:{span:14},children:e.jsx(j,{})}),e.jsx(c.Item,{label:"Дата рождения",name:"birthdate",wrapperCol:{span:14},children:e.jsx(Te,{style:{width:"100%"},placeholder:"Укажите дату рождения"})}),e.jsx(c.Item,{label:"Фамилия",name:"lastName",children:e.jsx(j,{})}),e.jsx(c.Item,{label:"Имя",name:"firstName",children:e.jsx(j,{})}),e.jsx(c.Item,{label:"Отчество",name:"middleName",children:e.jsx(j,{})}),e.jsxs(d,{gap:16,justify:"end",children:[e.jsx(m,{type:"primary",htmlType:"submit",children:"Сохранить"}),e.jsx(m,{type:"default",onClick:h,children:"Отмена"})]})]})},st=u(be)`
	position: absolute;
	right: 0;
	top: 50px;
	width: unset !important;
	z-index: 1;
	.ant-upload {
		width: 150px !important;
		height: 150px !important;
	}
`;function at(){const[t,s]=y.useState(!1);return e.jsxs(Se.Ribbon,{text:e.jsx(v,{children:"Hippies"}),children:[e.jsxs(nt,{vertical:!0,gap:16,children:[e.jsxs(d,{gap:16,children:[e.jsx(Ce,{shape:"square",size:64,icon:e.jsx(Q,{})}),e.jsxs(d,{vertical:!0,gap:16,children:[e.jsx(v,{children:"@gladk0ff"}),e.jsx(v,{children:"sergladkov@outlook.com"}),e.jsx(v,{children:"Гладков Андрей"})]})]}),e.jsx(rt,{icon:e.jsx(Ee,{}),size:"large",type:"text",onClick:()=>s(!0)})]}),e.jsx(Y,{open:t,closable:!1,footer:null,centered:!0,destroyOnClose:!0,title:"Реадктирование данных профиля",children:e.jsx(tt,{onCancel:()=>{s(!1)}})})]})}const nt=u(d)`
	min-width: 400px;
	padding: 1rem;
`,rt=u(m)`
	position: absolute;
	right: 0;
	bottom: 0;
	transform: translate(-25%, -25%);
`,it=()=>{const[t,s]=y.useState(!1),a=F(),r=C();return e.jsxs(lt,{children:[e.jsxs("div",{children:[e.jsx(m,{type:"primary",shape:"circle",icon:e.jsx(Q,{}),onClick:()=>s(!0)}),e.jsx(H,{placement:"bottomLeft",content:e.jsx(at,{}),overlayInnerStyle:{padding:0},arrow:!1,open:t,trigger:"click",onOpenChange:n=>s(n),children:e.jsx(ot,{})})]}),e.jsx(v.Title,{level:1,children:"7S"}),e.jsxs(d,{gap:16,children:[e.jsx(m,{type:"primary",shape:"circle",icon:e.jsx(Pe,{}),title:"Статистика",onClick:()=>{r(p.STATISTIC)}}),e.jsx(m,{type:"primary",shape:"circle",icon:e.jsx(Re,{}),title:"Выход",onClick:()=>{a(null,{method:"post",action:p.LOGOUT})}})]})]})},ot=u.div`
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
`,ct={name:"",email:"",message:""},dt=({close:t})=>{const[s]=c.useForm(),a=r=>{console.log("Received values:",r),s.resetFields(),t()};return e.jsxs(c,{name:"feedback_form",layout:"vertical",onFinish:a,form:s,initialValues:ct,size:"large",children:[e.jsx(c.Item,{label:"Имя",name:"name",rules:[{required:!0,message:"Пожалуйста, введите ваше имя!"}],children:e.jsx(j,{})}),e.jsx(c.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Пожалуйста, введите ваш email!"}],children:e.jsx(j,{})}),e.jsx(c.Item,{label:"Сообщение",name:"message",rules:[{required:!0,message:"Пожалуйста, введите ваше сообщение!"}],children:e.jsx(j.TextArea,{rows:7,style:{resize:"none"}})}),e.jsx(d,{justify:"end",children:e.jsx(m,{type:"primary",htmlType:"submit",children:"Отправить"})})]})},ut=()=>{const t=C(),[s,a]=y.useState(!1);return e.jsxs(ht,{children:[e.jsxs(d,{gap:16,children:[e.jsx(m,{icon:e.jsx(Ae,{}),onClick:()=>a(!0),size:"large",shape:"circle",type:"primary",title:"О приложении"}),e.jsx(m,{icon:e.jsx(X,{}),onClick:()=>t(p.INFO),size:"large",shape:"circle",type:"primary"})]}),e.jsx("div",{children:"сделано gladk0ff"}),e.jsx(Y,{title:"Форма обратной связи",open:s,onCancel:()=>a(!1),footer:null,children:e.jsx(dt,{close:()=>a(!1)})})]})},ht=u.footer`
	display: flex;
	justify-content: space-between;
	position: relative;
	width: 100%;
	padding: 1rem 2rem;
	background: gray;
	align-items: center;
	border-top-left-radius: ${t=>t.theme.borderRadiusLG}px;
	z-index: ${t=>t.theme.zIndexPopupBase};
`,pt=[{subject:I.soul.id,A:120,B:110,fullMark:150},{subject:I.health.id,A:98,B:130,fullMark:150},{subject:I.life.id,A:86,B:130,fullMark:150},{subject:I.growth.id,A:99,B:100,fullMark:150},{subject:I.mind.id,A:85,B:90,fullMark:150},{subject:I.rest.id,A:65,B:85,fullMark:150},{subject:I.social.id,A:15,B:53,fullMark:150}],mt=()=>e.jsx(re,{width:"100%",height:"100%",children:e.jsxs(ie,{cx:"50%",cy:"50%",outerRadius:"80%",data:pt,children:[e.jsx(oe,{}),e.jsx(le,{dataKey:"subject"}),e.jsx(ce,{}),e.jsx(de,{name:"Mike",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6})]})}),xt=t=>async()=>t.user?null:P(p.SIGN_IN),gt=()=>e.jsxs(jt,{vertical:!0,gap:"0",align:"center",justify:"space-between",children:[e.jsx(it,{}),e.jsx(q,{}),e.jsx(ut,{})]}),jt=u(d)`
	width: 100%;
	height: 100%;
`,R=u(j)`
	border-top: none;
	border-left: none;
	border-right: none;
	box-shadow: none !important;
	border-width: ${t=>{var s,a;return t!=null&&t.priority?(s=t.theme)==null?void 0:s.lineWidthBold:(a=t.theme)==null?void 0:a.lineWidth}}px;
	border-bottom-color: ${t=>{const s=t.theme;switch(t==null?void 0:t.priority){case 1:return s.colorError;case 2:return s.colorWarning;case 3:return s.colorSuccess;default:return"none"}}};
`,ee=(t,s)=>{const[a,r]=y.useState(t.text),n=ue(a,300);return y.useEffect(()=>{n!==t.text&&s(t.id,{text:n})},[n]),{value:a,setValue:r}},ft=({task:t,deleteTask:s,updateTask:a})=>{const{id:r,done:n,priority:i=0}=t,[o,x]=y.useState(!1),{value:w,setValue:f}=ee(t,a);return e.jsxs(d,{justify:"space-between",align:"center",gap:16,children:[e.jsx(te,{checked:o||n,onClick:()=>x(!o)}),e.jsx(R,{value:w,priority:i,onChange:h=>{f(h.target.value)}}),e.jsxs(kt,{justify:"end",children:[e.jsx(O,{icon:e.jsx(Ue,{}),shape:"circle",type:"text"}),e.jsx(O,{icon:e.jsx(ze,{}),shape:"circle",type:"text"}),e.jsx(se,{icon:e.jsx(K,{}),shape:"circle",type:"text"}),e.jsx(m,{icon:e.jsx(Fe,{}),onClick:()=>s(r),shape:"circle",type:"text"})]})]})},yt=({task:t,deleteTask:s,updateTask:a})=>{const{id:r}=t,{value:n,setValue:i}=ee(t,a);return e.jsxs(d,{justify:"space-between",align:"center",gap:16,children:[e.jsx(m,{icon:e.jsx(Be,{}),shape:"circle",type:"text"}),e.jsx(R,{value:n,onChange:o=>{i(o.target.value)}}),e.jsx(m,{icon:e.jsx($e,{}),onClick:()=>s(r),shape:"circle",type:"text"})]})},wt=({text:t})=>e.jsxs(d,{justify:"space-between",align:"center",gap:16,children:[e.jsx(te,{}),e.jsx(R,{value:t,readOnly:!0}),e.jsx(m,{icon:e.jsx(K,{}),shape:"circle",type:"text"})]}),te=u(Oe)`
	z-index: 2;
	height: 100%;
	color: ${t=>t.theme.colorSuccess};
`,se=u(m)`
	opacity: 0;
	transition: all 0.2s;
`,O=u(m)`
	opacity: 0;
	transition: all 0.2s;
`,kt=u(d)`
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
`;var T=(t=>(t.active="active",t.completed="completed",t.new="new",t))(T||{});const N=({title:t,total:s=0,complite:a=0,tasks:r,taskStatus:n})=>{const[i,o]=y.useState(!1),x=B(),w=h=>{x.submit(h,{method:"delete",encType:"text/plain"})},f=(h,k)=>{console.log("updateTask ",h,k)};return e.jsxs(Tt,{taskstatus:n,title:e.jsxs(d,{justify:"space-between",align:"center",children:[e.jsx("span",{children:t}),e.jsx("span",{children:a?`${a}/${s}`:s})]}),children:[e.jsx(bt,{onFinish:({task:h})=>{x.submit({text:h,taskStatus:n},{method:"post",encType:"application/json"})},children:e.jsx(c.Item,{noStyle:!0,name:"task",rules:[{required:!0,message:"Please input your username!"}],children:e.jsxs(d,{onClick:()=>o(!0),onBlur:()=>o(!1),children:[i?e.jsx(_e,{}):e.jsx(Ne,{}),e.jsx(R,{placeholder:i?"":"Создать задачу"})]})})}),e.jsx(It,{vertical:!0,children:r.map((h,k)=>{let g=null;return h.status_id===T.active&&(g=ft),h.status_id===T.new&&(g=yt),g?e.jsx(g,{task:h,deleteTask:w,updateTask:f},h.id+k):null})})]})},bt=u(c)`
	padding: ${t=>t.theme.paddingSM}px 0;
`,Tt=u(Le)`
	width: 100%;
	height: ${t=>t.taskstatus===T.active?30:70}%;
	background-color: ${t=>t.taskstatus===T.active?t.theme["orange-2"]:t.theme["green-1"]};
	overflow: hidden;
	.ant-card-body {
		height: calc(100% - 60px);
		padding: 0 ${t=>t.theme.paddingMD}px;
	}
`,It=u(d)`
	overflow: auto;
	/* TODO разобраться с высотой */
	height: calc(100% - 50px); //вычитаем  высоту заголовка и инпута формы
`,vt=100,St=({active:t=!1,tasks:s=[],completedTasks:a=[]})=>{const[r,n]=y.useState(!1),i=W();if(y.useEffect(()=>{!t&&r&&n(!1)},[t]),!i.typeId)return null;const o=I[i.typeId],{activeTasks:x=[],newTasks:w=[]}=s.reduce((h,k)=>(k.status_id==="new"&&h.newTasks.push(k),k.status_id==="active"&&h.activeTasks.push(k),h),{newTasks:[],activeTasks:[]}),f=x.filter(({done:h})=>h).length;return e.jsxs(Ct,{vertical:!0,align:"start",gap:8,children:[e.jsxs(Et,{vertical:!0,style:{width:"100%"},children:[e.jsx(N,{title:"В работе",complite:f,total:x.length,taskStatus:T.active,tasks:x}),e.jsx(N,{title:"Запланированы",total:w.length,taskStatus:T.new,tasks:w})]}),e.jsxs(d,{justify:"space-between",style:{width:"100%"},children:[e.jsx(m,{type:"text",htmlType:"button",onClick:h=>{h.stopPropagation(),n(!0)},children:"Показать выполненные"}),o&&e.jsx(H,{content:e.jsx("div",{style:{width:500},children:o.info}),title:"Разяснение в помощь о текуших задач",children:e.jsx(m,{shape:"circle",icon:e.jsx(X,{}),size:"large",type:"text"})})]}),e.jsx(De,{title:e.jsxs(v,{children:[" Звершенные задачи :",vt]}),placement:"bottom",size:"large",onClose:h=>{h.stopPropagation(),n(!1)},open:r,getContainer:!1,children:e.jsx(d,{vertical:!0,gap:16,style:{padding:"0rem 1rem"},children:a.map((h,k)=>y.createElement(wt,{...h,key:k}))})})]})},Ct=u(d)`
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
`;const Et=u(d)`
	width: 100%;
	flex: 1;
	gap: 32px;
`,Pt=({data:t,onClick:s,active:a=!1})=>e.jsxs(At,{vertical:!0,active:a?"true":"false",justify:"space-between",onClick:r=>{r.stopPropagation(),s(t.id)},children:[e.jsx(Rt,{children:t.title}),e.jsxs(d,{justify:"space-between",children:[e.jsxs(d,{vertical:!0,children:[e.jsxs("span",{children:["Текущие: ",t.inWork]}),e.jsxs("span",{children:["Всего: ",t.all]})]}),e.jsx(Me,{style:{fontSize:48}})]})]}),Rt=u.span`
	font-weight: bold;
	font-size: 1.7rem;
`,At=u(d)`
	cursor: pointer;
	width: 250px;
	height: 150px;
	flex-shrink: 0;
	padding: 1rem;
	background-color: darkgray;
	border-radius: ${t=>t.theme.borderRadiusLG}px;
	box-shadow: ${t=>t.active==="true"?t.theme.boxShadow:"none"};
	transition: all 0.3s;
`,{Content:Ot,Sider:Ut}=Z,zt=({AuthService:t,TaskService:s})=>async({params:a})=>(s.taskTypes.length||await s.loadTaskType(),!s.hasUserTasks&&t.user&&(await s.loadUserTasks(t.user.id),s.calcTasksInfo()),{commonTasksInfo:s.commonTasksInfo,selectedTypeTasks:a.typeId&&s.userTasks?s.userTasks[a.typeId]:[]}),D=({TaskService:t,AuthService:s})=>async({request:a,params:r})=>{const n=r.typeId;if(!n)return null;switch(a.method){case"POST":{let i=await a.json();return await t.createTask({text:i.text,type_id:n,status_id:i.taskStatus,author_id:s.user.id})}case"DELETE":{const i=await a.text();return await t.delete({id:i,type_id:n}),new Response(null,{status:200})}case"PATCH":{const i=await a.json();return console.log("task",i),new Response(null,{status:200})}}},Ft=()=>{const t=C(),s=W(),a=je(),{commonTasksInfo:r,selectedTypeTasks:n}=fe(),i=o=>{t(s.typeId===o?p.BASE:`/${o}`)};return e.jsxs(Bt,{children:[e.jsx($t,{onClick:()=>{console.log("location.pathname",a.pathname),a.pathname!==p.BASE&&t(p.BASE)},children:e.jsx(Lt,{children:r&&Object.keys(r).map(o=>e.jsx(Pt,{active:s.typeId===o,onClick:i,data:r[o]},r[o].id))})}),e.jsx(_t,{trigger:null,collapsed:!s.typeId,collapsible:!0,defaultCollapsed:!0,collapsedWidth:0,width:"40%",children:e.jsx(St,{tasks:n,active:!!s.typeId,closeForm:()=>t(p.BASE)})})]})},Bt=u(Z)`
	display: flex;
	width: 100%;
	height: 100%;
`,$t=u(Ot)`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`,Lt=u(d)`
	display: flex;
	gap: 16px;
	width: 100%;
	align-items: center;
	justify-content: center;
	max-width: 619px;
	flex-wrap: wrap;
`,_t=u(Ut)`
	z-index: 999;
	transition: all 0.3s cubic-bezier();
	opacity: ${t=>t.collapsed?0:1};
	background: rgb(211, 211, 211) !important;
	background: linear-gradient(180deg, rgba(211, 211, 211, 1) 63%, rgba(128, 128, 128, 1) 100%) !important;
`,Nt=t=>async({request:s})=>{const a=await s.json();try{return await t.signIn(a),P(p.BASE)}catch(r){return r}},Dt=()=>{const t=F(),s=G(),a=J(),r=n=>{t({email:n.email,password:n.password},{method:"post",encType:"application/json"})};return e.jsxs(e.Fragment,{children:[e.jsxs(c,{name:"sign-in",layout:"vertical",style:{width:"100%"},onFinish:r,children:[!!a&&e.jsx($,{message:a.message||"",type:"error"}),e.jsx(c.Item,{name:"email",label:"Почта пользователя",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(j,{size:"large",type:"email"})}),e.jsx(c.Item,{name:"password",label:"Пароль",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(j.Password,{size:"large",type:"password"})}),e.jsx(c.Item,{style:{textAlign:"center"},children:e.jsx(m,{type:"primary",htmlType:"submit",block:!0,size:"large",loading:s.state=="submitting",children:"Войти"})})]}),e.jsxs(Mt,{align:"center",justify:"space-between",children:[e.jsx(A,{to:p.RESET_PASSWORD,children:"Забыли пароль ?"}),e.jsx(A,{to:p.SIGN_UP,children:"Регистрация"})]})]})},Mt=u(d)`
	width: 100%;
`,qt=t=>async({request:s})=>{const a=await s.json();try{return await t.signUp(a),P(p.BASE)}catch(r){return r}},Wt=()=>{const t=F(),s=G(),a=J(),r=({email:n,password:i})=>{t({email:n,password:i},{method:"post",encType:"application/json"})};return e.jsxs(c,{layout:"vertical",style:{width:"100%"},onFinish:r,children:[!!a&&e.jsx(Gt,{message:a.message||"",type:"error"}),e.jsx(c.Item,{name:"email",label:"Почта",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(j,{size:"large",type:"email"})}),e.jsx(c.Item,{name:"password",label:"Пароль",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(j.Password,{size:"large",type:"password"})}),e.jsx(c.Item,{name:"passwordRepeat",dependencies:["password"],label:"Повторите пароль",rules:[{required:!0,message:b.REQUIRED},({getFieldValue:n})=>({validator(i,o){return!o||n("password")===o?Promise.resolve():Promise.reject(new Error(b.PASSWORD_DUPLICATE))}})],children:e.jsx(j.Password,{size:"large",type:"password"})}),e.jsx(c.Item,{style:{textAlign:"center"},children:e.jsx(m,{type:"primary",htmlType:"submit",block:!0,size:"large",loading:s.state=="submitting",children:"Зарегестрироваться"})})]})},Gt=u($)`
	margin: 10px 0;
`,Jt=t=>async({request:s})=>{const a=await s.json();try{return await t.resetPassword(a),{isSendPasswordEmail:!0}}catch(r){return{error:r}}},Vt=()=>{var r;const t=B(),s=t.state=="submitting",a=({email:n})=>{t.submit({email:n},{method:"post",encType:"application/json"})};return e.jsxs(e.Fragment,{children:[(r=t.data)!=null&&r.isSendPasswordEmail?e.jsx("h1",{children:"Письмо отправлено на email"}):e.jsxs(c,{name:"sign-in",layout:"vertical",style:{width:"100%"},onFinish:a,children:[e.jsx(c.Item,{name:"email",label:"Почта пользователя",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(j,{size:"large",type:"email"})}),e.jsx(c.Item,{style:{textAlign:"center"},children:e.jsx(m,{type:"primary",htmlType:"submit",block:!0,size:"large",loading:s,children:"Сбросить пароль"})})]}),e.jsx(d,{align:"center",justify:"center",children:e.jsx(A,{to:p.SIGN_IN,children:"К форме аторизации"})})]})},Qt=t=>async({request:s})=>{const a=await s.json();try{return await t.updatePassword(a),{updatePassword:!0}}catch(r){return{error:r}}},Yt=()=>{var o;const{data:t,state:s,submit:a}=B(),r=C(),n=s=="submitting";y.useEffect(()=>{t!=null&&t.updatePassword&&(V.info("Пароль успешно обновлен"),r(p.SIGN_IN))},[t]);const i=({password:x})=>{a({password:x},{method:"post",encType:"application/json"})};return e.jsxs(c,{name:"sign-in",layout:"vertical",style:{width:"100%"},onFinish:i,children:[!!(t!=null&&t.error)&&e.jsx($,{message:((o=t==null?void 0:t.error)==null?void 0:o.message)||"",type:"error"}),e.jsx(c.Item,{name:"password",label:"Новый пароль",rules:[{required:!0,message:b.REQUIRED}],children:e.jsx(j.Password,{size:"large",type:"password"})}),e.jsx(c.Item,{name:"passwordRepeat",dependencies:["password"],label:"Повторите пароль",rules:[{required:!0,message:b.REQUIRED},({getFieldValue:x})=>({validator(w,f){return!f||x("password")===f?Promise.resolve():Promise.reject(new Error(b.PASSWORD_DUPLICATE))}})],children:e.jsx(j.Password,{size:"large",type:"password"})}),e.jsx(c.Item,{style:{textAlign:"center"},children:e.jsx(m,{type:"primary",htmlType:"submit",block:!0,size:"large",loading:n,children:"Обновить пароль"})})]})},Ht=()=>{const t=C();return e.jsxs(d,{vertical:!0,flex:1,style:{height:"100%",width:"100%"},children:[e.jsx(d,{children:e.jsx(m,{type:"text",icon:e.jsx(qe,{}),title:"Статистика",onClick:()=>{t(-1)},children:"Назад"})}),e.jsx(mt,{})]})},{Title:Xt}=v,Kt=()=>e.jsx(Zt,{children:e.jsx(Xt,{level:1,children:"О приложении"})}),Zt=u(d)`
	height: 100%;
	width: 100%;
`,es=t=>[{path:p.BASE,loader:xt(t.AuthService),element:e.jsx(gt,{}),action:({request:s,params:a})=>(console.log("a main",s,a),null),children:[{path:"/:typeId?",loader:zt(t),action:D(t),element:e.jsx(Ft,{})},{path:p.STATISTIC,action:D(t),element:e.jsx(Ht,{})}]},{path:p.LOGOUT,action:()=>(t.AuthService.logOut(),ye(p.SIGN_IN))},{path:p.AUTH,loader:Ye(t.AuthService),element:e.jsx(He,{}),children:[{path:p.SIGN_IN,action:Nt(t.AuthService),element:e.jsx(Dt,{})},{path:p.SIGN_UP,action:qt(t.AuthService),element:e.jsx(Wt,{})},{action:Jt(t.AuthService),path:p.RESET_PASSWORD,element:e.jsx(Vt,{})},{action:Qt(t.AuthService),path:p.UPDATE_PASSWORD,element:e.jsx(Yt,{})}]},{path:p.INFO,element:e.jsx(Kt,{})}];class U{constructor(s){l(this,"name");l(this,"message");l(this,"code");this.message=s.message,this.name=s.name,s.code&&(this.code=s.code)}}const ts=()=>he("https://bezykkplqcrsoettxmqn.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlenlra3BscWNyc29ldHR4bXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzMzUxMTUsImV4cCI6MjAyNTkxMTExNX0.vxAZ78i4fJs8x3WYn9W_vxxTMz8DiQuJngbP_upuz40"),z=t=>{if(t instanceof Error)throw new U(t);if(t!=null&&t.code)throw console.log("DataProvider?.checkApiError",t),t};class ss{constructor(s){l(this,"tokenName","sb-bezykkplqcrsoettxmqn-auth-token");l(this,"user",null);l(this,"setUser",s=>{this.user=s});l(this,"signIn",async({email:s,password:a})=>{const{data:r}=await this.provider.signIn({email:s,password:a});return r.user&&this.setUser(r.user),r});l(this,"signUp",async({email:s,password:a})=>{const{data:r,error:n}=await this.provider.signUp({email:s,password:a});if(n)throw pe(n)?{name:"Недопустимый пароль",message:n.message}:{name:n.name,message:n.message};return r.user&&this.setUser(r.user),{data:r}});l(this,"resetPassword",async({email:s})=>{const{data:a}=await this.provider.resetPassword(s);return a});l(this,"updatePassword",async({password:s})=>{const{data:a,error:r}=await this.provider.updatePassword(s);return z(r),{data:a}});l(this,"logOut",()=>{localStorage.removeItem(this.tokenName),this.user=null});this.provider=s,this.checkAuth()}get isAuth(){return!!this.user}get token(){return localStorage.getItem(this.tokenName)}checkAuth(){if(console.log("import.meta.env.VITE_TOKEN_KEY","bezykkplqcrsoettxmqn"),this.token){const s=JSON.parse(this.token);console.log(" token",s),this.user=s.user}}}class as{constructor(s){l(this,"taskTypes",[]);l(this,"userTasks",null);l(this,"commonTasksInfo",null);l(this,"loadTaskType",async()=>{console.log("loadTaskType");const{data:s,error:a}=await this.provider.getTaskTypes();z(a),this.taskTypes=s});l(this,"buildAllUserTasksGroup",()=>{this.taskTypes.forEach(s=>{var a;(a=this.userTasks)!=null&&a[s.id]||(this.userTasks[s.id]=[])})});l(this,"loadUserTasks",async s=>{const{data:a,error:r}=await this.provider.getUserTasks(s);z(r),this.userTasks=a.reduce((n,i)=>(n[i.type_id]?n[i.type_id].push(i):n[i.type_id]=[i],n),{}),this.buildAllUserTasksGroup()});l(this,"getCurrentTypsTasks",s=>{var a;return(a=this.userTasks)==null?void 0:a[s]});l(this,"calcTasksInfo",()=>{!this.taskTypes.length||!this.userTasks||(this.commonTasksInfo=this.taskTypes.reduce((s,a)=>{var r,n,i,o,x,w;return s[a.id]={...a,all:((n=(r=this.userTasks)==null?void 0:r[a.id])==null?void 0:n.length)||0,inWork:((o=(i=this.userTasks)==null?void 0:i[a.id])==null?void 0:o.filter(({status_id:f})=>f===T.active).length)||0},console.log("==>",(w=(x=this.userTasks)==null?void 0:x[a.id])==null?void 0:w.filter(({status_id:f})=>f===T.active)),s},{}))});l(this,"updateCommonTypeInfo",s=>{var a,r,n,i;this.commonTasksInfo&&(this.commonTasksInfo[s]={...this.commonTasksInfo[s],all:((r=(a=this.userTasks)==null?void 0:a[s])==null?void 0:r.length)||0,inWork:((i=(n=this.userTasks)==null?void 0:n[s])==null?void 0:i.filter(({status_id:o})=>o===T.active).length)||0})});l(this,"createTask",async({author_id:s,text:a,type_id:r,status_id:n})=>{var x;const{data:i,error:o}=await this.provider.createTask({author_id:s,text:a,type_id:r,status_id:n});if(o)throw console.log("createTask",o),new U({...o,name:"Не удалость"});return(x=this.userTasks)==null||x[r].push(i[0]),this.updateCommonTypeInfo(r),i});l(this,"delete",async({id:s,type_id:a})=>{var n;const{error:r}=await this.provider.delete(s);if(r)throw console.log("createTask",r),new U({...r,name:"Не удалость"});(n=this.userTasks)!=null&&n[a]&&(this.userTasks[a]=this.userTasks[a].filter(({id:i})=>i!==s),this.updateCommonTypeInfo(a))});this.provider=s}get hasUserTasks(){return!!this.userTasks&&!!Object.keys(this.userTasks).length}}class ns{constructor(s){l(this,"passwordResetUrl","http://localhost:5173/auth/update-password");l(this,"signIn",async({email:s,password:a})=>await this.client.auth.signInWithPassword({email:s,password:a}));l(this,"signUp",async({email:s,password:a})=>await this.client.auth.signUp({email:s,password:a}));l(this,"resetPassword",async s=>await this.client.auth.resetPasswordForEmail(s,{redirectTo:this.passwordResetUrl}));l(this,"updatePassword",async s=>await this.client.auth.updateUser({password:s}));this.client=s}}class rs{constructor(s){l(this,"getTaskTypes",()=>this.client.from("task_types").select("*"));l(this,"getUserTasks",s=>this.client.from("tasks").select("*").eq("author_id",s));l(this,"createTask",s=>this.client.from("tasks").insert(s).select());l(this,"delete",s=>this.client.from("tasks").delete().eq("id",s));this.client=s}}const{useToken:is}=Je,M=ts(),os={AuthService:new ss(new ns(M)),TaskService:new as(new rs(M))},ls=es(os),cs=()=>{const t=we(ls),{token:s}=is();return e.jsx(y.StrictMode,{children:e.jsx(We,{theme:_,children:e.jsxs(xe,{theme:{...s,..._.token},children:[e.jsx(ds,{}),e.jsx(ke,{router:t,fallbackElement:e.jsx(Ge,{})})]})})})},ds=me`
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
`;let S=document.getElementById("root");S||(S=document.createElement("div"),S.id="root",document.body.appendChild(S));ge(S).render(e.jsx(cs,{}));
