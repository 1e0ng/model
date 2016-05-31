d3.select('#slider4').call(d3.slider().axis(true).min(100).max(3000).on("slide", function(evt, value) {
  d3.select('#slider4text').text(Math.round(value * 100) / 100);
}).value(300));


