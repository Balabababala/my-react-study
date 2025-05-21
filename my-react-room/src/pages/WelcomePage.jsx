import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:8081';

function WelcomePage() {
  const [isLoginCheck, setIsLoginCheck] = useState(null);

  useEffect(() => {
    async function checkLogin() {
      try {
        const response = await fetch(`${API_BASE}/rest/check-login`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        });

        const data= await response.json();
        setIsLoginCheck(data.data);
        console.log('Set isLogin to:', data.data);
        console.log('data:', data);
        console.log('response ', response);
      } catch (error) {
        console.error("登入檢查失敗", error);
        setIsLoginCheck(false);
      }
    }
    checkLogin();
  }, []);

  const logOutSummit = async () => {
  try {
    const response = await fetch(`${API_BASE}/rest/logout`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'  // 一定要加，才會帶 cookie
    });
    console.log("登出回應",response.ok);
    if (response.ok) {
      console.log("✅ 登出成功");
      setIsLoginCheck(false);  // 更新狀態
      // 建議強制跳轉頁面，以確保清除 session 並重載
      window.location.href = "/login";
    } else {
      console.warn("❌ 登出失敗", await response.json());
    }
  } catch (error) {
    console.error("❌ 登出過程發生錯誤", error);
  }
};

     
  if (isLoginCheck === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isLoginCheck ? <Button variant="outline-light" onClick={()=>logOutSummit()}>Logout</Button> : 
                <Link to="/login"><Button variant="outline-light">Login</Button></Link>}
      <Link to={isLoginCheck ? "/room" : "/login"}><Button variant="outline-light">Room</Button></Link>
    </>
  );
}

export default WelcomePage;
