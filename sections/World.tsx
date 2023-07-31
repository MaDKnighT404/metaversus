'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { fadeIn } from '../utils/motion';
import styles from '../styles';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-72 left-[18%] w-[125px] h-[100px] p-[3px] rounded-[15px] bg-[#5d6680]">
          <img src="/card1.png" alt="card1" className="w-full h-full" />
        </div>
        <div className="absolute bottom-72 right-[19%] w-[125px] h-[100px] p-[3px] rounded-[20px] bg-[#5d6680] overflow-hidden">
          <img src="/card2.png" alt="card2" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
