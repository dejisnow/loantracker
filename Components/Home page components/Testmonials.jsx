import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />





export const Testmonials = () => {
  return (
    <div className='w-80 h-80'>
        <div className=''>
            <Image className='rounded-full' src='/loanImg2.jpg' width={30} height={30} />
        </div>
        <div>
            <p className='text-justify my-3'> It not only tracks my loans but also provides me with a comprehensive overview of my financial health. </p>
        </div>
        <div>
        <FontAwesomeIcon icon={faStar} style={{color: "#fff70f",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#fff70f",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#fff70f",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#fff70f",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#fff70f",}} />
        </div>
        <div className='border border-yellow-600 my-2'></div>

        <p>Jessica Smith</p>

    </div>

    // "I've recommended this loan tracker app to all my friends and family.
    // It not only tracks my loans but also provides me with a comprehensive overview of my financial health. 
    // It's a must-have tool for anyone looking to take control of their loans and financial future."

    // "I can't express how much I appreciate this loan tracker app. It keeps me organized, ensures I never miss a payment, and even helps me strategize on how to pay off my loans faster. It's an indispensable part of my financial toolkit."
    
    // "The loan tracker app has simplified my loan management, allowing me to focus on my goals rather than stressing over payments. With its secure and user-friendly interface, I feel confident and in control of my financial well-being. It's an app that has truly improved my financial life."
//     "The loan tracker app has been a game-changer for me. It's so easy to use and helps me stay on top of my loan payments. I highly recommend it to anyone looking for a simple and effective way to manage their loans."

// "I've tried several loan tracking apps, and this one stands out. It's user-friendly and provides real-time updates on my loan status. It's made managing my finances a breeze!"

// "As someone who has multiple loans, this app has been a lifesaver. It consolidates all my loan information in one place, making it easy to track my progress and make payments. I can't imagine managing my loans without it."

// "The loan tracker app has given me peace of mind when it comes to my finances. It sends me reminders for upcoming payments, and I can visualize my loan payoff journey with its helpful graphs and charts. It's an essential tool for anyone with loans."

// "I've been using this loan tracker app for months, and it's transformed the way I handle my loans. It's incredibly intuitive, and the ability to calculate different payment scenarios has been invaluable in helping me make informed financial decisions. I couldn't be happier with this app.
  )
}
