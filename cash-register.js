import el from "el";
function checkCashRegister(price, cash, cid) {
  //hitung total kembalian
  const totalKembalian = cash * 100 - price * 100;

  //hitung jumlah uang yang ada di mesin kasir (dikali 100)
  let uangDimesinKasir = cid
    .map((el) => el[1])
    .reduce((acc, curr) => acc + curr * 100, 0);

  //Pengecekan Kondisi
  //Kasus 1, ketika kembalian tidak cukup

  if (totalKembalian > uangDimesinKasir) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  //kondisi 2, ketika kembalian sama dengan uang yang ada di kasir
  else if (totalKembalian === uangDimesinKasir) {
    return { status: "CLOSED", change: cid };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
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
