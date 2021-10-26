import CountStore from "./Count";
import UserStore from "./User";

const RootStore = {
  CountStore: new CountStore(),
  UserStore: new UserStore(),
};

export default RootStore;
