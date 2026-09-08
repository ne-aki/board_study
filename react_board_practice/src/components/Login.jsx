import React from 'react'
import Modal from '../common/Modal'

const Login = ({ isOpenLogin, onClose }) => {
  return (
    <Modal
      title='로그인'
      isOpen={isOpenLogin}
      onClose={onClose}
    >
      <p>로그인 모달</p>
    </Modal>
  )
}

export default Login