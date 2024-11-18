import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import ExchangePage from "../pages/Exchange";
import ExchangeBank from "../pages/ExchangeBank";
import TopUpPage from "../pages/TopUp";
import WithDrawPage from "../pages/WithDraw";
import TransactionPage from "../pages/Transaction";
import ProfilePage from "../pages/Profile";
import EditProfilePage from "../pages/EditProfile";
import ContactUsPage from "../pages/ContactUs";
import Report from "../pages/Report";
 
const router= createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:'/exchange',
                element:<ExchangePage/>
            },
            {
                path:'/exchange/bank',
                element:<ExchangeBank/>
            },
            {
                path:'/top-up',
                element:<TopUpPage/>
            },
            {
                path:'/with-draw',
                element:<WithDrawPage/>
            },
            {
                path:'/transaction',
                element:<TransactionPage/>
            },
            {
                path:'/profile',
                element:<ProfilePage/>
            },
            {
                path:'/edit-profile',
                element:<EditProfilePage/>
            },
            {
                path:'/contact',
                element:<ContactUsPage/>
            },
            {
                path:'/report',
                element:<Report/>
            }
        ]
    }
])

export default router