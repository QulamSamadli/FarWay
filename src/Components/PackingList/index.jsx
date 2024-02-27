import React, { useEffect, useState } from "react";
import Item from "../Item";
import axios from "axios";

const url = "https://faraway-db.vercel.app/posts";

const PackingList = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPost(data);
    });
  }, []);

  return (
    <ul className="bg-[#592414] h-[64vh] grid grid-flow-col md:grid-cols-7 gap-4 text-center text-[25px] font-bold text-white py-5 font-mono">
      {post.map(({ id, description }) => {
        return <Item key={id} item={description} />;
      })}
    </ul>
  );
};

export default PackingList;
