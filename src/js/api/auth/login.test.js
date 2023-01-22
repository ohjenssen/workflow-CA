import { login } from "./login";
import LocalStorageMock from "../../storage/storageMock";

global.localStorage = new LocalStorageMock();

// Valid credentials
const TEST_NAME = "fake_user";
const TEST_EMAIL = "fake_email@email.com";
const TEST_PASSWORD = "password123";
const TEST_ACCESSTOKEN = "fakeAccessToken";

// response.json()
const TEST_USER = {
    name: TEST_NAME,
    email: TEST_EMAIL,
    accessToken: TEST_ACCESSTOKEN
};

// await fetch()
function fetchSuccess(){
    return Promise.resolve({
        ok: true,
        statsus: 200,
        statusText: "OK",
        json: () => Promise.resolve(TEST_USER)
    })
};

describe("login", () => {
    it("stores a token when provided with valid credentials", async () => {
        global.fetch = jest.fn(() => fetchSuccess()) // Setting which of our mock functions is going to replace fetch() in this situation. We are setting success because we wnat a succesful response
        const mockLoginResponse = await login(TEST_EMAIL, TEST_PASSWORD);

        global.localStorage.setItem("token", TEST_ACCESSTOKEN);
        expect(mockLoginResponse).toEqual(TEST_USER);
        expect(TEST_ACCESSTOKEN).toEqual(global.localStorage.getItem("token"));
    })
});