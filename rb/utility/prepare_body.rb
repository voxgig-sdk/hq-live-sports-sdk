# HqLiveSports SDK utility: prepare_body
require_relative 'media'
module HqLiveSportsUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return HqLiveSportsUtilities.raw_body(ctx.reqdata) if HqLiveSportsUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
