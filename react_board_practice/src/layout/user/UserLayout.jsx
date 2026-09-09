import React from 'react'
import UserHeader from './UserHeader'
import { Outlet } from 'react-router-dom'
import styles from '../../css/UserLayout.module.css'

const UserLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_div}>
        <UserHeader />
      </div>
      <div className={styles.content_div}>
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout