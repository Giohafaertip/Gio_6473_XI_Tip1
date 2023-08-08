const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan sebuah kalimat: ", (inputString)=> {
  rl.question("Index keberapa yang ingin di cek: ", (index)=> {
    index = Number(index);
    if(index >= 0 && index < inputString.length){
      const character = inputString.charAt(index);
      console.log(`Karakter pada index ${index}: ${character}`);

    }
    else{
      console.log("indeks tidak valid");
    }
    rl.close()
  })
})