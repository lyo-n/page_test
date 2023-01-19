import React, {ChangeEvent, useState} from 'react';
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
const [file, setFile] = useState();

const handleFileChange = (e) => {
  if (e.target.files) {
    setFile(e.target.files[0]);
  }
};

const handleUploadClick = () => {
  if (!file) {
    return;
  }

  // 👇 Uploading the file using the fetch API to the server
//   fetch('https://httpbin.org/post', {
//     method: 'POST',
//     body: file,
//     // 👇 Set headers manually for single file upload
//     headers: {
//       'content-type': file.type,
//       'content-length': `${file.size}`, // 👈 Headers need to be a string
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
};
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
                        // value={phone} 
                        onChange={handleInputPhone}>
                        
                    </PhoneInput>
                    <p className='phone_mask'>+38 (XXX) XXX - XX - XX</p>
                    <p className='select_title'>Select your position</p>
                    <div className='input_radio'>
                        <div className="radio_block">
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
                        </div>                        
                    </div>
                    <div className="upload">
                        <button className="button_upload" onClick={handleUploadClick}>Upload</button>

                        {/* <div>{file && `${file.name} - ${file.type}`}</div> */}
                        <div className="input_upload">
                            <label className="tests" for="select_file">
                                {file && `${file.name}` || "Upload your photo"}
                            </label>
                        </div>
                        <input className="select_file" id="select_file" type="file" onChange={handleFileChange}/>
                    </div>
                    <button className="create_user">Sign up</button>
                </div>
               
            </div> 
    );
};

export default Footer;