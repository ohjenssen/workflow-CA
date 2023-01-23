import { createPost } from "./create.js";

const TEST_TITLE = "fakePost";
const TEST_BODY = "hello world";
const TEST_TAGS = ["tag"];
const TEST_MEDIA = "imageUrl";

const validReturn = {
    "id": 0,
    "title": TEST_TITLE,
    "body": TEST_BODY,
    "tags": TEST_TAGS,
    "media": TEST_MEDIA,
    "created": "2022-09-04T16:21:02.042Z",
    "updated": "2022-09-04T16:21:02.042Z",
    "_count": {
      "comments": 0,
      "reactions": 0
    }
  }

function fetchSuccess(){
    return Promise.resolve({
        status: 200, 
        ok: true, 
        statusText: "OK", 
        json: () => Promise.resolve(validReturn)
    })
}

describe("create", () => {
    it("returns a valid item with a valid input", async () => {
        global.fetch = jest.fn(() => fetchSuccess());
        const mockCreate = await createPost(TEST_TITLE, TEST_BODY, TEST_TAGS, TEST_MEDIA);

        expect(mockCreate).toBe(validReturn);
    })
});