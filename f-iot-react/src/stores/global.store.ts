//! global.store.ts
//  : 공용 데이터 (공용 코드, 설정 등을 저장)
//  - API로  받아온 공용 데이터를 전역 캐시로 보관할 때 사용

import { getCommons, type CommonResponse } from "@/apis/commonApi";
import { create } from "zustand";

// ex) 카테고리, 지역 리스트,  ...
//     > 여러 페이지나 컴포넌트에서 공통적으로 필요한 데이터
//     > 매번 API를 호출하지 않고, 한번 불러온 데이터를 전역에 저장해 사용하겠단 목적을 가지고있음 -> 이러면 효율적임
//       => 프로젝트 실행 진입점에서 호출하는것이 일반적임 (웹사이트 실행 시 호출되게)

//? 전역 상태관리 하는 방법
//@ 1. 전역 상태 구조 명시 (interface or type 별칭)
//  1) 카테고리, 지역 리스트 - 속성으로 정의 (실제 전역 관리할 데이터를 속성정의함)
//  2) 전역 로딩 상태 관리 - 한 번 데이터가 로딩 되었는지 여부를 저장하는 (boolean)
//      > 여러 컴포넌트들이 isLoaded 데이터를 보고 로딩 스피너 표시 여부나 초기 fetch 실행 여부를 판단함
// cf) 로딩 스피너? 로딩중 애니메이션
//  3) 실제 API 호출 함수 - fetchGlobalData (비동기 함수)

interface GlobalState {
  // 속성 정의
  categories: string[];
  regions: string[];

  // 로딩 여부
  isLoaded: boolean;

  // fetch함수
  // axios(Promise 기반 비동기) -> 반환타입은 Promise<데이터type> 
  fetchGlobalData: () => Promise<void>;
}

//@ 스토어 생성: create<객체타입>()
//  : 해당 스토어는 외부에서 구조분해할당 또는 부분구독하여 사용함
//  명명: use + 데이터명 + Store (파일명: 데이터명.store.ts/ 타입명: 데이터명State)

// create 함수는 콜백함수를 가지고있음 
// : 콜백함수는 set설정 함수를 매개변수로 받고, state <제네릭>객체 타입을 반환함
//   > 객체 반환 시 함수의 구현부와 구분을 위해 소괄호로 감쌈
export const useGlobalStore = create<GlobalState>((set) => ({
  // 속성값과 함수를 정의하는 공간임
  // - 속성값: 초기값 할당
  // - 함수값: 구조 정의 => 해당 함수를 통해 속성값 업데이트를 할 수 있는 함수를 정의해야함
  
  categories: [],
  regions: [],
  isLoaded: false,

  fetchGlobalData: async () => {
    try {
      // const commonDatas: CommonResponse = await getCommons();
      // set({
      //   categories: commonDatas.categories,
      //   regions: commonDatas.regions,
      //   isLoaded: true,
      // });
      // 백엔드가 없어서 아래와 같은 임의값으로 대체 (원래는 위에가 맞음)
      set({
        categories: [ "COFFEE", "DESERT", "DRINKS", "FOOD" ],
        regions: ["SEOUL", "BUSAN", "DAEJEON", "ULSAN"],
        isLoaded: true
      })
    } catch (e) {
      set({
        categories: [],
        regions: [],
        isLoaded: false
      })
    }
  }
}));