import CardAComponent from "./CardAComponent"



const MainComponent = () => {

    const data =[
        {
            title:"A history of everything you copy",
            paragraph:"Clipboard allows you to track and organize everything you        copy. Instantly access your clipboard on all your devices.",
            titles: "text-[2rem]",
            paragraphs:"text-[1.125rem]"
        },
        {
            title:"Keep track of your snippets",
            paragraph:"Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.",
            titles: "text-[1.8rem]",
            paragraphs:"text-[1rem]"
        }  
    ]

  return (
    <div className=" mx-auto w-11/12 lg:w-6/12"> 
        <CardAComponent {...data[0]}/>
        <div className="flex flex-col mx-auto mt-12 w-11/12 
                         lg:flex-row  lg:justify-center  lg:mx-0  lg:w-auto lg:mb-[8rem]">
                        <button className="btn-download bg-[#26baa4] mb-6 lg:mb-0 lg:mr-4">Download for iOS</button>
                        <button className="btn-download bg-[#6173ff]">Download for Mac</button>
        </div>
        <CardAComponent {...data[1]}/>

    </div>
  )
}

export default MainComponent
