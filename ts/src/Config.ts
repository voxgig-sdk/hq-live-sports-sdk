
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'HqLiveSports',
        slug: "hq-live-sports",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://intelligencehq.io",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        v1n: {
        },
  
    }
  }


  entity = {
    "v1n": {
      "fields": [
        {
          "name": "as_of",
          "title": "As Of",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$ANY`",
          "req": true,
          "short": "Feature-specific HQ payload"
        },
        {
          "name": "feature",
          "title": "Feature",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "ok",
          "title": "Ok",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "sport",
          "title": "Sport",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "from": {
          "feature": "feature",
          "sport": "sport"
        },
        "name": "id",
        "parts": [
          "sport",
          "feature"
        ],
        "sep": "/"
      },
      "name": "v1n",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/{sport}/{feature}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "var": "sport"
                },
                {
                  "var": "feature"
                }
              ],
              "parts": [
                "api",
                "v1",
                "{sport}",
                "{feature}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "feature",
                    "orig": "feature",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "sport",
                    "orig": "sport",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "league",
                    "orig": "league",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "feature",
                  "sport"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

