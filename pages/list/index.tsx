import { useEffect, useState } from 'react';
import { GoodsData } from '../../models/GiftModel';

function ListPage() {
  const [data, setData] = useState<GoodsData[] | null>(null); // data 타입을 명시적으로 설정
  const [loading, setLoading] = useState(true);  // 로딩 상태 저장
  const [error, setError] = useState<Error | null>(null); // error 타입을 명시적으로 설정

  useEffect(() => {
    // API 호출 함수 정의
    const fetchData = async () => {
      try {
        const response = await fetch('/api/list');  // API 호출
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();  // 응답을 JSON으로 파싱
        setData(result);  // 상태 업데이트
      } catch (error) {
        setError(error as Error); // 에러를 Error 타입으로 변환하여 저장
      } finally {
        setLoading(false);  // 로딩 상태 업데이트
      }
    };

    fetchData();  // API 호출 함수 실행
  }, []);  // 의존성 배열은 빈 배열로, 컴포넌트가 마운트될 때만 실행

  if (loading) return <div>Loading...</div>;  // 로딩 중일 때 표시할 내용
  if (error) return <div>Error: {error.message}</div>;  // 오류가 발생했을 때 표시할 내용

  return (
    <div>
      {/* 데이터를 렌더링하는 로직 (예: map 함수 사용) */}
      {data && data.map(item => (
        <div key={item.id}>
          {/* item의 필드에 따라 렌더링 내용 변경 */}
          {item.goodsName}
        </div>
      ))}
    </div>
  );
}

export default ListPage;