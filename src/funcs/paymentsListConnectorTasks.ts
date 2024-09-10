/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import {
  encodeFormQuery as encodeFormQuery$,
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
 * List tasks from a connector
 *
 * @remarks
 * List all tasks associated with this connector.
 *
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export async function paymentsListConnectorTasks(
  client$: SDKCore,
  request: operations.ListConnectorTasksRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.ListConnectorTasksResponse,
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
      operations.ListConnectorTasksRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    connector: encodeSimple$("connector", payload$.connector, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/api/payments/connectors/{connector}/tasks")(
    pathParams$,
  );

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
    operationID: "listConnectorTasks",
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
    operations.ListConnectorTasksResponse,
    | errors.PaymentsErrorResponse
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.ListConnectorTasksResponse$inboundSchema, {
      key: "TasksCursor",
    }),
    m$.jsonErr("default", errors.PaymentsErrorResponse$inboundSchema),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
