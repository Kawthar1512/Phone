const Calculator = () => {
  const props = {
    buttons: [],
    displays: { top: null, bottom: null },
    buttonTypes: {
      operand: "operand",
      operator: "operator",
      math: "math_operator",
      special: "special_operator",
      action: "action",
    },
    expression: {
      value: "",
      hasProceedingOperator: false,
      proceedingOperator: null,
      hasEvaluated: false,
      lastOperatorIsBracket: false,
    },
    parsableValueBoundary: 19,
  };

  /**
   * =====================================================================
   * General Helper functions
   * =====================================================================
   */

  /**
   * Convert a parsed number to a calculator usable number - i.e remove all commas
   * @param {string} string - string to convert to calculator usable number
   */
  const toNumber = (string) => string.replace(/,/g, "");

  /**
   * Check if a string (number) has a decimal point
   * @param {string} number - number to check for decimal in string format
   */
  const hasDecimal = (number) => number.includes(".");

  /**
   * Split into two a number on it's decimal point (if it has one)
   * @param {string} number - number to separate on decimal point
   */
  const separateDecimal = (number) =>
    hasDecimal(number)
      ? {
          parsed: number.split(".")[0],
          decimal: number.split(".")[1],
        }
      : { parsed: number };

  /**
   * Combine a number with a decimal value. i.e number + "." decimal
   * @param {string} number - the number to combine
   * @param {string} decimal - the decimal value to combine to the number
   */
  const combineDecimal = (number, decimal) => number + "." + decimal;

  /**
   *
   * @param {string} number - number to convert to locale
   * @param {string} marker - where to insert the marker
   */
  const toLocale = (number, marker) => {
    const commaPosition = number.length - marker;
    return (
      number.slice(0, commaPosition) +
      "," +
      number.slice(commaPosition, number.length)
    );
  };

  /**
   * Convert a number to locale version - i.e insert comma in appropriate places
   * @param {number} number - number to parse
   */
  const toParsed = (number) => {
    if (isNaN(number)) return "0";

    const numToString = number.toString();
    let { parsed, decimal } = separateDecimal(numToString);
    const len = parsed.length;

    if (len < 4) return numToString;

    if (len >= 4) parsed = toLocale(parsed, 3);

    if (len >= 7) parsed = toLocale(parsed, 7);

    if (len >= 10) parsed = toLocale(parsed, 11);

    if (len >= 13) parsed = toLocale(parsed, 15);

    if (len >= 16) parsed = toLocale(parsed, 19);

    if (len >= 19) parsed = toLocale(parsed, 23);

    return hasDecimal(numToString) ? combineDecimal(parsed, decimal) : parsed;
  };

  /**
   * Set the value of the bottom display to an empty string if it's currently 0
   */
  const emptyBottomDisplayIfValueIsZero = () =>
    getBottomDisplayValue() === "0" && setBottomDisplay("");

  /**
   * Check if a value is out of calculator parsable boundary - 19
   * @param {string} value - the value to check if out of boundary
   */
  const valueIsOutOfBoundary = (value) =>
    toNumber(value).toString().length >= getParsableValueBoundary();

  const isOperatorAssignment = (operator) => operator === "=";

  const evaluateAndParseExpression = () => {
    const evaluation = eval(getExpressionValue());
    setExpressionValue("");
    setExpressionEvaluationTo(true);
    return toParsed(evaluation);
  };

  const factorial = (number) =>
    number === 1 ? 1 : number * factorial(number - 1);

  /**
   * =====================================================================
   * Prop getters
   * =====================================================================
   */

  /**
   * All UI buttons
   */
  const getButtons = () => props.buttons;

  /**
   * All UI button possible types
   */
  const getButtonTypes = () => props.buttonTypes;

  /**
   * The current expression
   */
  const getExpressionValue = () => props.expression.value;

  /**
   * The value of the Top Result Display
   */
  const getTopDisplayValue = () => props.displays.top.innerHTML;

  /**
   * The value of the Bottom Result Display
   */
  const getBottomDisplayValue = () => props.displays.bottom.innerHTML;

  /**
   * The maximum parsable value of the calculator
   */
  const getParsableValueBoundary = () => props.parsableValueBoundary;

  /**
   * ======================================================================
   * Prop setters
   * ======================================================================
   */

  /**
   * set the value of the top result display
   * @param {any} innerHTML - value to be set as the innerHTML
   */
  const setTopDisplay = (innerHTML) =>
    (props.displays.top.innerHTML = innerHTML);

  /**
   * set the value of the bottom result display
   * @param {any} innerHTML - value to be set as the innerHTML
   */
  const setBottomDisplay = (innerHTML) =>
    (props.displays.bottom.innerHTML = innerHTML);

  /**
   * set the value of the expression
   * @param {string} value - new value
   */
  const setExpressionValue = (value) => (props.expression.value = value);

  /**
   * set the value of the expression hasEvaluated Property
   * @param {boolean} value - new value
   */
  const setExpressionEvaluationTo = (value) =>
    (props.expression.hasEvaluated = value);

  /**
   * update the expression's proceeding Operator state
   * @param {string} operator - new value
   */
  const setExpressionProceedingOperatorTo = (operator) => {
    if (operator) {
      props.expression.hasProceedingOperator = true;
      props.expression.proceedingOperator = operator;
    } else {
      props.expression.hasProceedingOperator = false;
    }
  };

  const setExpressionLastOperatorIsBracketTo = (value) =>
    (props.expression.lastOperatorIsBracket = value);

  const appendToTopDisplay = (
    value,
    preceedingOperand = getBottomDisplayValue()
  ) =>
    setTopDisplay(getTopDisplayValue() + " " + preceedingOperand + " " + value);

  /**
   * Append a value at the end of the bottom display
   * @param {any} value - value to append to bottom display
   */
  const appendToBottomDisplay = (value) =>
    setBottomDisplay(toParsed(toNumber(`${getBottomDisplayValue()}${value}`)));

  const appendToExpression = (value, appendBottomDisplayValue = true) => {
    setExpressionValue(
      getExpressionValue() +
        " " +
        (appendBottomDisplayValue ? toNumber(getBottomDisplayValue()) : "") +
        " " +
        value
    );
  };

  /**
   * =====================================================================
   * Prop value checker
   * =====================================================================
   */
  const expressionHasEvaluated = () => props.expression.hasEvaluated;

  const expressionHasPreceedingOperator = () =>
    props.expression.hasProceedingOperator;

  const expressionLastOperatorIsBracket = () =>
    props.expression.lastOperatorIsBracket;

  /**
   * =====================================================================
   * Clear Helpers functions
   * =====================================================================
   */

  /**
   * Clear all values and reset calculator to blank slate
   */
  const clearAll = () => {
    setTopDisplay("&nbsp;");
    setBottomDisplay("0");
    setExpressionValue("");
    setExpressionEvaluationTo(false);
  };

  /**
   * Clear and Reset the value of the top display
   */
  const clearTopDisplay = () => {
    setTopDisplay("");
    setExpressionEvaluationTo(false);
  };

  const clearBottomDisplay = () => setBottomDisplay("0");

  /**
   * =======================================================================
   * Replace Helpers Functions
   * =======================================================================
   */

  const replacePreceedingOperatorFromBottomDisplay = (replaceValue) => {
    const initialValue = getBottomDisplayValue();
    setBottomDisplay(
      initialValue.slice(0, initialValue.length - 1) + replaceValue
    );
  };

  const replacePreceedingOperatorFromExpression = (replaceValue) => {
    const initialValue = getExpressionValue();
    setExpressionValue(
      initialValue.slice(0, initialValue.length - 1) + replaceValue
    );
  };

  /**
   * =======================================================================
   * Event Handlers
   * =======================================================================
   */

  /**
   * Handles the click of any button with their data-type as 'operand'
   * @param {event} e - the current event being fired - contains the target which is the current button
   */
  const operandEventHandler = (e) => {
    if (expressionHasEvaluated()) {
      clearAll();
    }

    setExpressionProceedingOperatorTo(null);
    emptyBottomDisplayIfValueIsZero();
    if (valueIsOutOfBoundary(getBottomDisplayValue())) return;

    appendToBottomDisplay(e.target.text);
  };

  /**
   * Handles the click of any button with their data-type as 'operator'
   * @param {event} e - the current event being fired - contains the target which is the current button
   */
  const operatorEventHandler = (e) => {
    const operator = e.target;

    if (expressionHasEvaluated()) clearTopDisplay();

    const operatorIsAssignment = isOperatorAssignment(operator.text);

    const hasPreceedingOperatorAndOperationIsNotAssignment =
      expressionHasPreceedingOperator() && !operatorIsAssignment;

    if (hasPreceedingOperatorAndOperationIsNotAssignment) {
      replacePreceedingOperatorFromBottomDisplay(operator.text);
      replacePreceedingOperatorFromExpression(operator.symbol || operator.text);
      clearBottomDisplay();
    } else if (operatorIsAssignment) {
      if (expressionHasPreceedingOperator()) {
        replacePreceedingOperatorFromBottomDisplay(operator.text);
        replacePreceedingOperatorFromExpression("");
      } else {
        appendToExpression("", !expressionLastOperatorIsBracket());
        appendToTopDisplay(
          operator.text,
          expressionLastOperatorIsBracket() ? "" : getBottomDisplayValue()
        );
      }

      setBottomDisplay(evaluateAndParseExpression());
    } else {
      appendToExpression(operator.symbol || operator.text);
      appendToTopDisplay(operator.text);
      setExpressionProceedingOperatorTo(operator.symbol || operator.text);
      clearBottomDisplay();
    }
  };

  /**
   * Handles the click of any button with their data-type as 'math_operator'
   * @param {event} e - the current event being fired - contains the target which is the current button
   */
  const mathOperatorEventHandler = (e) => {
    const operator = e.target;

    if (expressionHasEvaluated()) clearTopDisplay();
    const displayText = operator.text;
    const mathAttribName = operator.mathAttribName || displayText;

    const value = getBottomDisplayValue();

    appendToTopDisplay(`${displayText}(${value})`, "");
    setBottomDisplay(Math[mathAttribName](value));
    setExpressionEvaluationTo(true);
  };

  /**
   * Handles the click of any button with their data-type as 'special_operator'
   * @param {event} e - the current event being fired - contains the target which is the current button
   */
  const specialOperatorEventHandler = (e) => {
    const operator = e.target;
    const v = getBottomDisplayValue();

    switch (operator.identity) {
      case "PI":
        setBottomDisplay(Math.PI);
        break;
      case "PLUS_OR_MINUS":
        if (v[0] === "-") setBottomDisplay(v.slice(1, v.length));
        else setBottomDisplay("-" + v);
        break;
      case "SQUARE":
        setTopDisplay(`sqr(${v})`);
        setBottomDisplay(toParsed(toNumber(v) ** 2));
        setExpressionEvaluationTo(true);
        break;
      case "10X":
        setTopDisplay(`10^(${v})`);
        setBottomDisplay(toParsed(10 ** toNumber(v)));
        setExpressionEvaluationTo(true);
        break;
      case "FACTORIAL":
        setTopDisplay(`fact(${v})`);
        setBottomDisplay(toParsed(factorial(toNumber(v))));
        setExpressionEvaluationTo(true);
        break;
      case "DIVIDE_ONE":
        setTopDisplay(`1/(${v})`);
        setBottomDisplay(toParsed(1 / toNumber(v)));
        setExpressionEvaluationTo(true);
        break;
      case "OPENING_BRACE":
        appendToTopDisplay(operator.text);
        appendToExpression(` * ${operator.text} `);
        clearBottomDisplay();
        break;
      case "CLOSING_BRACE":
        appendToTopDisplay(operator.text);
        appendToExpression(` ${operator.text} `);
        clearBottomDisplay();
        setExpressionLastOperatorIsBracketTo(true);
        break;
    }
  };

  /**
   * Handles the click of any button with their data-type as 'action'
   * @param {event} e - the current event being fired - contains the target which is the current button
   */
  const actionEventHandler = (e) => {
    const value = getBottomDisplayValue();
    const len = value.length;

    switch (e.target.actionType) {
      case "CLEAR_ALL":
        clearAll();
        break;
      case "CLEAR":
        if (value === "0") return;
        if (len === 1) return setBottomDisplay("0");

        setBottomDisplay(toParsed(toNumber(value.slice(0, len - 1))));
        break;
    }
  };

  /**
   * Handles the click of any button with no corresponding type to available handlers
   */
  const defaultEventHandler = () =>
    console.log("Button doesn't belong to any button group");

  /**
   * Initializations
   * Widget initialization
   * @param {object} calculator - the calculator object
   */
  const initUIWidgets = (_this) => {
    _this.buttons = document.querySelectorAll("button");
    _this.displays.top = document.querySelector("#final");
    _this.displays.bottom = document.querySelector("#computational");
  };

  /**
   * Mount all attributes on buttons as a property to the button
   * @param {array} button - array of buttons in the UI
   */
  const initButtonAttribs = (buttons) => {
    buttons.forEach((button, i) => {
      const text = button.getAttribute("data-text");

      button.index = i;
      button._type = button.getAttribute("data-type");
      button.symbol = button.getAttribute("data-symbol");
      button.actionType = button.getAttribute("action-type");
      button.text = text;
      button.identity = button.getAttribute("identity");
      button.mathAttribName = button.getAttribute("math-attrib-name");
      button.hasText = text !== null;
    });
  };

  /**
   * Initialize all buttons with their respective and appropriate event handler
   * @param {array} buttons - array of UI buttons
   * @param {object} types - object of different button types [operand | operator | math | special | action]
   */
  const initEventHandlers = (buttons, types) => {
    buttons.forEach((button) => {
      switch (button._type) {
        case types.operand:
          button.addEventListener("click", operandEventHandler);
          break;
        case types.operator:
          button.addEventListener("click", operatorEventHandler);
          break;
        case types.math:
          button.addEventListener("click", mathOperatorEventHandler);
          break;
        case types.special:
          button.addEventListener("click", specialOperatorEventHandler);
          break;
        case types.action:
          button.addEventListener("click", actionEventHandler);
          break;
        default:
          button.addEventListener("click", defaultEventHandler);
          button.classList.add("undone");
          break;
      }
    });
  };

  return {
    getButtons,
    getButtonTypes,
    getBottomDisplayValue,
    getTopDisplayValue,
    getExpressionValue,
    setTopDisplay,
    setBottomDisplay,
    setExpressionValue,
    setExpressionEvaluationTo,
    setExpressionLastOperatorIsBracketTo,
    setExpressionProceedingOperatorTo,
    appendToTopDisplay,
    appendToBottomDisplay,
    appendToExpression,
    expressionHasEvaluated,
    expressionHasPreceedingOperator,
    expressionLastOperatorIsBracket,
    clearAll,
    clearTopDisplay,
    clearBottomDisplay,
    replacePreceedingOperatorFromBottomDisplay,
    replacePreceedingOperatorFromExpression,
    initUIWidgets,
    initButtonAttribs,
    initEventHandlers,
    init() {
      this.initUIWidgets(props);
      this.initButtonAttribs(props.buttons);
      this.initEventHandlers(props.buttons, props.buttonTypes);
    },
  };
};

const calculator = Calculator();
calculator.init();
