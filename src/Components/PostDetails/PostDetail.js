import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';
const PostDetail = () => {

    const {postId} = useParams();
    const [details,setDetails] = useState({});
    useEffect(()=>{
       const url =`https://jsonplaceholder.typicode.com/posts/${postId}` 
       fetch (url)
       .then (res => res.json())
       .then (data=>setDetails(data));
    },[])
    return (
          <div>
            <p>body{details.body}</p>
            <Comment></Comment>
          </div>
    );
};

export default PostDetail;