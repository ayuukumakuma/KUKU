# KUKU

<img src="https://img.shields.io/badge/-Ruby-CC342D.svg?logo=ruby&style=popout"> <img src="https://img.shields.io/badge/-Rails-CC0000.svg?logo=rails&style=popout"> <img src="https://img.shields.io/badge/-Nuxt.js-00C58E.svg?logo=nuxt.js&style=popout"> <img src="https://img.shields.io/badge/-Node.js-339933.svg?logo=node.js&style=popout"> <img src="https://img.shields.io/badge/-Yarn-2C8EBB.svg?logo=yarn&style=popout"> <img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=popout"> <img src="https://img.shields.io/badge/-Css3-1572B6.svg?logo=css3&style=popout"> <img src="https://img.shields.io/badge/-Sass-CC6699.svg?logo=sass&style=popout"> <img src="https://img.shields.io/badge/-Html5-E34F26.svg?logo=html5&style=popout"> <img src="https://img.shields.io/badge/-Docker-1488C6.svg?logo=docker&style=popout"> <img src="https://img.shields.io/badge/-Firebase-FFCA28.svg?logo=firebase&style=popout"> <img src="https://img.shields.io/badge/-Postgresql-336791.svg?logo=postgresql&style=popout"> <img src="https://img.shields.io/badge/-Heroku-430098.svg?logo=heroku&style=popout"> <img src="https://img.shields.io/badge/-Github-181717.svg?logo=github&style=popout">
<img src="https://img.shields.io/github/forks/ayuukumakuma/KUKU"> <img src="	https://img.shields.io/github/stars/ayuukumakuma/KUKU"> <img src="https://img.shields.io/github/license/ayuukumakuma/KUKU">

<p align="center">
 <a href="http://kuku-app.herokuapp.com/" target="_blank">
  <img src="https://user-images.githubusercontent.com/67136466/166087357-6d2b873f-66d8-4513-9bdb-455e825e46de.svg" width="256px">
 </a>
</p>

九九を視覚的に覚える教育向けWebアプリ

---

Educational web application to visually memorize the times tables.

## Demo
|index|menu|kuku|login|data|
|---|---|---|---|---|
|<img src="https://user-images.githubusercontent.com/67136466/166092268-4be0d95c-640e-4d96-bafe-5259dc5a1e66.png" width="100px">|<img src="https://user-images.githubusercontent.com/67136466/166092367-c610e68d-207d-43fa-a9b9-834376fc1481.png" width="100px">|<img src="https://user-images.githubusercontent.com/67136466/166092295-182543ca-c3a4-41a2-bebd-5b5c70a3a4c7.png" width="100px">|<img src="https://user-images.githubusercontent.com/67136466/166092435-cbb8b4c9-edcb-4840-8d7d-e0884892fd8f.png" width="100px">|Now in production

## Description
- ユーザーは表示された数字と色、数字と図形のペアをもとに、それらの積を選択していきます。
- 積の選択肢は色がついた図形になっており、ユーザーはそれらの情報をもとに選択することができます。
- ユーザー登録をすることでプレイしたデータを保存することができ、成長度や継続度を把握することができます。
- PWAに対応し、ネイティブアプリのように利用することができます。

皆さんは共感覚をご存じでしょうか。このWebアプリ「**KUKU**」は数字から色を連想させる共感覚を基に作成したWebアプリです。

「**KUKU**」は数字と色・図形を結び付け、これまでの「さぶろくじゅうはち」、「くくはちじゅういち」といった語呂合わせで覚えるのではなく視覚的に、数学的に覚えられるようになることを目標としています。

---

- The user selects the product of the displayed pairs of numbers and colors or numbers and shapes based on the pairs of numbers and colors or numbers and shapes. 
- The product choices are colored shapes, and users can make their selections based on this information.
- By registering as a user, the user can save the data played and keep track of the level of growth and continuity.
- It supports PWA and can be used like a native application.

Have you ever heard of synaesthesia? This web application "KUKU" was created based on synesthesia, which associates numbers with colors.

The goal of "KUKU" is to connect numbers with colors and shapes so that users will be able to remember them visually and mathematically, instead of just remembering them by using conventional words such as "saburoku-juhachi" or "kuku-hachijuichi".

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

## Installation
0. `.env`をディレクトリに追加(Add `.env` to the directory)
1. `git clone https://github.com/ayuukumakuma/KUKU.git`
2. `docker-compose build`
3. `docker-compose up`

## Usage
1. [KUKU](https://kuku-app.herokuapp.com/)にアクセス | Access to [KUKU](https://kuku-app.herokuapp.com/)
2. ホーム画面に追加 | Add to Home Screen
3. ユーザー登録・ログイン(登録なしでもプレイできます) | User registration and login (you can play without registration)
4. Let's Play!

## Note
LinuxやMacでの環境テストはしていません。 | I don't test environments under Linux and Mac.

## Author
<a href="https://github.com/ayuukumakuma">
 <img src="https://user-images.githubusercontent.com/67136466/166094080-ab827dfa-719a-4f38-9010-cf139e31a0e9.png">
</a>

- Ayuu
- NITIC students

## Deploy
Using heroku

https://kuku-app.herokuapp.com/
