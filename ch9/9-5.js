// 불변성은 프로그램의 안정성을 높여준다는 측면에서 중요
// 실수로 여기저기에서 업데이트해서 버그 만드는 것 방지
// 그렇지만 데이터를 바꿀 때마다 인스턴스를 만든다면
// 예전 버전 인스턴스를 가지고 있는 곳에서는 업데이트 내용이 반영되지 않아 오히려 버그 발생 가능
// 이럴 경우 가변성의 참조를 사용하는 것이 나을 수 있어

const customerRepository = new CustomerRepository();

const order = new Order(
  data.number,
  customerRepository.registreCustomer(data.customerId)
);

class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registreCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
