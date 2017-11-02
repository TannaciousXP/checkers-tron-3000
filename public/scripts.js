let d = document;

function createEleWithAttr (ele, attr) {
  console.log(ele, attr);
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
    wrapper.appendChild(row);
  }

}
