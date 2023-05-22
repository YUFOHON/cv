import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { styles } from "../styles";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#fff', color: '#000' }}
    contenArrowStyle={{ borderRight: '7px solid  #fff' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center h-full w-full'>
        {/* <img src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%]"
        /> */}
      </div>
    }>
    <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
  </VerticalTimelineElement>

)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}

        </VerticalTimeline>

      </div>

    </>
  )
}

export default SectionWrapper(Experience, "")