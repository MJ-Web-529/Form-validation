export const validFname = new RegExp("^[a-zA-Z]+\\.?|^$");
export const validUsername = new RegExp("^[0-9_a-z]+$|^$");

export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-z]$"
);

// export const validPassword = new RegExp(
//   "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$"
// );
export const validPassword = new RegExp(
  "^[A-Za-z0-9#?!@$%^&*-]{0,16}$"
);

export const validMno = new RegExp("^[0-9]{0,10}$");
