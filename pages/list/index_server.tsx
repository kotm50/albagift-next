import { useEffect, useState } from 'react';
import { getGoodsList } from '../api/serverList'; // api.ts 파일의 경로를 적절히 변경해주세요.

const GoodsPage = () => {
  const [goods, setGoods] = useState<GoodsListResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGoodsList({ page: 1, size: 20 });
        setGoods(data);
      } catch (error) {
        console.error("Error fetching goods:", error);
      }
    };

    fetchData();
  }, []);

  interface GoodsListResponse {
    message: string;
    goodsList: Array<{
        salePrice: number;
        ts: {
          seconds: number;
          nanoseconds: number;
        };
        content: string;
        goodsStateCd: string;
        discountPrice: number;
        id: string;
        srchKeyword?: string;
        exhAgeCd?: string;
        rmCntFlag: string;
        exhGenderCd?: string;
        brandIconImg: string;
        brandCode: string;
        category1Seq: number;
        goodsTypeDtlNm: string;
        discountRate: number;
        affiliateId: string;
        validPrdTypeCd: string;
        goodsComId: string;
        keywords: string[];
        goodsName: string;
        validPrdDay: string;
        mmsBarcdCreateYn: string;
        saleDateFlag: string;
        mmsReserveFlag: string;
        saleDateFlagCd?: string;
        goodsImgS: string;
        goodsCode: string;
        kotiPrice: number;
        mmsGoodsImg: string;
        realPrice: number;
        rmIdBuyCntFlagCd: string;
        goodsNo: number;
        brandName: string;
        limitDay: number;
        endDate: string;
        goodsTypeNm: string;
        contentAddDesc?: string;
        mdCode: string;
        affiliate: string;
        goodsComName: string;
        goodsImgB: string;
        num: number;
    }>;
  }

  return (
    <div>
      {goods && goods.goodsList.map(item => (
        <div key={item.id}>
          {/* item의 필드에 따라 렌더링 내용 변경 */}
          {item.goodsName}
        </div>
      ))}
    </div>
  );
};

export default GoodsPage;
