function refresh() {
  var area = areaSlider.value();
  var rentPerSquare = rentPerSquareSlider.value();
  var propertyCostsPerSquare = propertyCostsPerSquareSlider.value();
  propertyCostsPerSquare = Math.round(propertyCostsPerSquare * 10) / 10;
  var rentFirstYear = area * rentPerSquare * 12;
  var opMonthFirstYear = opMonthFirstYearSlider.value();
  var classrooms = classroomsSlider.value();
  var furnitureCostsPerSquare = furnitureCostsPerSquareSlider.value();
  var hrFirstYear = hrFirstYearSlider.value();

  d3.select('#area .text').text(area);
  d3.select('#rent-per-square .text').text(rentPerSquare);
  d3.select('#rent-first-year .text').text(rentFirstYear);
  d3.select('#property-costs-per-square .text').text(propertyCostsPerSquare);
  d3.select('#op-month-first-year .text').text(opMonthFirstYear);
  d3.select('#classrooms .text').text(classrooms);
  d3.select('#furniture-costs-per-square .text').text(furnitureCostsPerSquare);
  d3.select('#hr-first-year .text').text(hrFirstYear);
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
d3.select('#area .graph').call(areaSlider);

var rentPerSquareSlider = d3.slider()
  .axis(d3.svg.axis().ticks(7))
  .min(0)
  .max(300)
  .value(40)
  .step(1)
  .on('slide', function(evt, value) {
    refresh();
  });
d3.select('#rent-per-square .graph').call(rentPerSquareSlider);

var propertyCostsPerSquareSlider = d3.slider()
  .axis(d3.svg.axis().ticks(11))
  .min(0)
  .max(20)
  .value(2)
  .step(0.1)
  .on('slide', function(evt, value) {
    refresh();
  });
d3.select('#property-costs-per-square .graph').call(propertyCostsPerSquareSlider);

var opMonthFirstYearSlider = d3.slider()
  .axis(d3.svg.axis().ticks(13))
  .min(0)
  .max(12)
  .value(6)
  .step(1)
  .on('slide', function(evt, value) {
    refresh();
  });
d3.select('#op-month-first-year .graph').call(opMonthFirstYearSlider);

var classroomsSlider = d3.slider()
  .axis(d3.svg.axis().ticks(13))
  .min(0)
  .max(100)
  .value(18)
  .step(1)
  .on('slide', function(evt, value) {
    refresh();
  });
d3.select('#classrooms .graph').call(classroomsSlider);

var furnitureCostsPerSquareSlider = d3.slider()
  .axis(d3.svg.axis().ticks(11))
  .min(0)
  .max(2000)
  .value(700)
  .step(10)
  .on('slide', function(evt, value) {
    refresh();
  });
d3.select('#furniture-costs-per-square .graph')
  .call(furnitureCostsPerSquareSlider);

var hrFirstYearSlider = d3.slider()
  .axis(d3.svg.axis().ticks(11))
  .min(0)
  .max(100)
  .value(10)
  .step(1)
  .on('slide', function(evt, value) {
    refresh();
  });
d3.select('#hr-first-year .graph')
  .call(hrFirstYearSlider);


refresh();
