// import Image from 'next/image'
import HomeCategories from './components/HomeCategories';
import HomeImage from './components/HomeImage';
import LiveAuction from './components/LiveAuction';
import Reviews from './single_product/components/Reviews';
// import Navbar from './components/Navbar';

export default function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <HomeImage />
            <HomeCategories />
            <LiveAuction />
            <Reviews />
        </div>
    );
}
