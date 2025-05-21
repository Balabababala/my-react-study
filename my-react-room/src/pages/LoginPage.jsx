import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row, Container } from 'react-bootstrap'; // 使用 react-bootstrap 來設計表單

function LoginPage() {
  const navigate = useNavigate(); // ✅ 要放在函式元件內
  const API_BASE= 'http://localhost:8081';
  // 設置狀態來存儲用戶選擇的角色（買家或賣家）
  const [role, setRole] = useState(null);

  // 設置是否為登入模式，默認為登入模式
  const [isLogin, setIsLogin] = useState(true);

  // 用戶輸入的驗證碼
  const [captchaCode, setCaptchaCode] = useState('');

  // 驗證碼圖片 URL
  const [captchaImage, setCaptchaImage] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {
    username: e.target.username.value,
    password: e.target.password.value
  };
  try {
    const url = isLogin ? `${API_BASE}/rest/login` : `${API_BASE}/api/register`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data)
    });
    const result = await response.json();

    if (response.status === 200) {
      alert(isLogin ? '登入成功' : '註冊成功');
      navigate('/');
    } else {
      alert(isLogin ? '登入失敗：' + result.message : '註冊失敗：' + result.message);
    }
  } catch (error) {
    console.error('表單提交時出現錯誤', error);
    alert('提交失敗，請稍後再試');
  }
};


  // 切換登入/註冊模式
  const toggleForm = () => {
    setIsLogin(!isLogin); // 改變登錄模式或註冊模式
  };


  return (
    <Container className="py-5 d-flex justify-content-center login">
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">{isLogin ? '登錄' : '註冊'}</h2>
        <Form onSubmit={handleSubmit}>

          {/* 用戶名 */}
          <Form.Group controlId="username">
            <Form.Label>用戶名</Form.Label>
            <Form.Control
              type="text"
              placeholder="請輸入用戶名"
              required
              size="lg"
              style={{ borderRadius: '0.5rem', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </Form.Group>

          {/* 密碼 */}
          <Form.Group controlId="password">
            <Form.Label>密碼</Form.Label>
            <Form.Control
              type="password"
              placeholder="請輸入密碼"
              required
              size="lg"
              style={{ borderRadius: '0.5rem', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </Form.Group>


          {/* 登錄或註冊的提交按鈕 */}
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            size="lg"
            style={{
              borderRadius: '0.5rem',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              padding: '10px 0',
            }}
          >
            {isLogin ? '登錄' : '註冊'}
          </Button>

          {/* 切換到註冊/登錄的鏈接 */}
          <Row className="mt-3">
            <Col className="text-center">
              <Button variant="link" onClick={toggleForm} size="sm">
                {isLogin ? '註冊新帳號' : '已有帳號，點擊登錄'}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default LoginPage;
