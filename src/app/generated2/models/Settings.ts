/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Files } from './Files';
export type Settings = {
    /**
     * Unique identifier for the setting.
     */
    id?: number;
    /**
     * The name of the project.
     */
    project_name?: string;
    /**
     * The url of the project.
     */
    project_url?: string | null;
    /**
     * The brand color of the project.
     */
    project_color?: string | null;
    /**
     * The logo of the project.
     */
    project_logo?: string | null;
    /**
     * The foreground of the project.
     */
    public_foreground?: string | null;
    /**
     * The background of the project.
     */
    public_background?: string | null;
    /**
     * Note rendered on the public pages of the app.
     */
    public_note?: string | null;
    /**
     * Allowed authentication login attempts before the user's status is set to blocked.
     */
    auth_login_attempts?: number;
    /**
     * Authentication password policy.
     */
    auth_password_policy?: string | null;
    /**
     * What transformations are allowed in the assets endpoint.
     */
    storage_asset_transform?: Settings.storage_asset_transform | null;
    /**
     * Array of allowed
     */
    storage_asset_presets?: Array<{
        /**
         * Key for the asset. Used in the assets endpoint.
         */
        key?: string;
        /**
         * Whether to crop the thumbnail to match the size, or maintain the aspect ratio.
         */
        fit?: 'cover' | 'contain' | 'inside' | 'outside';
        /**
         * Width of the thumbnail.
         */
        width?: number;
        /**
         * Height of the thumbnail.
         */
        height?: number;
        /**
         * No image upscale
         */
        withoutEnlargement?: boolean;
        /**
         * Quality of the compression used.
         */
        quality?: number;
        /**
         * Reformat output image
         */
        format?: '' | 'jpeg' | 'png' | 'webp' | 'tiff' | 'avif';
        /**
         * Additional transformations to apply
         */
        transforms?: Array<{
            /**
             * The Sharp method name
             */
            method?: string;
            /**
             * A list of arguments to pass to the Sharp method
             */
            arguments?: Array<{
                /**
                 * A JSON representation of the argument value
                 */
                argument?: string;
            }> | null;
        }> | null;
    }> | null;
    custom_css?: string | null;
    /**
     * Default folder to place files
     */
    storage_default_folder?: string;
    basemaps?: any;
    mapbox_key?: string | null;
    module_bar?: any;
    project_descriptor?: string | null;
    default_language?: string;
    custom_aspect_ratios?: any;
    /**
     * $t:field_options.directus_settings.project_favicon_note
     */
    public_favicon?: (string | Files) | null;
    default_appearance?: string;
    default_theme_light?: string | null;
    theme_light_overrides?: any;
    default_theme_dark?: string | null;
    theme_dark_overrides?: any;
};
export namespace Settings {
    /**
     * What transformations are allowed in the assets endpoint.
     */
    export enum storage_asset_transform {
        ALL = 'all',
        NONE = 'none',
        PRESETS = 'presets',
    }
}

