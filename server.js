// require('dotenv').config();
const favouriteTeacher = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    console.log(`My favorite food is ${favouriteTeacher}`);
    await sleep(5000);
  }
}

main();
