const seats = document.querySelectorAll(".seat")
// console.log(seats)

for (let index = 0; index < seats.length; index++){
    const key = seats[index];
    // console.log(element)
    key.addEventListener("click",function(){
        // console.log("clicked")

        // get the seat number
        const seatnumber = key.innerText
        console.log(seatnumber);

        
        let ticketSpen = document.getElementById('seatLeft');
        let totalticket = 40;
         if (totalticket > 0){
            totalticket--;
            ticketSpen.textContent = totalticket;
         }


         const seatcounting = document.getElementById('seatcount');
         let seatcount = 0;
          if (seatcount < 40){
            seatcount++;
             seatcounting.textContent = seatcount;
          }

        const handlerStatus = document.getElementById('seat-table');
        handlerStatus.innerText = seatnumber;

        const pricehandlerStatus = document.getElementById('seat-price');
        pricehandlerStatus.innerText = 550;

        const totalprices = document.getElementById('totalprice');
        totalprices.innerText = '550';

        const grandTotalCount = document.getElementById('grandTotal');
        const total = 500;
        grandTotalCount.textContent = total;

        const btn = document.querySelector('.seat');

        btn.addEventListener("click", function onClick() {
          btn.style.backgroundColor = '#1DD100';
          btn.style.color = '#F7F8F8';
        });


        const seatnum = key.querySelector("seat-table").innerText;
        const pricenum = key.querySelector("seat-price").innerText;

        const titleContainer = document.getElementById("table-container");
        const td = document.createElement("td");
        td.innerText = seatnum;

        titleContainer.appendChild(td);
    });
}



function nextbtn(){
    // const homeSection = document.getElementById('homeScreen');
    // homeSection.classList.add('hidden');

    const popupSection = document.getElementById('popupsection');
    popupSection.classList.remove('hidden');
}

function Continuebtn(){
    // const homeSection = document.getElementById('homeScreen');
    // homeSection.classList.add('hidden');

    const popupSection = document.getElementById('popupsection');
    popupSection.classList.add('hidden');
}


