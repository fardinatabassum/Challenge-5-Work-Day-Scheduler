//variables
var saveBtn = $('.saveBtn')
var currentDate = dayjs().format(`dddd, MMMM DD`); //shows the current date
$('#currentDay').text(currentDate) 

//renders all elements when browser loads
$(window).on("load", function () {
  var currrentTime = dayjs().hour()
  console.log(currrentTime)
  var timeBlock = $('.time-block')
  timeBlock.each(function(){
    var hour = parseInt($(this).attr('id')) //seperates the objects
    console.log(hour)
    if (hour === currrentTime) {
      $(this).children('.col-8').attr("class", "present col-8 col-md-10 description") //makes the present timeblock 
    } else if (hour<currrentTime){
      $(this).children('.col-8').attr("class", "past col-8 col-md-10 description") //makes the past timeblock
    } else {
      $(this).children('.col-8').attr("class", "future col-8 col-md-10 description") //makes the future timeblock
    }
  })

  //listener for click event
  saveBtn.on('click', function(event){
    event.preventDefault()
    var description = $(this).siblings('.col-8').val().replace(hourNumber)
    var hourNumber = $(this).parent().attr('id')
    //stores value to local storage
    localStorage.setItem(hourNumber, JSON.stringify(description)) //converts to string
  })

  //retrieves values from local storage
  for(let i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
  }

});



  
