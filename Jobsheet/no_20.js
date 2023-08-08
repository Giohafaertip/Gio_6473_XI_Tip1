const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    rl.question("Masukan Index Pertama: ", (startIndex)=>{
        rl.question("Masukan Index terakhir: ", (endIndex)=>{
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            const substringResult = kalimat.substring(startIndex,endIndex);
            console.log(`Hasil substring dari indeks ${startIndex} hingga ${endIndex}: ${substringResult}`);
            rl.close();
        });
    });
});