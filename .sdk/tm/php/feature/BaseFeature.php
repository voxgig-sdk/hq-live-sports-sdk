<?php
declare(strict_types=1);

// HqLiveSports SDK base feature

class HqLiveSportsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HqLiveSportsContext $ctx, array $options): void {}
    public function PostConstruct(HqLiveSportsContext $ctx): void {}
    public function PostConstructEntity(HqLiveSportsContext $ctx): void {}
    public function SetData(HqLiveSportsContext $ctx): void {}
    public function GetData(HqLiveSportsContext $ctx): void {}
    public function GetMatch(HqLiveSportsContext $ctx): void {}
    public function SetMatch(HqLiveSportsContext $ctx): void {}
    public function PrePoint(HqLiveSportsContext $ctx): void {}
    public function PreSpec(HqLiveSportsContext $ctx): void {}
    public function PreRequest(HqLiveSportsContext $ctx): void {}
    public function PreResponse(HqLiveSportsContext $ctx): void {}
    public function PreResult(HqLiveSportsContext $ctx): void {}
    public function PreDone(HqLiveSportsContext $ctx): void {}
    public function PreUnexpected(HqLiveSportsContext $ctx): void {}
}
