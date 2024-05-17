async function getData() {
  await fetch("http://url.endpoint").catch((err) => {
    throw new Error(`Error caused by: ${{ cause: err }}`);
  });
}
const fetchData = getData().catch((err) => {
  console.log(err.cause);
});
