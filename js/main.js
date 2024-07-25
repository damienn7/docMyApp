/*
    +-------------+
    |  main.js    |
    +-------------+
    Description : here we have the js needed to animate and render dynamically the product
*/

// here is the main function
window.onload = function () {
    // HTML elements
    let block_presentation = document.getElementById('presentation');
    let block_entreprise = document.getElementById('entreprise');
    let block_projets = document.getElementById('projets');
    let block_contact = document.getElementById('contact');
    let block_commit = document.getElementById('commit');
    
    let menu_presentation = document.getElementById('li-1');
    let menu_entreprise = document.getElementById('li-2');
    let menu_projets = document.getElementById('li-3');
    let menu_contact = document.getElementById('li-4');
    let menu_commit = document.getElementById('li-5');

    let container_date = document.getElementsByClassName('style-panel__date')[0];
    let container_hour = document.getElementsByClassName('style-panel__hour')[0];

    var tabButtons = document.querySelectorAll(".tab-button");
    var tabContents = document.querySelectorAll(".tab-content");

    
    // DOM events
    tabButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var tabName = this.getAttribute("data-tab");

            tabContents.forEach(function(content) {
                content.classList.remove("active");
            });

            tabButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            document.getElementById(tabName).classList.add("active");
            this.classList.add("active");
        });
    });
    
    menu_presentation.addEventListener('click', (e) => {
        block_presentation.style.display = 'flex';
        block_commit.style.display = 'none';
        block_entreprise.style.display = 'none';
        block_projets.style.display = 'none';
        block_contact.style.display = 'none';
        menu_commit.classList.remove('active');
        menu_contact.classList.remove('active');
        menu_entreprise.classList.remove('active');
        menu_projets.classList.remove('active');
        menu_presentation.classList.add('active');
    })

    menu_entreprise.addEventListener('click', (e) => {
        block_entreprise.style.display = 'flex';
        block_presentation.style.display = 'none';
        block_projets.style.display = 'none';
        block_contact.style.display = 'none';
        block_commit.style.display = 'none';
        menu_commit.classList.remove('active');
        menu_contact.classList.remove('active');
        menu_presentation.classList.remove('active');
        menu_projets.classList.remove('active');
        menu_entreprise.classList.add('active');
    })

    menu_projets.addEventListener('click', (e) => {
        block_projets.style.display = 'flex';
        block_presentation.style.display = 'none';
        block_entreprise.style.display = 'none';
        block_contact.style.display = 'none';
        block_commit.style.display = 'none';
        menu_contact.classList.remove('active');
        menu_presentation.classList.remove('active');
        menu_entreprise.classList.remove('active');
        menu_projets.classList.add('active');
        menu_commit.classList.remove('active');
    })

    menu_contact.addEventListener('click', (e) => {
        block_contact.style.display = 'flex';
        block_presentation.style.display = 'none';
        block_entreprise.style.display = 'none';
        block_projets.style.display = 'none';
        block_commit.style.display = 'none';
        menu_projets.classList.remove('active');
        menu_presentation.classList.remove('active');
        menu_entreprise.classList.remove('active');
        menu_contact.classList.add('active');
        menu_commit.classList.remove('active');
    })

    menu_commit.addEventListener('click', (e) => {
        block_contact.style.display = 'none';
        block_presentation.style.display = 'none';
        block_entreprise.style.display = 'none';
        block_projets.style.display = 'none';
        block_commit.style.display = 'flex';
        menu_projets.classList.remove('active');
        menu_presentation.classList.remove('active');
        menu_entreprise.classList.remove('active');
        menu_contact.classList.remove('active');
        menu_commit.classList.add('active');
    })

    // definition of the main functions
    function updateDateTime() {
        // DATE setter
        let date = new Date();
        // console.log(date);
        let day = '';
        // console.log(typeof date.getDay())
        switch (date.getDay()) {
            case 1:
                day = 'Lun.';
                break;
            case 2:
                day = 'Mar.';
                break;
            case 3:
                day = 'Mer.';
                break;
            case 4:
                day = 'Jeu.';
                break;
            case 5:
                day = 'Ven.';
                break;
            case 6:
                day = 'Sam.';
                break;
            case 0:
                day = 'Dim.';
                break;
            default:
                break;
        }
        // console.log(day)
        let dateComputed = day + ' ' + ((date.getDate() < 10) ? '0'+ date.getDate() : date.getDate());
        let hours = (date.getHours() < 10) ? '0'+ date.getHours() : date.getHours();
        let minutes = (date.getMinutes() < 10) ? '0'+ date.getMinutes() : date.getMinutes();
        let hourComputed = hours + ':' + minutes;
        if (document.getElementById('hour') != undefined && document.getElementById('date') != undefined) {
            document.getElementById('hour').innerText = hourComputed;
            document.getElementById('date').innerText = dateComputed;
        } else {
            // console.log(dateComputed)
            let p = document.createElement('p');
            p.setAttribute("id","hour");
            let textNode = document.createTextNode(hourComputed);
            p.appendChild(textNode);
            container_hour.appendChild(p);
        
            p = document.createElement('p');
            p.setAttribute("id","date");
            textNode = document.createTextNode(dateComputed);
            p.appendChild(textNode);
            container_date.appendChild(p);
        }
    }

    // call of the main functions

    // Update the date and time every second (1000 milliseconds).
    setInterval(updateDateTime, 1000);
    // Initial update.
    updateDateTime();
}
