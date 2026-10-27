

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HqLiveSportsSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('V1nEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HQ_LIVE_SPORTS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HQ_LIVE_SPORTS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HqLiveSportsSDK.test()
    const ent = testsdk.V1n()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = HqLiveSportsSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.V1n().load({"feature":1,"sport":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HQ_LIVE_SPORTS_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'v1n.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"as_of":{"a":true,"fo":"date-time","h":"As Of","n":"as_of","r":true,"t":"`$STRING`","key$":"as_of","index$":0},"data":{"a":true,"h":"Data","n":"data","r":true,"sh":"Feature-specific HQ payload","t":"`$ANY`","key$":"data","index$":1},"feature":{"a":true,"h":"Feature","n":"feature","r":true,"t":"`$STRING`","key$":"feature","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"ok":{"a":true,"h":"Ok","n":"ok","r":true,"t":"`$BOOLEAN`","key$":"ok","index$":4},"sport":{"a":true,"h":"Sport","n":"sport","r":true,"t":"`$STRING`","key$":"sport","index$":5}},"id":{"field":"id","from":{"feature":"feature","sport":"sport"},"name":"id","parts":["sport","feature"],"sep":"/"},"name":"v1n","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/{sport}/{feature}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"feature","or":"feature","r":true,"t":"`$STRING`","index$":0,"ex":"predictions"},{"a":true,"k":"param","n":"sport","or":"sport","r":true,"t":"`$STRING`","index$":1,"ex":"football"}],"query":[{"a":true,"k":"query","n":"league","or":"league","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/{sport}/{feature}","q":{"exist":["feature","sport"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"var":"sport"},{"var":"feature"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"v1n","name__orig":"v1n","Name":"V1n","name_":"v1n","name-":"v1n","NAME":"V1N","index$":0}, {"active":true,"entity":"v1n","key$":"BasicV1nFlow","kind":"basic","name":"BasicV1nFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"v1n_ref01","srcdatavar":"v1n_ref01_data","suffix":"_dt0"},"m":{"id":"v1n01","sport":"sport01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-v1n_ref01"}}],"unreachable":true}]}, 'V1n', {"GET /api/v1/{sport}/{feature}":{"protocol":"http","parameters":[{"name":"sport","in":"path","required":true,"schema":{"type":"string","enum":["football","basketball","baseball","fighting","tennis","golf","soccer","hockey","horse-racing"]},"index$":0},{"name":"feature","in":"path","required":true,"schema":{"type":"string","enum":["predictions","vault","scores","standings","status","feed"]},"index$":1},{"name":"league","in":"query","required":false,"schema":{"type":"string"},"description":"Optional league selector, for example nfl, cfb or nba.","index$":2},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Maximum rows for supported score feeds.","index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let v1n_ref01_data = Object.values(setup.data.existing.v1n)[0] as any

  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/v1n/V1nTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HqLiveSportsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['v1n01','v1n02','v1n03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HQ_LIVE_SPORTS_TEST_V1N_ENTID': idmap,
    'HQ_LIVE_SPORTS_TEST_LIVE': 'FALSE',
    'HQ_LIVE_SPORTS_TEST_EXPLAIN': 'FALSE',
    'HQ_LIVE_SPORTS_APIKEY': '',
  })

  idmap = env['HQ_LIVE_SPORTS_TEST_V1N_ENTID']

  const live = 'TRUE' === env.HQ_LIVE_SPORTS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HQ_LIVE_SPORTS_TEST_V1N_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HqLiveSportsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.HQ_LIVE_SPORTS_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.HQ_LIVE_SPORTS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
