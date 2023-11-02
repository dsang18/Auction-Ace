'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addEntry } from '@/lib/actions';
import { BidFormDataSchema } from '@/lib/zodSchema';
import { Toaster, toast } from 'sonner';

type Props = {
    access: boolean;
    prodId: string;
    userId: string;
    userName: string;
    sellerId: string;
    prodName: string;
    price: number;
};

type Inputs = z.infer<typeof BidFormDataSchema>;

export default function BidForm(props: Props) {
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(BidFormDataSchema),
    });

    const processForm: SubmitHandler<Inputs> = async (data) => {
        const result = await addEntry(data);

        if (!result) {
            console.log('Something went wrong');
            return;
        }

        if (result.error) {
            // set local error state
            console.log(result.error);
            return;
        }

        reset();
        setSuccess(true);
    };

    return (
        <section className="flex gap-6">
            <form
                onSubmit={handleSubmit(processForm)}
                className="flex items-center justify-around w-full p-1"
            >
                <input
                    type="number"
                    className="bg-gray-300 text-gay-600 px-2 py-1 text-lg rounded-lg w-2/3"
                    placeholder="₹00.00"
                    min={props.price + 100}
                    {...register('bid')}
                />
                {errors.bid?.message && (
                    <p className="text-sm text-red-400">{errors.bid.message}</p>
                )}

                <input
                    type="hidden"
                    value={props.prodId}
                    {...register('prodId')}
                />

                <input
                    type="hidden"
                    value={props.userId}
                    {...register('userId')}
                />

                <input
                    type="hidden"
                    value={props.userName}
                    {...register('userName')}
                />

                <input
                    type="hidden"
                    value={props.sellerId}
                    {...register('sellerId')}
                />

                <input
                    type="hidden"
                    value={props.prodName}
                    {...register('prodName')}
                />

                {props.access ? (
                    <button
                        disabled
                        className="bg-[#e3af46] px-2 py-1 text-center text-lg rounded-lg w-1/3 mx-2 font-semibold disabled:opacity-75"
                    >
                        Place Bid
                    </button>
                ) : (
                    <button className="bg-[#e3af46] px-2 py-1 text-center text-lg rounded-lg w-1/3 mx-2 font-semibold disabled:opacity-75">
                        Place Bid
                    </button>
                )}
                {errors.prodId?.message && (
                    <p className="text-sm text-red-400">
                        {errors.prodId.message}
                    </p>
                )}
                {errors.userId?.message && (
                    <p className="text-sm text-red-400">
                        {errors.userId.message}
                    </p>
                )}
                {errors.userName?.message && (
                    <p className="text-sm text-red-400">
                        {errors.userName.message}
                    </p>
                )}
                {errors.sellerId?.message && (
                    <p className="text-sm text-red-400">
                        {errors.sellerId.message}
                    </p>
                )}
                {errors.prodName?.message && (
                    <p className="text-sm text-red-400">
                        {errors.prodName.message}
                    </p>
                )}
            </form>
            {/* {success && (
                <>
                    <Toaster
                        richColors
                        expand={true}
                        position="top-center"
                    />
                    {toast.success('Bid has been Placed')}
                    {setSuccess(false)}
                </>
            )} */}
        </section>
    );
}
