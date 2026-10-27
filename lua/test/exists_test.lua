-- HqLiveSports SDK exists test

local sdk = require("hq-live-sports_sdk")

describe("HqLiveSportsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
