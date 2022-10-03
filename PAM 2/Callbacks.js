function greet(Nama){
    return 'Hai!' + ' ' + Nama;
}

function greet_name(greeting,pesan,Nama){
    console.log(`${greeting(Nama)} ${pesan}`);
}
 
greet_name(greet,'Selamat Pagi','Irfan');