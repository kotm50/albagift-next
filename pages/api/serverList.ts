import axios from 'axios';

interface GoodsListParams {
  page: number;
  size: number;
}

interface GoodsListResponse {
  // 여기에 응답 JSON의 타입을 정의합니다.
  // 예제로 몇 가지 필드만 정의해 둘게요.
  code: string;
  message: string;
  goodsList: any[]; // 상품 목록의 정확한 타입을 알면 any 대신 해당 타입을 사용해주세요.
  // ... 추가로 필요한 필드들
}

export const getGoodsList = async (params: GoodsListParams): Promise<GoodsListResponse> => {
  const response = await axios.get<GoodsListResponse>(`/api/v1/shop/goods/list`, {
    params,
  });
  return response.data;
};
