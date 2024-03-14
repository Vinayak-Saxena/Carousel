import Image from "next/image";
import { images } from "@/utils/constants";
import Description from "./Description";

interface SliderProps {
  activeImage: number;
  onChange: (newActiveImage: number) => void;
}

const Slider = ({ activeImage, onChange }: SliderProps) => {
  const GoFront = () => {
    const newActiveImage = activeImage === images.length - 1 ? 0 : activeImage + 1;
    onChange(newActiveImage);
  };

  const GoBack = () => {
    const newActiveImage = activeImage === 0 ? images.length - 1 : activeImage - 1;
    onChange(newActiveImage);
  };

  return (
    <main className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-6xl shadow-2xl rounded-2xl">
      <div className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}>
        {images.map((elem, index) => (
          <div key={index} className={`${index === activeImage ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out" : "hidden"}`}>
            <Image src={elem.src} alt="" width={400} height={400} className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl" loading="lazy"/>
          </div>
        ))}
      </div>
      <Description ActiveImageIndex={activeImage} GoFront={GoFront} GoBack={GoBack} />
    </main>
  );
};

export default Slider;
