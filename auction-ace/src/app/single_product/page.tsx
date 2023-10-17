import Product_Details from "./components/Product_Details";
import Jumbotron from "../components/Jumbotron";
// import Navbar from '../components/Navbar';

export default function page() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
        {/* <Navbar /> */}
        <Jumbotron section_name1={"Auction Details"} section_name2={"Product"}/>
        <Product_Details/>
    </div>
  )
}
