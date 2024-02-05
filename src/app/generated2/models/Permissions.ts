/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Permissions = {
    /**
     * Unique identifier for the permission.
     */
    id?: number;
    /**
     * Unique identifier of the role this permission applies to.
     */
    role?: string | null;
    /**
     * What collection this permission applies to.
     */
    collection?: string;
    /**
     * What action this permission applies to.
     */
    action?: Permissions.action;
    /**
     * JSON structure containing the permissions checks for this permission.
     */
    permissions?: Record<string, any> | null;
    /**
     * JSON structure containing the validation checks for this permission.
     */
    validation?: Record<string, any> | null;
    /**
     * JSON structure containing the preset value for created/updated items.
     */
    presets?: Record<string, any> | null;
    /**
     * CSV of fields that the user is allowed to interact with.
     */
    fields?: Array<string> | null;
};
export namespace Permissions {
    /**
     * What action this permission applies to.
     */
    export enum action {
        CREATE = 'create',
        READ = 'read',
        UPDATE = 'update',
        DELETE = 'delete',
    }
}

