import Link from 'next/link';
import {AiFillHome} from "react-icons/ai"


// components/Header.tsx
const Header: React.FC = () => {
    interface Category {
        category1Seq: number;
        category1Name: string;
      }
    let data: Category[] = [
        {
          category1Seq: 1,
          category1Name: "커피/음료",
        },
        {
          category1Seq: 2,
          category1Name: "베이커리/도넛",
        },
        {
          category1Seq: 3,
          category1Name: "아이스크림",
        },
        {
          category1Seq: 4,
          category1Name: "편의점",
        },
        {
          category1Seq: 5,
          category1Name: "피자/버거/치킨",
        },
        {
          category1Seq: 6,
          category1Name: "외식/분식/배달",
        },
        {
          category1Seq: 7,
          category1Name: "영화/음악/도서",
        },
        {
          category1Seq: 9,
          category1Name: "뷰티/헤어/바디",
        },
        {
          category1Seq: 10,
          category1Name: "출산/생활/통신",
        },
      ];
    return (
      <header className="xl:border-b-2 border-teal-500 container mx-auto  flex flex-row flex-nowrap">
      <Link href="/" className="bg-teal-500 hover:bg-teal-200 text-white hover:text-black p-3 giftcategory"><AiFillHome size={24} /></Link>
        <nav id="touch-target"
          className="text-lg flex flex-row flex-nowrap overflow-x-auto giftCategoryMenu">
        <Link href="/list" className="hover:bg-teal-100 p-3 hover:font-tmoney giftcategory">모든상품</Link>
        {data.map((item, idx)=>(
            <Link href={`/list/${item.category1Seq}`} key={idx} className="hover:bg-teal-100 p-3 hover:font-tmoney giftcategory">{item.category1Name}</Link>
        ))}
        </nav>
      </header>
    );
  }

  export default Header;