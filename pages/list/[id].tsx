import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {GoodsData} from '../../models/GiftModel';  // 경로는 GoodsData 인터페이스의 위치에 따라 조정해주세요.

const ListWithId = () => {
  const [data, setData] = useState<GoodsData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // id 값이 설정되면 API 호출을 합니다.
    if (id) {
      fetch(`/api/list/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => setError(error));
    }
  }, [id]);  // 의존성 배열에 id를 추가하여 id 값이 변경될 때마다 API 호출을 다시 합니다.

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && data.map(item => (
        <div key={item.id}>
          {item.goodsName}
        </div>
      ))}
    </div>
  );
}

export default ListWithId;
