
// This adds the current day and time onto the header of the page
var currentDay = dayjs().format('dddd, MMMM D, YYYY HH:mm:ss A')
$('#currentDay').text(currentDay)



$(function () {
  
  // Code to apply past,present and future classes to each block. 'this' refers to the object/element that is being selected through the parent,child or sibling properties
  var currentHour = dayjs().hour()
  $('.time-block').each(function() {
    var scheduleHour = parseInt($(this).attr('id').split('-')[1])
    if(currentHour > scheduleHour) {
      $(this).addClass('past')
      
     } else if(currentHour === scheduleHour) {
      $(this).removeClass('past')
      $(this).addClass('present')

     } else {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
     }
  })

  // Listener for click event and contains key to save user input to local storage
 $('.saveBtn').on('click' , function(){
  var text = $(this).siblings('.description').val()
  var time = $(this).parent().attr('id')

  localStorage.setItem(time , text)
 })

 //For loop iteration for local storage
 for(var i = 9 ; i < 22 ; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
 }


});
