import Product_Details from './components/Product_Details';
import Jumbotron from '../../components/Jumbotron';
import prisma from '@/lib/prisma';
// import Navbar from '../components/Navbar';

type Params = {
    params: {
        id: string;
    };
};

export default async function Products({ params: { id } }: Params) {
    const prodDetails = await prisma.item.findFirst({
        where: {
            id: id,
        },
    });
    if (prodDetails === null) {
        throw new Error("Something Went Wrong! Please try again")
    }
    return (
        <div className="max-w-screen h-screen">
            {/* <Navbar /> */}
            <Jumbotron
                section_name1={'Auction Details'}
                section_name2={prodDetails?.itemName}
            />
            <Product_Details
                prodId={id}
                name={prodDetails.itemName}
                seller={prodDetails.seller}
                sellerId={prodDetails.sellerId}
                price={prodDetails.initialBid}
                desc={prodDetails.description}
                images={prodDetails.images}
            />
        </div>
    );
}
