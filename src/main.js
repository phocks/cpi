import cpi from "./cpi.js";

import dayjs from "dayjs";

// dayjs("Sep-2017");

console.log(dayjs(dayjs("Sep-2017").endOf("month")).format());

export default function() {
  console.log("Hello");
}
