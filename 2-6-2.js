var grades = [[86,82,73],[88,98,80],[84,86,89]];
var total = 0;
var average = 0.0;
for(var c = 0;c<grades.length;++c){
  for(var r = 0;r<grades[c].length;++r){
    total += grades[r][c];
  }
  average = total/grades[c].length;
  print("student "+parseInt(c+1)+" average: "+average.toFixed(2));
  total = 0;
  average = 0.0;
}