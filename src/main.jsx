import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from "@/Store/Store.js";
import {Provider} from "react-redux";
import {Toaster} from "@/components/ui/toaster"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// const router = createBrowserRouter([
//     {
//         path: "/",
//         exact: true,
//         element: <App/>,
//     },
//
// ]);
createRoot(document.getElementById('root')).render(
    // <StrictMode>
    //     <Provider store={store}>
    //         {/*<RouterProvider router={router}/>*/}
    //         <Toaster/>
    //     </Provider>
    // </StrictMode>,
    <App />
)
