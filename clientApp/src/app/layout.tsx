"use client"

import './globals.css'
import '../Layout/layout.css'
import TopBar from '@/Layout/TopBar'
import {NextUIProvider} from "@nextui-org/react";
import SideMenu from '@/Layout/SideMenu';
import { useState } from 'react';
import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <html lang="en" style={{ height: "100%" }} className={roboto.className}>  
            <body style={{display: "block", height: "100%" }}>
                <NextUIProvider style={{height: "100%", display: "flex", flexDirection: "column"}}>
                    <TopBar onClickMenuIcon={() => {setIsMenuOpen(!isMenuOpen)}}/>
                    <div style={{ display: "flex", flex: "1 1" }}>
                        <SideMenu isOpen={isMenuOpen}/>
                        <div style={{display: "flex", flexDirection: "column", flex: "1"}}>{children}</div>
                    </div>
                </NextUIProvider>
            </body>
        </html>
    )
}
