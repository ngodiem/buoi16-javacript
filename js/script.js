var x = 5;
// x = x + 3;
x += 3; // đọc là cộng dồn 3 vô x // x = x + 3;
console.log(x);
// ý nghĩa i++
var i = 9;
// i += 1;
i++;
// i++ là tăng i lên 1 đơn vị i += 1
console.log(i);

// vòng lặp for
var start = 3;
var end = 5;
var sum = 0;
for ( var i = start; i <= end; i++)
{
	sum += i;
}
console.log(sum);


// cộng các số chẳn từ 3 đến 10: 4 + 6 + 8 +10 =28;

 start = 3;
 end = 10;
 sum = 0;
for ( var i = start; i <= end; i++)
{
	if (i % 2 ==0 ) { // i là số chẳn // số lẻ i % 2 != 0 hoặc i % 2 == 1
	sum += i;
}	
}
console.log(sum);

//  for lòng if cộng các số lẻ từ 1 + 3 + 5 +7 + 9 +11 = 36
start = 1; 
end = 11;
sum = 0;

for( var i = start; i <= end; i++) {
	if(i % 2 == 1) {
		sum += i;
	}
}
 console.log(sum);

// cộng giá trị của phần tử trong mãng 
 arr = [4, 5, 9, 7];
 start = 0;
 end = 3;
 sum = 0;
for ( var i = start; i <= end; i++)
{

	sum += arr[i];
}	
console.log(sum);

// cộng giá trị lẻ của các phân tử trong array
// mong chờ kết quả là 21
 
 start = 0;
 end = 3;
 sum = 0;
for ( var i = start; i <= end; i++)
{
	if(arr[i] % 2 != 0) // if(arr[i] % 2 == 1)
	{

	sum += arr[i];

	}
}	
console.log(sum);

// cộng giá trị chẳn của các phân tử trong array
// mong chờ kết quả là 4
 
 start = 0;
 end = 3;
 sum = 0;
for ( var i = start; i <= end; i++)
{
	if(arr[i] % 2 == 0)
	{

	sum += arr[i];

	}
}	
console.log(sum);

// học về for in
var diemThi = {toan: 5, ly: 9, hoa: 6};
// tính điểm thi của sinh viên dù sinh viên đó thi ở bất kì khối nào (A, B, C, D)
// for không được dùng cho đối tượng object , for chỉ dùng cho mảng
sum = 0;
for (mon in diemThi) { // in là trong, for chạy biến mon có giá trị là toán,
// mõi lần chạy thao tác trên 1 thuộc tính đi từ trái qua phải
// đầu tiên mon có giá trị là toán 
	sum += diemThi[mon];  // thì sum có giá trị là toán điểm thi của toán có giá trị là 5, 5 cộng dồn cho sum là 5
	console.log(mon);
}
console.log(sum);


var diemthi = {toan:1, hoa:2, ly: 3}
sum = 0;
for (mon in diemthi) {// in là trong, for chạy biến mon có giá trị toán,
	// mõi lần chạy thao tác trên 1 thuộc tính đi từ trái sang phải
	//đầu tiên môn có giá trị là toán, toán có giá trị là 1
	sum += diemthi[mon]; // sum có giá trị là diem thi của toán có giá trị là 1, 1 cộng dồn cho sum
	console.log(mon);
}
console.log(sum);
// cộng các con số từ 3 đến 10 dùng while
 start = 3;
 end = 10;
 sum = 0;
 while (start <= 10) {
 	sum += start;
 	start++; // không có start thì vòng lặp sẽ k dừng chạy mãi số 3
 }
 console.log(sum);

 // do while là xong mới kiểm tra điều kiện
 start = 3;
 end = 10;
 sum = 0;
 do {
 	sum += start;
 	start++;

 }
 while (start <= 10);
console.log(sum);

// 
 arr = [4, 5, 9, 7];
 start = 0;
 end = arr.length - 1
 sum = 0;
 do {
 	sum += arr[start];
 	start++; // không có start++ code chạy suốt số 3 
 }
 while (start <= end); 
console.log(sum);

// học về hàm
function tong(a, b) { // khai báo hàm, a, b là tham số truyền vào tong là hàm
var	c = a + b;
return c;
}

// sử dụng hàm gọi hàm
var x = 5;
var y = 7;
console.log(tong(x, y));

console.log(tong(9, 10));

function hieu(a, b) {
	var c = a / b;
	return c;
}
 	var x = 10;
 	var y = 2;
 	console.log(hieu(x, y));
 