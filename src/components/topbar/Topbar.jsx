import React from 'react';
import {Search,Person, Chat, Notifications} from "@mui/icons-material"
import "./topbar.css";

function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>SocialLife</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search/>
          <input placeholder='Search for friend, post or video' className='searchInput'/>
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIocnItem'>
            <Person/>
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIocnItem'>
            <Chat/>
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIocnItem'>
            <Notifications/>
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIocnItem'>
            <Person/>
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <img src='/assets/person/1.jpeg' alt='user' className='topbarImg'/>
      </div>
    </div>
  );
}

export default Topbar;
