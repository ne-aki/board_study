import React, { useEffect } from 'react'
import styles from '../css/Home.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const nav = useNavigate();
    
    return (
        <div className={styles.container}>
            <h1>홈화면</h1>
            <div className={styles.go_board}>
                <button type="button" onClick={e => nav('/board')}>게시판 가기</button>
            </div>
        </div>
    )
}

export default Home