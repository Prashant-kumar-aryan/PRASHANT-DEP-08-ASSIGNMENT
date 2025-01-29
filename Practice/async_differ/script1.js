console.log('Script 1 (async) started downloading.');

// Simulate a large file with many calculations or functions
for (let i = 0; i < 10; i++) {
  const temp = Math.sqrt(i) * Math.random();
}

function doSomethingHeavy() {
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += 'A';
  }
  return result;
}

console.log('Processing heavy computation...');
const heavyData = [];
for (let i = 0; i < 10; i++) {
  heavyData.push(doSomethingHeavy());
}
document.querySelector("h1").innerHTML=`<div>
    <h2>Section 1</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
    <p>Integer euismod, sem ut sollicitudin venenatis, tortor orci tempor risus, in vulputate ex diam at arcu.</p>
  </div>

  <div>
    <h2>Section 2</h2>
    <p>Quisque vehicula, ipsum ac malesuada vestibulum, mauris odio euismod urna, sit amet convallis elit justo nec urna.</p>
    <p>Sed tincidunt velit magna, ut tincidunt augue gravida nec. Nullam a quam velit. Cras euismod urna vel dapibus euismod.</p>
  </div>

  <!-- Repeated content to make it longer -->
  <div>
    <h2>Section 3</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
    <p>Integer euismod, sem ut sollicitudin venenatis, tortor orci tempor risus, in vulputate ex diam at arcu.</p>
  </div>

  <div>
    <h2>Section 4</h2>
    <p>Quisque vehicula, ipsum ac malesuada vestibulum, mauris odio euismod urna, sit amet convallis elit justo nec urna.</p>
    <p>Sed tincidunt velit magna, ut tincidunt augue gravida nec. Nullam a quam velit. Cras euismod urna vel dapibus euismod.</p>
  </div>

  <div>
    <h2>Section 5</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
    <p>Integer euismod, sem ut sollicitudin venenatis, tortor orci tempor risus, in vulputate ex diam at arcu.</p>
  </div>
`;
console.log('Heavy computation complete.');

console.log('Script 1 (async) finished execution.');
