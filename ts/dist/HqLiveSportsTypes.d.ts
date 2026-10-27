export interface V1n {
    as_of: string;
    data: any;
    feature: string;
    id?: string;
    ok: boolean;
    sport: string;
}
export interface V1nLoadMatch {
    feature: string;
    sport: string;
    league?: string;
    limit?: number;
}
