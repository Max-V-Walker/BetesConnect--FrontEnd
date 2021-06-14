import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-regular-svg-icons";

const forums = <FontAwesomeIcon icon={faComments} />;

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul>
                <li className='sidebarTopic'>General Diabetes</li>
                <ul>
                    <li><Link to='/general-diabetes/type1' className='sidebarLink'><i className="forumBtn">{forums}</i>Type 1</Link></li>
                    <li><Link to='/general-diabetes/type2' className='sidebarLink'><i className="forumBtn">{forums}</i>Type 2</Link></li>
                    <li><Link to='/general-diabetes/pregnancy' className='sidebarLink'><i className="forumBtn">{forums}</i>Pregnancy</Link></li>
                    <li><Link to='/general-diabetes/friends&family' className='sidebarLink'><i className="forumBtn">{forums}</i>Friends & Family</Link></li>
                </ul>
                <li className='sidebarTopic'>Day to Day</li>
                <ul>
                    <li><Link to='/day-to-day/food&diet' className='sidebarLink'><i className="forumBtn">{forums}</i>Food & Diet</Link></li>
                    <li><Link to='/day-to-day/testing-blood-sugars' className='sidebarLink'><i className="forumBtn">{forums}</i>Testing Blood Sugars</Link></li>
                    <li><Link to='/day-to-day/insulin-pumps' className='sidebarLink'><i className="forumBtn">{forums}</i>Insulin Pumps</Link></li>
                    <li><Link to='/day-to-day/cgm' className='sidebarLink'><i className="forumBtn">{forums}</i>CGM's</Link></li>
                    <li><Link to='/day-to-day/exercise' className='sidebarLink'><i className="forumBtn">{forums}</i>Exercise</Link></li>
                    <li><Link to='/day-to-day/weight-loss/gain' className='sidebarLink'><i className="forumBtn">{forums}</i>Weight Loss/Gain</Link></li>
                </ul>
                <li className='sidebarTopic'>The Long Run</li>
                <ul>
                    <li><Link to='/the-long-run/depression-&-staying-positive' className='sidebarLink'><i className="forumBtn">{forums}</i>Depression & Staying Positive</Link></li>
                    <li><Link to='/the-long-run/complications' className='sidebarLink'><i className="forumBtn">{forums}</i>Complications</Link></li>
                    <li><Link to='/the-long-run/sex-&-intimacy' className='sidebarLink'><i className="forumBtn">{forums}</i>Sex & Intimacy</Link></li>
                    <li><Link to='/the-long-run/insulin-supplies-assistance' className='sidebarLink'><i className="forumBtn">{forums}</i>Insulin/Supplies Assistance</Link></li>
                    <li><Link to='/the-long-run/other-medical-conditions' className='sidebarLink'><i className="forumBtn">{forums}</i>Other Medical Conditions</Link></li>
                </ul>
                <li className='sidebarTopic'>Other Topics</li>
                <ul>
                    <li><Link to='/other-topics/humor' className='sidebarLink'><i className="forumBtn">{forums}</i>Humor</Link></li>
                    <li><Link to='/other-topics/news&links' className='sidebarLink'><i className="forumBtn">{forums}</i>News & Links</Link></li>
                    <li><Link to='/other-topics/books&podcasts' className='sidebarLink'><i className="forumBtn">{forums}</i>Books & Podcasts</Link></li>
                    <li><Link to='/other-topics/meet-ups' className='sidebarLink'><i className="forumBtn">{forums}</i>Meet Ups</Link></li>
                </ul>
            </ul>
        </div>
    );
}

export default Sidebar;