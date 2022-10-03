function reminder(nama){
    return "Selamat" + ", " + nama;
}

function reminding(ucapan, nama, pesan){
    console.log(`${ucapan(nama)} ${pesan}`);
}

reminding(reminder, "Rafi", " Semoga berkah selalu!");