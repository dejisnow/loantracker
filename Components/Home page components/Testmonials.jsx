import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />





export const Testmonials = ({statement,src,author,}) => {
  return (
    <div className='flex flex-col justify-center text-center items-center my-8 border-2 h-60 mx-2 bg-yellow-200 rounded-xl p-2 shadow-2xl border-yellow-400 '>
        <div className=' flex flex-col items-center justify-between gap-10 w-96 h-12' >
            <div className=' flex rounded-full w-10 h-10'>
            <Image className='rounded-full object-cover' src={src} width={80} height={80} />

            </div>
            
       
       
        </div>
        <p className='text-sm  w-60 md:w-full my-4'>{statement}</p>
     
        <div className=''>
        <FontAwesomeIcon icon={faStar} style={{color: "#fff70f",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#fff70f",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#fff70f",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#fff70f",}} />         <FontAwesomeIcon icon={faStar} style={{color: "#fff70f",}} />
        </div>
        <p>{author}</p>

    </div>
  )
}
//     <div className='bg-red-200 p-4 m-4'>

//   <div className='w-80 h-40'>
//     <div className='flex'>
//     <div className=''>
//            
//         </div>
//         <div>
//             <p className='text-justify my-3  text-sm'> {statement} </p>
//         </div>

//     </div>
      
//       
//         <div className='border border-yellow-600 my-2'></div>

//        
//         </div>

//     </div>
   

//     // "I've recommended this loan tracker app to all my friends and family.
//     // It not only tracks my loans but also provides me with a comprehensive overview of my financial health. 
//     // It's a must-have tool for anyone looking to take control of their loans and financial future."

//     // "I can't express how much I appreciate this loan tracker app. It keeps me organized, ensures I never miss a payment, and even helps me strategize on how to pay off my loans faster. It's an indispensable part of my financial toolkit."
    
//     // "The loan tracker app has simplified my loan management, allowing me to focus on my goals rather than stressing over payments. With its secure and user-friendly interface, I feel confident and in control of my financial well-being. It's an app that has truly improved my financial life."
// //     "The loan tracker app has been a game-changer for me. It's so easy to use and helps me stay on top of my loan payments. I highly recommend it to anyone looking for a simple and effective way to manage their loans."

// // "I've tried several loan tracking apps, and this one stands out. It's user-friendly and provides real-time updates on my loan status. It's made managing my finances a breeze!"

// // "As someone who has multiple loans, this app has been a lifesaver. It consolidates all my loan information in one place, making it easy to track my progress and make payments. I can't imagine managing my loans without it."

// // "The loan tracker app has given me peace of mind when it comes to my finances. It sends me reminders for upcoming payments, and I can visualize my loan payoff journey with its helpful graphs and charts. It's an essential tool for anyone with loans."

// // "I've been using this loan tracker app for months, and it's transformed the way I handle my loans. It's incredibly intuitive, and the ability to calculate different payment scenarios has been invaluable in helping me make informed financial decisions. I couldn't be happier with this app.
//   )
// }
