import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity';
import axios from "axios";
import '../navigation/navigation.css'

const SideBar = () => {
    // selectedstring default: "home"
    // smallboolean default: true
    // activitiesarray default: []
    // showActivitiesboolean default: false
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);


    // setPage takes one parameter pageName
    // setPage sets the selected state to pageName
    const setPage = (pageName) => {
        setSelected(pageName);
      }


      const navigate = useNavigate()

      useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        axios.get(process.env.REACT_APP_API_ACT, {
            headers: { authorization: `Bearer ${accessToken}` }
        })
        .then(response => setActivities(response.data))
    }, []);

    return (
        <nav className={`s_bar ${small ? "small" : ""}`} onMouseEnter={() => { setSmall(false); setTimeout(() => setShowActivities(true), 500) }} onMouseLeave={() => { setSmall(true); setShowActivities(false) }}>
            <ul className="navigation">
                <li className={selected === 'home' ? 'active' : ''} onClick={() => {
                    setSelected('home')
                    navigate('/')
                }}><FontAwesomeIcon icon={faFolder} className="icon" />{!small && "Home"} {showActivities && !small && selected === 'home' && <FontAwesomeIcon icon={faArrowRight} className="active-icon" />}</li>
                <li className={selected === 'favorites' ? 'active' : ''} onClick={() => {
                    setSelected('favorites')
                    navigate('/favorites')
                }}><FontAwesomeIcon icon={faStar} className="icon" />{!small && "Favorites"} {showActivities && !small && selected === 'favorites' && <FontAwesomeIcon icon={faArrowRight} className="active-icon" />}</li>
                <li className={selected === 'watchLater' ? 'active' : ''} onClick={() => {
                    setSelected('watchLater')
                    navigate('/watchlater')
                }}><FontAwesomeIcon icon={faClock} className="icon" />{!small && "Watch Later"} {showActivities && !small && selected === 'watchLater' && <FontAwesomeIcon icon={faArrowRight} className="active-icon" />}</li>
            </ul>
            {!small && (
                <ul className="acts">
                    <h1>Latest Activities</h1>
                </ul>)}
        </nav >
    );
}

export default SideBar;
