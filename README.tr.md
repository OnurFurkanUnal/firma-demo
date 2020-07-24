# NodeJS And Angular Projesi

Bu projenin amacı localhost üzerinde çerez kullanımını göstermekdir.Çerezlerin yaşam ömrünü kısa tutup sürekli yenilemeyi tercih edebilirsiniz
Black list kullanmayın büyük uygulamalarda maliyetli olur.

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

### İhtiyaçlar ###
Node Js
Angular Cli
Postgressql


### Uygulamayı Başlatmak ###

* İlk firmademo ve formademotest databasesi oluştur
* Firma-demo'ya gir ve npm install komutunu çalıştır
* firma-demo/src/client gir ve npm install komutunu çalıştır
* sequelize.sync() kullanabilirsin eğer elle eklemek istemiyorsan foreing keyleri
* Eğer elinle foreing keys yazıcaksan./sql/create_foreing_key.sql dosyası içinde hazır bulunuyor ama bu işlemide yapmayabilirsiniz
  çünkü api gerekli kısıtlamaları yapıyor.
* sequelize db:migrate komutunu çalıştır
* Çerez kullanıyoruz ve bu çerezler http altında localhost kullanılarak işleniyor.Eğer windows kullanıyorsan yada başka
  bir işletim sistemi C:\Windows\System32\drivers\etc klasörü altında hosts dosyasını yetkili olarak notepad kullanarak aç
  ve 127.0.0.1 localhosta.com  127.0.0.1 sub.localhosta.com ekle.Çünkü localhost aynı kökü paylaşıyor 2 uygulamada.
  Bu çerezlerde soruna yol açıyor. Daha detaylı görmek için
  http://digitalpbk.blogspot.com/2007/01/making-subdomains-on-localhost.html linkini kontrol et
  senin için firma-demo/win-localhost-setting/hosts.txt dosyası koydum. Eğer Windows 10 kullanıyorsan aynısını kopyala yapıştır.
  Sana yardımcı olacakdır subdomain ayarlaman konusunda tüm sistemlerde.
* Sırasıyla işlemleri tamamladıysan firma-demo dosyasına git  node src/app.js komutunu çalıştır.
* Ardından firma-demo/src/client dosyasına git ve ng serve --host sub.localhosta.com --disable-host-check komutunu çalıştır.
* Server url = http://localhosta.com:3456/ uygulama url = http://sub.localhosta.com:4200/ olacakdır.

-- soru ve görüşleriniz için onurfurkanunal@gmail.com
  
