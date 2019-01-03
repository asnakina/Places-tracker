//we take adata and do sm-th before storing it in db
//require bcript
const bcrypt = require('bcrypt');
const SECRET = 5;

// const verify = async (pass) => {
// const isValid = await bcrypt.compare(pass, digest);
// return isValid;
// };

//function takes password, turn it to SECRET
//and return a password
const hash = async(password) => {
  const hashedPassword = await bcrypt.hash(password);
  return hashedPassword;
}

const run = async () => {
  const hashedPw = await hash('notgoodpassword')
  console.log(hashedPw)
}
run();

