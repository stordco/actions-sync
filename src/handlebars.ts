import Handlebars from "handlebars";

export class DenyRenderError extends Error {}

Handlebars.registerHelper("or", function (...params) {
  const options = params[params.length - 1];
  params.pop();

  for (const value of params) {
    if (value) {
      return options.fn(this);
    }
  }

  return options.inverse(this);
});

Handlebars.registerHelper("denyRender", function () {
  throw new DenyRenderError();
});

export default Handlebars;
