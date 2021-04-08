// reference for all work by done by bottom //
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
// end //

// setInterVal For run 1sec by 1sec
const clock =setInterval(()=>{
     
     // getting time tor innerHTML //
     let currDate = new Date();
     let hr = currDate.getHours() % 12;// Module 12 for convert 24 time to 12 hours //
     let min = currDate.getMinutes();
     let sec = currDate.getSeconds();
     // end //

     // for when value is under 10 its return a 0 before number
    if (hr<10) {
         hr = "0" +hr;
    }
    if (min<10) {
     min = "0" +min;
   }
   if (sec<10) {
     sec = "0" +sec;
   }
   // end //


     // InnerHTML all //
     hour.innerHTML=hr;
     minute.innerHTML=min;
     second.innerHTML=sec;
     // end //




},1000);
// end //