
import Image from 'next/image'

export const Features = ({header,description,source,imgAlt,buttonName}) => {
  return (
    <div className='features flex flex-col  justify-center items-center '>
   
        <div className=' w-60 h-60 md:w-80 md:h-80 relative'>
            <Image className='brightness-50 hover:brightness-60 rounded-lg' src={source} alt={imgAlt} layout='fill' objectFit='cover' quality={'100'}  />
        </div>
        <div className='text-center '>
            <h2 className='text-center'>{header}</h2>
            <p className='text-center'>{description}</p>
        </div>
        <div>
            <button className='bg-yellow-300 my-2 hover:bg-yellow-200  rounded-lg p-2 '>{buttonName}</button>
        </div>
    </div>
  )
}
