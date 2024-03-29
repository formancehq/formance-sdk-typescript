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

export class Reconciliation extends ClientSDK {
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
     * Create a policy
     *
     * @remarks
     * Create a policy
     */
    async createPolicy(
        input: shared.PolicyRequest,
        options?: RequestOptions
    ): Promise<operations.CreatePolicyResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => shared.PolicyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/api/reconciliation/policies")();

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
            operationID: "createPolicy",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
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
                    return operations.CreatePolicyResponse$.inboundSchema.parse({
                        ...responseFields$,
                        PolicyResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.CreatePolicyResponse$.inboundSchema.parse({
                        ...responseFields$,
                        reconciliationErrorResponse: val$,
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
     * Delete a policy
     *
     * @remarks
     * Delete a policy by its id.
     */
    async deletePolicy(
        input: operations.DeletePolicyRequest,
        options?: RequestOptions
    ): Promise<operations.DeletePolicyResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.DeletePolicyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            policyID: enc$.encodeSimple("policyID", payload$.policyID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/reconciliation/policies/{policyID}")(
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
            operationID: "deletePolicy",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
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
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.DeletePolicyResponse$.inboundSchema.parse({
                        ...responseFields$,
                        reconciliationErrorResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.DeletePolicyResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Get a policy
     */
    async getPolicy(
        input: operations.GetPolicyRequest,
        options?: RequestOptions
    ): Promise<operations.GetPolicyResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.GetPolicyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            policyID: enc$.encodeSimple("policyID", payload$.policyID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/reconciliation/policies/{policyID}")(
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
            operationID: "getPolicy",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
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
                    return operations.GetPolicyResponse$.inboundSchema.parse({
                        ...responseFields$,
                        PolicyResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetPolicyResponse$.inboundSchema.parse({
                        ...responseFields$,
                        reconciliationErrorResponse: val$,
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
     * Get a reconciliation
     */
    async getReconciliation(
        input: operations.GetReconciliationRequest,
        options?: RequestOptions
    ): Promise<operations.GetReconciliationResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.GetReconciliationRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            reconciliationID: enc$.encodeSimple("reconciliationID", payload$.reconciliationID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/api/reconciliation/reconciliations/{reconciliationID}"
        )(pathParams$);

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
            operationID: "getReconciliation",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
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
                    return operations.GetReconciliationResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ReconciliationResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetReconciliationResponse$.inboundSchema.parse({
                        ...responseFields$,
                        reconciliationErrorResponse: val$,
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
     * List policies
     */
    async listPolicies(
        input: operations.ListPoliciesRequest,
        options?: RequestOptions
    ): Promise<operations.ListPoliciesResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.ListPoliciesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/api/reconciliation/policies")();

        const query$ = [
            enc$.encodeForm("cursor", payload$.cursor, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("pageSize", payload$.pageSize, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "listPolicies",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
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
                    return operations.ListPoliciesResponse$.inboundSchema.parse({
                        ...responseFields$,
                        PoliciesCursorResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.ListPoliciesResponse$.inboundSchema.parse({
                        ...responseFields$,
                        reconciliationErrorResponse: val$,
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
     * List reconciliations
     */
    async listReconciliations(
        input: operations.ListReconciliationsRequest,
        options?: RequestOptions
    ): Promise<operations.ListReconciliationsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.ListReconciliationsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/api/reconciliation/reconciliations")();

        const query$ = [
            enc$.encodeForm("cursor", payload$.cursor, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("pageSize", payload$.pageSize, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.authorization === "function") {
            security$ = { authorization: await this.options$.authorization() };
        } else if (this.options$.authorization) {
            security$ = { authorization: this.options$.authorization };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "listReconciliations",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
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
                    return operations.ListReconciliationsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ReconciliationsCursorResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.ListReconciliationsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        reconciliationErrorResponse: val$,
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
     * Reconcile using a policy
     *
     * @remarks
     * Reconcile using a policy
     */
    async reconcile(
        input: operations.ReconcileRequest,
        options?: RequestOptions
    ): Promise<operations.ReconcileResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.ReconcileRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.ReconciliationRequest, { explode: true });

        const pathParams$ = {
            policyID: enc$.encodeSimple("policyID", payload$.policyID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/api/reconciliation/policies/{policyID}/reconciliation"
        )(pathParams$);

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
            operationID: "reconcile",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
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
                    return operations.ReconcileResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ReconciliationResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.ReconcileResponse$.inboundSchema.parse({
                        ...responseFields$,
                        reconciliationErrorResponse: val$,
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
     * Get server info
     */
    async reconciliationgetServerInfo(
        options?: RequestOptions
    ): Promise<operations.ReconciliationgetServerInfoResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/api/reconciliation/_info")();

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
            operationID: "reconciliationgetServerInfo",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
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
                    return operations.ReconciliationgetServerInfoResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ServerInfo: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.ReconciliationgetServerInfoResponse$.inboundSchema.parse({
                        ...responseFields$,
                        reconciliationErrorResponse: val$,
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
