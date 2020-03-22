# frontend
https://github.com/mdbootstrap/Admin-Dashboard-Template-Vue-Bootstrap
 npm i
 npm run serve

API 정보
---------- 사용자 정보 ----------
[GET]basicAPI : 접속 테스트
[POST]post_test : post 방식 테스트
    body Json 형식으로 { "message": '내용 아무거나'}
[POST]addUser : 사용자 추가
    param
        key             type        value
        user_id         string      fed
        user_passwd     string      1234!@
        user_name       string      에프이디
        user_address    string      서울시 어쩌구 저쩌구
        user_birthday   string      2000-01-01
        user_sex        char        M/F
[GET]login :  로그인 요청
    param
        key             type        value
        user_id         string      사용할 id
        user_passwd     string      사용할 pw
[GET]getUserInfo : 사용자 정보 요청(단건)
    param
        key             type        value
        user_id         string      조회할 id
[GET]getUserList : 사용자 전체 조회
---------- 게시판 정보 ----------
[GET]boardList : 게시판 목록 요청
[GET]boardDetail : 게시판 상세 정보 요청
    param
        key             type        value
        user_id         string      3(게시물 아이디)
[POST]boardAdd : 게시물 푸가
    param
        key             type                            value
        user_id         string                          작성자 id
        title           string                          제목
        content         text(string이라고 생각하세요)     내용