export const toUpperSnakeCase = str => str.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
