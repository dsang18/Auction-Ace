// import Image from 'next/image'
import HomeCategories from './components/HomeCategories';
import HomeImage from './components/HomeImage';
import LiveAuction from './components/LiveAuction';
import Reviews from './components/Reviews';

export default function Home() {
  return (
   <div>
      <HomeImage/>
      <HomeCategories/>
      <LiveAuction/>
      <Reviews/>
   </div>
  )
}
