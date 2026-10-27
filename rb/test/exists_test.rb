# HqLiveSports SDK exists test

require "minitest/autorun"
require_relative "../HqLiveSports_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = HqLiveSportsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
