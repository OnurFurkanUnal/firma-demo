# NodeJS And Angular Project

The main focus of the firm-demo is to demonstrate cookies.You can prefer short life to blacklist for cookies. You need refresh methods for blacklist. Blacklists
consuming memory. That's a little expensive.

### Features: ###

- NodeJS 
- Angular Cli
- ExpressJs
- JsonWebTokens
- Sequelize
- Node Mailler
- Ngx-Translater
- Ngx-Datatable
- Ngx-Toast

### Requirements ###
Node Js
Angular Cli
Postgressql


### Start App ###

* Create firmademo and firmademotest databases
* Go to firma-demo folder run npm install
* Go to firma-demo/src/client run npm install
* if you dont want to add foreing keys manually. You can use sequelize.sync() But you can continue without foreing keys 
  Because api is restricting users.
* If you want to execute foreing keys manually. Keys are in /sql/create_foreing_key.sql
* run sequelize db:migrate
* We are using cookies. Cookies are not under https. We have used cookies on http localhost. If you using windows or other OS 
  go to  C:\Windows\System32\drivers\etc open hosts file and add 127.0.0.1 localhosta.com  127.0.0.1 sub.localhosta.com .
  Because localhost share same root for app and api. It cause cookie problem.
  check http://digitalpbk.blogspot.com/2007/01/making-subdomains-on-localhost.html 
  check firma-demo/win-localhost-setting/hosts.txt
  It will help you to arrange subdomain on other systems
* After completed all instructions. Go to firma-demo folder and execute node src/app.js
* Then go to firma-demo/src/client and execute ng serve --host sub.localhosta.com --disable-host-check
* Your backend url = http://localhosta.com:3456/ frontend url = http://sub.localhosta.com:4200/

-- for questions and comments onurfurkanunal@gmail.com
  
