import React, {ChangeEvent, useState, useEffect} from 'react';
import InputMask from 'react-input-mask';
import { fetchLoginPositions, createUser } from '../http/usersAPI';
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
    const [file, setFile] = useState();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [position_id, setPositionId] = useState();
    const [position, setPosition] = useState()

    useEffect(() => {
        fetchLoginPositions().then(data => setPosition(data))
    }, [])

const handleFileChange = (e) => {
  if (e.target.files) {
    setFile(e.target.files[0]);
  }
};

const handleUploadClick = () => {
  if (!file) {
    return;
  }
};


const addUser = () => {
    const formData = new FormData()        
    formData.append('name', name)
    // formData.append('price', `${price}`)
    // formData.append('volume', `${volume}`) 
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('photo', file)
    formData.append('position_id', position_id) 
    createUser(formData).then(data => data.user)
}

    return (
            <div className="footer">
                <h3 className="footer_title">Working with POST request</h3>
                <div className="footer_inputs">
                    <input 
                        className='input_name'
                        type="text" 
                        placeholder='Your name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        className='input_email'
                        type="email" 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
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
                        // value={phone} 
                        // onChange={handleInputPhone}
                        onChange={(e) => setPhone(e.target.value)}
                    >
                        
                    </PhoneInput>
                    <p className='phone_mask'>+38 (XXX) XXX - XX - XX</p>
                    <p className='select_title'>Select your position</p>
                    <div className='input_radio'>
                        {position?.positions.map(pos =>
                            <div className="radio_block">
                                <input type="radio" 
                                name="contact" value={pos.id} id="front"/>
                                <label for="front">
                                    {
                                        pos.name == `Content manager` && "Frontend developer" || 
                                        pos.name == `Security` && "Backend developer" || 
                                        pos.name == `Designer`&& "Designer" ||                                    
                                        pos.name == `Lawyer` && "QA"
                                    }
                                </label>
                            </div>
                        )}
                        {/* <div className="radio_block">
                            <input type="radio" 
                            name="contact" value="email" id="front"/>
                            <label for="front">Frontend developer</label>
                        </div>
                        <div className="radio_block">
                            <input type="radio" 
                            name="contact" value="phone" id='back'/>
                            <label for="back">Backend developer</label>
                        </div>
                        <div className="radio_block">
                            <input type="radio" 
                            name="contact" value="mail" id='designer'/>
                            <label for="designer">Designer</label>
                        </div>
                        <div className="radio_block">
                            <input type="radio" 
                            name="contact" value="mail" id='qa'/>
                            <label className="test" for="qa">QA</label>
                        </div>                         */}
                    </div>
                    <div className="upload">
                        <button className="button_upload" onClick={handleUploadClick}>Upload</button>
                        <div className="input_upload">
                            <label className="tests" for="select_file">
                                {file && `${file.name}` || "Upload your photo"}
                            </label>
                        </div>
                        <input className="select_file" id="select_file" type="file" onChange={handleFileChange}/>
                    </div>
                    <button className="create_user" onClick={addUser}>Sign up</button>
                </div>       
            </div> 
    );
};

export default Footer;