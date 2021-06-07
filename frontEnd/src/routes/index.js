
import ShopKeper from '../container/Signup/ShopkeperSignin';
import PATH from './../config/webPath';
import Home from './../container/Home/index';
import SignUpButton from './../container/Signup/index';
import UserSignUp from './../container/Signup/UserSignup';
import LOGIN from './../compnent/LoginComponent/index';
import LoginUpButton from './../container/Login/index';
import PROFILE from './../container/Profile/index';
export const routes=[
{exact : true , path:PATH.HOME,component:Home},
{exact : true , path:PATH.SIGNUP,component:SignUpButton},
{exact : true , path:PATH.USERSIGNUP,component:UserSignUp},
{exact : true , path:PATH.SHOPKEPERSIGNUP,component:ShopKeper},
{exact : true , path:PATH.LOGIN,component:LoginUpButton},
{exact : true , path:PATH.USERLOGIN,component:LOGIN},
{exact : true , path:PATH.SHOPKEPERLOGIN,component:LOGIN},
{exact : true , path:PATH.PROFILE,component:PROFILE},
]