
import Image from 'next/image'

export const Features = ({header,description,source,imgAlt,buttonName}) => {
  return (
    <div className='features'>
        <div className=' w-40 h-40 md:w-80 md:h-80 relative'>
            <Image className='brightness-50 rounded-lg' src={source} alt={imgAlt} layout='fill' objectFit='cover' quality={'100'}  />
        </div>
        <div>
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
        <div>
            <button className='bg-yellow-300 rounded-lg p-2 '>{buttonName}</button>
        </div>
    </div>
  )
}
