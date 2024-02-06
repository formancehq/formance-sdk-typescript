/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPClient } from "./http";
import { pathToFunc } from "./url";
import { RetryConfig } from "./retries";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * local server
     */
    "http://localhost",
] as const;

export type SDKOptions = {
    authorization?: string | (() => Promise<string>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL {
    let serverURL = options.serverURL;

    const params: Record<string, string> = {};
    const serverIdx = options.serverIdx ?? 0;

    if (!serverURL) {
        serverURL = ServerList[serverIdx] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = Object.freeze({
    language: "typescript",
    openapiDocVersion: "v2.0.0-rc.4",
    sdkVersion: "v2.0.0-rc.4",
    genVersion: "2.237.2",
    userAgent: "speakeasy-sdk/typescript v2.0.0-rc.4 2.237.2 v2.0.0-rc.4 @formance/formance-sdk",
});
