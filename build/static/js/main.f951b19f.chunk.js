(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(50)},38:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(5),r=a(6),c=a(7),o=a(3),i=a(1),s=a.n(i),m=a(29),u=a.n(m),p=(a(38),a(21)),d=a.n(p),f=a(32),E=a(16),g=a(2),h=a(17);function v(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var b=function(e){Object(r.a)(a,e);var t=v(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).menuTrigger=l.menuTrigger.bind(Object(E.a)(l)),l.CLoseMenuTrigger=l.CLoseMenuTrigger.bind(Object(E.a)(l)),window.addEventListener("load",function(){console.log("All assets are loaded")}),l}return Object(l.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"render",value:function(){var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var a,n=this.props,l=n.logo,r=n.color,c=void 0===r?"default-color":r;a="light"===l?s.a.createElement("img",{src:"/assets/images/logo/logo-light.png",alt:"Digital Agency"}):"dark"===l?s.a.createElement("img",{src:"/assets/images/logo/logo-dark.png",alt:"Digital Agency"}):"symbol-dark"===l?s.a.createElement("img",{src:"/assets/images/logo/logo-symbol-dark.png",alt:"Digital Agency"}):"symbol-light"===l?s.a.createElement("img",{src:"/assets/images/logo/logo-symbol-light.png",alt:"Digital Agency"}):s.a.createElement("img",{src:"/assets/images/logo/logo.png",width:"240",alt:"Digital Agency"});var o=s.a.createElement("nav",{className:"mainmenunav d-lg-block"},s.a.createElement("ul",{className:"mainmenu"},s.a.createElement("li",{className:"has-droupdown"},s.a.createElement(g.b,{to:"#"},"Home"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(g.b,{to:"/main-demo"},"Main Demo")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/dark-main-demo"},"Main Demo Dark")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/creative-agency"},"Creative Agency")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/creative-landing"},"Creative One Page")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/creative-portfolio"},"Creative Portfolio")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/personal-portfolio"},"Personal Portfolio")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/portfolio-landing"},"Portfolio One Page")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/dark-portfolio-landing"},"Portfolio One Page 02")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/digital-agency"},"Digital Agency")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/startup"},"Startup")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/paralax"},"Paralax")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/portfolio-home"},"Minimal Portfolio")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/business"},"Business")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/home-particles"},"Home Particles")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/studio-agency"},"Studio Agency")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/designer-portfolio"},"Designer Portfolio")))),s.a.createElement("li",{className:"has-droupdown"},s.a.createElement(g.b,{to:"/service"},"Service"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(g.b,{to:"/service"},"Service")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/service-details"},"Service Details")))),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/about"},"About")),s.a.createElement("li",{className:"has-droupdown"},s.a.createElement(g.b,{to:"#pages"},"Pages"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(g.b,{to:"/blog"},"Blog List")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/blog-details"},"Blog Details")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/service"},"Service")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/service-details"},"Service Details")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/portfolio"},"Portfolio")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/portfolio-details"},"Portfolio Details")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/404"},"404")))),s.a.createElement("li",{className:"has-droupdown"},s.a.createElement(g.b,{to:"#"},"Blocks"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(g.b,{to:"/portfolio"},"Portfolio")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/team"},"Team")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/service"},"Service")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/video-popup"},"Video Popup")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/progressbar"},"Progressbar")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/gallery"},"Gallery")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/counters"},"Counters")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/blog"},"Blog List")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/clint-logo"},"Clint Logo")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/contact-form"},"Contact Form")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/google-map"},"Google Map")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/columns"},"Columns")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/pricing-table"},"Pricing Table")))),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/contact"},"Contact"))));return!1===this.props.useNavLinks&&(o=null),s.a.createElement("header",{className:"header-area formobile-menu header--transparent ".concat(c)},s.a.createElement("div",{className:"header-wrapper",id:"header-wrapper"},s.a.createElement("div",{className:"header-left"},s.a.createElement("div",{className:"logo"},s.a.createElement("a",{href:"/"},a))),s.a.createElement("div",{className:"header-right"},o,s.a.createElement("div",{className:"header-btn"},s.a.createElement("a",{className:"rn-btn",href:"https://docs.google.com/forms/d/e/1FAIpQLSco5Phck0Pg2sT4g0aWCjta78dVGARrgAFGsjIu60uCM9uTpw/viewform?usp=sf_link",target:"_blank"},s.a.createElement("span",null,"Apply for the F21 cohort"))),s.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},s.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},s.a.createElement(h.b,null))),s.a.createElement("div",{className:"close-menu d-block d-lg-none"},s.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},s.a.createElement(h.c,null))))))}}]),a}(i.Component),y=a(11);function N(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var w=[{Social:s.a.createElement(y.a,null),link:"https://www.facebook.com/cornelldti"},{Social:s.a.createElement(y.c,null),link:"https://www.linkedin.com/company/cornelldti/about/"},{Social:s.a.createElement(y.b,null),link:"https://www.instagram.com/cornelldti/"}],k=function(e){Object(r.a)(a,e);var t=N(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("footer",{className:"footer-area"},s.a.createElement("div",{className:"footer-wrapper"},s.a.createElement("div",{className:"row align-items-end row--0"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"footer-left"},s.a.createElement("div",{className:"inner"},s.a.createElement("span",null,"Deadline: Sept. 19 at 11:59 PM"),s.a.createElement("h2",null,"Become a ",s.a.createElement("br",null)," Propellian"),s.a.createElement("a",{className:"rn-button-style--2",href:"https://docs.google.com/forms/d/e/1FAIpQLSco5Phck0Pg2sT4g0aWCjta78dVGARrgAFGsjIu60uCM9uTpw/viewform?usp=sf_link",target:"_blank"},s.a.createElement("span",null,"Apply Now"))))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"footer-right","data-black-overlay":"6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-sm-6 col-12"},s.a.createElement("div",{className:"footer-link"},s.a.createElement("h4",null,"Quick Link"),s.a.createElement("ul",{className:"ft-link"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.cornelldti.org/",target:"_blank",rel:"noopener noreferrer"},"Cornell DTI")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSco5Phck0Pg2sT4g0aWCjta78dVGARrgAFGsjIu60uCM9uTpw/viewform?usp=sf_link",target:"_blank",rel:"noopener noreferrer"},"Applications"))))),s.a.createElement("div",{className:"col-lg-6 col-sm-6 col-12 mt_mobile--30"},s.a.createElement("div",{className:"footer-link"},s.a.createElement("h4",null,"Say Hello"),s.a.createElement("ul",{className:"ft-link"},s.a.createElement("li",null,s.a.createElement("a",{href:"mailto:hello@cornelldti.org",target:"_blank",rel:"noopener noreferrer"},"Contact Cornell DTI")),s.a.createElement("li",null,s.a.createElement("a",{href:"mailto:ac2677@cornell.edu",target:"_blank",rel:"noopener noreferrer"},"Contact Program Manager"))),s.a.createElement("div",{className:"social-share-inner"},s.a.createElement("ul",{className:"social-share social-style--2 d-flex justify-content-start liststyle mt--15"},w.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("a",{href:"".concat(e.link),target:"_blank",rel:"noopener noreferrer"},e.Social))}))))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"copyright-text"},s.a.createElement("p",null,"Copyright \xa9 2021 Cornell DTI. All Rights Reserved. The word 'Propellian' is licensed from Little Fu Co."))))))))))}}]),a}(i.Component);function j(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var O=[{icon:s.a.createElement(y.e,null),title:"Ideation",description:"We know you have great ideas! We want to help you find the best ones through user and market research."},{icon:s.a.createElement(y.g,null),title:"Building",description:"Creating a scalable product can be hard sometimes. We will provide you with the resources and assistance to help make it happen."},{icon:s.a.createElement(y.d,null),title:"Launch",description:"We want to provide you with the opportunity to pitch to industry experts, entrepreneurs, professors, mentors, and project team leads."}],R=function(e){Object(r.a)(a,e);var t=j(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row"},O.map(function(e,t){return s.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12",key:t},s.a.createElement("div",{className:"service service__style--2"},s.a.createElement("div",{className:"icon"},e.icon),s.a.createElement("div",{className:"content"},s.a.createElement("h4",{className:"title"},e.title),s.a.createElement("p",null,e.description))))})))}}]),a}(i.Component);function P(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var C=function(e){Object(r.a)(a,e);var t=P(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"slider-activation active-dark"},s.a.createElement("div",{className:"slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1","data-black-overlay":"6"},s.a.createElement("div",{className:"container position-relative"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"inner"},s.a.createElement("h1",{className:"title theme-gradient"},"A campus ",s.a.createElement("br",null)," incubator \ud83d\ude80 ")))),s.a.createElement("div",{className:"service-wrapper service-white"},s.a.createElement(R,null)))))}}]),a}(i.Component),D=a(19);function S(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var x=[{icon:s.a.createElement(D.c,null),title:"Funding",description:"Propel will provide each team with $250 in reimbursements towards expenses in building your product."},{icon:s.a.createElement(D.a,null),title:"Mentorship",description:"Each project group will pair with one mentor from DTI who will be specified in different areas of the product development cycle and serve as guidance."},{icon:s.a.createElement(D.d,null),title:"Networking Opportunities",description:"Propellians will have access to contacts from our monthly industry speakers and project feedback from experts specialized in product development."},{icon:s.a.createElement(D.b,null),title:"Credits",description:"Each Propellian has the option to receive 2 credits s/u as INFO 1998 for being a part of the program."}],A=function(e){Object(r.a)(a,e);var t=S(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4 col-12"},s.a.createElement("div",{className:"section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10"},s.a.createElement("h2",{className:"title"},"Rocket Fuel"),s.a.createElement("p",null,"Here's how Propel plans on helping you launch your product."),s.a.createElement("div",{className:"service-btn"},s.a.createElement("a",{className:"btn-transparent rn-btn-dark",href:"mailto:ac2677@cornell.edu"},s.a.createElement("span",{className:"text"},"Have questions? Contact Us"))))),s.a.createElement("div",{className:"col-lg-8 col-12 mt_md--50"},s.a.createElement("div",{className:"row service-one-wrapper"},x.map(function(e,t){return s.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-12",key:t},s.a.createElement("a",null,s.a.createElement("div",{className:"service service__style--2"},s.a.createElement("div",{className:"icon"},e.icon),s.a.createElement("div",{className:"content"},s.a.createElement("h3",{className:"title"},e.title),s.a.createElement("p",null,e.description)))))})))))}}]),a}(i.Component),T=a(14);function _(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var I=function(e){Object(r.a)(a,e);var t=_(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(T.d,null,s.a.createElement(T.c,null,s.a.createElement("div",{className:"rn-testimonial-content text-center"},s.a.createElement("div",{className:"inner"},s.a.createElement("p",null,"Propel was my introduction to the possibilities of building a product from the ground up. With the support of the instructors and mentors, my team and I were able to hit the ground running with all of our crazy ideas.")),s.a.createElement("div",{className:"author-info"},s.a.createElement("h6",null,s.a.createElement("span",null,"Angela Chen ")," - Pacts, Propel F20")))),s.a.createElement(T.c,null,s.a.createElement("div",{className:"rn-testimonial-content text-center"},s.a.createElement("div",{className:"inner"},s.a.createElement("p",null,"I was just starting to explore product management when I found out about Propel and joining was the best choice I made my senior year -- our product ultimately became integrated into DTI as a pocket project.")),s.a.createElement("div",{className:"author-info"},s.a.createElement("h6",null,s.a.createElement("span",null,"Mia and Haley ")," - Roommates, Propel F20")))),s.a.createElement(T.c,null,s.a.createElement("div",{className:"rn-testimonial-content text-center"},s.a.createElement("div",{className:"inner"},s.a.createElement("p",null,"Propel has given me a safe space to explore the product development cycle and, most importantly to me, what it actually means to be a product manager.")),s.a.createElement("div",{className:"author-info"},s.a.createElement("h6",null,s.a.createElement("span",null,"Alyssa and Gordon ")," - Shower Power, Propel F20")))),s.a.createElement(T.c,null,s.a.createElement("div",{className:"rn-testimonial-content text-center"},s.a.createElement("div",{className:"inner"},s.a.createElement("p",null,"Propel was a great experience for our team. It provided us with the resources needed to start developing our product. We had lots of fun and were able to learn a lot about product design, management, pitching, and much more.")),s.a.createElement("div",{className:"author-info"},s.a.createElement("h6",null,s.a.createElement("span",null,"Cornell GO ")," - Propel F20")))),s.a.createElement(T.b,{className:"testimonial-thumb-wrapper"},s.a.createElement(T.a,null,s.a.createElement("div",{className:"testimonial-thumbnai"},s.a.createElement("div",{className:"thumb"},s.a.createElement("img",{src:"/assets/images/client/testimonial-1.png",alt:"Testimonial Images"})))),s.a.createElement(T.a,null,s.a.createElement("div",{className:"testimonial-thumbnai"},s.a.createElement("div",{className:"thumb"},s.a.createElement("img",{src:"/assets/images/client/testimonial-2.png",alt:"Testimonial Images"})))),s.a.createElement(T.a,null,s.a.createElement("div",{className:"testimonial-thumbnai"},s.a.createElement("div",{className:"thumb"},s.a.createElement("img",{src:"/assets/images/client/testimonial-3.png",alt:"Testimonial Images"})))),s.a.createElement(T.a,null,s.a.createElement("div",{className:"testimonial-thumbnai"},s.a.createElement("div",{className:"thumb"},s.a.createElement("img",{src:"/assets/images/client/testimonial-4.png",alt:"Testimonial Images"})))))))))}}]),a}(i.Component);function F(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var L=function(e){Object(r.a)(a,e);var t=F(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"about-wrapper"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row row--35 align-items-center pt-5"},s.a.createElement("div",{className:"col-lg-5"},s.a.createElement("div",{className:"thumbnail"},s.a.createElement("img",{className:"w-100",src:"/assets/images/about/about-3.jpg",alt:"About Images"}))),s.a.createElement("div",{className:"col-lg-7 col-md-12"},s.a.createElement("div",{className:"about-inner inner"},s.a.createElement("div",{className:"section-title"},s.a.createElement("h2",{className:"title"},"About"),s.a.createElement("p",{className:"description"},"Propel is an incubator program devoted to student ideas. At Propel, we will provide resources, networking opportunities, and mentorship for Cornell students to build and scale their project ideas from ideation to launch. ")),s.a.createElement("div",{className:"row mt--30 mt_sm--10"},s.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12 col-12"},s.a.createElement("div",{className:"about-us-list"},s.a.createElement("h3",{className:"title"},"Who we are"),s.a.createElement("p",null,"Propel is a student-run initiative program by Cornell Design & Tech Initiative."))),s.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12 col-12"},s.a.createElement("div",{className:"about-us-list"},s.a.createElement("h3",{className:"title"},"How we work"),s.a.createElement("p",null,"Applicants will work interdisciplinary in groups of 1-4 on a project for the semester in developing their technical and entrepreneurial skills."))))))))))}}]),a}(i.Component),W=a(31);function M(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var B=function(e){Object(r.a)(a,e);var t=M(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(W.Helmet,null,s.a.createElement("title",null,this.props.pageTitle),s.a.createElement("meta",{name:"description",content:"Propel is an incubator program devoted to student ideas. At Propel, we will provide resources, networking opportunities, and mentorship for Cornell students to build and scale their project ideas from ideation to launch."})))}}]),a}(i.Component);function G(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var H=function(e){Object(r.a)(a,e);var t=G(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(B,{pageTitle:"DTI Propel"}),s.a.createElement(b,{headertransparent:"header--transparent",colorblack:"color--black",logoname:"logo.png",useNavLinks:!1}),s.a.createElement("div",{className:"slider-wrapper"},s.a.createElement(C,null)),s.a.createElement("div",{className:"about-area about-position-top pb--120 bg-white"},s.a.createElement(L,null)),s.a.createElement("div",{className:"service-area ptb--80  bg_image bg_image--3"},s.a.createElement("div",{className:"container"},s.a.createElement(A,null))),s.a.createElement("div",{className:"testimonial-thumb-wrapper pb--120 pt--120"},s.a.createElement(I,null)),s.a.createElement("div",{className:"backto-top"},s.a.createElement(d.a,{showUnder:160},s.a.createElement(f.a,null))),s.a.createElement(k,null))}}]),a}(i.Component);function U(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}i.Component;var q=[{Social:s.a.createElement(y.a,null),link:"https://www.facebook.com/"},{Social:s.a.createElement(y.c,null),link:"https://www.linkedin.com/"},{Social:s.a.createElement(y.b,null),link:"https://www.instagram.com/"},{Social:s.a.createElement(y.f,null),link:"https://twitter.com/"}],Q=function(){return s.a.createElement("div",{className:"footer-style-2 ptb--30 bg_image bg_image--1","data-black-overlay":"6"},s.a.createElement("div",{className:"wrapper plr--50 plr_sm--20"},s.a.createElement("div",{className:"row align-items-center justify-content-between"},s.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},s.a.createElement("div",{className:"inner"},s.a.createElement("div",{className:"logo text-center text-sm-left mb_sm--20"},s.a.createElement("a",{href:"/home-one"},s.a.createElement("img",{src:"/assets/images/logo/logo.png",alt:"Logo images"}))))),s.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},s.a.createElement("div",{className:"inner text-center"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},q.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("a",{href:"".concat(e.link)},e.Social))})))),s.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12"},s.a.createElement("div",{className:"inner text-lg-right text-center mt_md--20 mt_sm--20"},s.a.createElement("div",{className:"text"},s.a.createElement("p",null,"Copyright \xa9 2020 Rainbow-Themes. All Rights Reserved.")))))))};function V(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var z=function(e){Object(r.a)(a,e);var t=V(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"error-page-inner bg_color--4"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"inner"},s.a.createElement("h1",{className:"title theme-gradient"},"404!"),s.a.createElement("h3",{className:"sub-title"},"Page not found"),s.a.createElement("span",null,"The page you were looking for could not be found."),s.a.createElement("div",{className:"error-button"},s.a.createElement("a",{className:"rn-button-style--2 btn-solid",href:"/"},"Back To Homepage"))))))),s.a.createElement("div",{className:"backto-top"},s.a.createElement(d.a,{showUnder:160},s.a.createElement(h.a,null))),s.a.createElement(Q,null))}}]),a}(i.Component),J=a(8),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function X(e){return function(){var t,a=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var Y=function(e){Object(r.a)(a,e);var t=X(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(g.a,{basename:"/"},s.a.createElement(J.c,null,s.a.createElement(J.a,{exact:!0,path:"".concat("","/"),component:H}),s.a.createElement(J.a,{path:"".concat("","/404"),component:z}),s.a.createElement(J.a,{component:z})))}}]),a}(i.Component);u.a.render(s.a.createElement(Y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");$?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):K(t,e)})}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.f951b19f.chunk.js.map