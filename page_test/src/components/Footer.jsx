import React, {useState} from 'react';
import InputMask from 'react-input-mask';
import '../styles/footer.scss';


function PhoneInput(props) {
    return (
      <InputMask 
        placeholder='Phone'
        mask='+38 (999) - 999 - 99 - 99' 
        value={props.value} 
        onChange={props.onChange}>
      </InputMask>
    );
  }

const Footer = () => {
const [phone, setPhone] = useState('');
const handleInputPhone = ({ target: { value } }) => setPhone(value);


    return (
            <div className="footer">
                <h3 className="footer_title">Working with POST request</h3>
                <div className="footer_inputs">
                    <input 
                        className='input_name'
                        type="text" 
                        placeholder='Your name'
                    />
                    <input 
                        className='input_email'
                        type="email" 
                        placeholder='Email'
                    />
                    {/* <input 
                        className='input_phone'
                        type="tel"
                        name="phone"
                        id="phone"
                        // pattern="{+{38}}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        required
                        placeholder='Phone'
                    /> */}
                    <PhoneInput 
                     className='input_phone'
                        value={phone} 
                        onChange={handleInputPhone}>
                        
                    </PhoneInput>
                    <p className='phone_mask'>+38 (XXX) XXX - XX - XX</p>
                    <p className='select_title'>Select your position</p>
                    <div className='input_radio'>
                        <div>
                            <input type="radio" 
                            name="contact" value="email" id="front"/>
                            <label for="front">Frontend developer</label>
                        </div>
                        <div>
                            <input type="radio" 
                            name="contact" value="phone" id='back'/>
                            <label for="back">Backend developer</label>
                        </div>
                        <div>
                            <input type="radio" 
                            name="contact" value="mail" id='designer'/>
                            <label for="designer">Designer</label>
                        </div>
                        <div>
                            <input type="radio" 
                            name="contact" value="mail" id='qa'/>
                            <label for="qa">QA</label>
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default Footer;