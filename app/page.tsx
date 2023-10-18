import Image from "next/image";
import Slider from "@/Components/Slider";
import Featured from "@/Components/Featured";
import Offer from "@/Components/Offer";

export default function Home() {
  return (
    <div>
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
}
