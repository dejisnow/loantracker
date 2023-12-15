import React from 'react'
import Image from 'next/image'

export const AppInfo = () => {
  return (
    <div className='flex flex-col'>
        <div className='h-screen flex-col flex md:flex-row relative '>
        <div className=' my-10  text-justify flex-50'>
            <div>
                <h2 className='text-xl my-4 text-center font-bold'>Check it out</h2>
            </div>

            <div className='px-4 '>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Libero, maiores vero? Cumque praesentium expedita, delectus libero perspiciatis nobis vitae earum iusto velit qui in illum, consectetur ullam pariatur quos eaque.
            </p>
            <div className='my-4'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur libero animi deleniti 
                doloremque dolorem ipsa obcaecati ad? Dolores, totam nemo.</p>
            </div>

            </div>
          
          </div>

          
            <div className='info hidden md:flex flex-50 justify-center '>
            <Image  src='/loanImgCar.jpg' className='rounded-lg top-10 absolute' style={{objectFit:'contain'}} width={350} height={350}  quality={100} alt='info' />

            </div>
         
     

            
        </div>
    <div className='absolute left-4 bottom-60 flex justify-between gap-4' >
      <div className='w-80 relative shadow-xl h-40 bg-yellow-200'>
        <div>
          <Image src='/badge.png' className='absolute left-10' width={50} height={50} />

        </div>
        <div className='text-center my-4'>
          <h2 className='my-4'>Secure</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quae!</p>
        </div>
      
      </div>
      <div className='w-80 relative shadow-xl h-40 bg-yellow-200'>
         <div>
          <Image src='/fast lightning.png'  className='absolute left-10' width={50} height={50} />

        </div>
        <div className='text-center my-4'>
          <h2 className='my-4'>Fast</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quae!</p>
        </div>
      </div>
     

    </div>
    {/* Dashboard Overview:
Provide a snapshot of the user's overall financial health, including the total outstanding loan amount, upcoming payments, and any important alerts or notifications.

Loan Summary:
Break down each active loan with key details such as the loan amount, interest rate, term, and current status. This section can help users get a quick overview of their individual loans.

Repayment Management:
As mentioned before, this section can include features to track and manage repayments, view payment history, set up reminders, and monitor the progress of clearing each installment.

Financial Calendar:
Display a calendar highlighting important dates such as upcoming payments, loan maturity dates, and other financial events. This can help users plan and budget effectively.

Credit Score Monitoring:
If applicable, incorporate a section where users can monitor their credit score. This can provide additional insights into their financial standing and help them understand how their loans impact their creditworthiness.

Savings Goals:
Allow users to set and track savings goals alongside their loan repayments. This could help them balance paying off debts while also working towards other financial objectives.

Educational Resources:
Offer resources such as articles, tips, and tools to educate users about financial management, loan terms, and smart borrowing practices.

Customer Support and FAQs:
Provide easy access to customer support and a section for frequently asked questions to assist users in getting quick answers to common queries.

Notifications and Alerts:
Enable users to customize their notification preferences, such as receiving alerts for upcoming payments, low balances, or changes in interest rates.

Security and Privacy:
Highlight the security measures in place to protect user data and reassure them about the confidentiality of their financial information.

Remember to design the home page with a user-centric approach, ensuring that the most critical information is easily accessible and the interface is intuitive for users to navigate. */}
      

    </div>
  )
}
