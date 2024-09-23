// const nav = 
let nav = document.querySelector('.groupNav');
let inactivityTimeout; // Menyimpan ID timeout
const inactivityTimeLimit = 5000; // Waktu batas inaktivitas (dalam milidetik, 5000 ms = 5 detik)

function changePosition(){
  nav.firstElementChild.style.transform = 'translateY(100px)';
  setTimeout(() =>{
    nav.lastElementChild.style.transform = 'translateY(-20px)';
  },200);
}

function returnPosition(){
  setTimeout(() =>{
    nav.firstElementChild.style.transform = 'translateY(0)';
  },200);
  nav.lastElementChild.style.transform = 'translateY(50px)';
}

// Reset timer inaktivitas
function resetTimer() {
  clearTimeout(inactivityTimeout); // Hapus timeout yang ada
  inactivityTimeout = setTimeout(returnPosition, inactivityTimeLimit); // Set timer untuk mengecilkan div jika tidak ada interaksi
}

 // Tambahkan event listeners untuk mendeteksi interaksi dalam div
 nav.firstElementChild.addEventListener('mousemove', resetTimer); // Gerakan mouse
 nav.firstElementChild.addEventListener('keydown', resetTimer);    // Keyboard (jika div bisa fokus)
 nav.firstElementChild.addEventListener('touchstart', resetTimer); // Sentuhan (untuk perangkat mobile)
 nav.lastElementChild.addEventListener('mousemove', resetTimer); // Gerakan mouse
 nav.lastElementChild.addEventListener('keydown', resetTimer);    // Keyboard (jika div bisa fokus)
 nav.lastElementChild.addEventListener('touchstart', resetTimer); // Sentuhan (untuk perangkat mobile)


// Event listener untuk memperbesar saat diklik
nav.firstElementChild.addEventListener('click', changePosition);