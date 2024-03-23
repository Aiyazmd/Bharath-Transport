import React, { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    message: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
const Contact = (props) => {


  const handleSubmit=(e,values)=>{
     const serviceId="service_7jrxmki";
     const templeteId="template_vcgbwu8";
     const publicId="jISKaLOP4GwbYYWPS";

     const templeteParams={
      from_name:e.name,
      from_email:e.email,
      from_phone:e.phone,
      to_name:"Bharath Transaport",
      message:e.message
     }

     emailjs.send(serviceId,templeteId,templeteParams,publicId)
     .then((response)=>{
      console.log("Email sent successfully",response)
     }).catch((error)=>{
      console.error('Error sending email',error)
     })
  }

  return (
    <div className="contact-section-content" id={props.id}>
      <h1 className='contact-heading'>CONTACT</h1>
      <p className='contact-para'>
        Bharath Transport Services. is a full service transportation company
         driven to helping their customers move their products the right way!
         Bharath Transport Services allow businesses to ship locally, 
           throughout the state of India  
           while taking pride in delivering the safest and most reliable
            transportation services available.  
      Contact our friendly team for a completely free estimate!</p>
      <Row className='contact-body'>
        <Col className='contact-body-letf'>
          <div className='contact-body-sub-letf'>
            <div>
              <h2>Location:</h2>
              <p>1-59/7/3/A</p>
              <p>Syed Anwar manzil. Opposit reliance trend</p>
            </div>
            <div>
              <h2>Email:</h2>
              <p>bharattransportservice.co@gmail.com</p>
            </div>
            <div>
              <h2>Call:</h2>
              <p>+91 9701816786</p>
              <p>+91 7386456775</p>
            </div>
          </div>
        </Col>
        <Col className='contact-body-right'>
          <Formik
            initialValues={{
              name: '',
              message: '',
              email: '',
              phone:''
            }}
            validationSchema={SignupSchema}
            onSubmit={(e,values)=>{handleSubmit(e,values)}}
          
          >
            {({ errors, touched,resetForm }) => (
              <Form className='contact-body-sub-right'>
                <div >
                <div>
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="contact-input-field">
                  <Field name="name" className="contact-input" />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" >Your Email</label>
                </div>
                <div className="contact-input-field">
                  <Field name="email" className="contact-input" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="phone" >Your Phone Number</label>
                </div>
                <div className="contact-input-field">
                  <Field name="phone" className="contact-input" />
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ) : null}
                </div>
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                </div>
                <div className="contact-input-field">
                  <Field name="message" className="contact-input" type="textarea" />
                  {errors.message && touched.message ? (
                    <div>{errors.message}</div>
                  ) : null}
                </div>
                <button className="contact-button" type="submit">Submit</button>
              </Form>
            )}
          </Formik></Col>
      </Row>

    </div>
  )
}

export default Contact