// Create HTML elements
document.body.innerHTML = `
    <h1>Calculate Object Weight in a Planet</h1>

    <!-- INPUT BLOCK -->
    <div class="input-block-container">
      <!-- Input Mass -->
      <input type="text" id="mass" name="mass" class="input-items" required>
      
      <!-- Select Planet -->
      <select name="planets" id="select-planets" class="input-items">
        <option value="none">Select a planet</option>
        <option value="mercury">Mercury</option>
        <option value="venus">Venus</option>
        <option value="earth">Earth</option>
        <option value="mars">Mars</option>
        <option value="jupiter">Jupiter</option>
        <option value="saturn">Saturn</option>
        <option value="uranus">Uranus</option>
        <option value="neptune">Neptune</option>
        <option value="moon">Moon</option>
      </select>

      <!-- Button to Calculate -->
      <button name="button">Calculate</button>

    </div>
    <!-- END OF INPUT BLOCK -->
    
    <!-- RESULT BLOCK -->
    <div class="result-block-container">
      <div class="result-items" id="result-text">
        <div id="show-input"></div>
        <div id="result-weight"></div>
      </div>
    </div>
    <!-- END OF RESULT BLOCK -->`;

// Get html elements
const mass = document.querySelector('#mass');
const selectPlanets = document.querySelector('#select-planets');
const button = document.querySelector('button');

// Create literal object containing gravity constant of each planet
const gravity = {
  mercury: 3.6,
  venus: 8.9,
  earth: 9.8,
  mars: 3.8,
  jupiter: 26,
  saturn: 11.1,
  uranus: 10.7,
  neptune: 14.1,
  moon: 1.6,
};

// Action when button is clicked
button.addEventListener('click', function () {
  // If mass has
  if (mass.value !== '' && selectPlanets.value !== 'none') {
    console.log(typeof selectPlanets.value);
    document.querySelector('#show-input').innerText = `Weight of a ${
      mass.value
    } kg object in ${selectPlanets.value.toUpperCase()} is`;
    document.querySelector('#result-weight').innerText = `${parseInt(
      mass.value * gravity[selectPlanets.value]
    )} N`;
  } else {
    document.querySelector('#result-weight').innerText =
      'Mass and Planet are required. Check your input!';
  }
});

/**
 * style function is used to style an element property
 * @param {string} elementIdentifier - Element name, id, or class.
 * @param {string} property - Property of an element.
 * @param {string} value - Value of the given property.
 */
function style(elementIdentifier, property, value) {
  document.querySelector(`${elementIdentifier}`).style[`${property}`] = value;
}

style('h1', 'text-align', 'center');
