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
    <ul className="bg-[#592414] h-[64vh] md:flex md:justify-between md:flex-row md:gap-4  grid-cols-1  p-6 font-bold text-white py-5 font-mono">
      {post.map(({ id, description, quantity, packed }) => {
        return (
          <Item
            key={id}
            quantity={quantity}
            item={description}
            packed={packed}
          />
        );
      })}
    </ul>
  );
};

export default PackingList;
