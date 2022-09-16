import React from "react";
import { LoginPage } from "./pages/login-page";
import { TodoPage } from "./pages/todo-page";
import { NotFoundPage } from "./pages/not-found-page";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export const AppRouter = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="todos" element={<TodoPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
    )
};