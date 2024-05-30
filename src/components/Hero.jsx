
import { motion } from "framer-motion";
// import { typewriter, typewriterLetter } from "../utils/motion";
import { styles } from "../styles";
import "../utils/typewriter.css";
// import { ComputersCanvas } from "./canvas";
import { CvCanvas } from "./canvas";
const Hero = () => {
  // const text = "This is my 3D CV"
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, I'm
            <p className="line-1 anim-typewriter">
              Bruce
            </p>

            {/* <div className="w-1 typewriter-effect">
              <span className='text-[#915EFF] '>
                Bruce
              </span>
            </div> */}
          </h1>
          <p className={`${styles.heroSubText} typing-txt-block  bg-animation mt-2 text-black-100`}>
            {/* {text} */}


          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <CvCanvas />

      <div className="moving-button absolute xs:bottom-10 bottom-32 w-full flex justify-center">
        <a href="#about">
          <div className="w-[64px] h-[35px] rounded-3xl border-4 border-black flex justify-start  p-2">
            <motion.dev
              animate={{
                x: [0, 0, 33, -0]
                , y: [0, 0, 0, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop"
              }}

              className="w-2 h-2 rounded-full bg-primary"
            />

          </div>
        </a>
      </div>


    </section>











  )
}

export default Hero