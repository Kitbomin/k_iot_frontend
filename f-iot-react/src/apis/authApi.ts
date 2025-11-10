// authApi.ts

import { publicApi } from "./axiosInstance";

interface SignInRequest {
  loginId: string;
  password: string;
}

interface SignIdResponse {
  username: string;
  accessToken: string;
}

export const signIn = async (data: SignInRequest): Promise<SignIdResponse> => {
  const res = await publicApi.post('/auth/sign-in', data);

  if(!res.data.success) throw new Error('Login Failed');

  return res.data.data;
}