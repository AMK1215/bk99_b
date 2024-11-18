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
 import Promotion from "../pages/Promotion";
import ChangePassword from "../pages/ChangePassword";
import GameLogsPage from "../pages/GameLogs";
import BankPage from "../pages/BankPage";
import AddBankPage from "../pages/AddBankPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
 
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
                path:'/promotion',
                element:<Promotion/>
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
            path:'/bank',
            element:<BankPage/>
             }, {
            path:'/add-bank',
            element:<AddBankPage/>
             },
            {
                path:'/with-draw',
                element:<WithDrawPage/>
            },
            {
                path:'/transfer-logs',
                element:<TransactionPage/>
            },
            {
                path:'/game-logs',
                element:<GameLogsPage/>
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
                path:'/change-password',
                element:<ChangePassword/>
            },
            {
                path:'/contact',
                element:<ContactUsPage/>
            },
            {
                path:'/login',
                element:<LoginPage/>
            },
            {
                path:'/register',
                element:<RegisterPage/>
            },
        ]
    }
])

export default router