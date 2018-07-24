//No.4
var num = [0.87, 8.90, 1234.23, 897.90, 65.82];

//No.5
var newArray = [];

for (var i = 0; i < num.length; i++) {
 newArray.push(Math.round(num[i]));
}

//No.6
function tenRandomNums() {
  var newNum = [];
  for (var i = 0; i < 10; i++) {
    newNum.push(Math.floor(Math.random() * 100 + 1));
   }
  return newNum;
}

//No.7
function newTime() {
  var da = getDate();
  var hr = getHours();
  var min = getMinutes();

  return (da +':' + hr + ':' + min);

}







//No.
