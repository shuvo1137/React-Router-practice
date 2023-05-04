import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;
  const navigate = useNavigate();
  function friendDetail() {
    const path = `/friends/${id}`;
    navigate(path);
  }
  return (
    <div>
      <p>{name}</p>
      <button
        onClick={friendDetail}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {username} {id}
      </button>
    </div>
  );
};

export default Friend;
