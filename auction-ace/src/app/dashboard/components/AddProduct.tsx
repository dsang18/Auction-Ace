<<<<<<< Updated upstream
import { useState } from "react"
import axios from 'axios';
import fs from 'fs';



export default function AddProduct() {
    const [Name, setName] = useState("")
    const [Desc, setDesc] = useState("")
    const [MinBid, setMinBid] = useState('')
    const [BidEndTime, setBidEndTime] = useState('')
    const [SelectedImage, setSelectedImage] = useState("")
    const [SelectedFile, setSelectedFile] = useState<File>()


const handleForm = async ()=>{
    try{
        if (!SelectedFile) return;
        const formData = new FormData()
        formData.set("myImage", SelectedFile)
        formData.set("productName", Name)
        formData.set("productDescription", Desc)
        formData.set("minimumBid", MinBid)
        formData.set("BidEndTime", BidEndTime)
        console.log(formData)
        
        const {data} = await axios.post("/api/uploadData", formData)
        
    
        // console.log(data)
    }
    catch(error: any){
        console.log(error.response?.data)
    }

}


  return (
    <section>
            <div className="flex items-center justify-center p-4 py-3">
                <div className="signUpBox w-full md:w-1/2 h-full flex items-center justify-start border-2 border-[#805D5D] bg-white rounded-lg flex-col">
=======
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AddProductFormDataSchema } from '@/lib/zodSchema';
import { addProduct } from '@/lib/actions';

type Props = {
    userId: string;
    userName: string;
};

type AddProductInput = z.infer<typeof AddProductFormDataSchema>;

export default function AddProduct(props: Props) {
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<AddProductInput>({
        resolver: zodResolver(AddProductFormDataSchema),
    });

    const processForm: SubmitHandler<AddProductInput> = async (data) => {
        const result = await addProduct(data);

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
        <section>
            <div className="flex items-center justify-center p-4 py-3 mt-4">
                <div className="signUpBox w-full md:w-2/3 lg:w-1/2 h-full flex items-center justify-start border-2 border-[#805D5D] bg-white rounded-lg flex-col pt-8 pb-6">
>>>>>>> Stashed changes
                    {/* Sign up form heading */}
                    <h3 className="text-3xl">Sell Product</h3>

                    {/* sign up form */}
<<<<<<< Updated upstream
                    <form className="w-full px-4" 
                    // onSubmit={handleForm}
                    >
                        

=======
                    <form
                        onSubmit={handleSubmit(processForm)}
                        className="w-full px-4"
                    >
>>>>>>> Stashed changes
                        <fieldset
                            id="form"
                            className="flex items-center justify-around flex-col w-100 p-4 disabled:opacity-70"
                        >
                            {/* inputs for Product Name */}
<<<<<<< Updated upstream
                            
                                <div className="flex items-start justify-start flex-col w-full md:w-full md:px-2">
                                    <label className="text-md w-full">
                                        Product Name
                                    </label>
                                    <div className="relative flex items-center w-full">
                                        <input
                                            type="text"
                                            className="w-full pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md"
                                            placeholder="Product Name"
                                            name="prodName"
                                            onChange = {({target})=>{
                                                setName(target.value)
                                            }}
                                        ></input>
                                    </div>
                                </div>
                            

                            {/* inputs for Product Description */}
                            
                                <div className="flex items-start justify-start flex-col w-full md:w-full md:px-2">
                                    <label className="text-md">Product Description</label>
                                    <div className="relative flex items-center w-full">
                                        <textarea
                                            className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                            name="prodDesc"
                                            placeholder="Product Description"
                                            onChange = {({target})=>{
                                                setDesc(target.value)
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                            

                           

                            {/* input for Minimum Bid */}
                            <div className="flex items-start justify-start flex-col w-full md:px-2 ">
                                <label className="text-md">
                                    Minimum Bid
                                </label>
                                <div className="relative flex items-center w-full">
                                    <input
                                        type="number"
                                        className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                        name="minbid"
                                        placeholder="Minimum Bid"
                                        onChange = {({target})=>{
                                            setMinBid(target.value)
                                        }}
                                    ></input>
                                </div>
                            </div>
=======

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
                                <p className="text-sm text-red-400">
                                    {errors.prodName.message}
                                </p>
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
                                <p className="text-sm text-red-400">
                                    {errors.description.message}
                                </p>
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
                                <p className="text-sm text-red-400">
                                    {errors.price.message}
                                </p>
                            )}
>>>>>>> Stashed changes

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
                                <p className="text-sm text-red-400">
                                    {errors.auctionEndTime.message}
                                </p>
                            )}

<<<<<<< Updated upstream
                            <div className="flex items-start justify-start flex-col w-full md:px-2 ">
                                <label className="text-md">
                                    Bid End Time
                                </label>
                                <div className="relative flex items-center w-full">
                                    <input
                                        type="datetime-local"
                                        className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                        name="bidtime"
                                        placeholder="Bid Time"
                                        onChange = {({target})=>{
                                            setBidEndTime(target.value)
                                        }}
                                    ></input>
                                </div>
                            </div>
=======
                            {/* <label className="text-md w-full mt-6">
                                Invoice or bill
                                <input
                                    type="file"
                                    className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                    name="invoice"
                                    placeholder="Invoice or Bill"
                                />
                            </label> */}
>>>>>>> Stashed changes

                            <label className="text-md w-full mt-6">
                                Product Image
                                {/* <input
                                    type="file"
                                    className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                    placeholder="Image"
                                    {...register('images')}
                                /> */}
                                <input
                                    type="text"
                                    className="w-full pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md"
                                    placeholder="Image Path"
                                    {...register('images')}
                                />
                            </label>
                            {errors.images?.message && (
                                <p className="text-sm text-red-400">
                                    {errors.images.message}
                                </p>
                            )}

                            <input
                                type="hidden"
                                value={props.userId}
                                {...register('sellerId')}
                            />
                            {errors.sellerId?.message && (
                                <p className="text-sm text-red-400">
                                    {errors.sellerId.message}
                                </p>
                            )}

<<<<<<< Updated upstream
                            <div className="flex items-start justify-start flex-col w-full md:px-2 ">
                                <label className="text-md">
                                    Product Image
                                </label>
                                <div className="relative flex items-center w-full">
                                    <input
                                        type="file"
                                        className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                        name="prodImage"
                                        placeholder="Image"
                                        onChange = {({target})=>{
                                            if (target.files){
                                                const file = target.files[0]
                                                setSelectedImage(URL.createObjectURL(file))
                                                setSelectedFile(file)
                                            }
                                        }}
                                    ></input>

                                </div>
                            </div>
=======
                            <input
                                type="hidden"
                                value={props.userName}
                                {...register('sellerName')}
                            />
                            {errors.sellerName?.message && (
                                <p className="text-sm text-red-400">
                                    {errors.sellerName.message}
                                </p>
                            )}
>>>>>>> Stashed changes

                            <div className="flex items-start justify-start flex-col w-full md:px-2 mt-6">
                                <label className="text-lg text-center font-semibold w-full">
                                    Invoice Summary
                                </label>
                            </div>

                            {/* Submit button */}
<<<<<<< Updated upstream
                            <button onSubmit={handleForm} className="text-lg text-slate-50 bg-[#E3AF46] px-7 py-2 mt-4 rounded-lg">
=======
                            <button
                                type="submit"
                                className="text-lg text-slate-50 bg-[#E3AF46] px-7 py-2 mt-4 rounded-lg"
                            >
>>>>>>> Stashed changes
                                Sell Now
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
    );
}
