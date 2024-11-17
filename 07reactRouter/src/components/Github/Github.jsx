import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/253hansika')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="GitProfile" width={300}></img>
    </div>
  );
}

export default Github;

export const githubloader = async () => {
  const res = await fetch('https://api.github.com/users/253hansika');
  return res.json();
};
