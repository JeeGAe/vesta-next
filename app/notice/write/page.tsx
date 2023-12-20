'use client'

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Page () {
  const { data : session } = useSession();
  const [inputData, setInputData] = useState({
    title : '',
    description : '',
  });
  let isUploading = false;

  const router = useRouter();

  const onChangeHandler = (e : any ) => {
    const { name, value } = e.target;
    setInputData({...inputData, [name] : value });
  }

  const onSubminHandler = async () => {
    if(isUploading){
      return ;
    } else {
      isUploading = true;
      if(inputData.title.trim() === ''){
        alert('제목을 입력해주세요');
        return ;
      } else if (inputData.description.trim() === '') {
        alert('내용을 입력해주세요');
        return ;
      }
  
      if(inputData.title.trim() !== '' && inputData.description.trim() !== '' && session){
        const submit = await fetch('http://localhost:3000/api/notice', {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json',
          },
          body : JSON.stringify({
            title : inputData.title,
            description : inputData.description,
            author : session?.user?._id,
          })
        })
  
        const data = await submit.json();
  
        if(data.code === 200){
          await router.refresh();
          router.replace(`/notice/read/${data.index}`);
        } else {
          alert('글 작성에 실패하였습니다!');
          isUploading = true;
        }
      }
    }
  }

  return (
    <div className="h-basicHeight">
      <div className='w-full h-4/5 mt-12 flex justify-center bg-background-color pt-5'>
        <div className="flex flex-col h-full w-4/5 ">
          <div className="flex justify-between">
            <label className="min-w-fit pr-5 text-primary-color">제목</label><input type="text" name="title" className="w-full border border-black rounded-md pl-1" onChange={onChangeHandler}/>
          </div>
          <div className="w-full h-4/5 pt-5">
            <textarea className="w-full h-full border border-black rounded-md pl-1 pt-1 resize-none" name="description" onChange={onChangeHandler}/>
          </div>
          <div className="flex justify-end pt-2">
            <button className="bg-secondary-color py-1 px-2 rounded-md text-primary-color font-bold" onClick={onSubminHandler} disabled={isUploading}>작성</button>
          </div>
        </div>
      </div>
    </div>
  )
}