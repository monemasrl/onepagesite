/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Files } from './Files';
import type { ItemsTeams } from './ItemsTeams';
import type { Roles } from './Roles';
export type Users = {
    /**
     * Unique identifier for the user.
     */
    id?: string;
    /**
     * First name of the user.
     */
    first_name?: string;
    /**
     * Last name of the user.
     */
    last_name?: string;
    /**
     * Unique email address for the user.
     */
    email?: string;
    /**
     * Password of the user.
     */
    password?: string;
    /**
     * The user's location.
     */
    location?: string | null;
    /**
     * The user's title.
     */
    title?: string | null;
    /**
     * The user's description.
     */
    description?: string | null;
    /**
     * The user's tags.
     */
    tags?: Array<string> | null;
    /**
     * The user's avatar.
     */
    avatar?: (string | Files) | null;
    /**
     * The user's language used in Directus.
     */
    language?: string;
    /**
     * The 2FA secret string that's used to generate one time passwords.
     */
    tfa_secret?: string | null;
    /**
     * Status of the user.
     */
    status?: Users.status;
    /**
     * Unique identifier of the role of this user.
     */
    role?: (string | Roles);
    /**
     * Static token for the user.
     */
    token?: string | null;
    /**
     * When this user used the API last.
     */
    last_access?: string | null;
    /**
     * Last page that the user was on.
     */
    last_page?: string | null;
    provider?: string;
    external_identifier?: string | null;
    auth_data?: any;
    email_notifications?: boolean | null;
    appearance?: string | null;
    theme_dark?: string | null;
    theme_light?: string | null;
    theme_light_overrides?: any;
    theme_dark_overrides?: any;
    teams_id?: (string | ItemsTeams) | null;
};
export namespace Users {
    /**
     * Status of the user.
     */
    export enum status {
        ACTIVE = 'active',
        INVITED = 'invited',
        DRAFT = 'draft',
        SUSPENDED = 'suspended',
        DELETED = 'deleted',
    }
}

