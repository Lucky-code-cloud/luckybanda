//Tab links
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


//Side menu
var sidemenu = document.getElementById("sidemenu");


//More services
var showmore = document.getElementById("more");
var hidemore = document.getElementById("more");


//Submit to google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwLYhpS4sEB0KPIriofJXCjVrCzBCTi0aMCuDdd52vabGtw16TN_sz2GqHSendMW44BhQ/exec'
const form = document.forms['submit-to-google-sheet']









//Tab
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



//Side
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


//More
function showemmore(){
    showmore.style.display = "block";
}
function hideem(){
    hidemore.style.display = "none";
}


//Submit
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })