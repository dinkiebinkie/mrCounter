// import React, { useState, useContext } from "react";
// // import * as helper from "../helper";
// // import { CounterList } from "../components/CounterList"
// // import { CreateCounterInput } from "../components/CreateCounterInput";

// export const countersContext = React.createContext({
//   counters: [],
//   actions: {
//     createCounter: () => undefined,
//     updateCounter: () => undefined,
//     removeCounter: () => undefined
//   }
// });

// export const CounterProvider = ({ children, initialCounters }) => {
//   const [counters, setCounters] = useState(initialCounters);
//   console.log(initialCounters);
//   // const removeCounter = counterId =>
//   //   setCounters(helper.remove(counters, counterId));
//   // const createCounter = countersTitle =>
//   //   setCounters(helper.create(counters, new Counter(countersTitle)));
//   // const updateCounter = (counterId, counters) =>
//   //   setCounters(helper.update(counters, counterId, counters));

//   return (
//     <countersContext.Provider
//       value={{
//         counters,
//         actions: {
//           createCounter,
//           removeCounter,
//           updateCounter
//         }
//       }}
//     >
//       {children}
//     </countersContext.Provider>
//   );
// };
