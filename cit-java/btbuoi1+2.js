//câu 1
// let n= prompt("nhap gia tri n:");
// function kiemTraChanLe(n) {
//     let ketqua=(n%2==0)? "Chẵn": "Lẻ";
//     return ketqua;
// }
// console.log(kiemTraChanLe(n));
//câu 2
// let a= prompt("Nhập số nguyên a:");
// function laSoNguyenTo(a) {
//     if (a<2){
//         return false
//     }
//     for (let i=2; i <= Math.sqrt(a); i++){
//         if (a%i==0){
//             return false
//         }
//         return true
//     }
// }
// console.log(laSoNguyenTo(a));
//câu 3
let = prompt("Nhập số nguyên n:");
function inSoNguyenTo(n) {
    console.log(`Các số nguyên tố từ 1 đến ${n} là:`);
    
    for (let i = 2; i <= n; i++) {
        let laSoNguyenTo = true;
        
        // Kiểm tra xem i có phải số nguyên tố không
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                laSoNguyenTo = false;
                break;
            }
        }
        
        if (laSoNguyenTo) {
            console.log(i);
        }
    }
}
function tinhTongChiaHet3Hoac5(n) {
    let tong = 0;
    
    for (let i = 1; i <= n; i++) {
        // Kiểm tra điều kiện chia hết cho 3 HOẶC chia hết cho 5
        if (i % 3 === 0 || i % 5 === 0) {
            tong += i;
        }
    }
    
    return tong;
}
console.log(tinhTongChiaHet3Hoac5(n));



