// 예제 1
function setWidth(value) {
  this._width = value;
}

function setHeight(value) {
  this._height = value;
}

// function setDimension(name, value) {
//   if (name === 'height') {
//     this._height = value;
//     return;
//   }
//   if (name === 'width') {
//     this._width = value;
//     return;
//   }
// }

// 예제 2
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}
  #book(customer, isPremium) {} // 내부에선 이렇게 사용가능. 하지만 API spec으로는 부적절.
}

// 예제 3
function switchOn();
function switchOff();