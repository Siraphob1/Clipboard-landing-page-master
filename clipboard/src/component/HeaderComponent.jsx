import bg_desktop from "../images/bg-header-desktop.png";
import bg_mobile from "../images/bg-header-mobile.png";
import logo_c from "../images/logo.svg";
import CardAComponent from "./CardAComponent";

const HeaderComponent = () => {

    const data ={
        title:"A history of everything you copy",
        paragraph:"Clipboard allows you to track and organize everything you        copy. Instantly access your clipboard on all your devices.",
        titlebig: true
    }    

  return (
    <header>
       <div className=" relative">
            <img src={bg_desktop} alt="bg_desktop" className=" hidden md:block md:w-full"/>
            <img src={bg_mobile} alt="bg_mobile" className=" w-full md:hidden" />

            <div className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center">
                    <img src={logo_c} alt="logo_c" className=""/>                    
                </div>
            </div>
       </div>
       
    </header>
  )
}

export default HeaderComponent
