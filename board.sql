CREATE TABLE board_study.TEST_BOARD (
	BOARD_NUM INT PRIMARY KEY AUTO_INCREMENT
	, TITLE VARCHAR(100) NOT NULL
	, CONTENT TEXT
	, WRITER VARCHAR(30) NOT NULL
	, REG_DATE DATETIME DEFAULT SYSDATE()
);

select * from test_board;
select * from information_schema.ALL_PLUGINS ap ;
insert into test_board (TITLE, CONTENT, WRITER) values ('제목', '내용', '작성자');
select * from board_study.test_board tb ;
SELECT
    BOARD_NUM
    , TITLE
    , WRITER
    , REG_DATE
FROM board_study.TEST_BOARD;