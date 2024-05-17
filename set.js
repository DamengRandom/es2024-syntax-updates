let setExample = new Set(["1", "2", "3"]);

let setExampleTwo = new Set(["3", "4", "5"]);

setExample.union(setExampleTwo); // venn diagram: union (OR) logic [1,2,3,4,5]

setExample.intersection(setExampleTwo); // venn diagram: union (AND) logic [3]

setExample.difference(setExampleTwo); // venn diagram: element only inside setExample logic [1,2]

setExample.symmetricDifference(setExampleTwo); // venn diagram: for all element except the common one [1,2,4,5]

setExample.isDisjointFrom(setExampleTwo); // return a boolean value, //  this one will return false because, both set has 1 common value which is [3]

setExample.isDisjointFrom(new Set(["4", "5"])); // return true because both set does not have 1 element in common !!

setExample.isSupersetOf(setExampleTwo); // return false because [1,2,3] include [3,4,5]
setExample.isSupersetOf(new Set(["1", "2"])); // return true because [1,2,3] include [1,2]
