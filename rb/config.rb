# HqLiveSports SDK configuration

module HqLiveSportsConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "HqLiveSports",
        "slug" => "hq-live-sports",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "now" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://intelligencehq.io",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "v1n" => {},
        },
      },
      "entity" => {
        "v1n" => {
          "fields" => [
            {
              "name" => "as_of",
              "title" => "As Of",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "data",
              "title" => "Data",
              "type" => "`$ANY`",
              "req" => true,
              "short" => "Feature-specific HQ payload",
            },
            {
              "name" => "feature",
              "title" => "Feature",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "ok",
              "title" => "Ok",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "sport",
              "title" => "Sport",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "from" => {
              "feature" => "feature",
              "sport" => "sport",
            },
            "name" => "id",
            "parts" => [
              "sport",
              "feature",
            ],
            "sep" => "/",
          },
          "name" => "v1n",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/{sport}/{feature}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "var" => "sport",
                    },
                    {
                      "var" => "feature",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "{sport}",
                    "{feature}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "feature",
                        "orig" => "feature",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "sport",
                        "orig" => "sport",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "league",
                        "orig" => "league",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "feature",
                      "sport",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    HqLiveSportsFeatures.make_feature(name)
  end
end
