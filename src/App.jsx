import "./App.css";
import React, {useEffect, useMemo, useRef, useState} from "react";
import Charts from "@/pages/ScoreChart.jsx";
import Login from "@/pages/LoginPage.jsx";
// import {Toaster} from "@/components/ui/toaster"
import {store} from "@/Store/Store.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import InitiateUser from "@/pages/InitiateUser.jsx";
import Sidebar from "@/components/Sidebar.jsx";
import Layout from "@/Layout.jsx";
import {Provider} from "react-redux";
import ClientQuestionaries from "@/pages/ClientQuestionaries.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                // element: <Charts />,
                // element: <ClientQuestionaries />,
                element: <InitiateUser />,
                exact: true,
            },
            {
                path: "/Charts",
                exact: true,
                element: <Sidebar/>,
                // element: <InitiateUser />,
            },
        ]
    },
    {
        path: '/form',
        element: <ClientQuestionaries />,
    }
]);
export default function App() {
    return (
        <div className={'w-screen'}>
            <Provider store={store}>
            <RouterProvider router={router}/>
            </Provider>
        </div>
    )
}