let sidebar = document.getElementById('sidebar');
let menu = document.getElementById('menu');
let container = document.getElementById('container');

// container.addEventListener('click', function(e) {
//     e.preventDefault();
// })
menu.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});

let toggleIcon1 = document.getElementById('toggleIcon1');
let offer1 = document.getElementById('offer1');

toggleIcon1.addEventListener('click', function() {
    offer1.classList.toggle('active');
});

let toggleIcon2 = document.getElementById('toggleIcon2');
let offer2 = document.getElementById('offer2');

toggleIcon2.addEventListener('click', function() {
    offer2.classList.toggle('active');
});

let toggleIcon3 = document.getElementById('toggleIcon3');
let offer3 = document.getElementById('offer3');

toggleIcon3.addEventListener('click', function() {
    offer3.classList.toggle('active');
});

let toggleIcon4 = document.getElementById('toggleIcon4');
let offer4 = document.getElementById('offer4');

toggleIcon4.addEventListener('click', function() {
    offer4.classList.toggle('active');
});

let toggleIcon6 = document.getElementById('toggleIcon6');
let offer6 = document.getElementById('offer6');

toggleIcon6.addEventListener('click', function() {
    offer6.classList.toggle('active');
});

let toggleIcon7 = document.getElementById('toggleIcon7');
let offer7 = document.getElementById('offer7');

toggleIcon7.addEventListener('click', function() {
    offer7.classList.toggle('active');
});
