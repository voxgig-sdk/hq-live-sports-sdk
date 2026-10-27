import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "v1n",
    "accessor": "V1n",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/{sport}/{feature}",
    "args": [
      {
        "name": "feature",
        "wire": "feature",
        "value": "p1"
      },
      {
        "name": "sport",
        "wire": "sport",
        "value": "p2"
      }
    ],
    "select": {
      "league": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "league",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "league",
        "wire": "league"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "ok": true,
      "sport": "x",
      "feature": "x",
      "as_of": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
