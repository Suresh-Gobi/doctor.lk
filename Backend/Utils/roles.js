const AccessControl = require('accesscontrol');
const ac = new AccessControl();

ac.grant('user')
  .readOwn('profile')
  .updateOwn('profile')

ac.grant('doctor')
  .extend('user')
  .readAny('appointment')
  .createOwn('appointment')
  .updateOwn('appointment')

ac.grant('admin')
  .extend('user')
  .extend('doctor')
  .createAny('clinic')
  .updateAny('clinic')
  .deleteAny('clinic')
  .createAny('doctor')
  .updateAny('doctor')
  .deleteAny('doctor')
  .readAny('appointment')
  .updateAny('appointment')
  .deleteAny('appointment')

module.exports = ac;
