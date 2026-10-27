// Typed models for the HqLiveSports SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface V1n {
  as_of: string
  data: any
  feature: string
  id?: string
  ok: boolean
  sport: string
}

export interface V1nLoadMatch {
  feature: string
  sport: string
  league?: string
  limit?: number
}

