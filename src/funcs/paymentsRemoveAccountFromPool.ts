/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
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
 * Remove an account from a pool
 *
 * @remarks
 * Remove an account from a pool by its id.
 */
export async function paymentsRemoveAccountFromPool(
  client$: SDKCore,
  request: operations.RemoveAccountFromPoolRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.RemoveAccountFromPoolResponse,
    | errors.PaymentsErrorResponse
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.RemoveAccountFromPoolRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    accountId: encodeSimple$("accountId", payload$.accountId, {
      explode: false,
      charEncoding: "percent",
    }),
    poolId: encodeSimple$("poolId", payload$.poolId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/api/payments/pools/{poolId}/accounts/{accountId}")(
    pathParams$,
  );

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const security$ = await extractSecurity(client$.options$.security);
  const context = {
    operationID: "removeAccountFromPool",
    oAuth2Scopes: [],
    securitySource: client$.options$.security,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "DELETE",
    path: path$,
    headers: headers$,
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
    operations.RemoveAccountFromPoolResponse,
    | errors.PaymentsErrorResponse
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.nil(204, operations.RemoveAccountFromPoolResponse$inboundSchema),
    m$.jsonErr("default", errors.PaymentsErrorResponse$inboundSchema),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}