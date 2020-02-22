import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = [
    {id:1, message:"heh", likesCount:125},
    {id:2, message:"nice face", likesCount:25},
    {id:3, message:"Dora", likesCount:27 },
    {id:4, message:"Kono dio da", likesCount:404 }
  ]

  let postElements = postData.map ( p => <Post message={p.message} likesCount={postData[0].likesCount}/>);

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
        <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
        <button> Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;