import React from "react";
import './navbar.css';
import profile2 from '../../assets/profile2.jpeg';

const data = [
    { id: 1, link: '#', title: 'Home' },
    { id: 2, link: '#about', title: 'About' },
    { id: 3, link: '#projects', title: 'Projects' },
    { id: 4, link: '#contact', title: 'Contact' }
]

const navbar = () => {
    return (
        <nav>
            <div className="container nav-container">
                <a href="index.hmtl" className="ProfilePic">
                    <img src={profile2} alt="profile pic" />
                </a>
                <ul className="nav-menu"> {
                    data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                }
                </ul>
            </div>
        </nav>
    )
}


export default navbar