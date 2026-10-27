# HqLiveSports SDK feature factory

from hqlivesports_sdk.feature.base_feature import HqLiveSportsBaseFeature
from hqlivesports_sdk.feature.ratelimit_feature import HqLiveSportsRatelimitFeature
from hqlivesports_sdk.feature.retry_feature import HqLiveSportsRetryFeature
from hqlivesports_sdk.feature.test_feature import HqLiveSportsTestFeature
from hqlivesports_sdk.feature.timeout_feature import HqLiveSportsTimeoutFeature


_FEATURES = {
    "base": lambda: HqLiveSportsBaseFeature(),
    "ratelimit": lambda: HqLiveSportsRatelimitFeature(),
    "retry": lambda: HqLiveSportsRetryFeature(),
    "test": lambda: HqLiveSportsTestFeature(),
    "timeout": lambda: HqLiveSportsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
