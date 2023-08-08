const readline=require(`readline`)

const rl= readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

rl.question("masukan sebuah kalimat:", (inputstring)=>{
    //contoh property length
    console.log(`panjang kalimat: ${inputstring.length}`);
    rl.close();
}
)