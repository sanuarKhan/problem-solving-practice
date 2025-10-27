// const expect = function (val) {
//   return {
//     toBe: (val1) => {
//       if (val === val1) {
//         return true;
//       }
//       throw new Error("Not Equal");
//     },
//     notToBe: (val2) => {
//       if (val2 !== val) {
//         return true;
//       }
//       throw new Error("Equal");
//     },
//   };
// };

const expect = (val) => {
  return {
    toBe: (val1) => {
      if (val === val1) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: (val2) => {
      if (val !== val2) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};
console.log(expect(4).notToBe(6));
