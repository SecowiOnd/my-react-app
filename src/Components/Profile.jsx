import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
      <div className={s.content}>
      <div>
        <img src="https://materializecss.com/images/sample-1.jpg" />
      </div>
      <div>
        avatar + discription
      </div>
      <div>
        My post
        <div>
          New post
        </div>
        <div>
          <div className={s.item}>
            post 1
          </div>
          <div className={s.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
    )
}

export default Profile;