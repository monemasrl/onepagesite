/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Query = {
    /**
     * Control what fields are being returned in the object.
     */
    fields?: Array<string>;
    filter?: Record<string, any>;
    /**
     * Filter by items that contain the given search query in one of their fields.
     */
    search?: string;
    /**
     * How to sort the returned items.
     */
    sort?: Array<string>;
    /**
     * Set the maximum number of items that will be returned
     */
    limit?: number;
    /**
     * How many items to skip when fetching data.
     */
    offset?: number;
    /**
     * Cursor for use in pagination. Often used in combination with limit.
     */
    page?: number;
    /**
     * Deep allows you to set any of the other query parameters on a nested relational dataset.
     */
    deep?: Record<string, any>;
};

