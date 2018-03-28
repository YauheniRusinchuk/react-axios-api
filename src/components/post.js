import React from 'react';
import './style/post.css'


export default ({urltoimg,description,id,title}) => {

  const body = (
    <div className="post">
      <p className="post_title"> {title} </p>
        <img src={urltoimg} alt="imeges" />
      <p className="post_description"> {description} </p>
    </div>
  )

  return(
    <div>
      {body}
    </div>
  );
}
