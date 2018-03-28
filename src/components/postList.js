import React from 'react';
import './style/postlist.css';


import Post from './post';


export default (props) => {

  const {data} = props

  return(
    <div className="main">
      {
        data.map((item, index) => {
          return(
              <Post key={index}
                    description={item.description}
                    title={item.title}
                    urltoimg={item.urlToImage}
                    id={item.id}
            />
          )
        })
      }
    </div>
  );
}
