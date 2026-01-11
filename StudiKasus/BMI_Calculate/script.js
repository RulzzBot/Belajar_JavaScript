let berat = parseFloat(prompt("Masukkan Berat Badan (kg) : "));
let tinggi = parseFloat(prompt("Masukkan Tinggi Badan (cm) : "));

// Convert cm ke m
tinggi = tinggi / 100;

// Higung BNI
let bmi = berat / (tinggi * tinggi);
let kategory = "";

if(bmi < 18.5){
    kategory = "Underweight";
}else if(bmi < 25){
    kategory = "Normal"
}else if(bmi < 30){
    kategory = "Overweight"
}else{
    kategory = "Obesitas"
}

// Tampil Hasil
console.log(`BMI Kamu ${bmi.toFixed(2)}\n
Kategory = ${kategory};
`)