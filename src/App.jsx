import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

function App() {

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const translateX = [
        useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
        useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
        useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
    ];

    const scrollText = (
        <>
            Scroll <span className="text-stroke-style">Down</span> Scroll <span className="text-stroke-style">Down</span> Scroll <span className="text-stroke-style">Down</span>
        </>
    );
  
    return (
        <>

            <div className="h-screen"></div>

            <main>

                <section className="min-h-screen flex items-center justify-center" ref={sectionRef}>
                    <div className="mx-auto w-[90%]">

                        {translateX.map((translate, index) => (
                            <div key={index} className="select-none overflow-hidden flex justify-center">
                                <motion.h1 style={{ x: translate }} className='text-style'>
                                    {index % 2 === 0 ? <span className="text-stroke-style">Scroll</span> : null} 
                                    {scrollText}
                                </motion.h1>
                            </div>
                        ))}

                    </div>
                </section>

            </main>

            <div className="h-screen"></div>

        </>
    )
}

export default App
