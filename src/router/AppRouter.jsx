import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {MarvelPage} from "../heroes/pages/MarvelPage.jsx";
import {DcPage} from "../heroes/pages/DcPage.jsx";
import {LoginPage} from "../auth/pages/LoginPage.jsx";
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="login"/>}/>
                <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="dc" element={<DcPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
            </Routes>
        </>
    )
}
