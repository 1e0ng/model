function r() {
  var metas = document.getElementsByTagName(/* @mangle */'meta'/* @/mangle */);
  for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute(/* @mangle */"name"/* @/mangle */) === /* @mangle */"author"/* @/mangle */) {
      if (metas[i].getAttribute(/* @mangle */"content"/* @/mangle */).indexOf(/* @mangle */'1e0n'/* @/mangle */) === 0) {
        for (var key in s) {
          if (s.hasOwnProperty(key)) {
            var v = s[key].value();
            v = Math.round(v * 100) / 100;
            d3.select(/* @mangle */'.'/* @/mangle */ + key + /* @mangle */' .text'/* @/mangle */).text(v);
          }

        }
        t();
      }
      break;
    }
  }
}

var s = {};

function g(name, ticks, min, max, value, step) {
  s[name] = d3.slider().axis(d3.svg.axis().ticks(ticks))
    .min(min).max(max).value(value).step(step)
    .on("slide", function(evt, value) {
      if (name == /* @mangle */'percent-for-teaching'/* @/mangle */) {
        s[/* @mangle */'percent-for-office'/* @/mangle */].value(100 - value);
      }
      if (name == /* @mangle */'percent-for-office'/* @/mangle */) {
        s[/* @mangle */'percent-for-teaching'/* @/mangle */].value(100 - value);
      }
      var metas = document.getElementsByTagName(/* @mangle */'meta'/* @/mangle */);
      var meta = '';
      for (var i=0; i<metas.length; i++) {
        if (metas[i].getAttribute(/* @mangle */"name"/* @/mangle */) === /* @mangle */"author"/* @/mangle */) {
          if (metas[i].getAttribute(/* @mangle */"content"/* @/mangle */).indexOf(/* @mangle */'1e0n'/* @/mangle */) >= 0 && d3.select(/* @mangle */'.footer'/* @/mangle */).text().indexOf(/* @mangle */'Mala'/* @/mangle */) > 30) {
            r();
          }
        }
      }
    });
  d3.select(/* @mangle */'.'/* @/mangle */ + name + /* @mangle */' .graph'/* @/mangle */).call(s[name]);
}
function o(k, v) {
  v = Math.round(v * 100) / 100;
  d3.selectAll(/* @mangle */'.'/* @/mangle */ + k + /* @mangle */'.text'/* @/mangle */).text(v);
}

function w(k) {
  return Math.round(parseFloat(d3.select('.' + k + '.text').text()) * 100) / 100;
}

function ss() {
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; ++i) {
    //console.log(arguments[i]);
    sum += w(arguments[i]);
  }
  return sum;
}

function t() {
  o('start-fund', s['start-fund-in-10k'].value() * 10000);
  o('rent-deposite', s['rent-deposite-in-k'].value() * 1000);
  o('rent-first-year', s['area'].value() * s['rent-per-square'].value() * s['op-month-first-year'].value());
  o('property-cost-first-year', s['area'].value() * s['op-month-first-year'].value() * s['property-cost-per-square'].value());
  o('decoration-cost', s['area'].value() * s['decoration-cost-per-square'].value());
  o('device-cost', s['device-price'].value() * s['classrooms'].value());
  o('desk-cost', s['desks'].value() * s['desk-price'].value());
  var v = s['salary'].value() * s['hr-first-year'].value() * s['op-month-first-year'].value();
  o('salary-cost', v);
  o('social-security-cost', v * s['social-security'].value() / 100);
  o('cpf-cost', v * s['cpf'].value() / 100);

  o('initial-fee', s['initial-fee-in-10k'].value() * 10000);
  o('constant-cost-first-year', ss('rent-deposite', 'rent-first-year', 'property-cost-first-year', 'decoration-cost', 'device-cost', 'desk-cost', 'salary-cost', 'social-security-cost', 'cpf-cost'));
  o('first-year-constant-reminder', w('start-fund') - w('constant-cost-first-year'));

  o('p2p-income-first-year', s['p2p-students'].value() * s['p2p-avg-charge'].value());
  o('sm-income-first-year', s['sm-students'].value() * s['sm-avg-charge'].value());
  o('bg-income-first-year', s['bg-students'].value() * s['bg-avg-charge'].value());

  o('total-income-first-year', ss('p2p-income-first-year', 'sm-income-first-year', 'bg-income-first-year'));

  o('support-cost-first-year', w('total-income-first-year') * s['support-commission'].value() / 100);

  v = (w('p2p-income-first-year') * s['p2p-avg-complete-rate'].value() + w('sm-income-first-year') * s['sm-avg-complete-rate'].value() + w('bg-income-first-year') * s['bg-avg-complete-rate'].value()) / 100;
  o('vat-first-year', v * s['vat'].value() / 100);
  o('local-tax-first-year', w('vat-first-year') * s['local-tax'].value() / 100);
  o('sales-commission-first-year', w('total-income-first-year') * s['sales-commission'].value() / 100);

  o('pay-p2p-teacher-first-year', w('p2p-income-first-year') * s['p2p-avg-complete-rate'].value() * s['pay-teacher-percent-for-p2p'].value() / 10000);
  o('pay-class-teacher-first-year', (w('sm-income-first-year') * s['sm-avg-complete-rate'].value() + w('bg-income-first-year') * s['bg-avg-complete-rate'].value()) * s['pay-teacher-percent-for-class'].value() / 10000);
  o('market-cost-first-year', v * s['market-cost-percent'].value() / 100);

  o('tutoring-cost-first-year', 0);
  o('water-elec-cost-first-year', 0);

  o('office-material-cost-first-year', s['hr-first-year'].value() * s['op-month-first-year'].value() * s['office-material-cost-per-person'].value());
  o('finance-cost-first-year', w('total-income-first-year') * s['credit-card-fee-percent'].value() * s['credit-card-contrib'].value() / 10000);

  o('var-cost-first-year', ss('support-cost-first-year', 'vat-first-year', 'local-tax-first-year', 'sales-commission-first-year', 'pay-p2p-teacher-first-year', 'pay-class-teacher-first-year', 'market-cost-first-year', 'tutoring-cost-first-year', 'water-elec-cost-first-year', 'office-material-cost-first-year', 'finance-cost-first-year'));

  o('first-year-var-reminder', w('total-income-first-year') - w('var-cost-first-year'));
  o('first-year-reminder', w('first-year-var-reminder') + w('first-year-constant-reminder'));
}
g(/* @mangle */'area'/* @/mangle */, 10, 200, 2000, 300, 50);
g(/* @mangle */'rent-per-square'/* @/mangle */, 7, 0, 300, 40, 1);
g(/* @mangle */'rent-months'/* @/mangle */, 10, 0, 120, 36, 6);
g(/* @mangle */'property-cost-per-square'/* @/mangle */, 11, 0, 20, 2, 1);
g(/* @mangle */'op-month-first-year'/* @/mangle */, 13, 0, 12, 6, 1);
g(/* @mangle */'classrooms'/* @/mangle */, 13, 0, 100, 18, 1);
g(/* @mangle */'decoration-cost-per-square'/* @/mangle */, 11, 0, 2000, 700, 10);
g(/* @mangle */'hr-first-year'/* @/mangle */, 11, 0, 100, 10, 1);
g(/* @mangle */'salary'/* @/mangle */, 11, 1000, 5000, 2000, 100);
g(/* @mangle */'desks'/* @/mangle */, 11, 0, 200, 30, 1);
g(/* @mangle */'desk-price'/* @/mangle */, 10, 100, 1000, 500, 10);
g(/* @mangle */'device-price'/* @/mangle */, 10, 500, 5000, 3000, 100);
g(/* @mangle */'p2p-students'/* @/mangle */, 10, 0, 500, 80, 10);
g(/* @mangle */'p2p-avg-charge'/* @/mangle */, 9, 0, 16000, 8000, 1000);
g(/* @mangle */'p2p-avg-complete-rate'/* @/mangle */, 10, 0, 100, 80, 5);

