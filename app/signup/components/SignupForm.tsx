'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';

type signup = {
  userId : string,
  userName : string,
  password : string,
  isAdmin : boolean,
}

export default function SignupForm () {
  const [userInfo, setUserInfo] = useState<signup>({
    userId : '',
    userName : '',
    password : '',
    isAdmin : false,
  });

  const [signupError, setSignupError] = useState('');

  const router = useRouter();

  const onChangeHandler = (e : any) => {
    const { value, name } = e.target;
    setUserInfo({...userInfo, [name] : value });
  }

  const onSubmitHandler = (e : any) => {
    e.preventDefault();
    // 에러 처리
    if(e.target.value === '관리자가입'){
      setUserInfo({...userInfo, isAdmin : true });
    }

    if(userInfo.userId.trim() === ''){
      setSignupError('emptyUserId');
      return ;
    } else if (userInfo.password.trim() === ''){
      setSignupError('emptyPassword');
      return ;
    } else if (userInfo.userName.trim() === ''){
      setSignupError('emptyName');
      return ;
    }
    
    if(userInfo.userId.trim() !== '' &&
    userInfo.password.trim() !== '' &&
    userInfo.userName.trim() !== ''){
      fetch('http://localhost:3000/api/auth/signup',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          userId : userInfo.userId,
          userName : userInfo.userName,
          password : userInfo.password,
          isAdmin : userInfo.isAdmin,
        })
      })
      .catch(e => console.log('signup onSubmitHandler error : ',e))
      .then(() => {
        router.replace('/signin');
      })
    }
  }

  return (
    <div className="register-container h-basicHeight">
      <div>
        <img src="http://www.vestabuffet.com/common/img/logo.gif" alt="main-logo"/>
      </div>
      <form onSubmit={onSubmitHandler}>
        <ul>
          <li>
            <label htmlFor="userId">아이디</label><input type="text" name="userId" placeholder="아이디를 입력하세요." onChange={onChangeHandler} value={userInfo.userId} autoFocus/>
          </li>
          {signupError === 'emptyUserId' && 
            <li>
              <span>아이디를 입력해주세요!</span>
            </li>
          }
          <li>
            <label htmlFor="password">패스워드<br/></label> <input type="password" name="password" onChange={onChangeHandler} value={userInfo.password} placeholder="패스워드를 입력하세요"/>
          </li>
          {signupError === 'emptyPassword' && 
            <li>
              <span>비밀번호를 입력해주세요!</span>
            </li>
          }
          <li>
            <label htmlFor="userName">이름<br/></label> <input type="text" name="userName" onChange={onChangeHandler} value={userInfo.userName} placeholder="이름을 입력하세요"/>
          </li>
          {signupError === 'emptyName' && 
            <li>
              <span>이름을 입력해주세요!</span>
            </li>
          }
          <li>
            <div></div><input type="submit" value="회원가입" className="register-btn"/>
          </li>
          {/* 편의를 위해 관리자 가입 가능케 함 */}
          <li>
            <div></div><input type="submit" value="관리자가입" className="register-admin-btn"/>
          </li>
        </ul>
      </form>
    </div>
  )
}