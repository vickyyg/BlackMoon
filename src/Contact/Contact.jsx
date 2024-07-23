import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './Contact.css';

function ContactForm() {
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true });

  return (
    <div id='contact' className='contact-container'>
      <motion.div
        className='left'
        ref={leftRef}
        initial={{ opacity: 0, x: -200 }}
        animate={leftInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Card style={{ width: '38rem', borderColor:'black' }}>
          <Card.Img variant="top" src="./img/moon3.webp" style={{height:'750px'}}/>
        </Card>
      </motion.div>

      <motion.div
        className='right'
        ref={rightRef}
        initial={{ opacity: 0, x: 100 }}
        animate={rightInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h1 className='contact-title'>Para mas info ¡Contactanos!</h1>
        <Form style={{paddingTop: '40px'}}>
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" style={{background:'#8d497c',borderColor:'#8d497c',borderRadius:'30px'}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tu consulta</Form.Label>
            <Form.Control as="textarea" rows={3} style={{background:'#8d497c',borderColor:'#8d497c', borderRadius:'30px'}} />
          </Form.Group>
        </Form>
      </motion.div>
    </div>
  );
}

export default ContactForm;
