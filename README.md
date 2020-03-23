# frontend
https://github.com/mdbootstrap/Admin-Dashboard-Template-Vue-Bootstrap
 npm i
 npm run serve

# api 정의서
1. user
---
|type|url|param|desc|
|-|-|-|-|-|-|
|GET|basicAPI|-|GET  테스트|
|POST|post_test|{message:'내용'}|POST  테스트 내용부분을 넣은대로 반환|
|GET|login|user_id:string, user_passwd:string|로그인요청|
|GET|getUserList|-|사용자 목록 조회|
|GET|getUserInfo|user_id:string|사용자 단건조회|
|POST|addUser|user_id:string, user_passwd:string, user_name:string, user_address:string, user_birthday:string, user_sex:char(M/F)|사용자 추가|
2. board
---
|type|url|param|desc|
|-|-|-|-|-|-|
|GET|boardList|-|게시물 목록 요청|
|GET|boardDetail|id:int(3)|게시물 단건 요청|
|POST|boardAdd|{user_id:string (ex:7), title:string, content:string }|게시물 추가. 현재 작성자 id는 하드코딩 상태|
