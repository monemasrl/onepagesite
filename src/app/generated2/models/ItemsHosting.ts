/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemsDatabase } from './ItemsDatabase';
import type { ItemsDomain } from './ItemsDomain';
import type { Users } from './Users';
export type ItemsHosting = {
    id?: string;
    status?: string;
    sort?: number | null;
    user_created?: (string | Users) | null;
    date_created?: string | null;
    user_updated?: (string | Users) | null;
    date_updated?: string | null;
    domain_id?: (string | ItemsDomain) | null;
    code?: string | null;
    type?: string | null;
    user_id?: (string | Users) | null;
    use_dns?: boolean | null;
    databases?: Array<(string | ItemsDatabase)> | null;
};

