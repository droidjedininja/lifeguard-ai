const assert=require('node:assert/strict');const p=require('./protection');
const cases=[['Congratulations! You have been hired. Pay a $150 upfront equipment fee to start your new remote job.',true],['Pay a deposit to start your job.',true],['Lunch at noon',false],['Never share your password',false]];
for(const [input,expected] of cases){const r=p.inspect(input);assert.equal(r.categories.some(c=>c.name==='Employment fraud'),expected,input);if(input.startsWith('Never'))assert.equal(r.categories.length,0);console.log('PASS',input)}

assert.equal(p.inspect('Never share your password').risk,'No obvious indicators');
assert.equal(p.inspect('Never share your password').score,0);
assert.equal(p.inspect('Send your verification code').risk,'High concern');
console.log('PASS LG-002 risk and phishing control');

assert.equal(p.inspect('Never share your password. Instead send your verification code').risk,'High concern');
console.log('PASS mixed advice and credential request');
