"use strict"
function deleteCourse(id) {
    console.log("deleting: " + id);
    /*make fetch delete*/
    const data = { code: id}
    fetch('https://willbur.nu/dt173g/API/rest.php', {
        method: 'DELETE',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
        
}
/*Get variables*/


/*Eventlistener*/
window.addEventListener('load', getCourses);

/*Functions*/
function getCourses() {
    
    let coursesEl = document.getElementById("courses");
    coursesEl.innerHTML = ''; /*empty value*/
    fetch('https://willbur.nu/dt173g/API/rest.php') /*make fetch*/
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(course => {
                /** parse json here */
                coursesEl.innerHTML += 
                `
                <div class = "course">
                <p>
                <img src="../styles/images/icons8-book-and-pencil-100.png" alt="iconimage of book" class="bookimg">
                <b class="firstB">Kurs</b>
                <b>Kod:</b> ${course.code}
                <b>Namn: </b> ${course.name}
                <b>Syllabus: </b> <a href="${course.syllabus}">${course.syllabus}</a>
                <b>Progression: </b> ${course.progression}
                <img src="../styles/images/icons8-delete-trash-50.png" alt="iconimage of trash can" class="trashimg" onClick='deleteCourse("${course.code}")'
                </p>
                </div>
                `
            })
        })

}

function addCourse() {

        var x = document.getElementById("courseAdd");
        const data = {
            code: x.elements[0].value,
            course_name: x.elements[1].value,
            syllabus: x.elements[2].value,
            progression: x.elements[3].value
        }
        console.log(data)
        fetch('https://willbur.nu/dt173g/API/rest.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log('Error: ', error);
            })

}
