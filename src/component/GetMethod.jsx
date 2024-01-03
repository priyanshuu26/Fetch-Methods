import React, { useEffect } from 'react';

function GetMethod() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return <div>GetMethod</div>;
}

export default GetMethod;
