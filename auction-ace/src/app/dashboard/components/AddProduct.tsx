import { useState } from 'react';
import axios from 'axios';
import { BsFillCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AddProductFormDataSchemaClient } from '@/lib/zodSchema';
import { addProduct } from '@/lib/actions';
import { Toaster, toast } from 'sonner';

type Props = {
    userId: string;
    userName: string;
};

type AddProductInput = z.infer<typeof AddProductFormDataSchemaClient>;

export default function AddProduct(props: Props) {
    const [SelectedFile, setSelectedFile] = useState<File>();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<AddProductInput>({
        // resolver: zodResolver(AddProductFormDataSchemaClient),
    });

    const customOnChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        console.log('Entered CustomOnchange');

        if (event.target.files) {
            console.log('Entered If');

            const file = event.target.files[0];

            setSelectedFile(file);
        }
        console.log('End of CustomOnChange');
    };


    const uploadImageToCloudinary = (file: any) => {
        // Create a FormData object to store the file and other upload parameters

        const formData = new FormData();

        formData.append('file', file);

        // Add the Cloudinary upload preset to the FormData object

        formData.append('upload_preset', 'n1hcccvb');

        formData.append('folder', 'AuctionAce');

        // const UPLOAD_URL = `https://${process.env.CLOUDINARY_API_SECRET}:${process.env.CLOUDINARY_API_KEY}@api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`;

        const UPLOAD_URL = `https://bBERTT2zFbCI-5a8Kaarun3XuOQ:375535683849763@api.cloudinary.com/v1_1/drv5m7snk/upload`;

        // Make a POST request to the Cloudinary upload URL with the FormData object

        return axios.post(UPLOAD_URL, formData).then((response) => {
            return response.data.secure_url;
        });
    };

    const query = (images: string) => {
        const data = images;
        return axios
            .post(
                'https://api-inference.huggingface.co/models/google/vit-base-patch16-224',
                data,
                {
                    headers: {
                        Authorization:
                            'Bearer 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',
                    },
                }
            )
            .then((response) => {
                return response.data;
            });
    };

    const processForm: SubmitHandler<AddProductInput> = async (data) => {
        const image_url = await uploadImageToCloudinary(SelectedFile);

        const checkImage = await query(image_url);
        let possible_outcomes = new Array();
        for (let i = 0; i < checkImage.length; i++) {
            possible_outcomes = possible_outcomes.concat(
                checkImage[i].label.split(' ')
            );
        }
        const lowerCasePossibleOutcomes = possible_outcomes.map(item => item.toLowerCase())
        console.log(lowerCasePossibleOutcomes);
        
        const watchName = data.prodName.toLowerCase()

        const nameArray = watchName.split(" ")
        console.log(" ");
        console.log(nameArray);
        
        

        if (!lowerCasePossibleOutcomes.some(element => nameArray.includes(element))) {
            toast.error("The Image doesn't match the Name you have given")
            return;
        }

        toast.success("Image Verified :)")

        console.log(image_url);

        data.images = image_url;

        // @ts-ignore
        const result = await addProduct(data);

        if (!result) {
            toast.error('Something went wrong :(');
            return;
        }

        if (result.error) {
            // set local error state
            console.log(result.error);
            return;
        }

        reset();
    };

    return (
        <section>
            <div className="flex items-center justify-center p-4 py-3 mt-4">
                <div className="signUpBox w-full md:w-2/3 lg:w-1/2 h-full flex items-center justify-start border-2 border-[#805D5D] bg-white rounded-lg flex-col pt-8 pb-6">
                    {/* Sign up form heading */}
                    <h3 className="text-3xl">Sell Product</h3>

                    {/* sign up form */}
                    {/* <form className="w-full px-4" 
                    // onSubmit={handleForm}
                    > */}

                    <form
                        onSubmit={handleSubmit(processForm)}
                        className="w-full px-4"
                    >
                        <fieldset
                            id="form"
                            className="flex items-center justify-around flex-col w-100 p-4 disabled:opacity-70"
                        >
                            <label className="text-md w-full">
                                Product Name
                                <input
                                    type="text"
                                    className="w-full pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md"
                                    placeholder="Product Name"
                                    {...register('prodName')}
                                />
                            </label>
                            {errors.prodName?.message && (
                                toast.error(errors.prodName.message)
                            )}

                            {/* inputs for Product Description */}
                            <label className="text-md w-full mt-6">
                                Product Description
                                <textarea
                                    className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                    placeholder="Product Description"
                                    {...register('description')}
                                />
                            </label>
                            {errors.description?.message && (
                                toast.error(errors.description.message)
                            )}

                            {/* input for Minimum Bid */}
                            <label className="text-md w-full mt-6">
                                Start Bid Amount
                                <input
                                    type="number"
                                    className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                    placeholder="Minimum Bid"
                                    {...register('price', {
                                        valueAsNumber: true,
                                    })}
                                />
                            </label>
                            {errors.price?.message && (
                                toast.error(errors.price.message)
                            )}

                            <label className="text-md w-full mt-6">
                                Bid End Time
                                <input
                                    type="datetime-local"
                                    className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                    placeholder="Bid Time"
                                    {...register('auctionEndTime', {
                                        valueAsDate: true,
                                    })}
                                />
                            </label>
                            {errors.auctionEndTime?.message && (
                                toast.error(errors.auctionEndTime.message)
                            )}

                            {/* <label className="text-md w-full mt-6">
                                Invoice or bill
                                <input
                                    type="file"
                                    className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                    name="invoice"
                                    placeholder="Invoice or Bill"
                                />
                            </label> */}

                            <label className="text-md w-full mt-6">
                                Product Image
                                <input
                                    type="file"
                                    className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                    // name="prodImage"
                                    placeholder="Image"
                                    {...register('images')}
                                    onChange={customOnChangeHandler}
                                />
                            </label>
                            {errors.images?.message && (
                                toast.error(errors.images.message.toString())
                            )}

                            <input
                                type="hidden"
                                value={props.userId}
                                {...register('sellerId')}
                            />
                            {errors.sellerId?.message && (
                                toast.error(errors.sellerId.message)
                            )}

                            <input
                                type="hidden"
                                value={props.userName}
                                {...register('sellerName')}
                            />
                            {errors.sellerName?.message && (
                                toast.error(errors.sellerName.message)
                            )}

                            <div className="flex items-start justify-start flex-col w-full md:px-2 mt-6">
                                <label className="text-lg text-center font-semibold w-full">
                                    Invoice Summary
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="text-lg text-slate-50 bg-[#E3AF46] px-7 py-2 mt-4 rounded-lg"
                            >
                                Sell Now
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
            <Toaster richColors expand={true} />
        </section>
    );
}
