/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import * as errors from "../sdk/models/errors/index.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * List policies
 */
export async function reconciliationV1ListPolicies(
  client$: SDKCore,
  request: operations.ListPoliciesRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.ListPoliciesResponse,
    | errors.ReconciliationErrorResponse
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = typeof request === "undefined" ? {} : request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => operations.ListPoliciesRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const path$ = pathToFunc("/api/reconciliation/policies")();

  const query$ = encodeFormQuery$({
    "cursor": payload$.cursor,
    "pageSize": payload$.pageSize,
  });

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const authorization$ = await extractSecurity(client$.options$.authorization);
  const security$ = authorization$ == null
    ? {}
    : { authorization: authorization$ };
  const context = {
    operationID: "listPolicies",
    oAuth2Scopes: [],
    securitySource: client$.options$.authorization,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    path: path$,
    headers: headers$,
    query: query$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["default"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result$] = await m$.match<
    operations.ListPoliciesResponse,
    | errors.ReconciliationErrorResponse
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.ListPoliciesResponse$inboundSchema, {
      key: "PoliciesCursorResponse",
    }),
    m$.jsonErr("default", errors.ReconciliationErrorResponse$inboundSchema),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}