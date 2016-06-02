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

function g(name, ticks, min, max, value, step) {
  sliders[name] = d3.slider().axis(d3.svg.axis().ticks(ticks))
    .min(min).max(max).value(value).step(step)
    .on("slide", function(evt, value) {
      if (name == 'percent-for-teaching') {
        sliders['percent-for-office'].value(100 - value);
      }
      if (name == 'percent-for-office') {
        sliders['percent-for-teaching'].value(100 - value);
      }
      var metas = document.getElementsByTagName('meta');
      var meta = '';
      for (var i=0; i<metas.length; i++) {
        if (metas[i].getAttribute("name") === /* @mangle */"author"/* @/mangle */) {
          meta = metas[i].getAttribute("content");
        }
      }
      if (d3.select(/* @mangle */'.footer'/* @/mangle */).text().indexOf(/* @mangle */'Mala'/* @/mangle */) > 30 && meta.indexOf('1e0n') >= 0) {
        r();
      }
    });
  d3.select('#' + name + ' .graph').call(sliders[name]);
}

g('area', 10, 200, 2000, 300, 50);
g('rent-per-square', 7, 0, 300, 40, 1);
g('rent-months', 10, 0, 120, 36, 6);
g('property-costs-per-square', 11, 0, 20, 2, 1);
g('op-month-first-year', 13, 0, 12, 6, 1);
g('classrooms', 13, 0, 100, 18, 1);
g('furniture-costs-per-square', 11, 0, 2000, 700, 10);
g('hr-first-year', 11, 0, 100, 10, 1);
g('salary', 11, 1000, 5000, 2000, 100);
g('desks', 11, 0, 200, 30, 1);
g('desk-price', 10, 100, 1000, 500, 10);
g('device-price', 10, 500, 5000, 3000, 100);
g('p2p-students', 10, 0, 500, 80, 10);
g('p2p-avg-charge', 9, 0, 16000, 8000, 1000);
g('p2p-avg-complete-rate', 10, 0, 100, 80, 5);

g('sm-students', 10, 0, 500, 60, 10);
g('sm-avg-charge', 5, 0, 4000, 2000, 100);
g('sm-avg-complete-rate', 10, 0, 100, 95, 5);

g('bg-students', 10, 0, 500, 100, 10);
g('bg-avg-charge', 9, 0, 1600, 800, 100);
g('bg-avg-complete-rate', 10, 0, 100, 95, 5);

g('sales-commission', 10, 0, 50, 5, 1);
g('course-material-cost', 10, 0, 100, 20, 5);

g('p2p-income-contrib', 10, 0, 100, 40, 1);
g('class-income-contrib', 10, 0, 100, 30, 1);

g('vat', 3, 0, 6, 3, 3);
g('local-tax', 10, 0, 30, 12, 1);

g('credit-card-fees', 10, 0, 3, 0.78, 0.01);
g('credit-card-contrib', 10, 0, 100, 70, 1);
g('support-costs', 10, 0, 50, 5, 1);

g('social-security-costs', 10, 0, 30, 8, 1);
g('cpf-costs', 10, 0, 20, 4, 1);

g('office-material-costs', 10, 0, 200, 50, 10);

g('percent-for-teaching', 10, 0, 100, 80, 1);
g('percent-for-office', 10, 0, 100, 20, 1);

g('market-cost', 10, 0, 30, 7, 1);

r();
