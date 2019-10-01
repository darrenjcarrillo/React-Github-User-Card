import React, { useEffect } from "react";

function UserCard(props) {
  const { user } = props;

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <img src={props.user.avatar_url} />
      <p>Name: {props.user.login}</p>
      {/* <p>{this.props.UserData.name}</p> */}
    </div>
  );
}

export default UserCard;
