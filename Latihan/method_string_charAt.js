const readline=require(`readline`)

const rl= readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

rl.question("masukan sebuah kalimat:", (inputstring)=>{
    rl.question("masukan index yang ingin anda cek:",(index)=>{
        //konversi nilai index ke tipe number 
        index=Number(index);
        //periksa apakah index valid (berada di dalam string)
        if (index >=0  && index < inputstring.length){
            //gunakan method charAt untk mendapatkan karakter pada index yang di minta
            const character = inputstring.charAt(index);
            console.log(`karakter pada indeks ${index}:${character}`);
        }
        else{
            console.log("indeks tidak valid!");
        }
        rl.close();
    })
})