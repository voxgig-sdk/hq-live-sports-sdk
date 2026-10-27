<?php
declare(strict_types=1);

// HqLiveSports SDK utility: result_headers

class HqLiveSportsResultHeaders
{
    public static function call(HqLiveSportsContext $ctx): ?HqLiveSportsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
