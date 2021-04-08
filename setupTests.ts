// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.ts`

// used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import store from "./src/modules";

const state = store.getState();
Date.now = jest.fn().mockReturnValue(1613378624457);

jest.mock("react-redux", () => {
  const ActualReactRedux = jest.requireActual("react-redux");
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => store),
    useDispatch: () => jest.fn(),
  };
});
