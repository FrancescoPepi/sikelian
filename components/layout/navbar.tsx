import path from "path";
import Image from "next/image";
import { Button } from "../ui/button";
import ShimmerButton from "../magicui/shimmer-button";
import localFont from "next/font/local";
import { MarqueeDemo } from "../magicui/MarqueeDemo";

const titania = localFont({
  src: "../../public/fonts/Titania-Regular.ttf",
});
// const titania = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Titania-Regular.ttf",
//       weight: "700",
//     },
//   ],
//   variable: "--font-titania",
// });

interface NavbarProps {
  isLoggedIn?: Boolean;
}

const Navbar = ({ isLoggedIn }: NavbarProps) => {
  return (
    // <div className="bg-white/55 backdrop-blur-md sticky top-0 ">
    <div className="z-50 sticky top-0 backdrop-blur-md flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <MarqueeDemo></MarqueeDemo>
      <div className="flex-col container">
        <div className="p-2 text-center font-titania">
          <h1 className={`text-7xl ${titania.className}`}>Sikelian</h1>
          <h2 className={`text-lg ${titania.className}`}>
            TUTTO QUANTO FA SICILIA
          </h2>
        </div>
        <div className="flex max-w-7xl mx-auto pb-4 items-center">
          <div className="flex-1 flex overflow-hidden h-[50px]">
            <Image
              src="/img/logo_s.png"
              width={300}
              height={500}
              className=" self-center justify-self-center pt-5"
              alt="/"
            />
          </div>
          <div className=" grid grid-cols-6 gap-4">
            <div className=" col-span-2 border-black/70 rounded-lg border">
              SearchBar
            </div>
            <div>Category</div>
            <div>Category</div>
            <div>Category</div>
            <div>Category</div>
          </div>
          <div className="flex-1 flex justify-end">
            {isLoggedIn ? (
              <Image
                className=" rounded-full border-2 bg-black/85 border-y-white shadow-2xl"
                src={"/avatar.png"}
                width={48}
                height={48}
                alt="img profile"
              />
            ) : (
              // <Button variant={"outline"}>Profile</Button>
              <ShimmerButton>Profile</ShimmerButton>
            )}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Navbar;
