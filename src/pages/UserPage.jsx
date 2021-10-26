import React from "react";
import UserContainer from "../containers/User";
import DefaultTemplate from "../components/common/Template";
function UserPage() {
  return (
    <DefaultTemplate>
      <UserContainer />
    </DefaultTemplate>
  );
}

export default UserPage;
