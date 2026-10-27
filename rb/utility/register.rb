# HqLiveSports SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

HqLiveSportsUtility.registrar = ->(u) {
  u.clean = HqLiveSportsUtilities::Clean
  u.clean_add = HqLiveSportsUtilities::CleanAdd
  u.clean_explain = HqLiveSportsUtilities::CleanExplain
  u.done = HqLiveSportsUtilities::Done
  u.make_error = HqLiveSportsUtilities::MakeError
  u.feature_add = HqLiveSportsUtilities::FeatureAdd
  u.feature_hook = HqLiveSportsUtilities::FeatureHook
  u.feature_init = HqLiveSportsUtilities::FeatureInit
  u.fetcher = HqLiveSportsUtilities::Fetcher
  u.make_fetch_def = HqLiveSportsUtilities::MakeFetchDef
  u.make_context = HqLiveSportsUtilities::MakeContext
  u.make_options = HqLiveSportsUtilities::MakeOptions
  u.make_request = HqLiveSportsUtilities::MakeRequest
  u.make_response = HqLiveSportsUtilities::MakeResponse
  u.make_result = HqLiveSportsUtilities::MakeResult
  u.make_point = HqLiveSportsUtilities::MakePoint
  u.make_spec = HqLiveSportsUtilities::MakeSpec
  u.make_url = HqLiveSportsUtilities::MakeUrl
  u.param = HqLiveSportsUtilities::Param
  u.prepare_auth = HqLiveSportsUtilities::PrepareAuth
  u.prepare_body = HqLiveSportsUtilities::PrepareBody
  u.prepare_headers = HqLiveSportsUtilities::PrepareHeaders
  u.prepare_method = HqLiveSportsUtilities::PrepareMethod
  u.prepare_params = HqLiveSportsUtilities::PrepareParams
  u.prepare_path = HqLiveSportsUtilities::PreparePath
  u.prepare_query = HqLiveSportsUtilities::PrepareQuery
  u.graphql_body = HqLiveSportsUtilities::GraphqlBody
  u.graphql_errors = HqLiveSportsUtilities::GraphqlErrors
  u.result_basic = HqLiveSportsUtilities::ResultBasic
  u.result_body = HqLiveSportsUtilities::ResultBody
  u.result_headers = HqLiveSportsUtilities::ResultHeaders
  u.transform_request = HqLiveSportsUtilities::TransformRequest
  u.transform_response = HqLiveSportsUtilities::TransformResponse
}
