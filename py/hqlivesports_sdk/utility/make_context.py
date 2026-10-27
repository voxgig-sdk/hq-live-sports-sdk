# HqLiveSports SDK utility: make_context

from hqlivesports_sdk.core.context import HqLiveSportsContext


def make_context_util(ctxmap, basectx):
    return HqLiveSportsContext(ctxmap, basectx)
