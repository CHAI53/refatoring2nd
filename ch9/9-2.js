// class 안에 있는 field나 객체 안에 있는 field나
// 이름이 너무너무 중요하기 때문에
// 이름을 의도와 같이 나타낼수 있게 사용하는 것이 매우매우 중요
// 이름이 모호하거나 담고 있는 것을 잘 나타내지 못한다고 생각되면
// 조금 더 잘 나타낼 수 있는 이름으로 바꿔나가는 것이 중요!

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get title() {
    return this._name;
  }
  set title(value) {
    this._name = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}
const organization = new Organization({
  name: "드림코딩",
  country: "대한민국",
});
