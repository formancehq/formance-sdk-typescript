/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import {
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
 * Update the config of a connector
 *
 * @remarks
 * Update connector config
 */
export async function paymentsUpdateConnectorConfigV1(
  client$: SDKCore,
  request: operations.UpdateConnectorConfigV1Request,
  options?: RequestOptions,
): Promise<
  Result<
    operations.UpdateConnectorConfigV1Response,
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
      operations.UpdateConnectorConfigV1Request$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$("body", payload$.ConnectorConfig, {
    explode: true,
  });

  const pathParams$ = {
    connector: encodeSimple$("connector", payload$.connector, {
      explode: false,
      charEncoding: "percent",
    }),
    connectorId: encodeSimple$("connectorId", payload$.connectorId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc(
    "/api/payments/connectors/{connector}/{connectorId}/config",
  )(pathParams$);

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const security$ = await extractSecurity(client$.options$.security);
  const context = {
    operationID: "updateConnectorConfigV1",
    oAuth2Scopes: [],
    securitySource: client$.options$.security,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
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
    operations.UpdateConnectorConfigV1Response,
    | errors.PaymentsErrorResponse
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.nil(204, operations.UpdateConnectorConfigV1Response$inboundSchema),
    m$.jsonErr("default", errors.PaymentsErrorResponse$inboundSchema),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}