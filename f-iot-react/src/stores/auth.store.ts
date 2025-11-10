// auth.store.ts
// 인증 객체 처리 할거임

import { signIn } from "@/apis/authApi";
import { create, type StateCreator } from "zustand";
import type { PersistOptions } from "zustand/middleware";
import { devtools, persist } from "zustand/middleware";

// 전역 상태 관리 될 사용자 데이터
interface User {
  id: number;
  loginId: string;
  // nickname: string;
}

interface AuthState {
  //@ 현재 로그인한 사용자 정보 (로그인하지 않을 경우 null)
  user: User | null;

  //@ 로딩 상태(로그인/ 로그아웃 요청 중 true)
  isLoading: boolean;

  //@ 토큰 상태
  accessToken: string | null;

  //@ 예외 상태
  error: string | null

  // 인증 여부(토큰이 유효하고 사용자 정보가 있으면 true)
  // isAuthenticated: boolean;

  //^ === 액션(Action) ===
  //@ 로그인 함수 (비동기, API 요청)
  login: (loginId: string, password: string) => Promise<void>;

  //@ 로그아웃 함수
  logout: () => void;

  //@ 사용자 설정 함수
  setUser: (u: User | null) => void;

  //@ 토큰 설정 함수
  setAccessToken: (token: string | null) => void;

  //@ 리프레시 토큰 설정 함수
  refreshToken: () => Promise<void>;
}

//? set 설정 함수
//? get 함수

//? 미들웨어
//  1) devtools
//   : React 상태 관리 라이브러리에서 브라우저 개발자 도구와 연결해주는 역할
//   - dispatch 되는 액션을 가로채서 개발자 도구에 상태 변화를 기록하고, 상태를 추적함 => 디버깅에 용이함
//  2) persist
//   : 상태를 지정된 스토리지에 저장하고, 앱이 다시 로드될 때 이 저장소에서 상태를 복원함

const withEnhancers = <T>(
  // set) 상태를 업데이트 하는 함수
  // get) 현재 상태를 읽는 함수
  storeCreate: StateCreator<T>, //^ set, get  가져와서 객체 반환 
  options?: PersistOptions<T>) => { //^ persist에서 데이터를 복원할 장소 명시
    const persistoptions = options ?? {name: 'app-storage'};
    return import.meta.env.MODE === 'production'
    //@ persist(): 상태를 저장소에 자동 저장/복원하는 미들웨어
    ? persist(storeCreate, persistoptions)
    //@ devtools(): 상태 변화를 개발자 도구에서 추적하도록 도와주는 미들웨어
    : devtools(persist(storeCreate, persistoptions));
  }

  // export const useAuthStore = create<AuthState>()(
  //   withEnhancers((set, get) => ({
  //     // 초기 상태 명시
  //     user: null,
  //     accessToken: null,
  //     isLoading: false,
  //     error: null,

  //     // === 액션 정의
  //     setUser: (u) => set({user: u}),
  //     setAccessToken: (token) => set({accessToken: token}),
  //     login: async (loginId, password) => {
  //       set({isLoading: true, error: null});
  //       try {
  //         const data = await signIn({loginId, password});
  //         set({
  //           user: {id: 1, loginId: data.username},
  //           accessToken: data.accessToken,
  //           isLoading: false
  //         })
  //       } catch (e) {
  //         set({
  //           isLoading: false,
  //           error: (e as Error).message ?? "로그인 실패",
  //         })
  //       }
  //     },
  //     logout: () => {
  //       set({
  //         user: null,
  //         accessToken: null,
  //       });
  //     },
  //     refreshToken: async () => {
  //       try {
  //         const newToken = 'refreshed-token';
  //         set({accessToken: newToken})
  //       } catch (e) {
  //         set({
  //           error:(e as Error).message
  //         })
  //       }
  //     },
  //   }))
  // );

  export const useAuthStore = create<AuthState>(
    set => ({
      // 초기 상태 명시
      user: null,
      accessToken: null,
      isLoading: false,
      error: null,

      // === 액션 정의
      setUser: (u) => set({user: u}),
      setAccessToken: (token) => set({accessToken: token}),
      login: async (loginId, password) => {
        set({isLoading: true, error: null});
        try {
          const data = await signIn({loginId, password});
          set({
            user: {id: 1, loginId: data.username},
            accessToken: data.accessToken,
            isLoading: false
          })
        } catch (e) {
          set({
            isLoading: false,
            error: (e as Error).message ?? "로그인 실패",
          })
        }
      },
      logout: () => {
        set({
          user: null,
          accessToken: null,
        });
      },
      refreshToken: async () => {
        try {
          const newToken = 'refreshed-token';
          set({accessToken: newToken})
        } catch (e) {
          set({
            error:(e as Error).message
          })
        }
      },
    })
  );