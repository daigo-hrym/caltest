function addInputGroup() {
    const calculator = document.getElementById('calculator');
    const newGroup = document.createElement('div');
    newGroup.className = 'input-group';
    newGroup.innerHTML = `
        <input type="text" class="input-box" placeholder="値を入力">
        <select class="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="text" class="input-box" placeholder="値を入力">
        <span class="equal">=</span>
        <span class="result">?</span>
    `;
    calculator.insertBefore(newGroup, calculator.lastElementChild.previousElementSibling);
}

function calculate() {
    const groups = document.querySelectorAll('.input-group');
    groups.forEach(group => {
        const inputs = group.querySelectorAll('.input-box');
        const operator = group.querySelector('.operator').value;
        const result = group.querySelector('.result');
        const value1 = parseFloat(inputs[0].value);
        const value2 = parseFloat(inputs[1].value);
        let calculationResult;

        switch (operator) {
            case '+':
                calculationResult = value1 + value2;
                break;
            case '-':
                calculationResult = value1 - value2;
                break;
            case '*':
                calculationResult = value1 * value2;
                break;
            case '/':
                calculationResult = value1 / value2;
                break;
        }
        result.textContent = isNaN(calculationResult) ? '?' : calculationResult;
    });
}
