<?php
declare(strict_types=1);

// HqLiveSports SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HqLiveSportsMakeContext
{
    public static function call(array $ctxmap, ?HqLiveSportsContext $basectx): HqLiveSportsContext
    {
        return new HqLiveSportsContext($ctxmap, $basectx);
    }
}
