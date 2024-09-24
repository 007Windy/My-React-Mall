import React, { useEffect } from "react";

export default function Children() {
    useEffect(() => {
        // 清除函数
        console.log('componentDidMount');
        return () => {
            console.log('componentWillUnmount');
        }
    },[])

    return (
        <div>Children</div>
    )
}