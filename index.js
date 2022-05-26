// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = new Object();
firstUser.name = 'Monica';
firstUser.gender = 'Female';
firstUser.age = 17;
firstUser.email = 'monica@dingdong.com';
firstUser.favoriteColor = new Set();
firstUser.favoriteColor.add('Yellow');
firstUser.favoriteColor.add('Pink');
firstUser.favoriteColor.add('White');
firstUser.favoriteColor.add('Purple');
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
firstUser.favoriteRestaurant = new Set();
firstUser.favoriteRestaurant.add('Bento');
firstUser.favoriteRestaurant.add('Sushi');
firstUser.favoriteRestaurant.add('Pancake');
firstUser.favoriteRestaurant.add('Eggy');
firstUser.favoriteRestaurant.add('Tempura');
firstUser.favoriteRestaurant.add('Padang');
firstUser.favoriteRestaurant.add('Tteok');


const secondUser = new Object();
secondUser.name = 'Wendy';
secondUser.gender = 'Male';
secondUser.age = 23;
secondUser.email = 'wendy@dingdong.com';
secondUser.favoriteColor = new Set();
secondUser.favoriteColor.add('Blue');
secondUser.favoriteColor.add('Black');
secondUser.favoriteColor.add('Grey');
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
secondUser.favoriteRestaurant = new Set();
secondUser.favoriteRestaurant.add('Tempura');
secondUser.favoriteRestaurant.add('Bento');
secondUser.favoriteRestaurant.add('Sushi');
secondUser.favoriteRestaurant.add('Pancake');
secondUser.favoriteRestaurant.add('Padang');
secondUser.favoriteRestaurant.add('Katsu');
secondUser.favoriteRestaurant.add('Geprek');
secondUser.favoriteRestaurant.add('Eggy');


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