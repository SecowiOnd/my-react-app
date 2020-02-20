import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My post
        <div>
        <textarea></textarea>
        <button> Add Post</button>
      </div>
      <div>
        <Post message="heh" count="125" />
        <Post message="nice face" count="115"/>
      </div>
    </div>
  )
}

export default MyPosts;