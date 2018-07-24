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
function wholedate() {
  var d = new Date();
  var hr = d.getHours()
  var m = d.getMinutes()
  return d + " | " + hr + " | " + m + " end";
};


//No.8 hh:mm:ss format
function currentTime() {
  var now = new Date();
  var hr = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var month = now.getMonth();
  var day = now.getDate();
  var year = now.getFullYear();

  //add 1 to number of Month (because month is displayed by index eg. 0=January)
   function addOne(time) {
     if (time < 12) {
         return time + 1;
     } else {
       return time
     }
   } myMonth = addOne(month)

  //add 0 when time is single digit
  function addZero(time) {
    if (time < 10) {
        return "0" + time;
    } else {
      return time
    }
  }  myHr = addZero(hr)
     myM = addZero(m)
     myS = addZero(s)
     myDay = addZero(day)
     newMonth = addZero(myMonth)

    return myHr + ":" + myM + ":" + myS + "  is current time!" + " & today is: " + newMonth + "/" + myDay + "/" + year;
};
