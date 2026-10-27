-- Typed models for the HqLiveSports SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class V1n
---@field as_of string
---@field data any
---@field feature string
---@field id? string
---@field ok boolean
---@field sport string

---@class V1nLoadMatch
---@field feature string
---@field sport string
---@field league? string
---@field limit? number

local M = {}

return M
