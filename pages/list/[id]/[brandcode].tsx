import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {GoodsData} from '../../../models/GiftModel';  // 경로는 GoodsData 인터페이스의 위치에 따라 조정해주세요.

const ListWithIdAndBrand = () => {
  const [data, setData] = useState<GoodsData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();
  const { id, brandCode } = router.query;

  useEffect(() => {
    if (id && brandCode) {
      fetch(`/api/list/${id}/${brandCode}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => setError(error));
    }
  }, [id, brandCode]);

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

export default ListWithIdAndBrand;
