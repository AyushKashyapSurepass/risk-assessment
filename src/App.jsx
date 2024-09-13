import "./App.css";
import React, {useEffect, useMemo, useRef, useState} from "react";
import Charts from "@/pages/ScoreChart.jsx";
import Login from "@/pages/LoginPage.jsx";
// import {Toaster} from "@/components/ui/toaster"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import InitiateUser from "@/pages/InitiateUser.jsx";
const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            exact: true,
        },
        {
            path: "/Charts",
            exact: true,
            element: <InitiateUser />,
        },

    ]);
export default function App() {
    return (
        <div className={'w-screen'}>
            <RouterProvider router={router}/>
        </div>
    )
}