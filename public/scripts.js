let d = document;

function createEleWithAttr (ele, attr) {
  let element = d.createElement(ele);
  for (let k in attr) {
    element.setAttribute(k, attr[k]);
  }
  return element;
}

function addBoard () {
  let wrapper = d.getElementById('wrapper');
  let row;
  let square;
  
  for (let i = 0; i < 8; i++) {
    row = createEleWithAttr('div', {class: 'row'});
    if (i % 2 === 0) {
      for (let idx = 0; idx < 8; idx++) {
        if (idx % 2 === 0) {
          square = createEleWithAttr('div', {class: 'square red'});
        } else {
          square = createEleWithAttr('div', {class: 'square black'});
        }
        row.appendChild(square);
      }
    } else {
      for (let k = 0; k < 8; k++) {
        if (k % 2 === 0) {
          square = createEleWithAttr('div', {class: 'square black'});
        } else {
          square = createEleWithAttr('div', {class: 'square red'});
        }
        row.appendChild(square);
      }
    }
    wrapper.appendChild(row);
  }
}

function addCheckers() {
  
}