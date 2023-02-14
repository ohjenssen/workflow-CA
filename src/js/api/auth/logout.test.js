import { logout } from "./logout";
import LocalStorageMock from "../../storage/storageMock";

global.localStorage = new LocalStorageMock();

const TEST_ACCESSTOKEN = "fakeAccessToken";

describe("logout", () => {
    it("clears the token from browser storage", () => {
        global.localStorage.setItem("token", TEST_ACCESSTOKEN);
        logout();
        expect(global.localStorage.getItem("token")).toEqual(null);
    })
})