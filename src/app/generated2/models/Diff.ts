/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Diff = {
    hash?: string;
    diff?: {
        collections?: Array<{
            collection?: string;
            diff?: Array<Record<string, any>>;
        }>;
        fields?: Array<{
            collection?: string;
            field?: string;
            diff?: Array<Record<string, any>>;
        }>;
        relations?: Array<{
            collection?: string;
            field?: string;
            related_collection?: string;
            diff?: Array<Record<string, any>>;
        }>;
    };
};

