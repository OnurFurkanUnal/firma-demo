# NodeJS And Angular Projesi

Bu projenin amac� localhost �zerinde �erez kullan�m�n� g�stermekdir.�erezlerin ya�am �mr�n� k�sa tutup s�rekli yenilemeyi tercih edebilirsiniz
Black list kullanmay�n b�y�k uygulamalarda maliyetli olur.

### �zellikler: ###

- NodeJS 
- Angular Cli
- ExpressJs
- JsonWebTokens
- Sequelize
- Node Mailler
- Ngx-Translater
- Ngx-Datatable
- Ngx-Toast

### �htiya�lar ###
Node Js
Angular Cli
Postgressql


### Uygulamay� Ba�latmak ###

1.�lk firmademo ve formademotest databasesi olu�tur
2.firma-demo'ya gir ve npm install komutunu �al��t�r
3.firma-demo/src/client gir ve npm install komutunu �al��t�r
6.sequelize.sync() kullanabilirsin e�er elle eklemek istemiyorsan foreing keyleri
7.e�er elinle foreing keys yaz�caksan./sql/create_foreing_key.sql dosyas� i�inde haz�r bulunuyor ama bu i�lemide yapmayabilirsiniz
  ��nk� api gerekli k�s�tlamalar� yap�yor.
8.sequelize db:migrate komutunu �al��t�r
9.�erez kullan�yoruz ve bu �erezler http alt�nda localhost kullan�larak i�leniyor.E�er windows kullan�yorsan yada ba�ka
  bir i�letim sistemi C:\Windows\System32\drivers\etc klas�r� alt�nda hosts dosyas�n� yetkili olarak notepad kullanarak a�
  ve 127.0.0.1 localhosta.com  127.0.0.1 sub.localhosta.com ekle.��nk� localhost ayn� k�k� payla��yor 2 uygulamada.
  Bu �erezlerde soruna yol a��yor. Daha detayl� g�rmek i�in
  http://digitalpbk.blogspot.com/2007/01/making-subdomains-on-localhost.html linkini kontrol et
  senin i�in firma-demo/win-localhost-setting/hosts.txt dosyas� koydum. E�er Windows 10 kullan�yorsan ayn�s�n� kopyala yap��t�r.
  Sana yard�mc� olacakd�r subdomain ayarlaman konusunda t�m sistemlerde.
10.S�ras�yla i�lemleri tamamlad�ysan firma-demo dosyas�na git  node src/app.js komutunu �al��t�r.
11.Ard�ndan firma-demo/src/client dosyas�na git ve ng serve --host sub.localhosta.com --disable-host-check komutunu �al��t�r.
12.Server url = http://localhosta.com:3456/ uygulama url = http://sub.localhosta.com:4200/ olacakd�r.

-- soru ve g�r��leriniz i�in onurfurkanunal@gmail.com
  