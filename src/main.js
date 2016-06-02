function r() {
  for (var key in sliders) {
    if (sliders.hasOwnProperty(key)) {
      var v = sliders[key].value();
      v = Math.round(v * 100) / 100;
      d3.select('#' + key + ' .text').text(v);
    }
  }
}

var sliders = {};

function gen_slider(name, ticks, min, max, value, step) {
  sliders[name] = d3.slider().axis(d3.svg.axis().ticks(ticks))
    .min(min).max(max).value(value).step(step)
    .on("slide", function(evt, value) {
      if (name == 'percent-for-teaching') {
        sliders['percent-for-office'].value(100 - value);
      }
      if (name == 'percent-for-office') {
        sliders['percent-for-teaching'].value(100 - value);
      }
      if (d3.select(/* @mangle */'.footer'/* @/mangle */).text().indexOf(/* @mangle */'Mala'/* @/mangle */) > 30) {
        r();
      }
    });
  d3.select('#' + name + ' .graph').call(sliders[name]);
}

gen_slider('area', 10, 200, 2000, 300, 50);
gen_slider('rent-per-square', 7, 0, 300, 40, 1);
gen_slider('rent-months', 10, 0, 120, 36, 6);
gen_slider('property-costs-per-square', 11, 0, 20, 2, 1);
gen_slider('op-month-first-year', 13, 0, 12, 6, 1);
gen_slider('classrooms', 13, 0, 100, 18, 1);
gen_slider('furniture-costs-per-square', 11, 0, 2000, 700, 10);
gen_slider('hr-first-year', 11, 0, 100, 10, 1);
gen_slider('salary', 11, 1000, 5000, 2000, 100);
gen_slider('desks', 11, 0, 200, 30, 1);
gen_slider('desk-price', 10, 100, 1000, 500, 10);
gen_slider('device-price', 10, 500, 5000, 3000, 100);
gen_slider('p2p-students', 10, 0, 500, 80, 10);
gen_slider('p2p-avg-charge', 9, 0, 16000, 8000, 1000);
gen_slider('p2p-avg-complete-rate', 10, 0, 100, 80, 5);

gen_slider('sm-students', 10, 0, 500, 60, 10);
gen_slider('sm-avg-charge', 5, 0, 4000, 2000, 100);
gen_slider('sm-avg-complete-rate', 10, 0, 100, 95, 5);

gen_slider('bg-students', 10, 0, 500, 100, 10);
gen_slider('bg-avg-charge', 9, 0, 1600, 800, 100);
gen_slider('bg-avg-complete-rate', 10, 0, 100, 95, 5);

gen_slider('sales-commission', 10, 0, 50, 5, 1);
gen_slider('course-material-cost', 10, 0, 100, 20, 5);

gen_slider('p2p-income-contrib', 10, 0, 100, 40, 1);
gen_slider('class-income-contrib', 10, 0, 100, 30, 1);

gen_slider('vat', 3, 0, 6, 3, 3);
gen_slider('local-tax', 10, 0, 30, 12, 1);

gen_slider('credit-card-fees', 10, 0, 3, 0.78, 0.01);
gen_slider('credit-card-contrib', 10, 0, 100, 70, 1);
gen_slider('support-costs', 10, 0, 50, 5, 1);

gen_slider('social-security-costs', 10, 0, 30, 8, 1);
gen_slider('cpf-costs', 10, 0, 20, 4, 1);

gen_slider('office-material-costs', 10, 0, 200, 50, 10);

gen_slider('percent-for-teaching', 10, 0, 100, 80, 1);
gen_slider('percent-for-office', 10, 0, 100, 20, 1);

gen_slider('market-cost', 10, 0, 30, 7, 1);

r();
