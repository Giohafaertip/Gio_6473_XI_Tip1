const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Saya sangat suka sekali warna: ", (kalimat1)=> {
  rl.question("Masukan warna kedua: ", (kalimat2)=> {
    const kalimatGabungan = kalimat1.concat(kalimat2);
    console.log(`Hasil penggabungan: ${kalimatGabungan}`);
    rl.close()
  })
})