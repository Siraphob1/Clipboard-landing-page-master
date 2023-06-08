import PropTypes from 'prop-types';


const CardAComponent = (props) => {

    const {title , paragraph , titles,paragraphs } = props

    
  return (
    <div className='text-center border'>
        <h1 className={` text-[#4c545d] ${titles} font-semibold mb-4 `}>{title}</h1>
        <p className={` text-[#9fabb2] ${paragraphs} px-[1rem] border
                        lg:px-[3.4rem]`}>{paragraph}</p>
    </div>
  )
}

export default CardAComponent



CardAComponent.propTypes ={
    title:PropTypes.string,
    paragraph:PropTypes.string,
    titles:PropTypes.string,
    paragraphs:PropTypes.string
   
};