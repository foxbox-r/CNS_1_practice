import {
  action,
  makeObservable,
  makeAutoObservable,
  observable,
  computed,
} from "mobx";

class UserStore {
  name = "sua";
  age = 18;
  school = "DGSW";
  score = 100;
  bonusScore = 50;

  constructor() {
    makeObservable(this, {
      name: observable,
      age: observable,
      school: observable,
      score: observable,
      bonusScore: observable,
      totalScore: computed,
      addScore: action,
    });
  }

  get totalScore() {
    return this.score + this.bonusScore;
  }

  addScore = (value) => {
    this.score += value;
  };
}

export default UserStore;
