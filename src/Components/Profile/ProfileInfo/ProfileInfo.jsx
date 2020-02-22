import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://materializecss.com/images/sample-1.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <div>
          avatar
        </div>
        <div>
          + discription
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;