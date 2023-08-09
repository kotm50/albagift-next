import { NextApiRequest, NextApiResponse } from 'next';
import { DataObject, GoodsData } from '../../models/GiftModel';
import { giftList } from "./data.js"

// 샘플 데이터

const sampleData=giftList as DataObject[];


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query;

    if (!id) {
      // '/list' 요청
      const allData = sampleData.reduce<GoodsData[]>((acc, obj) => acc.concat(obj.data), []);
      res.status(200).json(allData);
    } else {
      // '/list/[id]' 요청
      const foundData = sampleData.find((item) => item.id === +id);
      if (foundData) {
        res.status(200).json(foundData.data);
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
