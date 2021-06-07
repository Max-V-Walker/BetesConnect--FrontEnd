import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <ul>
                <li>General Diabetes</li>
                <ul>
                    <li><Link to='/general-diabetes/type1'>Type 1</Link></li>
                    <li><Link to='/general-diabetes/type2'>Type 2</Link></li>
                    <li><Link to='/general-diabetes/pregnancy'>Pregnancy</Link></li>
                    <li><Link to='/general-diabetes/friends&family'>Friends & Family</Link></li>
                </ul>
                <li>Day to Day</li>
                <ul>
                    <li><Link to='/day-to-day/food&diet'>Food & Diet</Link></li>
                    <li><Link to='/day-to-day/testing-blood-sugars'>Testing Blood Sugars</Link></li>
                    <li><Link to='/day-to-day/insulin-pumps'>Insulin Pumps</Link></li>
                    <li><Link to='/day-to-day/cgm'>CGM's</Link></li>
                    <li><Link to='/day-to-day/exercise'>Exercise</Link></li>
                    <li><Link to='/day-to-day/weight-loss/gain'>Weight Loss/Gain</Link></li>
                </ul>
                <li>The Long Run</li>
                <ul>
                    <li><Link to='/the-long-run/depression-&-staying-positive'>Depression & Staying Positive</Link></li>
                    <li><Link to='/the-long-run/complications'>Complications</Link></li>
                    <li><Link to='/the-long-run/sex-&-intimacy'>Sex & Intimacy</Link></li>
                    <li><Link to='/the-long-run/insulin-supplies-assistance'>Insulin/Supplies Assistance</Link></li>
                    <li><Link to='/the-long-run/other-medical-conditions'>Other Medical Conditions</Link></li>
                </ul>
                <li>Other Topics</li>
                <ul>
                    <li><Link to='/other-topics/humor'>Humor</Link></li>
                    <li><Link to='/other-topics/news&links'>News & Links</Link></li>
                    <li><Link to='/other-topics/books&podcasts'>Books & Podcasts</Link></li>
                    <li><Link to='/other-topics/meet-ups'>Meet Ups</Link></li>
                </ul>
            </ul>
        </div>
    );
}

export default Sidebar;