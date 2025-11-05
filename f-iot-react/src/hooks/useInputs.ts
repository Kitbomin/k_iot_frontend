// useInputs.ts

import React, { useState } from "react";

//! 관리할 input이 여러개인 경우
//  : 각각의 useInput을 호출하는 대신 객체 단위로 관리가 가능함

/**
 * id: string;
 * password: string;
 * name: string;
 * age: number;
 */

export function useInputs<T extends object>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  //@ T객체의 key 속성값들만 모아 유니언 타입으로 생성('id' | 'password' | ...)
  const handleChange = <K extends keyof T> (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    if (name in values) {
      
      setValues(prev => ({
        ...prev, [name]: value as T[K]
        }));
    }
  }

  const handleReset = () => setValues(initialValues);
  
  return {
    values, handleReset, bind: {onchange: handleChange}
  }
}