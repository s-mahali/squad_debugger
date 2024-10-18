const allFaculties = document.querySelector('.allFaculties')

let btn;
//fetching JSON data from a file
async function fetchMentorsData() {
    try {
        const response = await fetch('./mentors.json');
        if (!response.ok) {
            throw new Error(`HTTP error!,${response.status}`);
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
    const { name, email, image, expertise,profession, status } = mentor;


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
                        <p class="email">Email:
                            <a href="#">${email}</a>
                        </p>

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
                        <h1>Available</h1>
                        <span>8:00AM-9:00AM</span>
                        <button>Book Now</button>
                    </div>
                </div>`

    let btn = allFaculties.querySelectorAll(".faculty_contact button");
    let statuss = allFaculties.querySelectorAll(".name_img");


// Ensure that btn and statuss have the same length and correspond to each other
    // if (status === "inactive") {
    //     const bookingButton = allFaculties.querySelector('.booking');
    //     if (bookingButton) {
    //         bookingButton.style.cursor = "no-drop";
    //         bookingButton.disabled = true;
    //     }
    // }
// Ensure that btn and statuss have the same length and correspond to each other
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
})

// data fetching ending
//navbar

let slotbookPage = document.querySelector(".slotBooking");
let aessehi = document.querySelector(".booking");
aessehi.addEventListener("click", () => {
    slotbookPage.style.display = "block"
})