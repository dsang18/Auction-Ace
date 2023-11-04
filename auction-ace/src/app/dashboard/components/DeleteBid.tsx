'use client';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { removePurchase } from "@/lib/actions";
import { Toaster, toast } from 'sonner';

type Props = {
    id: string
}

const handleDelete = async (id:string) => {
    const result = await removePurchase(id)
    if(result.success === true) {
        toast.success("Bid Deleted Successfully")
    }
}

export default function DeleteBid(props: Props) {
    return (
        <td>
            <button onClick={()=>handleDelete(props.id)}>
                <RiDeleteBin6Line />
                <Toaster richColors expand={true} />
            </button>
        </td>
    );
}
