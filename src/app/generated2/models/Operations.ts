/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Flows } from './Flows';
import type { Users } from './Users';
export type Operations = {
    /**
     * Unique identifier for the operation.
     */
    id?: string;
    /**
     * The name of the operation.
     */
    name?: string;
    /**
     * Key for the operation. Must be unique within a given flow.
     */
    key?: string;
    /**
     * Type of operation. One of `log`, `mail`, `notification`, `create`, `read`, `request`, `sleep`, `transform`, `trigger`, `condition`, or any type of custom operation extensions.
     */
    type?: string;
    /**
     * Position of the operation on the X axis within the flow workspace.
     */
    position_x?: number;
    /**
     * Position of the operation on the Y axis within the flow workspace.
     */
    position_y?: number;
    /**
     * Options depending on the type of the operation.
     */
    options?: Record<string, any> | null;
    /**
     * The operation triggered when the current operation succeeds (or `then` logic of a condition operation).
     */
    resolve?: (string | Operations);
    /**
     * The operation triggered when the current operation fails (or `otherwise` logic of a condition operation).
     */
    reject?: (string | Operations);
    flow?: (string | Flows);
    /**
     * Timestamp in ISO8601 when the operation was created.
     */
    date_created?: string | null;
    /**
     * The user who created the operation.
     */
    user_created?: (string | Users);
};

