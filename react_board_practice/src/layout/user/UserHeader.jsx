import React, { useState } from 'react'
import styles from '../../css/UserHeader.module.css'
import Login from '../../components/Login'
import { useNavigate } from 'react-router-dom';

const UserHeader = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const nav = useNavigate();

  return (
    <div className={styles.container}>
      <p>ne_aki 사이트</p>
      <div>
        <p onClick={() => setIsOpenLogin(true)} className={styles.header_btn}>로그인</p>
        <p onClick={() => nav('/join')} className={styles.header_btn}>회원가입</p>
      </div>
      <Login
        isOpenLogin={isOpenLogin}
        onClose={() => setIsOpenLogin(false)}
      />
    </div>
  )
}

export default UserHeader