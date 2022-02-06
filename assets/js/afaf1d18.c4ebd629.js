"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[757],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7619:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],s={sidebar_position:2},i="Database backups",c={unversionedId:"Guides/backups",id:"Guides/backups",isDocsHomePage:!1,title:"Database backups",description:'Users, folders and filenames have been renamed from "dashboard" -> "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.',source:"@site/docs/Guides/backups.md",sourceDirName:"Guides",slug:"/Guides/backups",permalink:"/docs/Guides/backups",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/docs/Guides/backups.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Products",permalink:"/docs/Guides/products"},next:{title:"Adding translation Files",permalink:"/docs/Guides/translation"}},u=[{value:"How to backup",id:"how-to-backup",children:[]},{value:"How to restore",id:"how-to-restore",children:[]},{value:"How to automatically backup",id:"how-to-automatically-backup",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-backups"},"Database backups"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Users, folders and filenames have been renamed from "dashboard" -> "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.'))),(0,o.kt)("p",null,"All important data is stored in the database. This includes all servers, users, and other information.",(0,o.kt)("br",{parentName:"p"}),"\n","Its important to keep backups of your database to ensure that you can restore your panel if something goes wrong."),(0,o.kt)("h3",{id:"how-to-backup"},"How to backup"),(0,o.kt)("p",null,"You can use mysql dump to backup your database.",(0,o.kt)("br",{parentName:"p"}),"\n","This commnad will create a backup file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/controlpanel/")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump -u root -p controlpanel > /var/www/controlpanel/backup.sql\n")),(0,o.kt)("h3",{id:"how-to-restore"},"How to restore"),(0,o.kt)("p",null,"To restore a backup, you need a fresh database. If you already have a database, you can use the following command to drop it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mysql -u root -p controlpanel -e "DROP DATABASE controlpanel"\n')),(0,o.kt)("p",null,"Then you can restore the backup. You can also restore the backup on any other new server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\nCREATE DATABASE controlpanel;\nCREATE USER 'controlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT ALL PRIVILEGES ON controlpanel.* TO 'controlpaneluser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nexit\nmysql -u root -p controlpanel < /var/www/controlpanel/backup.sql\n")),(0,o.kt)("h3",{id:"how-to-automatically-backup"},"How to automatically backup"),(0,o.kt)("p",null,"You can automatically backup your database every day at midnight for example.\nFirst create a read only user for the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/www/controlpanel/backups\nmysql -u root -p\nCREATE USER 'controlpanelbackupuser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT LOCK TABLES, SELECT ON controlpanel.* TO 'controlpanelbackupuser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nexit\n")),(0,o.kt)("p",null,"Then create a cronjob to run the following command at midnight.\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"crontab -e")," and add the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"0 0 * * * mysqldump -u controlpanelbackupuser --password=<USE_YOUR_OWN_PASSWORD> --single-transaction --quick --lock-tables=false controlpanel > /var/www/controlpanel/backups-$(date +\\%F).sql\n")),(0,o.kt)("p",null,"This will create a backup at /var/www/controlpanel/backups-$(date +\\%F).sql every day at midnight.\nEvery file will have the date when it was made in the filename, so you can also resolve issues that happend a few days ago."))}d.isMDXComponent=!0}}]);