// authApi.ts

import { privateApi, publicApi } from "./axiosInstance";

export interface SignInRequest {
  loginId: string;
  password: string;
}

export interface SignIdResponse {
  username: string;
  accessToken: string;
}


//! 로그인
export const signIn = async (data: SignInRequest): Promise<SignIdResponse> => {
  const res = await publicApi.post('/auth/sign-in', data);

  if(!res.data.success) throw new Error('Login Failed');

  return res.data.data;
}

//! 로그아웃
export const signOut = async (): Promise<void> => {
  await privateApi.post("/auth/sign-out");
}

//! AccessToken 리프레쉬
export const refreshAccessToken = async (): Promise<string> => {
  const res = await publicApi.post("/auth/refresh-token", {}, {withCredentials: true});

  if(!res.data.success) throw new Error('Refresh Failed');

  return res.data.data.accessToken;
}