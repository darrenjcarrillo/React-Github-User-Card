import React from "react";

const UserCard = props => {
  console.log(props);
  return (
    <div>
      Testing
      <p>{props.UserData.name}</p>
    </div>
  );
};

export default UserCard;
