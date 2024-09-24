import React, {useState} from "react";
import { Button } from "antd";
const Login = ({msg, getMsgValue}) => {
    const [username, setUsername] = useState("小王")
    const [count, setCount] = useState(100)
    const [student, setStudent] = useState({
        id:1,
        name: "小张",
        classes:{name: "三年二班"}
    })
    // 函数定义，采用箭头函数来设计
    const checkButton = () => {
        setUsername("xiaofei")
    }
    const updateStudent = () => {
        const student2 = {...student}
        student2.name = 'xiaofeifei'
        setStudent(student2)
    } 
    return (
        <div>
            <h3>Login</h3>
            <p>{msg}</p>
            <p>{username}</p>
            <Button onClick={ checkButton }>修改msg</Button>
            <p>{count}</p>
            <Button onClick={ () => setCount(0) }>-</Button>
            <Button onClick={ () => setCount(200) }>+</Button>
            <p>{student.name}</p>
            <p>{student.classes.name}</p>
            <Button onClick={ updateStudent }>修改student</Button>
        </div>
    )
}
export default Login
