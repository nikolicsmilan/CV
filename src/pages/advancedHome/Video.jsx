import React from 'react';
import { motion } from 'framer-motion';
import kep from "../../assets/allokep_en_18.png";

// Részecske komponens
const Particle = ({ x, y, delay }) => {
    return (
        <motion.div
            className="absolute bg-blue-400 rounded-full"
            style={{
                width: '10px',
                height: '1px',
                left: `${x}px`,
                top: `${y-180}px`,
                transform: 'rotate(230deg)'
            }}
            initial={{ opacity: 0, translateY: 0 }} // Kezdő pozíció
            animate={{
                opacity: [0.8, 1, 0.8],
                translateY: [0, window.innerHeight], // Lefelé halad
                translateX: [0, window.innerWidth], // Jobbra halad
            }}
            transition={{
                duration: 4, // Lassabb mozgás
                ease: 'easeInOut',
                delay: delay, // Késleltetés a részecske elindulásához
                repeat: Infinity,
                repeatDelay: Math.random() * 4, // Véletlenszerű késleltetés a következő megjelenés előtt
            }}
        />
    );
};

// Részecskék generálása
const generateParticles = (count) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
        const x = Math.random() * -100; // Véletlenszerű x pozíció bal oldalon kívül
        const y = Math.random() * window.innerHeight; // Véletlenszerű y pozíció
        const delay = Math.random() * 4; // Véletlenszerű késleltetés
        particles.push(<Particle key={i} x={x} y={y} delay={delay} />);
    }
    return particles;
};

const Video = () => {
    return (
        <div className='relative h-screen bg-slate-600 flex justify-center items-center overflow-hidden'>
            {/* Profilkép */}
            <img
                src={kep} // Profilkép elérési útja
                alt="Profilkép"
                className="  grayscale brightness-200 contrast-200 z-10" // Tailwind stílusok
            />

            {/* Részecskék */}
         {/* Generálj 100 részecskét */}
        </div>
    );
}

export default Video;

//   {generateParticles(1000)} 


