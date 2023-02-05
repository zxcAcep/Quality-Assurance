

const prompt = require('prompt-sync')({sigint: true});
var ulangi=1;
console.log("---====selamat datang pada program akar pangkat 2====---");
while(ulangi){
const num1 = prompt('Silahkan Masukan angka yang diinginkan ');
if(num1 <0)
{
    console.log("Maaf angka yang diinput harus bernilai positif");
    var jawab = prompt("Apakah anda mau mengulang program? (yes/no) : ");
    if(jawab== true || jawab=="yes"|| jawab=="Yes" || jawab=="YES")
    {
        ulangi=true;
   
    }
    else
    {
        ulangi=false
    }
}     
else if (num1 >=0)
{
console.log("akar pangkat 2 dari "+num1+" adalah " +Math.sqrt(num1))
var jawab = prompt("Apakah anda mau mengulang program? (yes/no) : ");
if(jawab== true || jawab=="yes"|| jawab=="Yes" || jawab=="YES")
{
    ulangi=true;

}
else
{
    ulangi=false
}
}

}
