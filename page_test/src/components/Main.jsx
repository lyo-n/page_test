import React from 'react';
import '../styles/main.scss';




const Main = () => {
    return (
        <div className="main">
            <div className="main_block">
                <h2 className="main_block_heading">Test assignment for front-end developer</h2>
                <p className="main_block_text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <button className="main_button">Sign up</button>
            </div>
            <div className="main_block_users">
                <h3 className="main_users">Working with GET request</h3>
            </div>
            
        </div> 
    );
};

export default Main;