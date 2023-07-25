window.alert("Here's an alert using an external JavaScript file.");

// Function to refresh the time every 30 seconds
function refreshTime () {
    displayTime();
    const refresh = 30000;
    setInterval(displayTime, refresh);
  }
// Function to display the Time in HH:MM:SS format in the navigation bar
function displayTime (){
    const date = new Date();
    let date2 = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById('dateTimeConst').innerHTML = "Current Time: " + date2;
  }

// Function to show a pop up of the date and time when a button is clicked.
function showDate() {
    alert(Date());
  };

// Function to print the survey responses in the bottom text box.
function submitFunc() {
    const newName = document.getElementById("full-name").value;
    const newAnswer = document.getElementById("comment-question").value;
    const newText = document.getElementById("abstract").value;
    document.getElementById("printNames").innerHTML = newName;
    document.getElementById("printAnswer").innerHTML = newAnswer;
    document.getElementById("printText").innerHTML = newText;
  }

// Function to fetch data from the bacon ipsum API and paste to my website when a button is clicked.
  function fetchData () {
    let output = document.getElementById('output');
    fetch('https://baconipsum.com/api/?type=meat-and-filler')
    .then(response => response.json())
    .then(data => {
      output.innerHTML = data
    })

  }

// Function to show a section of the website after 5 seconds.
  const pop = document.getElementById("popUp")
  setTimeout(() => {
    pop.style.visibility = 'visible';
  }, 5000);

// Function to clear the inputs after a button is pressed.
  function resetInputs () {
    allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => {singleInput.value = ''});
    document.getElementById("printNames").innerHTML = '';
    document.getElementById("printAnswer").innerHTML = '';
    document.getElementById("printText").innerHTML = '';
    document.getElementById("abstract").value = '';
  }
