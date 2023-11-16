"use client"

import './globals.css'
import '../Layout/layout.css'
import TopBar from '@/Layout/TopBar'
import {NextUIProvider} from "@nextui-org/react";
import SideMenu from '@/Layout/SideMenu';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <html lang="en" style={{ height: "100%" }}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>     
            </head>
  
            <body style={{display: "block", height: "100%" }}>
                {/* <ThemeProvider theme={theme} > */}
                    <NextUIProvider style={{height: "100%", display: "flex", flexDirection: "column"}}>
                        <TopBar onClickMenuIcon={() => {setIsMenuOpen(!isMenuOpen)}}/>
                        <div style={{ display: "flex", flex: "1 1" }}>
                            <SideMenu isOpen={isMenuOpen}/>
                            <div style={{display: "flex", flexDirection: "column", flex: "1"}}>{children}</div>
                        </div>
                    </NextUIProvider>
                {/* </ThemeProvider> */}
            </body>
        </html>
    )
}
