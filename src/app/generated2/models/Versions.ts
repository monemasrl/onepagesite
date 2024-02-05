/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collections } from './Collections';
import type { Users } from './Users';
export type Versions = {
    /**
     * Primary key of the Content Version.
     */
    id?: string;
    /**
     * Key of the Content Version, used as the value for the "version" query parameter.
     */
    key?: string;
    /**
     * Descriptive name of the Content Version.
     */
    name?: string;
    /**
     * Name of the collection the Content Version is created on.
     */
    collection?: (string | Collections);
    /**
     * The item the Content Version is created on.
     */
    item?: string;
    hash?: string | null;
    /**
     * When the Content Version was created.
     */
    date_created?: string | null;
    /**
     * When the Content Version was updated.
     */
    date_updated?: string | null;
    /**
     * User that created the Content Version.
     */
    user_created?: (string | Users);
    /**
     * User that updated the Content Version.
     */
    user_updated?: (string | Users);
};

