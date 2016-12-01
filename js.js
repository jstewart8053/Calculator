    
$(document).ready(function() {
  $('button').each(function() {        
    animationClick(this, 'pulse');    
  });
});

animationClick('h1', 'tada');

function animationClick(element, animation) {    
  element = $(element);    
  element.click(function() {            
    element.addClass('animated ' + animation);                  
    window.setTimeout(function() {                
      element.removeClass('animated ' + animation);            
    }, 300);                   
  });
}
