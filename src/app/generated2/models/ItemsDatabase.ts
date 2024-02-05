/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemsHosting } from './ItemsHosting';
import type { Users } from './Users';
export type ItemsDatabase = {
    id?: string;
    status?: string;
    sort?: number | null;
    user_created?: (string | Users) | null;
    date_created?: string | null;
    user_updated?: (string | Users) | null;
    date_updated?: string | null;
    name?: string | null;
    username?: string | null;
    password?: string | null;
    state?: string | null;
    hosting_id?: (string | ItemsHosting) | null;
    user_id?: (string | Users) | null;
};

