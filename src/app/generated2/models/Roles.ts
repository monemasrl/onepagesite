/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Users } from './Users';
export type Roles = {
    /**
     * Unique identifier for the role.
     */
    id?: string;
    /**
     * Name of the role.
     */
    name?: string;
    /**
     * The role's icon.
     */
    icon?: string;
    /**
     * Description of the role.
     */
    description?: string | null;
    /**
     * Array of IP addresses that are allowed to connect to the API as a user of this role.
     */
    ip_access?: Array<string>;
    /**
     * Whether or not this role enforces the use of 2FA.
     */
    enforce_tfa?: boolean;
    /**
     * Admin role. If true, skips all permission checks.
     */
    admin_access?: boolean;
    /**
     * The users in the role are allowed to use the app.
     */
    app_access?: boolean;
    users?: Array<(string | Users)> | null;
};

