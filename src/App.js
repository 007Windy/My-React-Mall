import AntdComp from './components/AntdComp'
import Children from './components/Children';
import Header from './components/Header';
import { Button, ConfigProvider, Space } from 'antd';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgetPassword from './components/ForgetPassword';
import NotFind from './components/NotFind';

function App() {
  
  return (
    <div className="App">
      <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#7cb305'
        }
      }}
      >
       {/* 路由器 */}
      <BrowserRouter>
        {/* 路由映射列表 */}
        <ul>
          <li>
            <Link to="/register">注册</Link>
          </li>
          <li>
            <Link to="/forget">忘记密码</Link>
          </li>
        </ul>
        <Routes>
          {/* 路由具体路径匹配 */}
          <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/forget" element={<ForgetPassword></ForgetPassword>}></Route>
          <Route path="/404" element={<NotFind></NotFind>}></Route>
          <Route path="*" element={<Navigate to="/404"></Navigate>}></Route>

        </Routes>
      </BrowserRouter>
      </ConfigProvider>
    </div>
  );
}

export default App;
