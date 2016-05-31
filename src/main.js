var areaSlider = d3.slider()
  .axis(d3.svg.axis().ticks(10))
  .min(200)
  .max(2000)
  .step(50)
  .on("slide", function(evt, value) {
    d3.select('#area-text').text(value);
  });
d3.select('#area').call(areaSlider);
areaSlider.value(300);


