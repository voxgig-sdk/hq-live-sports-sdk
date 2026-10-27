import { V1nEntity } from './entity/V1nEntity';
export type * from './HqLiveSportsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { HqLiveSportsEntityBase } from './HqLiveSportsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class HqLiveSportsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    V1n(entopts?: Record<string, any>): V1nEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): HqLiveSportsSDK;
    tester(testopts?: any, sdkopts?: any): HqLiveSportsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof HqLiveSportsSDK;
export { stdutil, config, BaseFeature, HqLiveSportsEntityBase, HqLiveSportsSDK, SDK, };
export type { DirectResult };
