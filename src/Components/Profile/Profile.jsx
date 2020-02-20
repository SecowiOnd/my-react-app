import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
      <div className={s.content}>
      <div>
        <img src="https://materializecss.com/images/sample-1.jpg" />
      </div>
      <div>
        <div>
        avatar
        </div>
        <div>
        + discription
        </div>
      </div>
      <MyPosts />
    </div>
    )
}

export default Profile;