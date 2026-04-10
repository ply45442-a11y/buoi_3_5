// var Myname="Ly"; //khai báo biến, nằm trong dấu "" là kiểu dữ liệu chuỗi kí tự >>> nên sử dụng let hơn là var
// var myname="Phuong";
// console.log(Myname);
// console.log(myname);
// let result ='4'-1
// let result2='4'+1
// console.log(result);
// console.log(result2);
// let x=10
// let y=5
// let z; //z=underfined
// const pi=3.14;
// console.log(10+5);
// let a =[1,2,3,4];
// for (let i=0; i<a.length; i+1) //(start, stop, step)
//     console.log(a[i],i); //console.log()=> in ra man hinh <=> print("")
// document.write("hello<br>");
// document.getElementById("test").innerHTML=10+5;
// alert("HELLO WORLD!!!!!!!")
// let d=10;
// let b=20
// let max=(d>b) ? d:b; //toan tu 3 ngoi
// console.log(max);
// let e=5;
// let f=5;
// console.log("a++",a++);
//buổi 2 JS====================================================================================================
//cau 1
// let a=12;
// let b=10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// //cau 2
// let x= prompt("nhap gia tri x:");
// let y= prompt("nhap gia tri y:");
// console.log(x+y);
// //cau 3
// let z=35;
// let ok=(z%2==0) ? "so chan": "so le";
// console.log(ok);
//buổi 3==========================================================================================
//vòng lặp for trong js--------------------------------------
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let len = cars.length;

// let text = "";
// for (let i = 0; i < len; i++) {
//   text += cars[i] + "<br>";
// }
// document.getElementById("test").innerHTML= text;
//mảng---------------------------------------------------
// const cars=["toyota","lexus"]
// document.getElementById("test").innerHTML = cars;
//buổi 3 lý thuyết 10/4/2026********************************************************************************

//vòng for trong Js

// for (let i=0;i<5; i++){
//     console.log("lan lap thu "+i);
// }
// for (let i=1;i<=10; i++){
//     console.log(`2 x ${i}=${2*i}` );
//     // su dung dau duoi escape
// }

// let arr = ['a','b','c']
// for (let i in arr){ 
//     // su dung "for in" chay theo chi muc
//     // alert(i);
//     console.log( arr[i]);
// nếu để (i) thì sẽ in ra chỉ số
// }

// let arr = ['a','b','c']
// for (let i of arr){ // su dung "for of" chay theo gia tri
//     // alert(i);
//     console.log( i);
//     // in thẳng ra abc
// }

// while loops
// let j=0;
// while (j<5){
//     console.log(j);
//     j++;
// }

//array----------------------------------
//khởi tạo mảng
// let num=[1,2,3,4,5];
// //thêm phần tử
// num.push(6);
// //thêm vào đầu mảng
// num.unshift(8);
// //lấy phần tử cuối cùng ra khỏi mảng
// num.pop()
// // lấy phần tử đầu ra khỏi mảng
// num.shift()
// //lấy độ dài mảng
// num.length()


// các hàm cơ bản trong mảng
let num=[1,2,3,4,5];
num.forEach(item => console.log(item));
num.every(la=>console.log(la >6)); //kiểm tra các phần tử có thoả mãn điều kiện không (kiểm tra các phần tử có >6 hay không)
