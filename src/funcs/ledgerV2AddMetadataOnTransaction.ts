/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import {
  encodeFormQuery as encodeFormQuery$,
  encodeJSON as encodeJSON$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
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
 * Set the metadata of a transaction by its ID
 */
export async function ledgerV2AddMetadataOnTransaction(
  client$: SDKCore,
  request: operations.V2AddMetadataOnTransactionRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.V2AddMetadataOnTransactionResponse,
    | errors.V2ErrorResponse
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
      operations.V2AddMetadataOnTransactionRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

  const pathParams$ = {
    id: encodeSimple$("id", payload$.id, {
      explode: false,
      charEncoding: "percent",
    }),
    ledger: encodeSimple$("ledger", payload$.ledger, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc(
    "/api/ledger/v2/{ledger}/transactions/{id}/metadata",
  )(pathParams$);

  const query$ = encodeFormQuery$({
    "dryRun": payload$.dryRun,
  });

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Idempotency-Key": encodeSimple$(
      "Idempotency-Key",
      payload$["Idempotency-Key"],
      { explode: false, charEncoding: "none" },
    ),
  });

  const authorization$ = await extractSecurity(client$.options$.authorization);
  const security$ = authorization$ == null
    ? {}
    : { authorization: authorization$ };
  const context = {
    operationID: "v2AddMetadataOnTransaction",
    oAuth2Scopes: [],
    securitySource: client$.options$.authorization,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
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
    operations.V2AddMetadataOnTransactionResponse,
    | errors.V2ErrorResponse
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.nil(204, operations.V2AddMetadataOnTransactionResponse$inboundSchema),
    m$.jsonErr("default", errors.V2ErrorResponse$inboundSchema),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
