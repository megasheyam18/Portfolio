import{r as o,u as I,a as L,j as e,L as j}from"./index-DVn2lPRX.js";import{F as y,a as F,b as M,c as E,d as S,e as P,f as R,g as D,h as $,i as B,j as T,k as H,l as k,m as C,n as _,o as w,p as O}from"./certificates-DJ38EmdF.js";import{p as A}from"./projects-CKy3T1yf.js";import{C as V}from"./CustomCursor-BGZVoCPG.js";function z(){const[t,s]=o.useState(!1),[a,i]=o.useState(!1),[n,d]=o.useState("home"),f=I(),u=L();o.useEffect(()=>{const r=()=>{s(window.scrollY>50);const l=["home","about","projects","certifications","contact"],c=window.scrollY+100;for(let m=l.length-1;m>=0;m--){const x=document.getElementById(l[m]);if(x&&x.offsetTop<=c){d(l[m]);break}}};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const h=(r,l)=>{if(r.preventDefault(),i(!1),f.pathname!=="/")u(`/#${l}`),setTimeout(()=>{const c=document.getElementById(l);c&&c.scrollIntoView({behavior:"smooth"})},100);else{const c=document.getElementById(l);c&&c.scrollIntoView({behavior:"smooth"})}},p=[{section:"home",label:"Home"},{section:"about",label:"About"},{section:"projects",label:"Projects"},{section:"certifications",label:"Certifications"},{section:"contact",label:"Contact"}];return e.jsx("nav",{className:`navbar-modern ${t?"scrolled":""}`,id:"navbar",children:e.jsxs("div",{className:"navbar-container",children:[e.jsx(j,{to:"/",className:"nav-logo",children:e.jsx("span",{className:"logo-text",children:"Mega Shyam S"})}),e.jsxs("div",{className:`hamburger ${a?"active":""}`,onClick:()=>i(!a),children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("ul",{className:`nav-menu ${a?"active":""}`,id:"navMenu",children:p.map(r=>e.jsx("li",{className:"nav-item",children:e.jsx("a",{href:`#${r.section}`,className:`nav-link ${n===r.section?"active":""}`,"data-section":r.section,onClick:l=>h(l,r.section),children:r.label})},r.section))})]})})}function J(){return e.jsxs("div",{className:"floating-socials visible",children:[e.jsx("a",{href:"https://www.linkedin.com/in/megashyam/",target:"_blank",rel:"noopener noreferrer",className:"social-btn linkedin",children:e.jsx("i",{className:"fa-brands fa-linkedin-in"})}),e.jsx("a",{href:"https://wa.me/918248627519",target:"_blank",rel:"noopener noreferrer",className:"social-btn whatsapp",children:e.jsx("i",{className:"fa-brands fa-whatsapp"})})]})}function Y(){const[t,s]=o.useState(""),[a,i]=o.useState({repos:0,leetcode:0,techs:0}),[n,d]=o.useState(!1),f=["Mega Sheyam S","Java Full Stack Developer","Backend Developer | Problem Solver"],u=o.useRef(0),h=o.useRef(0),p=o.useRef(!1),r=o.useRef(100);o.useEffect(()=>{d(!0)},[]),o.useEffect(()=>{const c=()=>{const x=f[u.current];p.current?(s(x.substring(0,h.current-1)),h.current--,r.current=60):(s(x.substring(0,h.current+1)),h.current++,r.current=100),!p.current&&h.current===x.length?(p.current=!0,r.current=2500):p.current&&h.current===0&&(p.current=!1,u.current=(u.current+1)%f.length,r.current=800),setTimeout(c,r.current)},m=setTimeout(c,1500);return()=>clearTimeout(m)},[]),o.useEffect(()=>{const m={repos:12,leetcode:150,techs:8},x=Date.now(),v=()=>{const N=Date.now()-x,b=Math.min(N/2e3,1);i({repos:Math.floor(m.repos*b),leetcode:Math.floor(m.leetcode*b),techs:Math.floor(m.techs*b)}),b<1?requestAnimationFrame(v):i(m)};setTimeout(v,500)},[]);const l=["React.js","Node.js","System Design","Backend Development"];return e.jsxs("section",{id:"home",className:"hero container",children:[e.jsxs("div",{className:"hero-center",children:[e.jsx("div",{className:"badge",children:"● AVAILABLE FOR WORK"}),e.jsxs("h1",{children:["Hi, I'm ",e.jsx("span",{className:"typed-text",children:t}),e.jsx("span",{className:"typed-cursor",children:"|"})]}),e.jsx("p",{className:"hero-desc",children:"I build fast, responsive, and user-friendly web applications using modern technologies. Passionate about clean UI, performance optimization, and scalable solutions."})]}),e.jsxs("div",{className:"hero-visuals",children:[e.jsxs("div",{className:"profile-card",children:[e.jsx("div",{className:"profile-image",children:e.jsx("div",{className:"avatar-container",children:e.jsxs("div",{className:"avatar-wrapper",children:[e.jsx("div",{className:"avatar-front",children:e.jsx("img",{src:"/assets/photo.jpg",alt:"Mega Shyam"})}),e.jsx("div",{className:"avatar-back",children:e.jsx("span",{className:"back-text",children:"Technology Leads the World"})})]})})}),e.jsxs("div",{className:"avatar-stats",children:[e.jsxs("div",{className:"stat-mini",children:[e.jsx("span",{className:"stat-number-large",children:a.repos}),e.jsx("span",{className:"stat-label-small",children:"Repositories | "})]}),e.jsxs("div",{className:"stat-mini",children:[e.jsx("span",{className:"stat-number-large",children:a.leetcode}),e.jsx("span",{className:"stat-label-small",children:"LeetCode Problems |"})]}),e.jsxs("div",{className:"stat-mini",children:[e.jsx("span",{className:"stat-number-large",children:a.techs}),e.jsx("span",{className:"stat-label-small",children:"Technologies |"})]})]})]}),e.jsxs("div",{className:"learning-section",children:[e.jsx("h3",{className:"learning-title",children:"Currently Learning"}),e.jsx("div",{className:"learning-tags",children:l.map((c,m)=>e.jsx("span",{className:"learning-tag",children:c},m))})]}),e.jsxs("a",{href:"/assets/Final_resume.pdf",download:"Mega_Shyam_Resume.pdf",className:"btn-download-resume",children:["Download Resume ",e.jsx("i",{className:"fa-solid fa-file-arrow-down"})]})]})]})}const K=[{name:"GitHub",icon:"fa-github",iconType:"brand"},{name:"VS Code",icon:"fa-code",iconType:"solid"},{name:"HTML5",icon:"fa-html5",iconType:"brand"},{name:"CSS3",icon:"fa-css3-alt",iconType:"brand"},{name:"JavaScript",icon:"fa-js",iconType:"brand"},{name:"Java",icon:"fa-java",iconType:"brand"},{name:"Bootstrap",icon:"fa-bootstrap",iconType:"brand"},{name:"SQL",icon:"fa-database",iconType:"solid"},{name:"Vercel",icon:"fa-cloud-arrow-up",iconType:"solid"},{name:"Canva",icon:"fa-palette",iconType:"solid"},{name:"MS Office",icon:"fa-file-word",iconType:"regular"}],q={tools:K};function U(){const t=s=>({"fa-github":e.jsx(T,{}),"fa-code":e.jsx(y,{}),"fa-html5":e.jsx(B,{}),"fa-css3-alt":e.jsx($,{}),"fa-js":e.jsx(D,{}),"fa-java":e.jsx(R,{}),"fa-bootstrap":e.jsx(P,{}),"fa-database":e.jsx(S,{}),"fa-cloud-arrow-up":e.jsx(E,{}),"fa-palette":e.jsx(M,{}),"fa-file-word":e.jsx(F,{})})[`fa-${s.icon}`]||e.jsx(y,{});return e.jsx("section",{id:"tools",className:"tools-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header-tools",children:[e.jsx("h2",{children:"Essential Tools I use"}),e.jsx("p",{children:"Explore the tools and technologies I work with"})]}),e.jsx("div",{className:"tools-grid",children:q.tools.map((s,a)=>e.jsxs("div",{className:"tool-card",children:[e.jsx("div",{className:"tool-icon",children:t(s)}),e.jsx("span",{className:"tool-label",children:s.name})]},a))})]})})}function G(){const t=[{icon:e.jsx(y,{}),text:"Full Stack Development"},{icon:e.jsx(S,{}),text:"Backend & Database"},{icon:e.jsx(H,{}),text:"Problem Solving"}];return e.jsxs("section",{id:"about",className:"about-section container",children:[e.jsxs("div",{className:"section-header-work",children:[e.jsx("h2",{children:"About Me"}),e.jsx("p",{style:{marginTop:"10px",color:"#666"},children:"Get to know me better"})]}),e.jsx("div",{className:"about-content",children:e.jsxs("div",{className:"about-text",children:[e.jsxs("p",{children:["I'm a passionate ",e.jsx("strong",{children:"Java Full Stack Developer"})," with expertise in building end-to-end web applications. I specialize in creating efficient, scalable, and user-friendly solutions."]}),e.jsx("p",{children:"With a strong foundation in both frontend and backend technologies, I enjoy solving complex problems and turning ideas into reality through code."}),e.jsx("div",{className:"about-highlights",children:t.map((s,a)=>e.jsxs("div",{className:"highlight-item",children:[e.jsx("span",{className:"highlight-icon",children:s.icon}),e.jsx("span",{children:s.text})]},a))})]})})]})}function W(){const t=[{icon:"👾",desc:"I design clean, modern, and user-friendly interfaces focused on usability, clarity, and responsiveness across all screen sizes.",title:"UI Design",number:"01"},{icon:"⚡",desc:"I build fast, responsive, and scalable websites using HTML, CSS, and JavaScript with clean structure and performance-focused code.",title:"Web Development",number:"02"},{icon:"📱",desc:"I develop simple and efficient applications with structured logic, smooth UI, and reliable data handling for real-world use.",title:"App Development",number:"03"},{icon:"🗄️",desc:"I work with Java, SQL, and MySQL to build secure backends, manage data, and connect frontend systems with reliable logic.",title:"Backend & Database",number:"04"}],s=a=>({"👾":"pixel-icon","⚡":"code-icon","📱":"design-icon","🗄️":"brand-icon"})[a]||"";return e.jsxs("section",{className:"services container",children:[e.jsx("div",{className:"section-header",children:e.jsxs("h2",{children:["How Can I",e.jsx("br",{}),"Assist You?"]})}),e.jsx("div",{className:"service-grid",children:t.map((a,i)=>e.jsxs("div",{className:"service-card",children:[e.jsx("div",{className:`icon-circle ${s(a.icon)}`,children:a.icon}),e.jsx("p",{children:a.desc}),e.jsxs("div",{className:"card-footer",children:[e.jsx("h3",{children:a.title}),e.jsx("span",{className:"number",children:a.number})]})]},i))})]})}function Q(){const t=[{title:"Software Developer Intern",company:"Coreverse",type:"Internship",period:"Nov 2023 – Mar 2024",description:"Developed DOCORE, a comprehensive school management system using Flutter and Firebase. Contributed to backend logic, robust UI design, and secure authentication workflows.",tags:["Flutter","Firebase"],icon:"fa-laptop-code",iconColor:"#ff7a00"},{title:"GUI Developer Intern",company:"Domain Hostly",type:"Internship",period:"June 2023 – July 2023",description:"Built a billing system using Python Tkinter with SQLite database integration. Utilized NumPy for complex calculation logic and efficient data processing.",tags:["Python","SQLite"],icon:"fa-desktop",iconColor:"#1e88e5"}];return e.jsxs("section",{className:"timeline-section container",children:[e.jsxs("div",{className:"section-header-work",children:[e.jsx("h2",{children:"Experience"}),e.jsx("p",{style:{marginTop:"10px",color:"#666"},children:"A summary of my professional experience"})]}),e.jsx("div",{className:"timeline-container",children:t.map((s,a)=>e.jsxs("div",{className:"timeline-item",children:[e.jsxs("div",{className:"timeline-marker",children:[e.jsx("div",{className:"timeline-icon-box",children:e.jsx("i",{className:`fa-solid ${s.icon}`,style:{color:s.iconColor}})}),e.jsx("div",{className:"timeline-line"})]}),e.jsxs("div",{className:"timeline-content",children:[e.jsxs("div",{className:"timeline-header",children:[e.jsxs("div",{className:"timeline-title",children:[e.jsxs("h3",{children:[s.title," ",e.jsx("span",{className:"timeline-badge",children:s.company})]}),e.jsx("div",{className:"timeline-institution",children:s.type})]}),e.jsx("div",{className:"timeline-year",children:s.period})]}),e.jsx("div",{className:"timeline-body",children:e.jsx("p",{children:s.description})}),e.jsx("div",{className:"timeline-tags",children:s.tags.map((i,n)=>e.jsx("span",{className:"timeline-tag",children:i},n))})]})]},a))})]})}function X(){const t=[{title:"B.Tech Information Technology",institution:"K.S. Rangasamy College of Technology",period:"2021 - 2025",percentage:"80%",description:"Built a strong foundation in programming, data structures, and software development concepts. Gained practical exposure through projects and hands-on labs that strengthened problem-solving and logical thinking.",tags:["Programming","Data Structures","Software Dev"],icon:"fa-laptop-code",iconColor:"#43a047"},{title:"HSC (12th Grade)",institution:"Bharani Vidhyalaya Senior Secondary School (CBSE)",period:"2020 - 2021",percentage:"71.8%",description:"Learned core concepts in Information Technology along with Physics, Chemistry, and Mathematics. Developed analytical thinking and technical interest through structured academic learning.",tags:["Information Technology","Physics","Chemistry","Mathematics","English"],icon:"fa-atom",iconColor:"#fb8c00"},{title:"SSLC (10th Grade)",institution:"Bharani Vidhyalaya Senior Secondary School (CBSE)",period:"2019",percentage:"62.2%",description:"Built a strong academic foundation in Science, Mathematics, Social Science, and English. Developed discipline, logical thinking, and effective communication skills.",tags:["Science","Social Science","Mathematics","English"],icon:"fa-book-open",iconColor:"#8e24aa"}];return e.jsxs("section",{className:"timeline-section container",children:[e.jsxs("div",{className:"section-header-work",children:[e.jsx("h2",{children:"Education"}),e.jsx("p",{style:{marginTop:"10px",color:"#666"},children:"A summary of my academic qualifications"})]}),e.jsx("div",{className:"timeline-container",children:t.map((s,a)=>e.jsxs("div",{className:"timeline-item",children:[e.jsxs("div",{className:"timeline-marker",children:[e.jsx("div",{className:"timeline-icon-box",children:e.jsx("i",{className:`fa-solid ${s.icon}`,style:{color:s.iconColor}})}),e.jsx("div",{className:"timeline-line"})]}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("div",{className:"card-illustration",children:e.jsx("i",{className:`fa-solid ${s.icon}`})}),e.jsxs("div",{className:"timeline-header",children:[e.jsxs("div",{className:"timeline-title",children:[e.jsxs("h3",{children:[s.title," ",e.jsx("span",{className:"timeline-badge",children:s.percentage})]}),e.jsx("div",{className:"timeline-institution",children:s.institution})]}),e.jsx("div",{className:"timeline-year",children:s.period})]}),e.jsx("div",{className:"timeline-body",children:e.jsx("p",{children:s.description})}),e.jsx("div",{className:"timeline-tags",children:s.tags.map((i,n)=>e.jsx("span",{className:"timeline-tag",children:i},n))})]})]},a))})]})}function Z(){const t=A.projects.slice(0,3);return e.jsxs("section",{id:"work",className:"projects-section container",children:[e.jsx("div",{className:"section-header",style:{marginBottom:"40px"},children:e.jsx("h2",{children:"My Projects"})}),e.jsx("div",{className:"projects-grid-modern",children:t.map(s=>e.jsxs(j,{to:s.isComingSoon?"#":`/projects#work-${s.id}`,className:`project-card-modern ${s.isComingSoon?"coming-soon":""}`,style:{backgroundImage:`url('${s.heroImage}')`},children:[e.jsx("div",{className:"card-overlay"}),s.isComingSoon&&e.jsx("div",{className:"coming-soon-badge",children:"Coming Soon"}),e.jsxs("div",{className:"card-content",children:[e.jsx("div",{className:"project-tags-modern",children:s.tags.map((a,i)=>e.jsx("span",{className:"tag-modern",children:a},i))}),e.jsx("h3",{className:"project-title-modern",children:s.title})]}),!s.isComingSoon&&e.jsx("div",{className:"card-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]},s.id))}),e.jsx("div",{className:"see-more-container",children:e.jsxs(j,{to:"/projects",className:"btn btn-see-more",children:["See More ",e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})})]})}function ee({onOpenModal:t}){const s=n=>{t?t(n.pdf,n.title,n.organization):window.open(n.pdf,"_blank")},a=n=>({"fa-github":e.jsx(T,{}),"fa-server":e.jsx(S,{}),"fa-robot":e.jsx(w,{}),"fa-person-chalkboard":e.jsx(w,{}),"fa-leaf":e.jsx(O,{}),"fa-code":e.jsx(y,{}),"fa-file-lines":e.jsx(w,{}),"fa-briefcase":e.jsx(_,{}),"fa-certificate":e.jsx(C,{})})[n]||e.jsx(C,{}),i=k.certificates.slice(0,4);return e.jsxs("section",{id:"certifications",className:"certificate-section-modern container",children:[e.jsxs("div",{className:"section-header-modern",children:[e.jsx("h2",{className:"section-title-modern",children:"My Certification Journey"}),e.jsx("p",{className:"section-subtitle-modern",children:"Certifications that showcase my skills, learning, and professional growth"})]}),e.jsx("div",{className:"certificate-grid-modern",children:i.map((n,d)=>e.jsxs("div",{className:"certificate-card-modern",onClick:()=>s(n),children:[e.jsxs("div",{className:"card-top-bar-new",children:[e.jsxs("div",{className:"cert-header-left",children:[e.jsxs("h3",{className:"cert-title-new",children:[n.title," ",e.jsxs("span",{className:"cert-hashtag",children:["#",d+1]})]}),e.jsx("p",{className:"cert-platform-new",children:n.organization})]}),e.jsx("div",{className:"cert-icon-container",children:e.jsx("span",{style:{color:n.iconColor},children:a(n.icon)})})]}),e.jsx("div",{className:"cert-image-container",children:e.jsx("img",{src:n.image,alt:`${n.title} Certificate`})})]},n.id))}),k.certificates.length>4&&e.jsx("div",{className:"see-more-container",children:e.jsxs(j,{to:"/certificates",className:"btn btn-see-more",children:["See More ",e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})})]})}const se=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,s)=>Promise.resolve(localStorage.setItem(t,s)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},de={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:se()};function ae(){const[t,s]=o.useState({name:"",email:"",message:""}),[a,i]=o.useState(!1),[n,d]=o.useState(null),f=o.useRef(),u=r=>{const{name:l,value:c}=r.target;s(m=>({...m,[l]:c}))},h=(r,l=!1)=>{d({message:r,isError:l}),setTimeout(()=>d(null),4e3)},p=async r=>{if(r.preventDefault(),!t.name||!t.email||!t.message){h("Please fill in all fields",!0);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)){h("Please enter a valid email address",!0);return}i(!0);try{const c="service_portfolio",m="template_contact";if("YOUR_PUBLIC_KEY"==="YOUR_PUBLIC_KEY"){const v=encodeURIComponent(`Portfolio Contact from ${t.name}`),N=encodeURIComponent(`Name: ${t.name}
Email: ${t.email}

Message:
${t.message}`),b=`mailto:megashyam@gmail.com?subject=${v}&body=${N}`;window.open(b,"_blank"),h("Opening your email client to send the message..."),s({name:"",email:"",message:""})}}catch(c){console.error("EmailJS Error:",c),h("Failed to send message. Please try again or email me directly at megashyam@gmail.com",!0)}finally{i(!1)}};return e.jsxs("section",{id:"contact",className:"contact-section",children:[n&&e.jsxs("div",{className:"toast-notification",style:{background:n.isError?"linear-gradient(135deg, #ff6b6b, #c62828)":"linear-gradient(135deg, #43a047, #2e7d32)"},children:[e.jsx("i",{className:`fa-solid ${n.isError?"fa-circle-exclamation":"fa-circle-check"}`}),e.jsx("span",{children:n.message})]}),e.jsxs("div",{className:"contact-container",children:[e.jsx("h2",{children:"Contact with me to sizzle your project"}),e.jsx("p",{children:"Feel free to contact me if having any questions. I'm available for new projects or just for chatting."}),e.jsxs("form",{ref:f,className:"contact-form",id:"contactForm",onSubmit:p,children:[e.jsxs("div",{className:"form-row",children:[e.jsx("input",{type:"text",id:"contactName",name:"name",placeholder:"Your Name",value:t.name,onChange:u,required:!0}),e.jsx("input",{type:"email",id:"contactEmail",name:"email",placeholder:"Your Email",value:t.email,onChange:u,required:!0})]}),e.jsx("textarea",{id:"contactMessage",name:"message",placeholder:"Tell me about your project or just say hi!",rows:"5",value:t.message,onChange:u,required:!0}),e.jsx("button",{type:"submit",className:"btn btn-dark full-width",disabled:a,children:a?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," Sending..."]}):e.jsxs(e.Fragment,{children:["Send Message ",e.jsx("i",{className:"fa-solid fa-paper-plane"})]})})]})]})]})}function te(){const t=o.useMemo(()=>{const a=[];for(let d=0;d<8;d++)for(let f=0;f<20;f++)a.push({left:`${f/19*100}%`,top:`${d/7*100}%`,delay:`${Math.random()*3}s`,duration:`${2+Math.random()*2}s`});return a},[]),s=new Date().getFullYear();return e.jsxs("footer",{className:"footer-section",children:[e.jsx("div",{className:"footer-dot-grid",children:t.map((a,i)=>e.jsx("div",{className:"footer-dot",style:{left:a.left,top:a.top,animationDelay:a.delay,animationDuration:a.duration}},i))}),e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"footer-main",children:[e.jsxs("div",{className:"footer-brand",children:[e.jsx("span",{className:"logo-text",children:"Mega Shyam S"}),e.jsx("p",{className:"footer-tagline",children:"Java Full Stack Developer"})]}),e.jsxs("div",{className:"footer-links",children:[e.jsxs("div",{className:"footer-column",children:[e.jsx("h4",{children:"Sitemap"}),e.jsx(j,{to:"/",children:"Home"}),e.jsx(j,{to:"/#about",children:"About"}),e.jsx(j,{to:"/projects",children:"Projects"}),e.jsx(j,{to:"/certificates",children:"Certifications"}),e.jsx(j,{to:"/#contact",children:"Contact"})]}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h4",{children:"Connect"}),e.jsx("a",{href:"https://www.linkedin.com/in/megashyam/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),e.jsx("a",{href:"https://wa.me/918248627519",target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"}),e.jsx("a",{href:"mailto:megashyam1633@gmail.com",children:"Email"})]})]})]}),e.jsxs("div",{className:"footer-bottom",children:[e.jsxs("p",{children:[" ",s," Mega Shyam S. All rights reserved."]}),e.jsx("p",{children:"Built with passion and code"})]})]}),e.jsx("style",{children:`
        .footer-section {
          position: relative;
          background: #111;
          padding: 60px 0 30px;
          overflow: hidden;
        }

        .footer-dot-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .footer-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 0, 0, 0.3);
          border-radius: 50%;
          animation: dotPulse 3s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% {
           
            transform: scale(1);
          }
          50% {
            
            transform: scale(1.2);
          }
        }

        .footer-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand .logo-text {
          font-family: 'Allura', cursive;
          font-size: 28px;
          color: #fff;
          background: linear-gradient(90deg, #1e88e5, #8e24aa);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
          color: #888;
          margin-top: 8px;
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 60px;
        }

        .footer-column h4 {
          color: #fff;
          font-size: 1rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .footer-column a {
          display: block;
          color: #888;
          text-decoration: none;
          margin-bottom: 10px;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-column a:hover {
          color: #ff0000;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-bottom p {
          color: #666;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .footer-main {
            flex-direction: column;
          }
          
          .footer-links {
            gap: 40px;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}function ie({isOpen:t,onClose:s,certData:a}){return o.useEffect(()=>{const i=n=>{n.key==="Escape"&&s()};return t&&(document.addEventListener("keydown",i),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",i),document.body.style.overflow=""}},[t,s]),!t||!a?null:e.jsxs("div",{className:`certificate-modal ${t?"active":""}`,children:[e.jsx("div",{className:"modal-overlay",onClick:s}),e.jsxs("div",{className:"modal-content",children:[e.jsx("button",{className:"modal-close",onClick:s,children:"×"}),e.jsxs("div",{className:"modal-certificate",children:[e.jsx("img",{src:a.image,alt:a.title}),e.jsxs("div",{className:"modal-cert-info",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.organization})]})]})]})]})}function ne({onComplete:t}){const[s,a]=o.useState(!1);return o.useEffect(()=>{const i=setTimeout(()=>{a(!0),setTimeout(()=>{t&&t()},800)},2e3);return()=>clearTimeout(i)},[t]),e.jsxs("div",{className:`loading-screen ${s?"fade-out":""}`,children:[e.jsxs("div",{className:"loading-content",children:[e.jsxs("div",{className:"loading-dots",children:[e.jsx("div",{className:"dot"}),e.jsx("div",{className:"dot"})]}),e.jsx("span",{className:"loading-text",children:"LOADING"})]}),e.jsx("style",{children:`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ff7a00, #ff8f33);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.5s ease;
          pointer-events: none;
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .loading-dots {
          display: flex;
          gap: 15px;
        }

        .dot {
          width: 20px;
          height: 20px;
          background: #fff;
          border-radius: 4px;
          animation: pulse 1s ease-in-out infinite;
        }

        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loading-text {
          color: #fff;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 8px;
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 1;
          }
          50% { 
            transform: scale(0.8); 
            opacity: 0.7;
          }
        }

        .loading-screen.fade-out {
          animation: fadeOut 0.8s ease forwards;
          pointer-events: none;
          visibility: hidden;
          display: none;
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; visibility: hidden; }
        }
      `})]})}function g({children:t,delay:s=0,direction:a="up"}){const[i,n]=o.useState(!1),d=o.useRef(null);o.useEffect(()=>{const u=setTimeout(()=>{n(!0)},s);return()=>clearTimeout(u)},[s]);const f=()=>i?"translateY(0)":a==="up"?"translateY(30px)":a==="down"?"translateY(-30px)":a==="left"?"translateX(30px)":a==="right"?"translateX(-30px)":"translateY(30px)";return e.jsx("div",{ref:d,className:`fade-in-section ${i?"visible":""}`,style:{opacity:i?1:0,transform:f(),transition:"opacity 0.6s ease-out, transform 0.6s ease-out",minHeight:"1px"},children:t})}function me(){const[t,s]=o.useState(null),[a,i]=o.useState(!1),[n,d]=o.useState(!0),f=(p,r,l)=>{const c=`/assets/Cerfectiate/${r.toLowerCase().replace(/\s+/g,"-")}.png`;s({image:c,title:r,organization:l,pdf:p}),i(!0)},u=()=>{i(!1),s(null)},h=()=>{d(!1)};return e.jsxs(e.Fragment,{children:[n&&e.jsx(ne,{onComplete:h}),e.jsx(V,{}),e.jsx(ie,{isOpen:a,onClose:u,certData:t}),e.jsx(z,{}),e.jsx(J,{}),e.jsx(g,{delay:100,children:e.jsx(Y,{})}),e.jsx(g,{delay:100,children:e.jsx(U,{})}),e.jsx(g,{delay:300,children:e.jsx(G,{})}),e.jsx(g,{delay:400,children:e.jsx(W,{})}),e.jsx(g,{delay:500,children:e.jsx(Q,{})}),e.jsx(g,{delay:600,children:e.jsx(X,{})}),e.jsx(g,{delay:700,children:e.jsx(Z,{})}),e.jsx(g,{delay:800,children:e.jsx(ee,{onOpenModal:f})}),e.jsx(g,{delay:900,children:e.jsx(ae,{})}),e.jsx(te,{})]})}export{me as default};
