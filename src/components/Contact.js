import React from 'react'
import './Contact.css'
import { FaRegAddressBook} from 'react-icons/fa';
import {AiFillPhone,AiFillMail} from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='container'>
        <div className='content'>
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
                <p>If you have any queries, you can send me a message from here. It's my pleasure to help you.</p>
            
            <form action='#'>
                <div className='input-box'>
                    <input type='text' placeholder='Enter your name'/>
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Enter your Email'/>
                </div>
                <div className='input-box-message-box'>
                    <textarea/>
                </div>
                <div className='button'>
                    <input type='button' value='Contact Me'/>
                </div>
                
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact