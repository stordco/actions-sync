import Handlebars from "handlebars";
import isObject from "lodash/isObject";
import { urlToHttpOptions } from "url";

Handlebars.registerHelper("or", function (context, ...params) {
  const options = params[params.length - 1];

  for (const value in params.splice(-1)) {
    if (value) {
      return options.fn(context);
    }
  }

  return options.inverse(context);
});

export default Handlebars;
