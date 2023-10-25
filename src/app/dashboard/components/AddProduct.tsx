export default function AddProduct() {
  return (
    <section>
            <div className="flex items-center justify-center p-4  py-3">
                <div className="signUpBox w-full md:w-1/2 h-full flex items-center justify-start border-2 border-[#805D5D] bg-white rounded-lg flex-col">
                    {/* Sign up form heading */}
                    <h3 className="text-3xl">Sell Product</h3>

                    {/* sign up form */}
                    <form className="w-full px-4">
                        

                        <fieldset
                            id="form"
                            className="flex items-center justify-around flex-col w-100 p-4 disabled:opacity-70"
                        >
                            {/* inputs for Product Name */}
                            
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
                                    ></input>
                                </div>
                            </div>


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
                                    ></input>
                                </div>
                            </div>


                            <div className="flex items-start justify-start flex-col w-full md:px-2 ">
                                <label className="text-md">
                                    Invoice or bill
                                </label>
                                <div className="relative flex items-center w-full">
                                    <input
                                        type="file"
                                        className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                        name="invoice"
                                        placeholder="Invoice or Bill"
                                    ></input>
                                </div>
                            </div>

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
                                    ></input>
                                </div>
                            </div>

                            <div className="flex items-start justify-start flex-col w-full md:px-2 ">
                                <label className="text-lg text-center font-semibold w-full">
                                    Invoice Summary
                                </label>
                            
                            </div>


                            {/* Submit button */}
                            <button className="text-lg text-slate-50 bg-[#E3AF46] px-7 py-2 mt-4 rounded-lg">
                                Sell Now
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
  )
}
