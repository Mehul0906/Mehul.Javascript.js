 var marks = [9, 14, 3, 27, 6];
 var min = Infinity;
 for (var i = 0; i < marks.length; i++) {
     if (min > marks[i]) {
         min = marks[i];
     }
 }
 console.log(min);