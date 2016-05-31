d3.select('#construct-area').call(d3.slider().axis(d3.svg.axis().ticks(10)).min(200).max(2000).step(50).on("slide", function(evt, value) {
  d3.select('#construct-area-value').text(value);
}));
d3.select('#construct-area').call(d3.sider().value(300));


