import logoc from "../images/logo.svg";
import ifacebook from "../images/icon-facebook.svg";
import itwitter from "../images/icon-twitter.svg";
import iinstagram from "../images/icon-instagram.svg";



const FooterComponent = () => {
  return (
    <footer className=" bg-[#9fabb217] flex flex-col items-center text-center
                        lg:px-[10rem] lg:py-[2rem] lg:flex-row lg:justify-between  lg:text-start">
      <section className="flex flex-col items-center
                          lg:flex-row lg:justify-between lg:items-center">
          <img src={logoc} alt="logoc" className="h-[3.5rem] w-[3.5rem] mt-[3rem] mb-[2rem]"/>
          <div className="flex flex-col
                          lg:flex-row lg:justify-between lg:pl-[4rem]">
              <section className="lg:px-[3rem]">
                  <div className="text-footer">FAQs</div>
                  <div className="text-footer">Contact Us</div>
              </section>
              <section className="lg:px-[3rem]">
                  <div className="text-footer">Privacy Policy</div>
                  <div className="text-footer">Press Kit</div>
              </section>
              <section className="lg:px-[3rem]">
                  <div className="text-footer">Install Guide</div>
              </section>
          </div>
      </section>
      <section className="flex justify-center items-center">
          <img src={ifacebook} alt="ifacebook" className="icon-footer"/>
          <img src={itwitter} alt="itwitter" className="icon-footer"/>
          <img src={iinstagram} alt="iinstagram" className="icon-footer"/>
      </section>

    </footer>
  )
}

export default FooterComponent
