/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { ActivityService } from './services/ActivityService';
import { AssetsService } from './services/AssetsService';
import { AuthenticationService } from './services/AuthenticationService';
import { CollectionsService } from './services/CollectionsService';
import { ExtensionsService } from './services/ExtensionsService';
import { FieldsService } from './services/FieldsService';
import { FilesService } from './services/FilesService';
import { FlowsService } from './services/FlowsService';
import { FoldersService } from './services/FoldersService';
import { ItemsService } from './services/ItemsService';
import { ItemsDatabaseService } from './services/ItemsDatabaseService';
import { ItemsDomainService } from './services/ItemsDomainService';
import { ItemsHostingService } from './services/ItemsHostingService';
import { ItemsSitesService } from './services/ItemsSitesService';
import { ItemsSitesStaffService } from './services/ItemsSitesStaffService';
import { ItemsTeamsService } from './services/ItemsTeamsService';
import { OperationsService } from './services/OperationsService';
import { PermissionsService } from './services/PermissionsService';
import { PresetsService } from './services/PresetsService';
import { RelationsService } from './services/RelationsService';
import { RevisionsService } from './services/RevisionsService';
import { RolesService } from './services/RolesService';
import { SchemaService } from './services/SchemaService';
import { ServerService } from './services/ServerService';
import { SettingsService } from './services/SettingsService';
import { UsersService } from './services/UsersService';
import { VersionsService } from './services/VersionsService';
import { WebhooksService } from './services/WebhooksService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class CMDBApiClient {
    public readonly activity: ActivityService;
    public readonly assets: AssetsService;
    public readonly authentication: AuthenticationService;
    public readonly collections: CollectionsService;
    public readonly extensions: ExtensionsService;
    public readonly fields: FieldsService;
    public readonly files: FilesService;
    public readonly flows: FlowsService;
    public readonly folders: FoldersService;
    public readonly items: ItemsService;
    public readonly itemsDatabase: ItemsDatabaseService;
    public readonly itemsDomain: ItemsDomainService;
    public readonly itemsHosting: ItemsHostingService;
    public readonly itemsSites: ItemsSitesService;
    public readonly itemsSitesStaff: ItemsSitesStaffService;
    public readonly itemsTeams: ItemsTeamsService;
    public readonly operations: OperationsService;
    public readonly permissions: PermissionsService;
    public readonly presets: PresetsService;
    public readonly relations: RelationsService;
    public readonly revisions: RevisionsService;
    public readonly roles: RolesService;
    public readonly schema: SchemaService;
    public readonly server: ServerService;
    public readonly settings: SettingsService;
    public readonly users: UsersService;
    public readonly versions: VersionsService;
    public readonly webhooks: WebhooksService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://cmdb.service.monema.dev',
            VERSION: config?.VERSION ?? '10.8.3',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.activity = new ActivityService(this.request);
        this.assets = new AssetsService(this.request);
        this.authentication = new AuthenticationService(this.request);
        this.collections = new CollectionsService(this.request);
        this.extensions = new ExtensionsService(this.request);
        this.fields = new FieldsService(this.request);
        this.files = new FilesService(this.request);
        this.flows = new FlowsService(this.request);
        this.folders = new FoldersService(this.request);
        this.items = new ItemsService(this.request);
        this.itemsDatabase = new ItemsDatabaseService(this.request);
        this.itemsDomain = new ItemsDomainService(this.request);
        this.itemsHosting = new ItemsHostingService(this.request);
        this.itemsSites = new ItemsSitesService(this.request);
        this.itemsSitesStaff = new ItemsSitesStaffService(this.request);
        this.itemsTeams = new ItemsTeamsService(this.request);
        this.operations = new OperationsService(this.request);
        this.permissions = new PermissionsService(this.request);
        this.presets = new PresetsService(this.request);
        this.relations = new RelationsService(this.request);
        this.revisions = new RevisionsService(this.request);
        this.roles = new RolesService(this.request);
        this.schema = new SchemaService(this.request);
        this.server = new ServerService(this.request);
        this.settings = new SettingsService(this.request);
        this.users = new UsersService(this.request);
        this.versions = new VersionsService(this.request);
        this.webhooks = new WebhooksService(this.request);
    }
}

