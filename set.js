// Belajar Method Set pada JavaScript

// set adalah struktur data yang menyimpan nilai unik dari tipe data apapun.

// Membuat Set
const letter = new Set(['a', 'b', 'c', 'd', 'a']);
console.log(letter); // Output: Set(4) { 'a', 'b', 'c', 'd' }

// Add Values
letter.add('e');
console.log(letter); // Output: Set(5) { 'a', 'b', 'c', 'd', 'e' }

// listing the elements

let text = "";
for(const item of letter) {
    text += item + " ";
}
console.log(text); // Output: a b c d e

// Size properti
letter.size;
console.log(letter.size); // Output: 5

// has method
console.log(letter.has('b')); // Output: true

// delete method
letter.delete('c');
console.log(letter); // Output: Set(4) { 'a', 'b', 'd', 'e' }

// for each method
letter.forEach(function(value) {    
    text += value + " ";
})

console.log(text); // Output: a b d e   
