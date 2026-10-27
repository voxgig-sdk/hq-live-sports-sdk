# HqLiveSports SDK utility: make_context
require_relative '../core/context'
module HqLiveSportsUtilities
  MakeContext = ->(ctxmap, basectx) {
    HqLiveSportsContext.new(ctxmap, basectx)
  }
end
