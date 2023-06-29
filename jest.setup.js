import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

//before every test excute everything inside callback function
beforeAll(() => {
  server.listen();
});

//after each test excute everything inside callback function
afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
