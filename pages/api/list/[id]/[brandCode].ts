import { NextApiRequest, NextApiResponse } from 'next';
import { giftList } from '../../data.js';
import { GoodsData, DataObject } from '../../../../models/GiftModel';  // 경로는 실제 경로에 맞게 수정해야 합니다.

const giftListTyped: DataObject[] = giftList;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, brandCode } = req.query;

  const allData = giftListTyped.flatMap((item: DataObject) => item.data);
  const filteredData = allData.filter((entry: GoodsData) => entry.brandCode === brandCode);

  res.status(200).json(filteredData);
}
