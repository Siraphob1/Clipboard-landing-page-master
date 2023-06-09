import iblacklist from "../images/icon-blacklist.svg";
import itext from "../images/icon-text.svg";
import ipreview from "../images/icon-preview.svg";


const CardCComponent = () => {
  return (
    <section className="flex flex-col 
                        lg:flex-row lg:justify-center">
        <section className="section-cardC">
            <img src={iblacklist} alt="iblacklist" />
            <h1 className="title-cardC">Create blacklists</h1>
            <p className="paragraph-cardC ">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
        </section>
        <section className="section-cardC">
            <img src={itext} alt="itext" />
            <h1 className="title-cardC">Plain text snippets</h1>
            <p className="paragraph-cardC ">Remove unwanted formatting from copied text for a consistent look.</p>
        </section>
        <section className="section-cardC">
            <img src={ipreview} alt="ipreview" />
            <h1 className="title-cardC">Sneak preview</h1>
            <p className="paragraph-cardC ">Quick preview of all snippets on your Clipboard for easy access.</p>
        </section>
    </section>
  )
}

export default CardCComponent
