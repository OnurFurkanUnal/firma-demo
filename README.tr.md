# NodeJS And Angular Projesi

Bu projenin amacý localhost üzerinde çerez kullanýmýný göstermekdir.Çerezlerin yaþam ömrünü kýsa tutup sürekli yenilemeyi tercih edebilirsiniz
Black list kullanmayýn büyük uygulamalarda maliyetli olur.

### Özellikler: ###

- NodeJS 
- Angular Cli
- ExpressJs
- JsonWebTokens
- Sequelize
- Node Mailler
- Ngx-Translater
- Ngx-Datatable
- Ngx-Toast

### Ýhtiyaçlar ###
Node Js
Angular Cli
Postgressql


### Uygulamayý Baþlatmak ###

1.Ýlk firmademo ve formademotest databasesi oluþtur
2.firma-demo'ya gir ve npm install komutunu çalýþtýr
3.firma-demo/src/client gir ve npm install komutunu çalýþtýr
6.sequelize.sync() kullanabilirsin eðer elle eklemek istemiyorsan foreing keyleri
7.eðer elinle foreing keys yazýcaksan./sql/create_foreing_key.sql dosyasý içinde hazýr bulunuyor ama bu iþlemide yapmayabilirsiniz
  çünkü api gerekli kýsýtlamalarý yapýyor.
8.sequelize db:migrate komutunu çalýþtýr
9.Çerez kullanýyoruz ve bu çerezler http altýnda localhost kullanýlarak iþleniyor.Eðer windows kullanýyorsan yada baþka
  bir iþletim sistemi C:\Windows\System32\drivers\etc klasörü altýnda hosts dosyasýný yetkili olarak notepad kullanarak aç
  ve 127.0.0.1 localhosta.com  127.0.0.1 sub.localhosta.com ekle.Çünkü localhost ayný kökü paylaþýyor 2 uygulamada.
  Bu çerezlerde soruna yol açýyor. Daha detaylý görmek için
  http://digitalpbk.blogspot.com/2007/01/making-subdomains-on-localhost.html linkini kontrol et
  senin için firma-demo/win-localhost-setting/hosts.txt dosyasý koydum. Eðer Windows 10 kullanýyorsan aynýsýný kopyala yapýþtýr.
  Sana yardýmcý olacakdýr subdomain ayarlaman konusunda tüm sistemlerde.
10.Sýrasýyla iþlemleri tamamladýysan firma-demo dosyasýna git  node src/app.js komutunu çalýþtýr.
11.Ardýndan firma-demo/src/client dosyasýna git ve ng serve --host sub.localhosta.com --disable-host-check komutunu çalýþtýr.
12.Server url = http://localhosta.com:3456/ uygulama url = http://sub.localhosta.com:4200/ olacakdýr.

-- soru ve görüþleriniz için onurfurkanunal@gmail.com
  