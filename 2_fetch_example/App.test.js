test("bad example: app.getData() depends on the actual results of fetchData()", () => {
  //
});

test("good example: app.getData() shouldn't depend on the actual results of fetchData()", () => {
  // TODO: write unit test for app.getData() and mock out fetchData()
  const mockCallback = jest.fn(() => ["test1", "test2"]);
  expect(mockCallback()).toHaveLength(2);
});
