import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostFormRedux from './AddPostFormRedux';


const MyPosts = React.memo(props => {

  let postElements = [...props.posts].reverse().map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();


  let AddNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
      <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
          <div>
            <AddPostFormRedux onSubmit={AddNewPost}/>
          </div>
          <div className={s.posts}>
            {postElements}
          </div>
        </div>
      </div>
  )
});

export default MyPosts;