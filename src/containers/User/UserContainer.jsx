import React from "react";
import rootStore from "../../stores";
import User from "../../components/User/User";
import { observer } from "mobx-react";

function UserContainer() {
  const { name, age, school, score, bonusScore, totalScore, addScore } =
    rootStore.UserStore;

  const me = { name, age, school, score, bonusScore };

  return <User me={me} totalScore={totalScore} addScore={addScore} />;
}

export default observer(UserContainer);
