'use client'
import { Features } from "@/Components/Home page components/Features";
import Hero from "@/Components/Home page components/Hero";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel";
import { AppInfo } from "@/Components/Home page components/AppInfo";
import { Testmonials } from "@/Components/Home page components/Testmonials";

export default function Home() {
  return (
    <main className="bg-yellow-300">
      <div className='mainPage bg-yellow-500 w-full ' >
      <Hero />

      </div>
      <section className="bg-yellow-100 my-10 flex flex-col relative">
        <div className="hidden md:flex absolute w-2/4 h-40 rounded-full bg-yellow-200 bottom-10 right-80 rotate-180 z-10 "></div>

          <div className="my-10">
            <h2 className="text-center text-3xl font-extrabold">Features</h2>

          </div>
          <div className="flex flex-col md:flex-row gap-4 mx-4 ">
          

         

            <div className="flex w-full gap-4">
            <Carousel
            showIndicators={false}
            
            showStatus={false}
             centerMode={true}
            // autoPlay={true}
            // infiniteLoop={true}
          
            width={450} >
            <Features 
        source={'/loanImg1.jpg'}
        header={'Loan amortization calculation'}
        description={'check it out'}
        buttonName={'Test tool '}
        />
                <Features 
        source={'/loanImg4.jpg'}
        header={'Loan application form'}
        description={'check it out'}
        buttonName={'Test tool '}
        />
                      <Features 
        source={'/loanImg4.jpg'}
        header={'Loan application form'}
        description={'check it out'}
        buttonName={'Test tool '}
        />
                      <Features 
        source={'/loanImg4.jpg'}
        header={'Loan application form'}
        description={'check it out'}
        buttonName={'Test tool '}
        />
                      <Features 
        source={'/loanImg4.jpg'}
        header={'Loan application form'}
        description={'check it out'}
        buttonName={'Test tool '}
        />
         </Carousel>

            </div>
           
       
        
     <div className="flex flex-col">
      <h2 className="text-lg">Learn about our <span className="font-bold">Awesome</span> features :</h2>
      <ul>
        <li>Experience key functionalities that make our loan tracker app an essential tool for managing your loans and improving your financial well-being.</li>
        <li>Explore a wide range of features designed to simplify the loan tracking process,
          enhance your financial planning, and ensure you're always in control of your financial future.</li>
        <li>Our loan tracker app combines these features to provide a user-friendly, secure, and comprehensive solution for all your loan management needs, empowering you to take control of your financial future with confidence.</li>
      </ul>

     
         <button className="bg-yellow-300 p-2 rounded-lg">Click here to get started </button>


    </div>



          </div>
        
      </section>


      <section className="bg-yellow-100 relative">
      <div className="hidden md:flex absolute w-2/4 h-40 rounded-full bg-yellow-200 bottom-10 right-80 rotate-180 z-10 "></div>
            <h2 className="text-center my-10">How it works</h2>
        <div>
          <div>
            <Testmonials />
           
          </div>

          <div>
            <AppInfo />
            
            
          </div>

        </div>

      </section>

   
   

    </main>




  )

    

}
//chat Gpt ideas
// Homepage:
// Description: The landing page where users can get an overview of the loan tracker app's features and benefits. It should include a brief introduction, an eye-catching image, and a call to action to sign up or log in.
// Dashboard:

// Description: The central hub of the app where users can view their loan details, including the current balance, interest rates, and upcoming payments. This section may also display charts and graphs to visualize their loan progress.
// Loan Profile:

// Description: A section where users can add and manage their loan profiles. Users can input loan details such as loan type, lender, principal amount, interest rate, and term.
// Payment History:

// Description: This section displays a comprehensive history of all loan payments made by the user. Users can track past payments, view details, and check their payment status.
// Payment Schedule:

// Description: Users can access a detailed payment schedule that outlines when their future payments are due. This section helps users plan their finances and avoid missing payments.
// Notifications and Alerts:

// Description: Users can set up notifications and alerts for upcoming payments, helping them stay on top of their loan obligations and avoid late fees.
// Financial Tools:

// Description: This section offers users a set of financial tools, such as calculators for loan amortization, early payoff scenarios, and interest rate comparison.
// Budgeting and Planning:

// Description: Users can create budgets and financial plans to ensure they have the funds to meet their loan obligations. This section may include income and expense tracking features.
// Settings and Preferences:

// Description: Users can customize their app experience by adjusting settings and preferences. This might include notification preferences, currency settings, and security options.
// Support and Help Center:

// Description: A dedicated section for users to seek assistance, access FAQs, and get in touch with customer support if they encounter any issues or have questions.
// Security and Privacy:

// Description: Information about the app's security measures and privacy policies to reassure users about the safety of their financial data.
// About Us:

// Description: An overview of the company or team behind the app, its mission, and its commitment to helping users manage their loans effectively.
// Testimonials:

// Description: User reviews and testimonials can be featured in this section to build trust and show how the app has benefited others.
// Download Mobile App:

// Description: If the loan tracker app has a mobile version, provide download links for iOS and Android platforms.
// Blog and Educational Resources:

// Description: Offer articles, tips, and resources related to financial literacy, debt management, and loan repayment strategies to help users make informed decisions.
// These sections should provide users with a comprehensive experience, from managing their loans and payments to improving their financial knowledge and security.




// Is this conversation helpful so far?



