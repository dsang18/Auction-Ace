// import Navbar from '../components/Navbar';
import ComponentTree from './components/ComponentTree';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation'

export default async function SellerDashboard() {
    const { getPermission } = getKindeServerSession();

    return (
        <>
            {await getPermission("dashboard:access").isGranted ? (
                <main>
                    {/* <Navbar /> */}
                    <ComponentTree />                    
                </main>
            ) : (
                // alert("You don't have access to Dashboard")
                redirect('/landingPage')
            )}
        </>
    );
}
