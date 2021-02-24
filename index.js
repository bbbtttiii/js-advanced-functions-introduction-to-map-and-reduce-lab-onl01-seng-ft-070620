//custom map methods

function mapToNegativize(src) {
  let res = [];
  for (let i=0; i<src.length; i++) {
    res.push(src[i] * -1);
  }
  return res;
}

function mapToNoChange(src) {
  let res = [];
  for (let i=0; i<src.length; i++) {
    res.push(src[i]);
  }
  return res;
}

function mapToDouble(src) {
  let res = [];
  for (let i=0; i<src.length; i++) {
    res.push(src[i] * 2);
  }
  return res;
}

function mapToSquare(src) {
  let res = [];
  for (let i=0; i<src.length; i++) {
    res.push(src[i] ** 2);
  }
  return res;
}

//custom reduce methods

function reduceToTotal(src, start=0) {
  let total = start;
  for (let i=0; i<src.length; i++) {
    total = total + src[i];
  }
  return total;
}

function reduceToAllTrue(src) {
  for (let i=0; i<src.length; i++) {
    if (!src[i]) {
      return false;
    }
  }
  return true;
} 

function reduceToAnyTrue(src) {
  for (let i=0; i<src.length; i++) {
    if (src[i]) {
      return true;
    }
  }
  return false;
}