import{r,U as s,R as O,j as e,a as l,k as P,F as j,e as L,S as A,d as F,Q as o}from"./index-0fc7a230.js";function $(){const[E,D]=r.useState([]),[c,n]=r.useState(s),[i,d]=r.useState(""),[m,u]=r.useState(""),[h,f]=r.useState(s),[p,N]=r.useState(""),[v,g]=r.useState(""),[b,C]=r.useState(""),[S,y]=r.useState(""),[w,R]=r.useState(""),[T,q]=r.useState(!1);async function U(a){a.preventDefault(),q(!0);try{const t=await fetch(`${F}/save/user`,{method:"POST",headers:{"Content-Type":"application/javascript"},body:JSON.stringify({role:c,name:i,lastname:m,docType:h,doc:p,email:v,tel:b,password:S,passwordConfirmation:w})}),{error:k,ok:x}=await t.json();return x?(n(s),d(""),u(""),f(s),N(""),g(""),C(""),y(""),R(""),o(x,{position:"top-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):o.error(k)}catch(t){o.error(t)}finally{q(!1)}}return r.useEffect(()=>{document.title="RSystfip | Register new user",fetch(`${O}?resource=documents`).then(a=>a.json()).then(a=>D(a))},[]),e("div",{className:"row",children:e("div",{className:"col-md-6 mx-auto",children:l("div",{className:"card card-body",children:[e("h1",{className:"h3 text-center",children:"Registrar usuario nuevo"}),l("form",{onSubmit:U,className:"row g-3 mt-2",children:[e("div",{className:"col-md-4",children:l("div",{className:"form-floating",children:[l("select",{onChange:a=>n(a.target.value),value:c,className:"form-select",required:!0,children:[e("option",{value:s,disabled:!0,children:"No seleccionado"}),e("option",{value:"2",children:"Rector"}),e("option",{value:"3",children:"Secretaria"})]}),e("label",{className:"form-label",children:"Rol usuario:"})]})}),e("div",{className:"col-md-4",children:l("div",{className:"form-floating",children:[e("input",{onChange:a=>d(a.target.value),value:i,className:"form-control",type:"text",placeholder:"Name",maxLength:"25",spellCheck:"false",autoComplete:"off",required:!0}),e("label",{className:"form-label",children:"Nombres:"})]})}),e("div",{className:"col-md-4",children:l("div",{className:"form-floating",children:[e("input",{onChange:a=>u(a.target.value),value:m,className:"form-control",type:"text",placeholder:"Lastname",maxLength:"25",spellCheck:"false",autoComplete:"off",required:!0}),e("label",{className:"form-label",children:"Apellidos:"})]})}),e("div",{className:"col-md-8",children:l("div",{className:"form-floating",children:[l("select",{onChange:a=>f(a.target.value),value:h,className:"form-select mr-sm-2",required:!0,children:[e("option",{value:s,disabled:!0,children:"No seleccionado"}),E.map((a,t)=>e("option",{value:a.id,children:a.description},t))]}),e("label",{className:"form-label",children:"Tipo de Documento:"})]})}),e("div",{className:"col-md-4",children:l("div",{className:"form-floating",children:[e("input",{onChange:a=>N(a.target.value),value:p,className:"form-control",type:"number",placeholder:"Document",required:!0}),e("label",{className:"form-label",children:"Documento:"})]})}),e("div",{className:"col-md-8",children:l("div",{className:"form-floating",children:[e("input",{onChange:a=>g(a.target.value),value:v,className:"form-control",type:"email",placeholder:"Email",spellCheck:"false",autoComplete:"off",required:!0}),e("label",{className:"form-label",children:"Correo institucional:"})]})}),e("div",{className:"col-md-4",children:l("div",{className:"form-floating",children:[e("input",{onChange:a=>C(a.target.value),value:b,className:"form-control",type:"number",placeholder:"Phone",required:!0}),e("label",{className:"form-label",children:"Número de celular:"})]})}),e("div",{className:"col-md-6",children:l("div",{className:"form-floating",children:[e("input",{onChange:a=>y(a.target.value),value:S,className:"form-control",type:"password",placeholder:"Password",autoComplete:"off",required:!0}),e("label",{className:"form-label",children:"Contraseña:"})]})}),e("div",{className:"col-md-6",children:l("div",{className:"form-floating",children:[e("input",{onChange:a=>R(a.target.value),value:w,className:"form-control",type:"password",placeholder:"Confirm password",autoComplete:"off",required:!0}),e("label",{className:"form-label",children:"Confirmar contraseña:"})]})}),l("div",{className:"col-12",children:[e(P,{}),e("button",{className:"w-100 btn btn-primary btn-lg mb-3",disabled:T,children:T?e(A,{tam:"lg"}):l(j,{children:["Guardar ",e(L,{className:"mb-1"})]})})]})]})]})})})}export{$ as default};
