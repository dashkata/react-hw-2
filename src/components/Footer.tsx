import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import FooterText from "./FooterText";

function Footer() {
  return (
    <div className="bg-[#212322] flex flex-col px-6 mt-7">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:py-10">
        <FooterText
          text="Shopping with Us"
          textList={[
            "Delivery and Returns",
            "Wallapaper Sample Service",
            "Privacy Policy",
            "Terms & Conditions",
          ]}
        />
        <FooterText
          text="Wallpaper Guides"
          textList={[
            "Wallpaper FAQs",
            "Wallpaper Guide",
            "How to Hang Wallpaper",
            "How to Remove Wallpaper",
            "How to Hang a Wall Mural",
          ]}
        />
        <FooterText text="Visit Us" textList={["Outlet Stores"]} />
        <FooterText
          text="How Can We Help?"
          textList={["Customer Service", "Email Us", "About Us", "Call Us"]}
        />
        <div>
          <h1 className="text-white py-5 lg:text-start text-center">
            Sign up to Our Newsletter
          </h1>
          <input
            type=""
            placeholder="Enter the email here"
            className="text-lg rounded-full px-4 py-2 mb-5 w-full font-serif"
          />
          <p className="text-white text-sm font-serif">
            By signing up you are consenting to receive the newsletter and other
            promotional materials from Wallpaper It.
          </p>
          <button className="w-full bg-[#6eceb2] rounded-full py-3 mt-5 mb-9 text-sm font-serif tracking-wide hover:bg-[#bee9dc]">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <hr className="solid " />
      <div className="flex flex-col lg:flex-row items-center lg:justify-between pb-5">
        <div className="flex flex-col lg:flex-row items-center pt-5">
          <select className="w-fit rounded-full text-lg py-1 px-3 cursor-pointer">
            <option value="uk">UK - GBP</option>
            <option value="usa">US - USD</option>
          </select>
          <div className="flex flex-row gap-5 items-center mt-5 lg:mt-0 lg:ml-5">
            <button>
              <BsFacebook size={30} color="white" />
            </button>
            <button>
              <BsInstagram size={30} color="white" />
            </button>
            <button>
              <BsYoutube size={30} color="white" />
            </button>
            <button>
              <BsPinterest size={30} color="white" />
            </button>
          </div>
        </div>
        <p className="text-white text-sm pt-7 font-serif">© 2023 WallpaperIt</p>
        <div className="flex flex-row gap-2 pt-10">
          <img src="https://eu-images.contentstack.com/v3/assets/blte635d907602e0a9c/blte9d275dcda7d5da6/62e7e465a2057a5e8626b4d6/visa_card.svg?w=1000&q=75" />
          <img src="https://eu-images.contentstack.com/v3/assets/blte635d907602e0a9c/blt2b2b6ae7a6532927/62e7e4653147c05e12af7c9d/americanExpress_icon.svg?w=1000&q=75" />
          <img src="https://eu-images.contentstack.com/v3/assets/blte635d907602e0a9c/bltd64053decf83e41d/62e7e4641a269564d967fe1a/maestroCard_icon.svg?w=1000&q=75" />
          <img src="https://eu-images.contentstack.com/v3/assets/blte635d907602e0a9c/blt01511e83cc4392d9/62e7e464d59c9f64d3a8215e/mastercard_icon.svg?w=1000&q=75" />
          <img src="https://eu-images.contentstack.com/v3/assets/blte635d907602e0a9c/blt97611fba42ceab68/62e7e464e9d7646bfeda3fc0/payPal_icon.svg?w=1000&q=75" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
