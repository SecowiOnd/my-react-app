import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://vignette.wikia.nocookie.net/memes2019/images/7/74/Rm1.jpg/revision/latest/scale-to-width-down/340?cb=20181211202935&path-prefix=ru" />
      post 1
      <div>
        <span> like </span>
      </div>
    </div>
  )
}

export default Post;