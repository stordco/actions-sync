import Handlebars from "handlebars";
import isObject from "lodash/isObject";

Handlebars.registerHelper("or", function (...params) {
  const options = params[params.length - 1];
  params.pop();

  for (const value of params) {
    if (value) {
      return options.fn();
    }
  }

  return options.inverse();
});

export default Handlebars;
