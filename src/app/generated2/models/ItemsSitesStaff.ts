/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Files } from './Files';
import type { ItemsSites } from './ItemsSites';
import type { Users } from './Users';
export type ItemsSitesStaff = {
    id?: string;
    status?: string;
    sort?: number | null;
    user_created?: (string | Users) | null;
    date_created?: string | null;
    user_updated?: (string | Users) | null;
    date_updated?: string | null;
    firstname?: string | null;
    lastname?: string | null;
    department?: string | null;
    email?: string | null;
    phone?: string | null;
    image?: (string | Files) | null;
    site_id?: (string | ItemsSites) | null;
    slug?: string | null;
};

