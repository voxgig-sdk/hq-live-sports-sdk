<?php
declare(strict_types=1);

// Typed models for the HqLiveSports SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** V1n entity data model. */
class V1n
{
    public string $as_of;
    public mixed $data;
    public string $feature;
    public ?string $id = null;
    public bool $ok;
    public string $sport;
}

/** Request payload for V1n#load. */
class V1nLoadMatch
{
    public string $feature;
    public string $sport;
    public ?string $league = null;
    public ?int $limit = null;
}

