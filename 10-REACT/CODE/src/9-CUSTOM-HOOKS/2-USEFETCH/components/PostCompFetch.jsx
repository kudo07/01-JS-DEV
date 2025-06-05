import React, { useLayoutEffect } from 'react';
import useFetch from '../hooks/useFetch';

const PostCompFetch = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>error:{error.message}</div>;
  }
  return (
    <div>
      <h4>Post list</h4>
      {data && (
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostCompFetch;
