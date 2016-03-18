var max = 1000;
for(var i=2;i<=max;i++) {
  var result=true;
  for(var j=2;j<i;j++) {
    if (i%j===0) {
      result=false;
      break;
    }
  }
  if(result) {
    console.log(i);
  }
}