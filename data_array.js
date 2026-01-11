// 1. Ubah nilai + 10
// 2. Buang nama double
// 3. Nilai max 100

// const data = [
//     {
//         nama: "Nazrul",
//         nilai: 85,
//     },
//     {
//         nama: "Aisyah",
//         nilai: 99,
//     },
//     {
//         nama: "Nazrul",
//         nilai: 89, 
//     }
// ]

// console.log("Data awal :", data);

// const nama_unik = [...new Set(data.map(item => item.nama))];
// console.log("Nama unik :", nama_unik);

// const nilai_baru = data.map(s => {
//     let nilai_naik = s.nilai + 10;
//     if(nilai_naik > 100) nilai_naik = 100;

//     return {
//         nama: s.nama,
//         nilai: nilai_naik
//     }
// })

// console.log("Data nilai baru :", nilai_baru);

// const data_akhir = [];


// menambah data di dalam array


const array = ["apel", "jeruk", "mangga"];
console.log(array)

// push menambah di akhir
array.push("Nangka")
console.log(array)

// unshift menambah di awal
array.unshift("Semangka")
console.log(array)

// DELETE
// pop menghapus di akhir
array.pop()
console.log(array)

// shift menghapus di awal
array.shift()
console.log(array)

// splice menghapus di tengah
array.splice(1,1) // (index, jumlah data yang dihapus)
console.log(array)

// Mencari data di dalam array
const array2 = ["Nazrul", "Yusuf", "Reyhan", "Fatah", "Jojo"];
const nama = "Nazrul";
const search1 = array2.filter((item) => item === nama);
console.log(search1)

const search2 = array2.map((item) => {
    return item === "Reyhan" ? item + " ditemukan" : item + " tidak ditemukan"
})

console.log(search2)
// const nama_dicari = "Reyhan";
// const search = array2.find((item) => item === nama_dicari);
// console.log(search);