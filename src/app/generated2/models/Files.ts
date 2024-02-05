/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Folders } from './Folders';
import type { Users } from './Users';
export type Files = {
    /**
     * Unique identifier for the file.
     */
    id?: string;
    /**
     * Where the file is stored. Either `local` for the local filesystem or the name of the storage adapter (for example `s3`).
     */
    storage?: string;
    /**
     * Name of the file on disk. By default, Directus uses a random hash for the filename.
     */
    filename_disk?: string;
    /**
     * How you want to the file to be named when it's being downloaded.
     */
    filename_download?: string;
    /**
     * Title for the file. Is extracted from the filename on upload, but can be edited by the user.
     */
    title?: string;
    /**
     * MIME type of the file.
     */
    type?: string;
    /**
     * Virtual folder where this file resides in.
     */
    folder?: (string | Folders) | null;
    /**
     * Who uploaded the file.
     */
    uploaded_by?: (string | Users);
    /**
     * When the file was uploaded.
     */
    uploaded_on?: string;
    modified_by?: (string | Users) | null;
    modified_on?: string;
    /**
     * Character set of the file.
     */
    charset?: string | null;
    /**
     * Size of the file in bytes.
     */
    filesize?: number;
    /**
     * Width of the file in pixels. Only applies to images.
     */
    width?: number | null;
    /**
     * Height of the file in pixels. Only applies to images.
     */
    height?: number | null;
    /**
     * Duration of the file in seconds. Only applies to audio and video.
     */
    duration?: number | null;
    /**
     * Where the file was embedded from.
     */
    embed?: string | null;
    /**
     * Description for the file.
     */
    description?: string | null;
    /**
     * Where the file was created. Is automatically populated based on EXIF data for images.
     */
    location?: string | null;
    /**
     * Tags for the file. Is automatically populated based on EXIF data for images.
     */
    tags?: Array<string> | null;
    /**
     * IPTC, EXIF, and ICC metadata extracted from file
     */
    metadata?: Record<string, any> | null;
};

