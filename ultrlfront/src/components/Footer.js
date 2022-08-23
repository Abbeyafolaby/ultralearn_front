import appstore from "../assets/appstore.png"
import playstore from "../assets/playstore.png"
import facebook from "../assets/🦆 icon _facebook_.png"
import youtube from "../assets/🦆 icon _youtube_.png"
import linkedin from "../assets/🦆 icon _linkedin original_.png"
import instagram from "../assets/🦆 icon _instagram_.png"
import twitter from "../assets/🦆 icon _twitter_.png"

const Footer = () => {
    return (
<footer className="p-4 bg-white sm:p-6 ">
    <div className=" md:justify-center ">
        <div className="grid grid-cols-4 gap-10 sm:gap-6 sm:grid-cols-3 mb-4">
            <div className="">

                <ul className=" justify-items-start inline-block">
                    <li className="mb-4 ul-purple text-1xl font-semibold ">
                    <a href="/" className="ul-purple text-1xl font-semibold">Terms</a>
                         </li>
                    <li className="mb-4">
                        <a href="/" className="ul-purple text-1xl font-semibold">Privacy</a>
                    </li>
                    <li>
                        <a href="/" className="ul-purple text-1xl font-semibold">Help</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul classNameName=" ">
                    <li className="mb-4 ul-purple text-1xl font-semibold">Contact Us</li>
                    <li className="mb-4 ul-purple text-1xl font-semibold">
                        <a href="/" className="">About Us</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <h2 className ="mb-7 ul-purple text-1xl font-semibold">Mobile App</h2>
                <ul className ="">
                    <li className ="mb-7 ul-purple">
                        <a href="/" className=""><img src={playstore} className=" " alt="Playstore icon" /></a>
                    </li>
                    <li>
                        <a href="/" className=""><img src={appstore} className=" " alt="Appstore icon" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="sm:flex sm:items-center sm:justify-between  text-xl">
        <span className=" sm:text-center ul-purple ">© 2022 <a href="https://flowbite.com/" className="">UltraLearn Inc. All rights reserved</a>
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="/" className="">
                <img src={facebook}className="image"alt=""/>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="/ f" className="">
               <img src= {youtube}className=""alt=""/>
                <span className="sr-only">You tube account</span>
            </a>
            <a href="/ f" className="">
               <img src= {linkedin}className=""alt=""/>
                <span className="sr-only">linkedin account</span>
            </a>
            <a href="/" className="">
               <img src={instagram} className=""alt=""/>
                <span className="sr-only">Instagram page</span>
            </a>
            <a href="/" className="">
                < img src ={twitter}  className=""alt=""/>
                <span className="sr-only">Twitter page</span>
            </a>

        </div>
    </div>
</footer>
);
};


export default Footer;