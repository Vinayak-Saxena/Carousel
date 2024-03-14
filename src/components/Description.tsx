import Image from "next/image";
import { images } from "@/utils/constants";
import left from "@/utils/left.svg";
import right from "@/utils/right.svg";

type Props = {
  GoFront: any;
  GoBack: any;
  ActiveImageIndex: any;
};

const Description = ({ GoFront, GoBack, ActiveImageIndex }: Props) => {
  return (
    <center>
    <div className="grid place-items-start w-full bg-[#f5f0ec] relative md:rounded-tr-3xl md:rounded-br-3xl ">
      
      <div>
        {images.map((elem, index) => (
          <div
            //   Giving Condition of active image
            className={
                // checking if image index match active index
             index === ActiveImageIndex    
                ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out`
                : "hidden"
            }
            key={index}
          >
            {/* <div className="py-32 text-5xl font-extrabold text-customBlue-600" */}
            
            <div className="py-16 text-5xl font-extrabold"
            style={{ color: '#0a9396' }}
            >{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {elem.desc}
            </div>

            <button className="bg-[#6aa7c0] text-white uppercase px-4 py-2 rounded-md my-24">
              <a href={elem.wlink}> Read More </a>
            </button>
            <div className="absolute md:bottom-1 bottom-10 right-10 md:right--1 w-full flex justify-center items-center">
              <div
                onClick={GoBack}
                className="absolute bottom-2  right-20 cursor-pointer"
              >
                <Image src={left} alt="" width={50} height={50} />
              </div>
              <div
                onClick={GoFront}
                className="absolute bottom-2  right-3 cursor-pointer"
              >
                <Image src={right} alt="" width={50} height={50} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </center>
  );
};
export default Description;
