/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Files } from './Files';
import type { ItemsHosting } from './ItemsHosting';
import type { ItemsSitesStaff } from './ItemsSitesStaff';
import type { Users } from './Users';
export type ItemsSites = {
    id?: string;
    status?: string;
    user_created?: (string | Users) | null;
    date_created?: string | null;
    user_updated?: (string | Users) | null;
    date_updated?: string | null;
    hosting_id?: (string | ItemsHosting) | null;
    title?: string | null;
    description?: string | null;
    featured_image?: (string | Files) | null;
    main?: string | null;
    fiscal_code?: string | null;
    company_name?: string | null;
    addresses?: any;
    social?: any;
    logo?: (string | Files) | null;
    capitale_sociale?: string | null;
    staff?: Array<(string | ItemsSitesStaff)> | null;
};

