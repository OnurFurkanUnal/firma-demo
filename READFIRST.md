# NodeJS And Angular Project

main focus of firma-demo demonstrate cookies.You can prefer short live for cookies with refresh methods than blacklist. Because blacklists
consuming memory that is little expensive.

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

* 1.First Create firmademo and firmademotest databases
* 2.Go to firma-demo folder run npm install
* 3.Go to firma-demo/src/client run npm install
* 4.You can use sequelize.sync() if you dont want to add foreing keys manually but you can prefer continue without foreing keys 
  because api is restricting users.
* 5.if execute manually foreing keys.That in /sql/create_foreing_key.sql
* 6.run sequelize db:migrate
* 7.We are using cookie and these cookies not under https. We have used cookies on http localhost. So if you using windows or other OS 
  go to  C:\Windows\System32\drivers\etc open hosts file and add 127.0.0.1 localhosta.com  127.0.0.1 sub.localhosta.com .
  because localhost share same root for app and api. It cause cookie problem.
  check http://digitalpbk.blogspot.com/2007/01/making-subdomains-on-localhost.html 
  check firma-demo/win-localhost-setting/hosts.txt
  It will help you to arrange subdomain on other systems
* 8.After completed all sequentially instructions go to firma-demo folder and execute node src/app.js
* 9.Then go to firma-demo/src/client and execute ng serve --host sub.localhosta.com --disable-host-check
* 10.your backend url = http://localhosta.com:3456/ frontend url = http://sub.localhosta.com:4200/

-- for questions and comments onurfurkanunal@gmail.com
  