import React from "react";
import Image from "react-bootstrap/Image";
import { motion, useInView } from "framer-motion";


function Info() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
    ref={ref}
      initial={{ x: -300, opacity: 0 }} // Inicia desde la izquierda y con opacidad 0
      animate={inView ? { x: 0, opacity: 1 } : {}} // Se anima hacia la posición 0 (derecha) y opacidad 1
      transition={{
        duration: 2, // Duración de 1 segundo
        ease: "easeInOut" // Tipo de transición
      }}
    >
      <Image src="./src/img/moon11.webp" fluid  style={{width:'100%'}}/>
    </motion.div>
  );
}

export default Info;

