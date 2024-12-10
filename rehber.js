let rehber = [];
let islem = prompt("İşlem seçin: Ekle, Bul, Sil");

if (islem === "Ekle") {
    let isim = prompt("İsim girin:");
    let numara = prompt("Numara girin:");
    rehber.push({ isim, numara });
    console.log(`${isim} başarıyla rehbere eklendi!`);
}
else if (islem === "Bul") {
    let arananIsim = prompt("Aramak istediğiniz ismi girin:");
    let bulundu = false;
    for (let i = 0; i < rehber.length; i++) {
        if (rehber[i].isim.toLowerCase() === arananIsim.toLowerCase()) {
            console.log(`Bulundu: ${rehber[i].isim} - ${rehber[i].numara}`);
            bulundu = true;
            break;
        }
    }
    if (!bulundu) {
        console.log("Kişi bulunamadı.");
    }
}
else if (islem === "Sil") {
    let silinecekIsim = prompt("Silmek istediğiniz ismi girin:");
    let bulundu = false;

    for (let i = 0; i < rehber.length; i++) {
        if (rehber[i].isim.toLowerCase() === silinecekIsim.toLowerCase()) {
            console.log(`${rehber[i].isim} rehberden silindi.`);
            rehber.splice(i, 1);
            bulundu = true;
            break;
        }
    }
    if (!bulundu) {
        console.log("Kişi bulunamadı.");
    }
}
else {
    console.log("Geçersiz işlem.");
}