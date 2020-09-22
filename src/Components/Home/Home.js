import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(rse=> rse.json())
   .then(data =>setPosts(data))
  },[])
    return (
        <div>
           {
               posts.map(ps =><Post post ={ps}></Post>)
           }
           </div>
    );
};

export default Home;