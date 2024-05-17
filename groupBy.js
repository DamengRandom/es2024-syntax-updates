const people = [
  { name: "tester one", specialization: "frontend", active: true },
  { name: "tester two", specialization: "devops", active: false },
  { name: "tester three", specialization: "backend", active: false },
  { name: "tester four", specialization: "frontend", active: true },
  { name: "tester five", specialization: "backend", active: false },
];

const specializationGroup = Object.groupBy(
  people,
  ({ specialization }) => specialization
);

const activeGroup = Object.groupBy(people, (item) => `active:${item.active}`);

console.log(
  "Object.groupBy supports 'Array' as data format: ",
  specializationGroup,
  activeGroup
);

const peopleSet = new Set([
  { name: "tester one", specialization: "frontend", active: true },
  { name: "tester two", specialization: "devops", active: false },
  { name: "tester three", specialization: "backend", active: false },
  { name: "tester four", specialization: "frontend", active: true },
  { name: "tester five", specialization: "backend", active: false },
]);

const specializationSetGroup = Object.groupBy(
  peopleSet,
  ({ specialization }) => specialization
);

console.log(
  "Object.groupBy supports 'Set' as data format: ",
  specializationSetGroup
);

function* peopleGeneratorFunction() {
  yield { name: "tester one", specialization: "frontend", active: true };
  yield { name: "tester two", specialization: "devops", active: false };
  yield { name: "tester three", specialization: "backend", active: false };
  yield { name: "tester four", specialization: "frontend", active: true };
  yield { name: "tester five", specialization: "backend", active: false };
}

const specializationGeneratorGroup = Object.groupBy(
  peopleGeneratorFunction(),
  ({ specialization }) => specialization
);

console.log(
  "Object.groupBy supports 'generator function' as data format: ",
  specializationGeneratorGroup
);
