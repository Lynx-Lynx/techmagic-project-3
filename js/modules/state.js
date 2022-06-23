class State {
  constructor(page) {
    this.page = page;
  }

  get nextPage() {
    return this.page;
  }

  set nextPage(newPage) {
    this.page = newPage;
  }
}

export default State;