"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[151],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3873:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),o=t(6010);const r="tableOfContentsInline_0DDH";function l(e){let{toc:n,isChild:t}=e;return n.length?a.createElement("ul",{className:t?"":"table-of-contents"},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(l,{isChild:!0,toc:e.children}))))):null}const i=function(e){let{toc:n}=e;return a.createElement("div",{className:(0,o.Z)(r)},a.createElement(l,{toc:n}))}},2396:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(7462),o=(t(7294),t(3905)),r=t(3873);const l={sidebar_position:4},i="Uninstallation",s={unversionedId:"Guides/uninstallation",id:"version-0.8/Guides/uninstallation",isDocsHomePage:!1,title:"Uninstallation",description:'Users, folders and filenames have been renamed from "dashboard" \u21d2 "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.',source:"@site/versioned_docs/version-0.8/Guides/uninstallation.md",sourceDirName:"Guides",slug:"/Guides/uninstallation",permalink:"/docs/Guides/uninstallation",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/versioned_docs/version-0.8/Guides/uninstallation.md",version:"0.8",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.8/tutorialSidebar",previous:{title:"Adding translation Files",permalink:"/docs/Guides/translation"}},c=[{value:"Stop everything",id:"stop-everything",children:[]},{value:"Remove",id:"remove",children:[{value:"Service and cronjob",id:"service-and-cronjob",children:[]},{value:"Webconfig and SSL certificates",id:"webconfig-and-ssl-certificates",children:[]},{value:"Database and User",id:"database-and-user",children:[]},{value:"Files",id:"files",children:[]},{value:"Extra Dependency",id:"extra-dependency",children:[]},{value:"Pterodactyl API Key",id:"pterodactyl-api-key",children:[]}]}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uninstallation"},"Uninstallation"),(0,o.kt)("p",null,'Users, folders and filenames have been renamed from "dashboard" \u21d2 "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.'),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You will loose all data that you have stored in your ControlPanel.\nNote: This will only work if you followed our documentation, you might need to modify the commands to fit your installation."))),(0,o.kt)(r.Z,{toc:c,mdxType:"TOCInline"}),(0,o.kt)("h3",{id:"stop-everything"},"Stop everything"),(0,o.kt)("p",null,"You need to stop controlpanel and all of its services before you can uninstall it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/controlpanel\nsudo php artisan down\n\nsudo systemctl stop controlpanel\n")),(0,o.kt)("h2",{id:"remove"},"Remove"),(0,o.kt)("h3",{id:"service-and-cronjob"},"Service and cronjob"),(0,o.kt)("p",null,"You have to stop and remove the service and cronjob."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop controlpanel\nsudo systemctl disable controlpanel\nsudo rm /etc/systemd/system/controlpanel.service\nsudo systemctl daemon-reload\nsudo systemctl reset-failed\n")),(0,o.kt)("p",null,"To open the crontab run: ",(0,o.kt)("inlineCode",{parentName:"p"},"crontab -e")," and remove the following configuration from crontab."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"* * * * * php /var/www/controlpanel/artisan schedule:run >> /dev/null 2>&1\n")),(0,o.kt)("h3",{id:"webconfig-and-ssl-certificates"},"Webconfig and SSL certificates"),(0,o.kt)("p",null,"You now have to remove the webconfig and restart it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# NGINX\nsudo unlink /etc/nginx/sites-enabled/controlpanel.conf\nsudo rm /etc/nginx/sites-available/controlpanel.conf\nsudo systemctl reload nginx\n# Apache2\nsudo a2dissite controlpanel.conf\nsudo rm /etc/apache2/sites-available/controlpanel.conf\nsudo systemctl reload apache2\n\nsudo certbot delete --cert-name <Your Domain>\n")),(0,o.kt)("h3",{id:"database-and-user"},"Database and User"),(0,o.kt)("p",null,"You now have to remove the database and user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo mysql -u root -p -e "DROP DATABASE controlpanel;"\nsudo mysql -u root -p -e "DROP USER \'controlpaneluser\'@\'127.0.0.1;"\nsudo mysql -u root -p -e "FLUSH PRIVILEGES;"\n')),(0,o.kt)("h3",{id:"files"},"Files"),(0,o.kt)("p",null,"You now have to remove the files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf /var/www/controlpanel\n")),(0,o.kt)("h3",{id:"extra-dependency"},"Extra Dependency"),(0,o.kt)("p",null,"You need to uninstall this, use the appropriate PHP version (php -v)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt remove php8.0-intl\n")),(0,o.kt)("h3",{id:"pterodactyl-api-key"},"Pterodactyl API Key"),(0,o.kt)("p",null,"Login to your pterodactyl panel and go to the admin page.",(0,o.kt)("br",{parentName:"p"}),"\n","Then go to the API tab (",(0,o.kt)("inlineCode",{parentName:"p"},"/admin/api"),") and delete the key you made for controlpanel."))}p.isMDXComponent=!0},6010:(e,n,t)=>{function a(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:()=>o});const o=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(o&&(o+=" "),o+=n);return o}}}]);