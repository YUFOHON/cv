import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-black text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (

    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h1 className={styles.sectionHeadText}>Overview</h1>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} class="text-black text-[17px] max-w-3xl leading-[30px]">
        Introducing Bruce, a talented and driven computer science student with a passion for technology and innovation. He has a strong background in programming and software development, as well as experience in web development and data analysis.

        Throughout his academic career, Bruce has demonstrated exceptional problem-solving skills and a dedication to achieving excellence in his work. He has been recognized for his outstanding academic achievements and has also participated in various extracurricular activities, including coding competitions and hackathons.

        Bruce is eager to apply his skills and knowledge to real-world challenges and make a meaningful impact in the tech industry. He is particularly interested in exploring the intersection of technology and business and is committed to continuous learning and growth.

        With his strong technical skills, creativity, and dedication, Bruce would be a valuable asset to any team or organization. He is excited to explore internship opportunities that align with his interests and goals, and to contribute to the advancement of technology and innovation.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index} index={index} title={service.title} icon={service.icon}
          />
        ))}

      </div>


    </>
  )
}

export default SectionWrapper(About, "about")