import PropTypes from 'prop-types';


const CardAComponent = (props) => {

    const {title , paragraph , classtitle,classparagraph } = props

    
  return (
    <div className='text-center '>
        <h1 className={` text-[#4c545d] ${classtitle} font-semibold mb-4 `}>{title}</h1>
        <p className={` text-[#9fabb2] ${classparagraph}`}>{paragraph}</p>
    </div>
  )
}

export default CardAComponent



CardAComponent.propTypes ={
    title:PropTypes.string,
    paragraph:PropTypes.string,
    classtitle:PropTypes.string,
    classparagraph:PropTypes.string
   
};