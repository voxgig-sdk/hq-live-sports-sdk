# frozen_string_literal: true

# Typed models for the HqLiveSports SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# V1n entity data model.
#
# @!attribute [rw] as_of
#   @return [String]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] feature
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ok
#   @return [Boolean]
#
# @!attribute [rw] sport
#   @return [String]
V1n = Struct.new(
  :as_of,
  :data,
  :feature,
  :id,
  :ok,
  :sport,
  keyword_init: true
)

# Request payload for V1n#load.
#
# @!attribute [rw] feature
#   @return [String]
#
# @!attribute [rw] sport
#   @return [String]
#
# @!attribute [rw] league
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
V1nLoadMatch = Struct.new(
  :feature,
  :sport,
  :league,
  :limit,
  keyword_init: true
)

