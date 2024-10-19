const allFaculties = document.querySelector('.allFaculties')
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");

let btn;
//fetching JSON data from a file
async function fetchMentorsData() {
    try {
        const response = await fetch('./mentors.json');
        if (!response.ok) {
            throw new Error(`HTTP error!, ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log the entire data object
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

const mentors = await fetchMentorsData();

mentors.forEach((mentor) => {
    const { name, email, image, expertise, profession, status, } = mentor;


    allFaculties.innerHTML += `  <div class="faculty-details">

                    <div class="name_img">
                        <span class="${status}"></span>
                        <img src="${image}" alt="${name}">

                        <span class="faculty-name">
                            ${name}
                        </span>
                        <span class="profession">
                            ${profession}
                        </span>
                    </div>


                    <div class="faculty_contact">
                       

                        <div class="faculty_experties">
                            <span>${expertise[0]}</span>
                            <span>${expertise[1]}</span>
                            <span>${expertise[2]}</span>
                            <span>${expertise[3]}</span>
                        </div>
                        <button class="booking">
                            Slot booking
                        </button>
                    </div>





                    <div class="slotBooking">
                    <span class="return">&#129056;</span>
                    <h1>Available Slot</h1>
                        <div class = "slot-time">
                            <label><input type="radio" name="slot" class="time-select"> 8:00AM-9:00AM</label>
                            <label><input type="radio" name="slot" class="time-select"> 8:00AM-9:00AM</label>
                            <label><input type="radio" name="slot" class="time-select"> 8:00AM-9:00AM</label>
                        </div>
                        <button class="bookTime">Book Now</button>
                    </div>
                </div>`

    let btn = allFaculties.querySelectorAll(".faculty_contact button");
    let statuss = allFaculties.querySelectorAll(".name_img");

    for (let i = 0; i < btn.length; i++) {
        let value = btn[i];
        let statusElement = statuss[i];

        // Check if the status element has the "inactive" class
        if (statusElement.children[0].classList.contains("inactive")) {
            value.style.cursor = "no-drop";
        } else {
            value.style.cursor = "pointer";
        }
    }
 

    let slotBookings = document.querySelectorAll(".booking");

    const inputEle = document.querySelectorAll(".time-select");

    for (let slotbook of slotBookings) {
        slotbook.addEventListener("click", (e) => {
            let selected = e.target;
            if (selected.style.cursor === "pointer") {
                let data = selected.closest(".faculty-details");
                data.children[2].style.display = "block";
                for (let inpEle of inputEle) {
                    inpEle.addEventListener("click", (e) => {
                        console.log(e.target)
                        let but = document.querySelector(".bookTime");
                        but.style.display = "block"
                        // console.log("WOrking")

                    })
                }


            } else {
                console.log("noooooo")
            }

        })
    }



})




// data fetching ending



const inputEle = document.querySelectorAll(".time-select");
for (let inpEle of inputEle) {
    inpEle.addEventListener("click", () => {
        let but = document.querySelector(".bookTime");
        but.style.display = "block"
        // console.log("WOrking")
    })
}

// For back/previous

const spanElem = document.querySelector(".return");
const butInFirstPage = document.querySelector(".booking");
spanElem.addEventListener("click", function () {

    slotbookPage.style.display = "none";
    butInFirstPage.style.display = "block";
    // console.log("Working")


})

//searching functionality

function searchMentors() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const allFaculties = document.querySelectorAll(".faculty-details");
    let found = false;
  
    allFaculties.forEach((mentor) => {
      const facultyName = mentor
        .querySelector(".faculty-name")
        .textContent.toLowerCase();
  
      if (facultyName.includes(searchTerm)) {
        found = true;
        mentor.scrollIntoView({ behavior: "smooth", block: "center" });
        mentor.style.backgroundColor = "yellow";
  
        setTimeout(() => {
          mentor.style.backgroundColor = "";
        }, 10000);
      }
    });
  
    if (!found) {
      alert("No results found");
    }
  }
  
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchMentors();
  });
  
  // search functionality ending
  

