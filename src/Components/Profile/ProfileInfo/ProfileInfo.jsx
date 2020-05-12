import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }


  return (
    <div>
      <div className={s.descriptionBlock}>
        <img className={s.userPhoto}
          src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
      </div>
      <div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
      <div>
        <div>
          Полное имя: {props.profile.fullName}
        </div>
        <div>
          Обо мне: {props.profile.aboutMe != null ? props.profile.aboutMe : <span>Nothing</span>}
        </div>
        <div>
          Отношение к поиску работы: {props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : <span>Nothing</span>}
        </div>
        <div>
          Ищет работу?: {props.profile.lookingForAJob ? <span>Yes</span> : <span>No</span>}
        </div>
      </div>
      <div>
        <div>
          <span>{props.profile.contacts.map} </span>
        </div>

        <div>Мои ссылки</div>
        <div>github: {props.profile.contacts.github != null ? props.profile.contacts.github : <span>No</span>}</div>
        <div>vk: {props.profile.contacts.vk != null ? props.profile.contacts.vk : <span>No</span>}</div>
        <div>facebook: {props.profile.contacts.facebook != null ? props.profile.contacts.facebook : <span>No</span>}</div>
        <div>instagram: {props.profile.contacts.instagram != null ? props.profile.contacts.instagram : <span>No</span>}</div>
        <div>twitter: {props.profile.contacts.twitter != null ? props.profile.contacts.twitter : <span>No</span>}</div>
        <div>website: {props.profile.contacts.website != null ? props.profile.contacts.website : <span>No</span>}</div>
        <div>youtube: {props.profile.contacts.youtube != null ? props.profile.contacts.youtube : <span>No</span>}</div>
        <div>mainLink: {props.profile.contacts.mainLink != null ? props.profile.contacts.mainLink : <span>No</span>}</div>
      </div>

    </div>
  )
}

export default ProfileInfo;