import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App = () => {


  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className="bg-building relative z-0">
          <About /> 
          <Works />
          <Experience />
          <StarsCanvas />
          <Contact />

        </div>

        {/* <Tech />
     
        <Feedbacks />
        <div className='relative z-0'>
      
          
        </div> */}


      </div>
    </BrowserRouter>
  )
}

export default App
