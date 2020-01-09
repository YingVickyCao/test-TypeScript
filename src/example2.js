import _ from "lodash";
import { test_off } from "./App";
export function hi2(str) {
  //   let result = "Hello, " + str;
  //   console.log(result);

  test1();
}

function test1() {
  var item = {
    symbol: "A",
    num: 10
  };

  const myList = {
    A: "A_Data",
    B: "B_Data",
    C: "C_Data"
  };

  if (_.isEmpty(myList[item.symbol])) {
    console.log("symbol is empty");
  } else {
    console.log("symbol " + item.symbol); // symbol A
  }
}
