export interface GoodsData {
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
  }


  export interface DataObject {
    id: number;
    data: GoodsData[];
  }