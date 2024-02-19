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


        const handlerStatus = document.getElementById('seat-table');
        handlerStatus.innerText = seatnumber;

        const pricehandlerStatus = document.getElementById('seat-price', 'totalprice');
        pricehandlerStatus.innerText = '550';

        const totalprices = document.getElementById('totalprice');
        totalprices.innerText = '550';

        const seatcounting = document.getElementById('seatcount');
        
        for (let i = 0; i <= index.length; i++){
            const seatno = seatcounting[i];
            const seatcountNO = seatno.innerText
            console.log(seatcountNO);
        }


        const btn = document.querySelector('.seat');

        btn.addEventListener('click', function onClick() {
          btn.style.backgroundColor = 'salmon';
          btn.style.color = 'activeButton';
        });

        // const table = document.getElementById('seat-table');
        // const tbody = table.querySelector('tbody');

        // const newRow = tbody.insertRow();


        // const seatCell = newRow.insertCell(0);
        // const classCell = newRow.insertCell(1);
        // const priceCell = newRow.insertCell(2);

        // seatCell.textContent = seatnumber;
        // classCell.textContent = 'Economoy';
        // priceCell.textContent = 550 ;

        // const container = document.getElementById('table-container');
        // console.log(container);
        // container.innerText = '';
        // container.appendChild(tbody);
    });
}



// function addBackgroundColorById(elementId){
//   const element = document.getElementById(elementId);
//   element.addEventListener('click',function(){
//     element.classList.add('activeButton');
//   });
// }
// const elementId = 'A1';
// addBackgroundColorById(elementId);

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


