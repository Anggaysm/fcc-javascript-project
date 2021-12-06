function checkCashRegister(price, cash, cid) {
  //hitung total kembalian
  let totalKembalian = cash * 100 - price * 100;

  //hitung jumlah uang yang ada di mesin kasir (dikali 100)
  let uangDimesinKasir = cid
    .map((el) => el[1])
    .reduce((acc, curr) => acc + curr * 100, 0);

  //panduan pecahan/pecahan (sudah dikalikan 100)
  const satuanSlot = {
    PENNY: 1,
    NICKLE: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };

  //Pengecekan Kondisi
  //Kasus 1, ketika kembalian tidak cukup

  if (totalKembalian > uangDimesinKasir) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  //kasus 2, ketika kembalian sama dengan uang yang ada di kasir
  else if (totalKembalian === uangDimesinKasir) {
    return { status: "CLOSED", change: cid };
  }

  //Kasus 3, Total kembalian lebih kecil dari pada uang yang ada di mesin kasir
  //kembalikan uang sesuai dengan pecahannya mengurut dari besar ke kecil
  else {
    //urutkan uang di kasir yang paling besar
    cid = cid.reverse();

    //Menyiapkan kembalian
    let UangKembalian = [];

    //menelusuri setiap uang di mesin kasir
    cid.forEach((slot) => {
      //set kondisi awal dari slot baru
      let kondisiSlotBaru = [slot[0], 0];

      //satuan(nama pecahaan)
      let satuan = slot[0];

      //jumlah uang dalam slot
      let pecahan = slot[1] * 100;

      //cek uang berdasarkan satuan, kurangi jika kembalian masih memenuhi
      while (totalKembalian >= satuanSlot[satuan] && pecahan > 0) {
        totalKembalian -= satuanSlot[satuan];
        pecahan -= satuanSlot[satuan];
        kondisiSlotBaru[1] += satuanSlot[satuan] / 100;
      }
      if (kondisiSlotBaru[1] > 0) {
        UangKembalian.push(kondisiSlotBaru);
      }
    });
    //cek jika uangnya ada tapi pecahannya tidak ada
    if (totalKembalian > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: UangKembalian };
  }
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
