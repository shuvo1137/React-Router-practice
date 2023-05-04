import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const params = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      .then((res) => res.json())
      .then((data) => {
        setFriend(data);
      });
  }, [params.friendId]);

  return (
    <div>
      this FriendDetail {params.friendId}
      <h1>{friend.name}</h1>
    </div>
  );
};

export default FriendDetail;
