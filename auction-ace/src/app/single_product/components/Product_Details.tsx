import prod_img1 from 'public/USPA_white_shoes.png';
import Image from 'next/image';
import Reviews from './Reviews';


export default function Product_Details() {
  return (
    <div className="flex items-center justify-center p-2 flex-wrap w-full md:justify-start">


        <div className="flex items-center justify-between p-2 w-full md:w-1/2">
          <div className='flex items-center justify-around p-2 flex-col w-1/3 sm:w-1/3'>
            <Image src={prod_img1} alt="Product" className='my-2 w-full'></Image>
            <Image src={prod_img1} alt="Product" className='my-2 w-full'></Image>
            <Image src={prod_img1} alt="Product" className='my-2 w-full'></Image>
          </div>
            <Image src={prod_img1} alt="Product" className='my-2 w-2/3 sm:w-2/3'></Image>
        </div>

        {/* product description container */}
        <div className='flex items-center justify-center flex-col w-full sm:w-4/5 md:w-1/2 lg:w-2/5 md:px-2'>

          <p className='w-full text-xl text-gray-900 font-semibold'>USPA white shoes with black accent</p>
          <p className='w-full text-md text-gray-600'>By USPA Distrbutor</p>
          <p className='w-full text-sm text-gray-900 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut.</p>
          <p className='w-full text-xl text-gray-900 text-center my-2'>Bidding Price: <span className='font-semibold'>$89.00</span></p>

          {/* Bid now container */}
          <div className='flex items-start justify-start p-2 flex-col my-3 shadow-lg w-full border-[1.5px] border-gray-300 rounded-lg sm:w-3/4 md:w-full sm:p-4 bg-white'>
            <p className='text-lg font-semibold text-gray-900'>Bid Now</p>
            <p className='text-md text-gray-900'>Minimum Bid Amount: $20.00</p>
            <hr className='w-1/3 bg-gray-900 my-4 h-[0.1rem]'></hr>
            
            <form className='flex items-center justify-around w-full p-1'>
              <input className="bg-gray-300 text-gay-600 px-2 py-1 text-lg rounded-lg w-2/3" placeholder='$00.00'></input>
              <button className='bg-[#e3af46] px-2 py-1 text-center text-lg rounded-lg w-1/3 mx-2 font-semibold'> Place Bid</button>
            </form>
          </div>
        </div>

        {/* Description and bidding history buttons */}
        <div className='flex items-start justify-start w-full flex-col'>
          <div className='flex items-start justify-around w-full lg:w-1/3'>
              <button className='bg-[#e3af46] py-1 text-center text-lg rounded-md px-4'>Description</button>
              <button className='bg-slate-50 border-[1.5px] border-gray-500 py-1 text-center text-lg rounded-md px-4'>Bidding History</button>
          </div>

          {/* Description subsection */}
          <div className='flex items-center justify-center w-full md:w-full lg:w-3/5 flex-col p-2 my-2 md:mx-4'>
          <p className='w-full text-xl text-gray-900 font-semibold'>USPA white shoes with black accent</p>
          <p className='w-full text-sm text-gray-900 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic?</p>
          </div>

        </div>


        <Reviews/>
    </div>
  )
}
