// import Navbar from '../components/Navbar';
import ComponentTree from './components/ComponentTree';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import YourProduct from './components/YourProduct';

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
                // alert("You don't have access to Dashboard")
                redirect('/landingPage')
            )}
        </>
    );
}
