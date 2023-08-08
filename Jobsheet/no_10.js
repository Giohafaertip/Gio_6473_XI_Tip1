const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Makanan favorit saya adalah : ", (kalimat1)=> {
  rl.question("Makanan kesukaan kalian: ", (kalimat2)=> {
    const kalimatGabungan = kalimat1.concat(kalimat2);
    console.log(`Hasil penggabungan: ${kalimatGabungan}`);
    rl.close()
  })
})