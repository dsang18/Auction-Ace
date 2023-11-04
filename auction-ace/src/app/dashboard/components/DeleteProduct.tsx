'use client';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { removeProduct } from "@/lib/actions";
import { Toaster, toast } from 'sonner';

type Props = {
    id: string
}

const handleDelete = async (id:string) => {
    const result = await removeProduct(id)
    if(result.success === true) {
        toast.success("Product Deleted Successfully")
    }
}

export default function DeleteProduct(props: Props) {
    return (
        <td>
            <button onClick={()=>handleDelete(props.id)}>
                <RiDeleteBin6Line />
                <Toaster richColors expand={true} />
            </button>
        </td>
    );
}
