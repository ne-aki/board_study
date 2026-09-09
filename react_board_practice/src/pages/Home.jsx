import React, { useEffect, useState } from 'react'
import styles from '../css/Home.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';

const Home = () => {
    const nav = useNavigate();
    
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className={styles.container}>
            <h1>홈화면</h1>
            <div className={styles.go_board}>
                <button type="button" onClick={e => nav('/board')}>게시판 가기</button>
                <button type="button" onClick={e => setIsOpen(true)}>로그인</button>
                <button type="button" onClick={e => nav('/join')}>회원가입</button>
            </div>
            <Login
                isOpenLogin={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    )
}

export default Home