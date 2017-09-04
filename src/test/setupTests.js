/* eslint-disable */
if (!global.testSetupCompleted) {

  // Enzyme
  const enzyme = require('enzyme');
  global.mount = enzyme.mount;
  global.shallow = enzyme.shallow;
  global.render = enzyme.render;

  global.testSetupCompleted = true;
}
