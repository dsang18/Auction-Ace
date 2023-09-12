import Collage from "../components/Collage";
import Product_Details from "../components/Product_Details";
import Section from "../components/Section";


export default function page() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
        <Section section_name1={"Auction Details"} section_name2={"Product"}/>
        <Product_Details/>
    </div>
  )
}
