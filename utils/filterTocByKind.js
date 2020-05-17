'use strict';
// Code executor: Filter by kind;

let data = API.getData('sampleTocFiltered');
let sampleFiltered = API.getData('sampleFiltered');

if (this.action) {
  switch (this.action.name) {
    case 'showAgroSample': {
      sampleFiltered = filterByKind(data, 'agro');
      break;
    }
    case 'showVegetalSample': {
      sampleFiltered = filterByKind(data, 'vegetal');
      break;
    }
    case 'showSoilSample': {
      sampleFiltered = filterByKind(data, 'soil');
      break;
    }
    case 'showExtractSample': {
      sampleFiltered = filterByKind(data, 'extract');
      break;
    }
    case 'showFractionSample': {
      sampleFiltered = filterByKind(data, 'fraction');
      break;
    }
    case 'showAll': {
      sampleFiltered = data;
      break;
    }
    default: {
      sampleFiltered = data;
    }
  }
} else if (this.variable) {
  sampleFiltered = data;
}

API.createData('sampleFiltered', sampleFiltered);

function filterByKind(data, kind) {
  let result = data.filter(function (currentValue) {
    let sampleKind = currentValue.value.metadata.kind;
    if (DataObject.resurrect(sampleKind) === kind) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}
