import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="trips/:address" element={<ListTripsPage />} />
                <Route path="admin/trips/:address" element={<AdminHomePage />} />
                <Route path="login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}
