import React from "react";

function User({ me, totalScore, addScore }) {
  console.log(me);
  return (
    <>
      <div>name : {me.name}</div>
      <div>age : {me.age}</div>
      <div>school : {me.school}</div>
      <div>score : {me.score}</div>
      <div>bonusScore : {me.bonusScore}</div>
      <div>totalScore : {totalScore}</div>
      <button onClick={() => addScore(50)}>add</button>
    </>
  );
}

export default User;
