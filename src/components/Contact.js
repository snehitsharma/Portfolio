import React from 'react'
import './Contact.css'
import { FaRegAddressBook} from 'react-icons/fa';
import {AiFillPhone,AiFillMail} from 'react-icons/ai';

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;

        console.log()
      
        try {
          const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name:name,
                email:email,
                message:message
            })
          });
      
          if (response.ok) {
            console.log('Form submitted successfully!');
            // Handle successful response (e.g., display success message)
          } else {
            console.error('Form submission failed:', response.statusText);
            // Handle error response (e.g., display error message)
          }
        } catch (error) {
          console.error('Error during form submission:', error);
          // Handle network errors
        }
      };
  return (
    <div className='container'>
        <div className='contentCont'>
            <div className='left-side'>
                <div className='address-details'>
                    <FaRegAddressBook className='icons'/>
                    <div className='topic'> Address</div>
                    <div className='text1'>706, 7 Ocean View Dr</div>
                    <div className='text2'>Harbor Points on the bay</div>
                    <div className= 'text3'>Dorchester,Boston-02125</div>
                </div>
                <div className='phone-details'>
                    <AiFillPhone className='icons'/>
                    <div className='topic'> Phone</div>
                    <div className='text1'>+1(857)395-7752</div>
                    <div className='text2'>+91 8667221735</div>
                </div>
                <div className='email-details'>
                    <AiFillMail className='icons'/>
                    <div className='topic'> Email</div>
                    <div className='text1'>snehitsharma@outlook.com</div>
                    <div className='text2'>snehit.sharma001@umb.edu</div>
                </div>
            </div>
            <div className='right-side'>
                <div className='topic-text'>Send us a Message!</div>
                <p>If you have any queries, you can send me a message from here.</p>
            
                <form action='http://localhost:3001/contact' method='post' onSubmit={handleSubmit}>
                <div className='input-box'>
                    <input type='text' name='name' placeholder='Enter your name'/>
                </div>
                <div className='input-box'>
                    <input type='text' name='email' placeholder='Enter your Email'/>
                </div>
                <div className='input-box-message-box'>
                    <textarea name='message'/>
                </div>
                <div className='button'>
                    <button type='submit'>Contact Me!</button>
                </div>
                
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;