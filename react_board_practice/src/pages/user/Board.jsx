import React, { useEffect, useState } from 'react'
import styles from '../../css/Board.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const Board = () => {
    const [boardList, setBoardList] = useState([]);

    const nav = useNavigate();

    // useEffect에 두번째 매개변수의 의존성 배열은, 없을 때는 렌더링될 때마다 실행되고, 빈 배열일 때는 처음 렌더링될 때만 실행되고, 배열 안에 값이 있을 때는 그 값이 바뀔 때만 실행된다.
    useEffect(() => {
        // axios에서 then부분의 res는 서버에서 받아온 데이터 정보가 들어있고, .data는 그 정보 안에 있는 데이터만 가져오는 것이다. 그래서 res.data를 setBoardList에 넣어주면 된다.
        axios.get('/api/boards')
                .then(res => {
                    //console.log('데이터 받아오는거 출력 : ')
                    //console.log(res.data);
                    setBoardList(res.data);
                })
                .catch(e => console.log(e));
    }, []);

    return (
        <div>
            <h1>게시글 목록</h1>
            <table className={styles.boardList}>
                <thead>
                    <tr>
                        <td>
                            <input type="checkbox" name="chkAll" />
                        </td>
                        <td>No</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성일</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map((board, i) => {
                            //console.log("게시판 정보 하나 출력 : ");
                            //console.log(board);
                            return(
                                <tr key={i}>
                                    <td>
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td>{boardList.length - i}</td>
                                    <td>{board.title}</td>
                                    <td>{board.writer}</td>
                                    <td>{dayjs(board.regDate).format('YYYY년 MM월 DD일')}</td>
                                    <td>
                                        <button type="button">삭제</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <div className={styles.btn_div}>
                <button type="button" onClick={e => nav('/')}>홈화면</button>
                <button type="button" onClick={e => nav('/reg-board')}>게시글 작성</button>
            </div>
        </div>
    )
}

export default Board