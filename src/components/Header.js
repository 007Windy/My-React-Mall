import React from "react";
import { Button, ConfigProvider } from "antd";

export default function Header() {
    return (
        <div>
            <ConfigProvider 
                theme={{
                    token: {
                        colorPrimary: '#d4380d'
                    }
                }}
            >
                <h3>Header</h3>
                <Button>修改</Button>
            </ConfigProvider>
        </div>
    )
}