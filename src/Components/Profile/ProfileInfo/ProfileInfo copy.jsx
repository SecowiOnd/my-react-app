import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }


  return (
    <div>
      <div>
        <img src="https://materializecss.com/images/sample-1.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        {/* <img src={props.profile.photos.large} /> */}
      </div>
      {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>                  
                        <img className={s.userPhoto} 
                            src={u.profile.photos.large != null ? u.photos.small : userPhoto} />                        
                    </div>
                    <div>
                    Ищут работу?: {u.profile.lookingForAJob ? <div>Yes</div> : <div>No</div>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
  )
}

export default ProfileInfo;