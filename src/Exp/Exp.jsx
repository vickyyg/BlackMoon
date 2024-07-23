import "./Exp.css";
import { motion } from "framer-motion";

export default function Exp() {
  return (
    <div className="container">
      <h2  id="exp" className='exp-title'>Experiencias de nuestras vendedoras</h2>
      <motion.div
        className="box"
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <img src="./img/person1.jpg" alt="Imagen 1" className="circle-image" />
        <h2 className="content">Luisa</h2>
        <p className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ducimus nesciunt tempore porro consequatur dicta laboriosam quaerat modi cumque minus placeat labore.</p>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <img src="./img/person2.jpg" alt="Imagen 2" className="circle-image" />
        <h2 className="content">Michelle</h2>
        <p className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ducimus nesciunt tempore porro consequatur dicta laboriosam quaerat modi cumque minus placeat labore.</p>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <img src="./img/person3.jpg" alt="Imagen 3" className="circle-image" />
        <h2 className="content">Sasha</h2>
        <p className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ducimus nesciunt tempore porro consequatur dicta laboriosam quaerat modi cumque minus placeat labore.</p>
      </motion.div>
    </div>
  );
}
