# HqLiveSports SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module HqLiveSportsFeatures
  def self.make_feature(name)
    case name
    when "base"
      HqLiveSportsBaseFeature.new
    when "ratelimit"
      HqLiveSportsRatelimitFeature.new
    when "retry"
      HqLiveSportsRetryFeature.new
    when "test"
      HqLiveSportsTestFeature.new
    when "timeout"
      HqLiveSportsTimeoutFeature.new
    else
      HqLiveSportsBaseFeature.new
    end
  end
end
