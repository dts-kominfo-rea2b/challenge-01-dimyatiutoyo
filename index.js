// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = new Object();
firstUser.name = 'Monica';
firstUser.gender = 'Female';
firstUser.age = 17;
firstUser.email = 'monica@dingdong.com';

let favoriteColor1 = new Set()
favoriteColor1.add('Yellow');
favoriteColor1.add('Pink');
favoriteColor1.add('White');
favoriteColor1.add('Purple');
firstUser.favoriteColor = [...favoriteColor1];

firstUser.isHavePet = true;
firstUser.education = new Array();
firstUser.education.push({
    name: 'SD 01',
    city: 'Jakarta',
    graduate: '2016'
});
firstUser.education.push({
    name: 'SMP 02',
    city: 'Jakarta',
    graduate: '2019'
});
firstUser.education.push({
    name: 'SMA 03',
    city: 'Tangerang',
    graduate: ''
});

let favoriteRestaurant1 = new Set();
favoriteRestaurant1.add('Bento');
favoriteRestaurant1.add('Sushi');
favoriteRestaurant1.add('Pancake');
favoriteRestaurant1.add('Eggy');
favoriteRestaurant1.add('Tempura');
favoriteRestaurant1.add('Bento');
favoriteRestaurant1.add('Eggy');
favoriteRestaurant1.add('Padang');
favoriteRestaurant1.add('Tteok');
favoriteRestaurant1.add('Sushi');
favoriteRestaurant1.add('Sushi');
firstUser.favoriteRestaurant = [...favoriteRestaurant1];

const secondUser = new Object();
secondUser.name = 'Wendy';
secondUser.gender = 'Male';
secondUser.age = 23;
secondUser.email = 'wendy@dingdong.com';

let favoriteColor2 = new Set()
favoriteColor2.add('Blue');
favoriteColor2.add('Black');
favoriteColor2.add('Grey');
secondUser.favoriteColor = [...favoriteColor2];

secondUser.isHavePet = false;
secondUser.education = new Array();
secondUser.education.push({
    name: 'SD 02',
    city: 'Jakarta',
    graduate: '2010'
});
secondUser.education.push({
    name: 'SMP 03',
    city: 'Bogor',
    graduate: '2013'
});
secondUser.education.push({
    name: 'SMA 01',
    city: 'Surabaya',
    graduate: '2016'
});
secondUser.education.push({
    name: 'Universitas Maju',
    city: 'Tangerang',
    graduate: ''
});

let favoriteRestaurant2 = new Set();
favoriteRestaurant2.add('Tempura');
favoriteRestaurant2.add('Bento');
favoriteRestaurant2.add('Sushi');
favoriteRestaurant2.add('Pancake');
favoriteRestaurant2.add('Padang');
favoriteRestaurant2.add('Katsu');
favoriteRestaurant2.add('Geprek');
favoriteRestaurant2.add('Pancake');
favoriteRestaurant2.add('Eggy');

secondUser.favoriteRestaurant = [...favoriteRestaurant2];


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};