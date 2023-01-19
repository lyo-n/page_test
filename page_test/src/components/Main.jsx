import React, {useState, useEffect} from 'react';
import '../styles/main.scss';







const Main = () => {
    const [data, setUsers] = useState()
    const [count, setCount] = useState(6)


    const page = 1
    useEffect(() => {
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`, {
            method: 'GET'
        }).then(response => response.json())
        .then(data => setUsers(data), console.log(data))
    }, [])

    return (
        <div className="main">
            <div className="main_block">
                <h2 className="main_block_heading">Test assignment for front-end developer</h2>
                <p className="main_block_text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <button className="main_block_button">Sign up</button>
            </div>
            <div className="main_block_info">
                <h3 className="main_info_heading">Working with GET request</h3>
                {data?.users.map(user =>
                    <div className="user">                   
                        <div className="user_block">
                            <div className="user_photo_block">
                                <img className="user_photo" alt="" src={user.photo}/>
                            </div>
                            <p className="user_name">{user.name}</p>
                            <p className="user_position">{user.position}</p>
                            <p className="user_email">{user.email}</p>
                            <p className="user_phone">{user.phone}</p>
                        </div>                  
                    </div>
                )}
                <button className="button_more" onClick={() => setCount(count + 6)}>Show more</button>
            </div>
            
        </div> 
    );
};

export default Main;