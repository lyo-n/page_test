import React from 'react';
import '../styles/main.scss';




const Main = () => {
    return (
        <div className="main">
            <div className="main_block">
                <h2 className="main_block_heading">Test assignment for front-end developer</h2>
                <p className="main_block_text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <button className="main_block_button">Sign up</button>
            </div>
            <div className="main_block_info">
                <h3 className="main_info_heading">Working with GET request</h3>
                <div className="user">
                    <div className="user_block">
                        <div className="user_photo_block">
                            <img className="user_photo" alt="" src=""/>
                        </div>
                        <p className="user_name">userName</p>
                        <p className="user_position">userPosition</p>
                        <p className="user_email">userEmail</p>
                        <p className="user_phone">userphone</p>
                    </div>
                </div>
                <div className="user">
                    <div className="user_block">
                        <div className="user_photo_block">
                            <img className="user_photo" alt="" src=""/>
                        </div>
                        <p className="user_name">userName</p>
                        <p className="user_position">userPosition</p>
                        <p className="user_email">userEmail</p>
                        <p className="user_phone">userphone</p>
                    </div>
                </div>
                <button className="button_more">Show more</button>
            </div>
            
        </div> 
    );
};

export default Main;