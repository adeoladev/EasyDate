function EDate(param,theformat,type) {

        filter = param.split(' ');
        filter2 = parseInt(filter[0]);
        date = new Date();
        format = /[^dmy]/;
        myArr = theformat.split("");

        if ((!filter2 && param !== 'today') || theformat == null || type == null || format.test(theformat) == true || myArr.length > 3) {
          return "Error. Incorrect Format.";
        }

        if (param == "today") {
          date.setDate(date.getDate());
          
        } else if (param.includes("days ago") || param.includes("day ago")) {
          date.setDate(date.getDate()-filter2);

        } else if (param.includes("weeks ago") || param.includes("week ago")) {
          filter3 = 7 * filter2;
          date.setDate(date.getDate()-filter3);

        } else if (param.includes("months ago") || param.includes("month ago")) {
          filter3 = 30 * filter2;
          date.setDate(date.getDate()-filter3);

        } else if (param.includes("days from now") || param.includes("day from now")) {
          date.setDate(date.getDate()+filter2);

        } else if (param.includes("weeks from now") || param.includes("week from now")) {
          filter3 = 7 * filter2;
          date.setDate(date.getDate()+filter3);

        } else if (param.includes("months from now") || param.includes("month from now")) {
          filter3 = 30 * filter2;
          date.setDate(date.getDate()+filter3);
        }

          for (let i = 0; i < myArr.length; i++)  {
            if (myArr[i] == "d")  {
            myArr[i] = String(date.getDate()).padStart(2, '0');
            } else if (myArr[i] == "m") {
            myArr[i] = String(date.getMonth() + 1).padStart(2, '0'); 
            } else if (myArr[i] == "y") {
            myArr[i] = date.getFullYear();
            }
          }

         param = myArr[0] + "/" + myArr[1] + "/" + myArr[2];

         if (type && type == 'long') {
          const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
          Arr2 = theformat.split("");
          var monthKey = Arr2.indexOf("m");
          var dayKey = Arr2.indexOf("d");
          var yearKey = Arr2.indexOf("y");
          var actualMonth = myArr[monthKey];
          var actualDay = myArr[dayKey];
          var actualYear = myArr[yearKey];
          var monthString = months[actualMonth-1];

          const longting = [];
          longting[monthKey] = monthString;
          longting[dayKey] = actualDay;
          longting[yearKey] = actualYear;

          param = longting[0]+" "+longting[1]+" "+longting[2];
         }

        
        
       return param;  

}
