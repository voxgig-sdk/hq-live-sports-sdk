# HqLiveSports SDK exists test

import pytest
from hqlivesports_sdk import HqLiveSportsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HqLiveSportsSDK.test(None, None)
        assert testsdk is not None
