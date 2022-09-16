import React from "react";
import { LoginPage } from "./pages/login-page";
import { TodoPage } from "./pages/todo-page";
import { RegisterPage } from "./pages/register-page";
import { NotFoundPage } from "./pages/not-found-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/todos" element={<TodoPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
);
