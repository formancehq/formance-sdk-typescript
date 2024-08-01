/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";

export class Webhooks extends ClientSDK {
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
     * Activate one config
     *
     * @remarks
     * Activate a webhooks config by ID, to start receiving webhooks to its endpoint.
     */
    async activateConfig(
        request: operations.ActivateConfigRequest,
        options?: RequestOptions
    ): Promise<operations.ActivateConfigResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ActivateConfigRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/api/webhooks/configs/{id}/activate")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const authorization$ = await extractSecurity(this.options$.authorization);
        const security$ = authorization$ == null ? {} : { authorization: authorization$ };
        const context = {
            operationID: "activateConfig",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.ActivateConfigResponse>()
            .json(200, operations.ActivateConfigResponse$inboundSchema, { key: "ConfigResponse" })
            .json("default", errors.WebhooksErrorResponse$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Change the signing secret of a config
     *
     * @remarks
     * Change the signing secret of the endpoint of a webhooks config.
     *
     * If not passed or empty, a secret is automatically generated.
     * The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)
     *
     */
    async changeConfigSecret(
        request: operations.ChangeConfigSecretRequest,
        options?: RequestOptions
    ): Promise<operations.ChangeConfigSecretResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ChangeConfigSecretRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.ConfigChangeSecret, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/api/webhooks/configs/{id}/secret/change")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const authorization$ = await extractSecurity(this.options$.authorization);
        const security$ = authorization$ == null ? {} : { authorization: authorization$ };
        const context = {
            operationID: "changeConfigSecret",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.ChangeConfigSecretResponse>()
            .json(200, operations.ChangeConfigSecretResponse$inboundSchema, {
                key: "ConfigResponse",
            })
            .json("default", errors.WebhooksErrorResponse$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Deactivate one config
     *
     * @remarks
     * Deactivate a webhooks config by ID, to stop receiving webhooks to its endpoint.
     */
    async deactivateConfig(
        request: operations.DeactivateConfigRequest,
        options?: RequestOptions
    ): Promise<operations.DeactivateConfigResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeactivateConfigRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/api/webhooks/configs/{id}/deactivate")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const authorization$ = await extractSecurity(this.options$.authorization);
        const security$ = authorization$ == null ? {} : { authorization: authorization$ };
        const context = {
            operationID: "deactivateConfig",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.DeactivateConfigResponse>()
            .json(200, operations.DeactivateConfigResponse$inboundSchema, { key: "ConfigResponse" })
            .json("default", errors.WebhooksErrorResponse$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete one config
     *
     * @remarks
     * Delete a webhooks config by ID.
     */
    async deleteConfig(
        request: operations.DeleteConfigRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteConfigResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteConfigRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/api/webhooks/configs/{id}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const authorization$ = await extractSecurity(this.options$.authorization);
        const security$ = authorization$ == null ? {} : { authorization: authorization$ };
        const context = {
            operationID: "deleteConfig",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.DeleteConfigResponse>()
            .void(200, operations.DeleteConfigResponse$inboundSchema)
            .json("default", errors.WebhooksErrorResponse$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get many configs
     *
     * @remarks
     * Sorted by updated date descending
     */
    async getManyConfigs(
        request: operations.GetManyConfigsRequest,
        options?: RequestOptions
    ): Promise<operations.GetManyConfigsResponse> {
        const input$ = typeof request === "undefined" ? {} : request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetManyConfigsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/api/webhooks/configs")();

        const query$ = encodeFormQuery$({
            endpoint: payload$.endpoint,
            id: payload$.id,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const authorization$ = await extractSecurity(this.options$.authorization);
        const security$ = authorization$ == null ? {} : { authorization: authorization$ };
        const context = {
            operationID: "getManyConfigs",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetManyConfigsResponse>()
            .json(200, operations.GetManyConfigsResponse$inboundSchema, { key: "ConfigsResponse" })
            .json("default", errors.WebhooksErrorResponse$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Insert a new config
     *
     * @remarks
     * Insert a new webhooks config.
     *
     * The endpoint should be a valid https URL and be unique.
     *
     * The secret is the endpoint's verification secret.
     * If not passed or empty, a secret is automatically generated.
     * The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)
     *
     * All eventTypes are converted to lower-case when inserted.
     *
     */
    async insertConfig(
        request: shared.ConfigUser,
        options?: RequestOptions
    ): Promise<operations.InsertConfigResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => shared.ConfigUser$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/api/webhooks/configs")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const authorization$ = await extractSecurity(this.options$.authorization);
        const security$ = authorization$ == null ? {} : { authorization: authorization$ };
        const context = {
            operationID: "insertConfig",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.InsertConfigResponse>()
            .json(200, operations.InsertConfigResponse$inboundSchema, { key: "ConfigResponse" })
            .json("default", errors.WebhooksErrorResponse$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Test one config
     *
     * @remarks
     * Test a config by sending a webhook to its endpoint.
     */
    async testConfig(
        request: operations.TestConfigRequest,
        options?: RequestOptions
    ): Promise<operations.TestConfigResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TestConfigRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/api/webhooks/configs/{id}/test")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const authorization$ = await extractSecurity(this.options$.authorization);
        const security$ = authorization$ == null ? {} : { authorization: authorization$ };
        const context = {
            operationID: "testConfig",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.TestConfigResponse>()
            .json(200, operations.TestConfigResponse$inboundSchema, { key: "AttemptResponse" })
            .json("default", errors.WebhooksErrorResponse$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
