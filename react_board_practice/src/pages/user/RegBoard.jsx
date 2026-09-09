import React, { useState } from 'react'
import styles from '../../css/RegBoard.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegBoard = () => {
    const [boardInfo, setBoardInfo] = useState({
        title : '',
        writer : '',
        content : '',
    });

    // 입력한 게시글 정보를 boardInfo에 담는 함수
    const handleBoardInfo = e => {
        setBoardInfo({
            // 기존의 객체에 담겨 있던 값만 가져옴
            ...boardInfo,
            // e.target.name은 입력 태그의 name 속성값, e.target.value는 input에 입력한 값
            [e.target.name] : e.target.value
        });
    }

    // 게시글 등록
    const regBoard = () => {
        const isRegBoard = confirm('등록하시겠습니까?');

        if (isRegBoard) {
            axios.post('/api/boards', boardInfo)
             .then(res => {
                alert('등록되었습니다.');
                nav('/board');
             })
             .catch(e => console.log(e));
        }
    }

    const nav = useNavigate();

    console.log(boardInfo);

    return (
        <div className={styles.container}>
            <h1>게시글 등록</h1>
            <div className={styles.reg_board_form}>
                <p>제목</p>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className={styles.title}
                    // handleBoardInfo 함수를 onChange 이벤트에 연결하여 입력한 값이 boardInfo에 담기도록 함
                    onChange={e => handleBoardInfo(e)}
                />
                <p>작성자</p>
                <input
                    type="text"
                    name="writer"
                    id="writer"
                    className={styles.writer}
                    onChange={e => handleBoardInfo(e)}
                />
                <p>내용</p>
                <textarea
                    name="content"
                    id="content"
                    rows="5"
                    className={styles.content}
                    onChange={e => handleBoardInfo(e)}
                ></textarea>
            </div>
            <div className={styles.btn_div}>
                {/* 게시글 등록 버튼 */}
                <button type="button" onClick={e => regBoard()}>등록</button>
                <button type="button" onClick={e => nav('/board')}>목록</button>
            </div>
        </div>
    )
}

export default RegBoard