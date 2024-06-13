/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { encodeJSON as encodeJSON$ } from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as operations from "./models/operations";
import * as shared from "./models/shared";

export class Search extends ClientSDK {
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
     * Search
     *
     * @remarks
     * ElasticSearch query engine
     */
    async search(
        request: shared.Query,
        options?: RequestOptions
    ): Promise<operations.SearchResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => shared.Query$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/api/search/")();

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
            operationID: "search",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.SearchResponse>()
            .json(200, operations.SearchResponse$, { key: "Response" })
            .fail("default")
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get server info
     */
    async searchgetServerInfo(
        options?: RequestOptions
    ): Promise<operations.SearchgetServerInfoResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/api/search/_info")();

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
            operationID: "searchgetServerInfo",
            oAuth2Scopes: [],
            securitySource: this.options$.authorization,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.SearchgetServerInfoResponse>()
            .json(200, operations.SearchgetServerInfoResponse$, { key: "ServerInfo" })
            .fail("default")
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
