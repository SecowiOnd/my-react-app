import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div className={s.content}>
      <div>
        <img src="https://materializecss.com/images/sample-1.jpg" />
      </div>
      <div>
        avatar + discription
      </div>
      <MyPosts />
    </div>
    )
}

export default Profile;