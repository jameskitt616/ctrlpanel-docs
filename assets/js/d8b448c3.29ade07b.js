"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[797],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1235:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:5},s="Updating",d={unversionedId:"Installation/updating",id:"Installation/updating",isDocsHomePage:!1,title:"Updating",description:'Users, folders and filenames have been renamed from "dashboard" -> "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.',source:"@site/docs/Installation/updating.md",sourceDirName:"Installation",slug:"/Installation/updating",permalink:"/docs/Installation/updating",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/docs/Installation/updating.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/Installation/troubleshooting"},next:{title:"Updating v0.6.2 to v0.7",permalink:"/docs/Installation/updatingv6-v7"}},c=[{value:"Enable Maintenance Mode",id:"enable-maintenance-mode",children:[]},{value:"Pulling the New Files",id:"pulling-the-new-files",children:[]},{value:"Update Dependencies",id:"update-dependencies",children:[]},{value:"Updating the Database",id:"updating-the-database",children:[]},{value:"Clear Compiled Template Cache",id:"clear-compiled-template-cache",children:[]},{value:"Set Permissions",id:"set-permissions",children:[]},{value:"Restarting Queue Workers",id:"restarting-queue-workers",children:[]},{value:"Disable Maintenance Mode",id:"disable-maintenance-mode",children:[]},{value:"Disclaimer",id:"disclaimer",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating"},"Updating"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Users, folders and filenames have been renamed from "dashboard" -> "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.'))),(0,o.kt)("h3",{id:"enable-maintenance-mode"},"Enable Maintenance Mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/controlpanel\nsudo php artisan down\n")),(0,o.kt)("h3",{id:"pulling-the-new-files"},"Pulling the New Files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo git stash\nsudo git pull\nsudo chmod -R 755 /var/www/controlpanel\n")),(0,o.kt)("h3",{id:"update-dependencies"},"Update Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo composer install --no-dev --optimize-autoloader\n")),(0,o.kt)("h3",{id:"updating-the-database"},"Updating the Database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan migrate --seed --force\n")),(0,o.kt)("h3",{id:"clear-compiled-template-cache"},"Clear Compiled Template Cache"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan view:clear\nsudo php artisan config:clear\n")),(0,o.kt)("h3",{id:"set-permissions"},"Set Permissions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# If using NGINX or Apache (not on CentOS):\nsudo chown -R www-data:www-data /var/www/controlpanel/*\n\n# If using NGINX on CentOS:\nsudo chown -R nginx:nginx /var/www/controlpanel/*\n\n# If using Apache on CentOS\nsudo chown -R apache:apache /var/www/controlpanel/*\n")),(0,o.kt)("h3",{id:"restarting-queue-workers"},"Restarting Queue Workers"),(0,o.kt)("p",null,"After every update you should restart the queue worker to ensure that the new code is loaded in and used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan queue:restart\n")),(0,o.kt)("h3",{id:"disable-maintenance-mode"},"Disable Maintenance Mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan up\n")),(0,o.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"Warning, The dashboard is currently in pre-release and may contain some bugs \ud83d\udc1b ",(0,o.kt)("br",null),"\nUse This dashboard at your own risk."),(0,o.kt)("p",null,"If you notice any bugs or would like something to be improved or added, let us know by making a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ControlPanel-gg/dashboard/issues/new/choose"},"GitHub Issue"),(0,o.kt)("br",null)," for any major security risk contact ",(0,o.kt)("em",{parentName:"p"},"AVMG#1234")))}u.isMDXComponent=!0}}]);