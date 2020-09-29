/* eslint-disable */
$(document).ready(function () {
  let finalScore;
  let sneakers;
  let style;
  let partner;
  let collabo;

  $('#questions').on('submit', function (event) {
    event.preventDefault();
    
    // Pulls number out of value property
    sneakers = parseInt(document.querySelector('input[name = "sneakers"]:checked').value);  
    style = parseInt(document.querySelector('input[name = "style"]:checked').value);
    partner = parseInt(document.querySelector('input[name = "partner"]:checked').value);
    collabo = parseInt(document.querySelector('input[name = "collabo"]:checked').value);  

    // Adds all value property values together
    finalScore = sneakers + style + partner + collabo;

    // Adds inline class to results section to make it visible on submit (results section set to display: none;)
    $('.results-section').addClass('inline');

    // Scrolls to bottom/now visible results section on submit 
    $('html, body').animate({ scrollTop: $(document).height() }, 1000);
    
    // Assigns a Kanye based on final score value
    if (finalScore <= 12 && finalScore >= 9) {
      $('.results').html("College Dropout Kanye");
    } else if (finalScore <= 8 && finalScore >= 6) {
      $('.results').html("808s & Heartbreak Kanye");
    } else if (finalScore <= 5 && finalScore >= 0 ) {
      $('.results').html("The Life of Pablo");
    }
  });
});