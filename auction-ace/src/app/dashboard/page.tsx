// import Navbar from '../components/Navbar';
import ComponentTree from './components/ComponentTree';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import YourProduct from './components/YourProduct';
import AllPurchases from './components/AllPurchases';
import Jumbotron from '@/app/components/Jumbotron';

export default async function SellerDashboard() {
    const { getUser, getPermission } = getKindeServerSession();
    const user = await getUser();
    if (user.given_name === null || user.id === null) {
        throw new Error('Something Went Wrong! Please try again');
    }
    return (
        <>
            {(await getPermission('dashboard:access').isGranted) ? (
                <main>
                    {/* <Navbar /> */}
                    <ComponentTree
                        userId={user.id}
                        userName={user.given_name + ' ' + user.family_name}
                    >
                        <YourProduct userId={user.id} />
                    </ComponentTree>
                </main>
            ) : (
                <main>
                    <Jumbotron section_name1='Home' section_name2='All Purchases' />
                    <AllPurchases userId={user.id} />
                </main>
            )}
        </>
    );
}
