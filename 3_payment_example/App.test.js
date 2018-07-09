const App = require("./App");
const { makePayment, refundPayment } = require("./paymentService");

jest.mock("./paymentService", () => {
  return{
     makePayment: jest.fn(()=> console.log('amount deducted')),
     refundPayment: jest.fn(()=>console.log('refund made'))
  }
});

// TODO: mock paymentService module
// TODO: create a mock function for each function in paymentService module

test("App tests shouldn't make actual calls to paymentService", () => {
  const queue = [1, 2, 3, 10];
  const app = new App(queue);
  app.start();

  expect(queue).toHaveLength(0);
  expect(makePayment).toHaveBeenCalledTimes(4);
  
});
