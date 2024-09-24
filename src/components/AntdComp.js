import React from "react";
import { Button } from "antd";
import style from '../assets/styles/antdcomp.module.less'

export default function AntdComp() {
    return (
        <div>
            <h3>AntdComp</h3>
            <Button type="default">按钮</Button>
            <Button type="dashed">按钮</Button>
            <div className={style.container}>
                <span>woniu</span>
            </div>
        </div>
    )
}