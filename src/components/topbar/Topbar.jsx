import React from 'react';
import {Search} from "@mui/icons-material"
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
        
      </div>
    </div>
  );
}

export default Topbar;
