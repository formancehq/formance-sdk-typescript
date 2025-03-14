/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { SDK } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Sdk Get Versions", async () => {
  const testHttpClient = createTestHTTPClient("getVersions");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.getVersions();
  expect(result.statusCode).toBe(200);
  expect(result.getVersionsResponse).toBeDefined();
  expect(result.getVersionsResponse).toEqual({
    env: "<value>",
    region: "<value>",
    versions: [
      {
        health: true,
        name: "<value>",
        version: "<value>",
      },
    ],
  });
});
