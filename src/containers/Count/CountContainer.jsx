import React from "react";
import rootStore from "../../stores";
import Count from "../../components/Count/Count";
import { observer } from "mobx-react";
function ContContainer() {
  const { number, increase, decrease } = rootStore.CountStore;

  return <Count number={number} increase={increase} decrease={decrease} />;
}

export default observer(ContContainer);
