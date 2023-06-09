import CardAComponent from "./CardAComponent"
import ComputerComponent from "./ComputerComponent"
import device from "../images/image-devices.png";
import CardCComponent from "./CardCComponent";
import igoogle from "../images/logo-google.png";
import iibm from "../images/logo-ibm.png";
import imicrosoft from "../images/logo-microsoft.png";
import ihp from "../images/logo-hp.png";
import ivector from "../images/logo-vector-graphics.png";

const MainComponent = () => {

    const data =[
        {
            title:"A history of everything you copy",
            paragraph:"Clipboard allows you to track and organize everything you        copy. Instantly access your clipboard on all your devices.",
            classtitle: "text-[2rem]",
            classparagraph:"text-[1rem] px-[1rem] lg:px-[28rem]"
        },
        {
            title:"Keep track of your snippets",
            paragraph:"Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.",
            classtitle: "text-[1.8rem]",
            classparagraph:"text-[1rem] px-[1rem] lg:px-[25rem]"
        },
        {
            title:"Access Clipboard anywhere",
            paragraph:"Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.",
            classtitle: "text-[1.8rem] capitalize",
            classparagraph:"text-[1rem] px-[1rem] lg:px-[25rem]"
        },
        {
            title:"Supercharge your workflow",
            paragraph:"We’ve got the tools to boost your productivity.",
            classtitle: "text-[1.8rem]",
            classparagraph:"text-[1rem] px-[1rem]"
        },
        {
            title:"Clipboard for iOS and Mac OS",
            paragraph:"Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.",
            classtitle: "text-[2rem]",
            classparagraph:"text-[1rem] px-[1.1rem] lg:px-[26rem]"
        }    
    ]

  return (
    // lg:w-6/12
    <main className=" mx-auto w-11/12 bg-white lg:w-full">  
        <CardAComponent {...data[0]}/>
        <div className="flex flex-col mx-auto mt-12 mb-[8rem] w-11/12 
                         lg:flex-row  lg:justify-center  lg:mx-0  lg:w-auto ">
                        <button className="btn-download bg-[#26baa4] mb-6 lg:mb-0 lg:mr-4">Download for iOS</button>
                        <button className="btn-download bg-[#6173ff]">Download for Mac</button>
        </div>
        <div className=" mb-[4rem] lg:mb-[8rem]">
            <CardAComponent {...data[1]}/>
        </div>
        <div className="mb-[9rem]">
            <ComputerComponent/>
        </div>
        <div className="mb-[4rem] lg:mb-[8rem]">
            <CardAComponent {...data[2]}/>
        </div>
        <div className="mb-[7rem] lg:mb-[8rem]">
            <img src={device} alt="" className="mx-auto"/>
        </div>
        <div className="mb-[6rem] lg:mb-[8rem]">
            <CardAComponent {...data[3]}/>
        </div>
        <div className="mb-[6rem] lg:mb-[8rem]">
            <CardCComponent/>
        </div>
        <div className="flex flex-col items-center mb-[6rem]
                        lg:flex-row lg:items-start  lg:justify-between lg:px-[10rem] lg:mb-[9rem]">           
            <img src={igoogle} alt="igoogle" className="mb-[4rem] lg:mb-0" />
            <img src={iibm} alt="iibm" className="mb-[4rem] lg:mb-0" />
            <img src={imicrosoft} alt="imicrosoft" className="mb-[4rem] lg:mb-0" />
            <img src={ihp} alt="ihp" className="mb-[4rem] lg:mb-0" />
            <img src={ivector} alt="ivector" className="mb-[4rem] lg:mb-0" />
        </div>
        <div className="mb-[4rem] lg:mb-[1rem]">
            <CardAComponent {...data[4]}/>
        </div>
        <div className="flex flex-col mx-auto mt-12 mb-[8rem] w-11/12 
                         lg:flex-row  lg:justify-center  lg:mx-0  lg:w-auto ">
                        <button className="btn-download bg-[#26baa4] mb-6 lg:mb-0 lg:mr-4">Download for iOS</button>
                        <button className="btn-download bg-[#6173ff]">Download for Mac</button>
        </div>
    </main>
  )
}

export default MainComponent
