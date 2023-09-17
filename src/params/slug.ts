import slugify from 'slugify';

// TODO: make username param checker
export function match(param) {
  return param === slugify(param, { lower: true });
}
