document.body.innerHTML = `
    <h1>Calculate Object Mass in a Planet</h1>

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
      </select>

      <!-- Button to Calculate -->
      <button name="button">Calculate</button>

    </div>
    <!-- END OF INPUT BLOCK -->
    
    <!-- RESULT BLOCK -->
    <div class="result-block-container">
      <div class="result-items" id="result-text"></div>
    </div>
    <!-- END OF RESULT BLOCK -->`;


