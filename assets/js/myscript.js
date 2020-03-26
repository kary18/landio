var update_round_progress = function(item_selector, percentage) {
    var item = $(item_selector);
    var a = $(item_selector + " > div");
    if (percentage < 0.25) {
      item.removeClass('p50 p75 p100');
      item.addClass('p25');
    } else if (percentage < 0.50) {
      item.removeClass('p25 p75 p100');
      item.addClass('p50');    
    } else if (percentage < 0.75) {
      item.removeClass('p25 p50 p100');
      item.addClass('p75');    
    } else {
      item.removeClass('p25 p50 p75');
      item.addClass('p100');    
    }
    
    a.css('transform', "rotate(" + (percentage * 360 + 1) + "deg)");
  };
  
  var x = 0;
  setInterval(function() {
             update_round_progress('#prg1', x / 100.0);
             update_round_progress('#prg2', x / 100.0);
            update_round_progress('#prg3', x / 100.0);
  x = (x + 1) % 101;
              }, 100)
  