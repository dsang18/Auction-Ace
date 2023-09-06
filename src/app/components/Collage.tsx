import Image from "next/image";
import collage from "public/collage.png";

export default function Collage() {
  return (
    <div className="rotate-12 mt-10">
      <Image src = {collage} className="w-120 md: w-full p-0 ml-10" alt="collage_1"></Image>
    </div>
  )
}
