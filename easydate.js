function EDate(param) {

    const self = {

       format: (theformat) => {

        filter = param.split(' ');
        filter2 = parseInt(filter[0]);
        date = new Date();
        format = /[^dmy]/;
        myArr = theformat.split("");
        seconds = "Error. Incorrect Format.";

        if (!filter2 || theformat == null || (format.test(theformat) == true && theformat !== "unix" && theformat !== "seconds") 
        || (myArr.length > 3 && theformat !== "unix" && theformat !== "seconds")) {
          return "Error. Incorrect Format.";
        }

        if (param.includes("days ago")) {
          date.setDate(date.getDate()-filter2);

        } else if (param.includes("weeks ago")) {
          filter3 = 7 * filter2;
          date.setDate(date.getDate()-filter3);

        } else if (param.includes("months ago")) {
          filter3 = 30 * filter2;
          date.setDate(date.getDate()-filter3);

        } else if (param.includes("days from now")) {
          seconds = filter2 * 86400;
          date.setDate(date.getDate()+filter2);

        } else if (param.includes("weeks from now")) {
          filter3 = 7 * filter2;
          seconds = filter2 * 604800;
          date.setDate(date.getDate()+filter3);

        } else if (param.includes("months from now")) {
          filter3 = 30 * filter2;
          seconds = filter2 * 18144000;
          date.setDate(date.getDate()+filter3);
        }

        if (theformat == "seconds") {
          param = seconds;
          return param;
        } else if (theformat == "unix") {
          unix = date.getTime()/1000;
          param = Math.trunc(unix);
          return param;
        } else {

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

        }
        
       return param;  
       },
    }

    return self

}
