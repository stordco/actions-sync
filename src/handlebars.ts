import Handlebars from "handlebars";
import isObject from "lodash/isObject";

Handlebars.registerHelper("or", function (context, ...params) {
  const options = params[params.length - 1];
  params.pop();

  for (const value of params) {
    if (value) {
      return options.fn(context);
    }
  }

  return options.inverse(context);
});

export default Handlebars;
