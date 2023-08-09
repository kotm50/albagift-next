import { NextApiRequest, NextApiResponse } from 'next';
import { DataObject } from '../../../models/GiftModel';
import { giftList } from "../data.js"

// 샘플 데이터

const sampleData=giftList as DataObject[];


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query;

    const foundData = sampleData.find((item) => item.id === +id!); // 이 파일은 id가 있을 때만 로딩해야 함.
    if (foundData) {
      res.status(200).json(foundData.data);
    } else {
      res.status(404).json({ message: 'Data not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
