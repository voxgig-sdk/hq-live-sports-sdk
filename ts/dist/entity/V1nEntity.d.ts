import { HqLiveSportsEntityBase } from '../HqLiveSportsEntityBase';
import type { HqLiveSportsSDK } from '../HqLiveSportsSDK';
import type { Control } from '../types';
import type { V1n, V1nLoadMatch } from '../HqLiveSportsTypes';
declare class V1nEntity extends HqLiveSportsEntityBase<V1n> {
    constructor(client: HqLiveSportsSDK, entopts: any);
    make(this: V1nEntity): V1nEntity;
    load(this: any, reqmatch?: V1nLoadMatch, ctrl?: Control): Promise<V1nEntity>;
}
export { V1nEntity };
