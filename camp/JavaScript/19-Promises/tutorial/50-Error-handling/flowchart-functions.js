function asyncThing1() {
  console.log('asyncThing1');
  return Promise.resolve();
}

function asyncThing2() {
  console.log('asyncThing2');
  return Promise.reject();
}

function asyncThing3() {
  console.log('asyncThing3');
  return Promise.resolve();
}

function asyncThing4() {
  console.log('asyncThing4');
  return Promise.reject();
}

function asyncRecovery1() {
  console.log('asyncRecovery1');
  return Promise.reject();
}

function asyncRecovery2() {
  console.log('asyncRecovery2');
  return Promise.resolve();
}
