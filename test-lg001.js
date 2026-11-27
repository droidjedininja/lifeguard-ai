const assert=require('node:assert/strict');const p=require('./protection');
const cases=[['Congratulations! You have been hired. Pay a $150 upfront equipment fee to start your new remote job.',true],['Pay a deposit to start your job.',true],['Lunch at noon',false],['Never share your password',false]];
for(const [input,expected] of cases){const r=p.inspect(input);assert.equal(r.categories.some(c=>c.name==='Employment fraud'),expected,input);if(input.startsWith('Never'))assert.equal(r.categories.length,0);console.log('PASS',input)}
