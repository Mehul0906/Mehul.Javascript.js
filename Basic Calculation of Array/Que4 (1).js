 let marks = [17, 42, 8, 35, 21];
 let max = -Infinity;
 for (let i = 0; i < marks.length; i++) {
     if (max < marks[i]) {
         max = marks[i];
     }
 }
 console.log(max);
