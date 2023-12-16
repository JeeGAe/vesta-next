'use client'

import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";

export default function SigninForm () {
  const [userInfo, setUserInfo] = useState({
    userId : '',
    password : '',
  });

  const [signipError, setSigninError] = useState('');

  const router = useRouter();

  const onChangeHandler = (e : any) => {
    const { value, name } = e.target;
    setSigninError('');
    setUserInfo({...userInfo, [name] : value });
  }

  const onSubmitHandler = async (e : any) => {
    e.preventDefault();
    
    // 에러 처리
    if(userInfo.userId.trim() === ''){
      setSigninError('emptyUserId');
      return ;
    } else if (userInfo.password.trim() === ''){
      setSigninError('emptyPassword');
      return ;
    }
    
    if(userInfo.userId.trim() !== '' &&
    userInfo.password.trim() !== ''){
      // fetch('http://localhost:3000/api/auth/signin',{
      //   method : 'POST',
      //   headers : {
      //     'Content-Type' : 'application/json',
      //   },
      //   credentials : 'include',
      //   cache : 'no-store',
      //   body : JSON.stringify({
      //     userId : userInfo.userId,
      //     password : userInfo.password,
      //   })
      // })
      // .catch(e => console.log('signin onSubmitHandler error : ',e))
      // .then(() => {
      //   router.replace('/');
      // })
      try {
        const signInRes = await signIn('credentials',{ userId : userInfo.userId, password : userInfo.password, redirect : false });
        if(signInRes?.error) {
          console.log("signIn credential error : ",signInRes.error);
          return ;
        }

        router.replace('/');
      } catch (error) {
        console.log("signIn credential error : ",error);
      }
      
    }
  }


  return (
    <div className="h-basicHeight flex justify-center items-center">
      <div className="login-modal-container w-96 flex bg-background-color flex-col rounded-xl items-center h-3/5 gap-5 shadow-2xl">
        <div className="mb-7">
          <img src="http://www.vestabuffet.com/common/img/logo.gif" alt="main-logo"/>
        </div>
        <form className="w-4/5" onSubmit={onSubmitHandler} id="login-form">
          <ul className="flex flex-col gap-7">
            <li className="flex justify-between text-primary-color">
              <label htmlFor="userId">아이디</label><input className="pl-2" type="text" name="userId" placeholder="아이디를 입력하세요." onChange={onChangeHandler}/>
            </li>
            <li>
              {signipError === 'emptyUserId' &&
                <span className="text-red-600">아이디를 입력해주세요!</span>
              }
            </li>
            <li className="flex justify-between text-primary-color">
              <label htmlFor="password">패스워드<br/></label> <input type="password" className="pl-2" placeholder="패스워드를 입력하세요" name="password" id="password-input" onChange={onChangeHandler}/>
            </li>
            <li>
              {signipError === 'emptyPassword' &&
                  <span className="text-red-600">비밀번호를 입력해주세요!</span>
              }
            </li>
            <li className="self-end">
              <div id="failed-login"></div><input value='로그인' type='submit' className="bg-secondary-color py-1 px-2 rounded-md text-primary-color cursor-pointer"  id="login-btn"/>
            </li>
          </ul>
        </form>
        <div className="flex gap-10 place-content-end">
          <p className="text-primary-color">회원이 아니신가요?</p>
          <Link className="text-secondary-color font-black" href="/signup
          ">회원가입</Link>
        </div>
       
      </div>
    </div>
  )
}