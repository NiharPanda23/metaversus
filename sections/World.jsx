'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on The World " textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people-1" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people-2" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people-3" className="w-full h-full" />
        </div>
        <div className="absolute top-[40%] left-[20%] w-[180px] h-[120px] p-[4px] rounded-[25px] bg-[#5d6680]">
          <img src="/planet-02.png" alt="" className="w-full h-full rounded-[25px] " />
          <div className="absolute flex flex-1 top-[55%] left-[10%]">
            <img src="people-03.png" className="relative w-5 h-5 z-50" />
            <img src="people-01.png" className="absolute w-5 h-5 left-2 z-40" />
            <img src="people-02.png" className="absolute w-5 h-5 left-4" />
          </div>
          <div className="absolute flex flex-1 top-[60%] left-[32%]">
            <p className="text-white text-xs flex flex-1">+ 264 has joined</p>
          </div>
          <h6 className="absolute font-semibold text-white text-[16px] bottom-2 left-5">The Upside Down</h6>
        </div>
        <div className="absolute top-[16%] right-[21%] w-[180px] h-[120px] p-[4px] rounded-[25px] bg-[#5d6680]">
          <img src="/planet-07.png" alt="" className="w-full h-full rounded-[25px] " />
          <div className="absolute flex flex-1 top-[55%] left-[10%]">
            <img src="people-03.png" className="relative w-5 h-5 z-50" />
            <img src="people-01.png" className="absolute w-5 h-5 left-2 z-40" />
            <img src="people-02.png" className="absolute w-5 h-5 left-4" />
          </div>
          <div className="absolute flex flex-1 top-[60%] left-[32%]">
            <p className="text-white text-xs flex flex-1">+ 264 has joined</p>
          </div>
          <h6 className="absolute font-semibold text-white text-[16px] bottom-2 left-5">The Hogwarts</h6>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
