<div style="display: flex; justify-content: center;">
 <img src="https://user-images.githubusercontent.com/67136466/166087357-6d2b873f-66d8-4513-9bdb-455e825e46de.svg" width="256px">
</div>

# KUKU
九九を視覚的に覚える教育向けWebアプリ

(Educational web application to visually memorize the times tables.)

## Demo
|index|menu|kuku|login|data|
|---|---|---|---|---|
|<img src="https://user-images.githubusercontent.com/67136466/166092268-4be0d95c-640e-4d96-bafe-5259dc5a1e66.png" width="100px">|<img src="https://user-images.githubusercontent.com/67136466/166092367-c610e68d-207d-43fa-a9b9-834376fc1481.png" width="100px">|<img src="https://user-images.githubusercontent.com/67136466/166092295-182543ca-c3a4-41a2-bebd-5b5c70a3a4c7.png" width="100px">|<img src="https://user-images.githubusercontent.com/67136466/166092435-cbb8b4c9-edcb-4840-8d7d-e0884892fd8f.png" width="100px">|Now in production

## Features
- ユーザーは表示された数字と色、数字と図形のペアをもとに、それらの積を選択していきます。
- 積の選択肢は色がついた図形になっており、ユーザーはそれらの情報をもとに選択することができます。
- ユーザー登録をすることでプレイしたデータを保存することができ、成長度や継続度を把握することができます。

皆さんは共感覚をご存じでしょうか。このWebアプリ「**KUKU**」は数字から色を連想させる共感覚を基に作成したWebアプリです。

「**KUKU**」は数字と色・図形を結び付け、これまでの「さぶろくじゅうはち」、「くくはちじゅういち」といった語呂合わせで覚えるのではなく視覚的に、数学的に覚えられるようになることを目標としています。

(
- The user selects the product of the displayed pairs of numbers and colors or numbers and shapes based on the pairs of numbers and colors or numbers and shapes. 
- The product choices are colored shapes, and users can make their selections based on this information.
- By registering as a user, the user can save the data played and keep track of the level of growth and continuity.

Have you ever heard of synaesthesia? This web application "KUKU" was created based on synesthesia, which associates numbers with colors.

The goal of "KUKU" is to connect numbers with colors and shapes so that users will be able to remember them visually and mathematically, instead of just remembering them by using conventional words such as "saburoku-juhachi" or "kuku-hachijuichi".)

## Requirement
### Infrastructure

|name|version|
|---|---|
|compose|3.8|
|docker-compose|under investigation|
|docker|under investigation|

### Client Side
|name|version|
|-------------|-------------|
|node|14.17.x|
|nuxt|2.15.x|
|firebase |9.x|
|core-js|3.x|
|vuelidate|0.x|
|vuetify|2.x|
|@nuxtjs/pwa|3.x|

### Server Side
|name|version|
|---|---|
|ruby|2.7.x|
|rails|6.0.x|
|puma|4.3.11|
|postgres|13.6|
## Note
 
I don't test environments under Linux and Mac.

## Author
![image](https://user-images.githubusercontent.com/67136466/166094080-ab827dfa-719a-4f38-9010-cf139e31a0e9.png)

- Ayuu
- NITIC students

## Deploy
https://kuku-app.herokuapp.com/
