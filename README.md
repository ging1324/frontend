# frontend
https://github.com/mdbootstrap/Admin-Dashboard-Template-Vue-Bootstrap
 npm i
 npm run serve

# api 정의서
1. user
---
type|url|param|desc
|-|-|-|-|
GET|basicAPI|-|GET  테스트
POST|post_test|{message:'내용'}|POST  테스트 내용부분을 넣은대로 반환
GET|login|user_id:string, user_passwd:string|로그인요청
GET|getUserList|-|사용자 목록 조회
GET|getUserInfo|user_id:string|사용자 단건조회
POST|addUser|{<br/> user_id:string<br/> user_passwd:string<br/> user_name:string<br/> group:int<br/>}|사용자 추가
DELETE|deleteUser|id:int|사용자 삭제
POST|updateUser|{<br/>user_name:string<br/>group:string<br/>permission_id:int<br/>id:int<br/>}
POST|updateUserPermission|{<br/>permission_id:int<br/>id:int<br/>}|권한 변경용
2. board
---
|type|url|param|desc|
|-|-|-|-|
|GET|boardList|-|게시물 목록 요청|
|GET|boardDetail|id:int(3)|게시물 단건 요청|
|POST|boardAdd|{<br/>user_id:string (ex:7)<br/>title:string, content:string<br/>gubun:char(채용구분)<br/>status:char(채용상태)<br/>is_closed:char(노출여부)<br/>}|게시물 추가.<br/>현재 작성자 id는 하드코딩 상태|
|POST|boardUpdate|{title:string<br/>content:string<br/>id:int(게시물 아이디)<br/>gubun:char(채용구분)<br/>status:char(채용상태)<br/>is_closed:char(노출여부)<br/>}|게시물 업데이트.테스트 하시려면 게시글 작성 후 해당 글을 수정해주세요|
|DELETE|boardDelete|id:int|게시물 삭제. 테스트 하시려면 게시글 작성 후 해당 글을 삭제해 주세요|