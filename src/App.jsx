import "./App.css";
import React, {useEffect, useMemo, useRef, useState} from "react";
import Charts from "@/pages/ScoreChart.jsx";
import Login from "@/pages/LoginPage.jsx";
// import {Toaster} from "@/components/ui/toaster"
import {store} from "@/Store/Store.js";
import UserList from "./pages/UserList";
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
                // element: <InitiateUser />,
                element: <UserList />,
                exact: true,
            },
            {
                path: "/Charts",
                exact: true,
                element: <Sidebar/>,
                // element: <InitiateUser />,
            },
        ]
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