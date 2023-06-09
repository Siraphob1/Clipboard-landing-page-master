import computer from "../images/image-computer.png";


const ComputerComponent = () => {
  return (
    <section className="flex flex-col w-full
                        lg:flex-row">
        <div className="mb-[4rem] 
                        lg:mb-0 lg:ml-[4%] lg:w-[48%] ">
            <img src={computer} alt="computer" className=""/>
        </div>
        <div className="text-center
                        lg:text-start lg:w-[48%]  lg:pl-[6rem] lg:py-[2rem]">
            <section className="section-cardB">
                <h1 className="title-cardB">Quick Search</h1>
                <p className="paragraph-cardB">  Easily search your snippets by content, category, web address, application, and more.
                </p>
            </section>
            <section className="section-cardB">
                <h1 className="title-cardB">iCloud Sync</h1>
                <p className="paragraph-cardB">Instantly saves and syncs snippets across all your devices.</p>
            </section>
            <section className="section-cardB">
                <h1 className="title-cardB">Complete History</h1>
                <p className="paragraph-cardB">Retrieve any snippets from the first moment you started using the app.</p>
            </section>
        </div>
    </section>
  )
}

export default ComputerComponent
