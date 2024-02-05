/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Operations } from './Operations';
import type { Users } from './Users';
export type Flows = {
    /**
     * Unique identifier for the flow.
     */
    id?: string;
    /**
     * The name of the flow.
     */
    name?: string;
    /**
     * Icon displayed in the Admin App for the flow.
     */
    icon?: string;
    /**
     * Color of the icon displayed in the Admin App for the flow.
     */
    color?: string | null;
    description?: string | null;
    /**
     * Current status of the flow.
     */
    status?: Flows.status;
    /**
     * Type of trigger for the flow. One of `hook`, `webhook`, `operation`, `schedule`, `manual`.
     */
    trigger?: string;
    /**
     * The permission used during the flow. One of `$public`, `$trigger`, `$full`, or UUID of a role.
     */
    accountability?: string;
    /**
     * Options of the selected trigger for the flow.
     */
    options?: Record<string, any> | null;
    /**
     * UUID of the operation connected to the trigger in the flow.
     */
    operation?: (string | Operations);
    /**
     * Timestamp in ISO8601 when the flow was created.
     */
    date_created?: string | null;
    /**
     * The user who created the flow.
     */
    user_created?: (string | Users);
    operations?: Array<(string | Operations)> | null;
};
export namespace Flows {
    /**
     * Current status of the flow.
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
    }
}

