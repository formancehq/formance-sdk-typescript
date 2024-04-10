/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";

export class Auth extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Create client
     */
    async createClient(
        input: shared.CreateClientRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateClientResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => shared.CreateClientRequest$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/api/auth/clients")();

        const query$ = "";

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "createClient",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.CreateClientResponse$.inboundSchema.parse({
                        ...responseFields$,
                        CreateClientResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Add a secret to a client
     */
    async createSecret(
        input: operations.CreateSecretRequest,
        options?: RequestOptions
    ): Promise<operations.CreateSecretResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.CreateSecretRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.CreateSecretRequest, { explode: true });

        const pathParams$ = {
            clientId: enc$.encodeSimple("clientId", payload$.clientId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/auth/clients/{clientId}/secrets")(
            pathParams$
        );

        const query$ = "";

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "createSecret",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.CreateSecretResponse$.inboundSchema.parse({
                        ...responseFields$,
                        CreateSecretResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Delete client
     */
    async deleteClient(
        input: operations.DeleteClientRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteClientResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.DeleteClientRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            clientId: enc$.encodeSimple("clientId", payload$.clientId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/auth/clients/{clientId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "deleteClient",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.DeleteClientResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Delete a secret from a client
     */
    async deleteSecret(
        input: operations.DeleteSecretRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteSecretResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.DeleteSecretRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            clientId: enc$.encodeSimple("clientId", payload$.clientId, {
                explode: false,
                charEncoding: "percent",
            }),
            secretId: enc$.encodeSimple("secretId", payload$.secretId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/auth/clients/{clientId}/secrets/{secretId}")(
            pathParams$
        );

        const query$ = "";

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "deleteSecret",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.DeleteSecretResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * List clients
     */
    async listClients(options?: RequestOptions): Promise<operations.ListClientsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/api/auth/clients")();

        const query$ = "";

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "listClients",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.ListClientsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ListClientsResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * List users
     *
     * @remarks
     * List users
     */
    async listUsers(options?: RequestOptions): Promise<operations.ListUsersResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/api/auth/users")();

        const query$ = "";

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "listUsers",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.ListUsersResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ListUsersResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Read client
     */
    async readClient(
        input: operations.ReadClientRequest,
        options?: RequestOptions
    ): Promise<operations.ReadClientResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.ReadClientRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            clientId: enc$.encodeSimple("clientId", payload$.clientId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/auth/clients/{clientId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "readClient",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.ReadClientResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ReadClientResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Read user
     *
     * @remarks
     * Read user
     */
    async readUser(
        input: operations.ReadUserRequest,
        options?: RequestOptions
    ): Promise<operations.ReadUserResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.ReadUserRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            userId: enc$.encodeSimple("userId", payload$.userId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/auth/users/{userId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "readUser",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.ReadUserResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ReadUserResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Update client
     */
    async updateClient(
        input: operations.UpdateClientRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateClientResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.UpdateClientRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.UpdateClientRequest, { explode: true });

        const pathParams$ = {
            clientId: enc$.encodeSimple("clientId", payload$.clientId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/auth/clients/{clientId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "updateClient",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.UpdateClientResponse$.inboundSchema.parse({
                        ...responseFields$,
                        UpdateClientResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
