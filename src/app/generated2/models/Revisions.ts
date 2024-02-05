/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from './Activity';
import type { Collections } from './Collections';
import type { Versions } from './Versions';
export type Revisions = {
    /**
     * Unique identifier for the revision.
     */
    id?: number;
    /**
     * Unique identifier for the activity record.
     */
    activity?: (number | Activity);
    /**
     * Collection of the updated item.
     */
    collection?: (string | Collections);
    /**
     * Primary key of updated item.
     */
    item?: string;
    /**
     * Copy of item state at time of update.
     */
    data?: Record<string, any> | null;
    /**
     * Changes between the previous and the current revision.
     */
    delta?: Record<string, any>;
    /**
     * If the current item was updated relationally, this is the id of the parent revision record
     */
    parent?: number | null;
    /**
     * Associated version of this revision.
     */
    version?: (string | Versions);
};

