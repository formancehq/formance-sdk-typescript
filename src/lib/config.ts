/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../sdk/models/shared/index.js";
import { ClosedEnum } from "../sdk/types/enums.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
  /**
   * local server
   */
  "http://localhost",
  /**
   * A per-organization and per-environment API
   */
  "https://{organization}.{environment}.formance.cloud",
] as const;

/**
 * The environment name. Defaults to the production environment.
 */
export const ServerEnvironment = {
  EuSandbox: "eu.sandbox",
  Sandbox: "sandbox",
  EuWest1: "eu-west-1",
  UsEast1: "us-east-1",
} as const;
/**
 * The environment name. Defaults to the production environment.
 */
export type ServerEnvironment = ClosedEnum<typeof ServerEnvironment>;

export type SDKOptions = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security | (() => Promise<shared.Security>) | undefined;

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  serverIdx?: number | undefined;
  /**
   * Sets the environment variable for url substitution
   */
  environment?: ServerEnvironment | undefined;
  /**
   * Sets the organization variable for url substitution
   */
  organization?: string | undefined;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string | undefined;
  /**
   * Allows overriding the default user agent used by the SDK
   */
  userAgent?: string | undefined;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const serverParams: Params[] = [
    {},
    {
      "environment": options.environment ?? "eu.sandbox",
      "organization": options.organization ?? "orgID-stackID",
    },
  ];
  let params: Params = {};

  if (!serverURL) {
    const serverIdx = options.serverIdx ?? 0;
    if (serverIdx < 0 || serverIdx >= ServerList.length) {
      throw new Error(`Invalid server index ${serverIdx}`);
    }
    serverURL = ServerList[serverIdx] || "";
    params = serverParams[serverIdx] || {};
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "v3.0.5",
  sdkVersion: "4.3.0",
  genVersion: "2.630.9",
  userAgent:
    "speakeasy-sdk/typescript 4.3.0 2.630.9 v3.0.5 @formance/formance-sdk",
} as const;
