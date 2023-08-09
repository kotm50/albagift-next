import {useState} from "react"

import Head from 'next/head'

import axios from 'axios'

export default function Home() {
  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

const axiosTest = async () => {
  let a:string = "엑시오스 테스트 시작"
  let b:string = "엑시오스 테스트 끝"
  console.log(a)
  const listData = {
    page:1,
    size:20,
  }
  try {
    const res:{} = await axios.get("/api/v1/shop/goods/list", {params:listData})
    console.log(res)
    console.log(b)
  } catch (err) {
    console.log(err)
  }
}

const loginTest = async () => {
  let a:string = "엑시오스 테스트 시작"
  let b:string = "엑시오스 테스트 끝"
  console.log(a)
  try {
    const res:{} = await axios.get("/api/v1/shop/goods/list")
    console.log(res)
    console.log(b)
  } catch (err) {
    console.log(err)
  }
}
  return (
    <>
      <Head>
        <title>알바선물 | 면접보고 선물받자!</title>
        <meta name="description" content="구직활동이 포인트가 되는 신개념 포인트몰 알바선물" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="container mx-auto bg-indigo-500 pt-3 pb-6 text-white font-medium text-9xl text-center font-tmoney">테일윈드 적용 테스트</h1>
      <main className="container mx-auto">
        <input type="text" value={id} className="p-2 border" onChange={e => setId(e.currentTarget.value)} />
        <input type="text" value={pwd} className="p-2 border" onChange={e => setPwd(e.currentTarget.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 w-40 mx-auto p-2 text-white" onClick={loginTest}>로그인 테스트</button>
        <button className="bg-green-500 hover:bg-green-700 w-40 mx-auto p-2 text-white" onClick={axiosTest}>엑시오스 테스트</button>
      </main>
    </>
  )
}
