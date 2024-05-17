let arg = false;
console.log({ arg });
arg || (arg = "value"); // OR logic means no matter arg is truthy or falsy value, arg = "value" will be executed
console.log({ arg });
arg = false; // reassign arg to be false
arg && (arg = "new Value");
console.log({ arg }); // return as false since arg has been reassigned to false and line 6 is AND statement
