'use strict';
// Code executor: Filter samples by references;

let data = API.getData('sampleTocFiltered');
let sampleClicked = API.getData('sampleClicked');

let reference;
if (sampleClicked) {
  reference = sampleClicked.key[1].split(' ')[0];
}

API.createData('sampleByReference', filterByReference(data, reference));

function filterByReference(data, reference) {
  let result = data.filter(function (currentValue) {
    let sampleReference = currentValue.key[1].split(' ')[0];
    if (DataObject.resurrect(sampleReference) === reference) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}