g(/* @mangle */'sm-students'/* @/mangle */, 10, 0, 500, 60, 10);
g(/* @mangle */'sm-avg-charge'/* @/mangle */, 5, 0, 4000, 2000, 100);
g(/* @mangle */'sm-avg-complete-rate'/* @/mangle */, 10, 0, 100, 95, 5);

g(/* @mangle */'bg-students'/* @/mangle */, 10, 0, 500, 100, 10);
g(/* @mangle */'bg-avg-charge'/* @/mangle */, 9, 0, 1600, 800, 100);
g(/* @mangle */'bg-avg-complete-rate'/* @/mangle */, 10, 0, 100, 95, 5);

g(/* @mangle */'sales-commission'/* @/mangle */, 10, 0, 50, 5, 1);
g(/* @mangle */'course-material-cost'/* @/mangle */, 10, 0, 100, 20, 5);

g(/* @mangle */'pay-teacher-percent-for-p2p'/* @/mangle */, 10, 0, 100, 40, 1);
g(/* @mangle */'pay-teacher-percent-for-class'/* @/mangle */, 10, 0, 100, 30, 1);

g(/* @mangle */'vat'/* @/mangle */, 3, 0, 6, 3, 3);
g(/* @mangle */'local-tax'/* @/mangle */, 10, 0, 30, 12, 1);

g(/* @mangle */'credit-card-fee-percent'/* @/mangle */, 10, 0, 3, 0.78, 0.01);
g(/* @mangle */'credit-card-contrib'/* @/mangle */, 10, 0, 100, 70, 1);
g(/* @mangle */'support-commission'/* @/mangle */, 10, 0, 50, 5, 1);

g(/* @mangle */'social-security'/* @/mangle */, 10, 0, 30, 8, 1);
g(/* @mangle */'cpf'/* @/mangle */, 10, 0, 20, 4, 1);

g(/* @mangle */'office-material-cost-per-person'/* @/mangle */, 10, 0, 200, 50, 10);

g(/* @mangle */'percent-for-teaching'/* @/mangle */, 10, 0, 100, 80, 1);
g(/* @mangle */'percent-for-office'/* @/mangle */, 10, 0, 100, 20, 1);

g(/* @mangle */'market-cost-percent'/* @/mangle */, 10, 0, 30, 7, 1);

g(/* @mangle */'start-fund-in-10k'/* @/mangle */, 10, 0, 100, 50, 1);

g(/* @mangle */'rent-deposite-in-k'/* @/mangle */, 10, 0, 50, 0, 1);
g(/* @mangle */'initial-fee-in-10k'/* @/mangle */, 10, 0, 100, 12, 1);

r();
