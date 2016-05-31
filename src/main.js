function refresh() {
  var area = areaSlider.value();
  var rentPerSquare = rentPerSquareSlider.value();
  var rentFirstYear = area * rentPerSquare * 12;
  d3.select('#area-text').text(area);
  d3.select('#rent-per-square-text').text(rentPerSquare);
  d3.select('#rent-first-year-text').text(rentFirstYear);
}
var areaSlider = d3.slider()
  .axis(d3.svg.axis().ticks(10))
  .min(200)
  .max(2000)
  .value(300)
  .step(50)
  .on("slide", function(evt, value) {
    refresh();
  });
d3.select('#area').call(areaSlider);

var rentPerSquareSlider = d3.slider()
  .axis(d3.svg.axis().ticks(7))
  .min(0)
  .max(300)
  .value(40)
  .step(1)
  .on('slide', function(evt, value) {
    refresh();
  });
d3.select('#rent-per-square').call(rentPerSquareSlider);

refresh();

