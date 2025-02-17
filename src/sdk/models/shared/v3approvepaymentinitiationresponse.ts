/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3ApprovePaymentInitiationResponseData = {
  /**
   * Since this call is asynchronous, the response will contain the ID of the task that was created to approve the payment initiation. You can use the task API to check the status of the task and get the resulting payment ID.
   *
   * @remarks
   */
  taskID: string;
};

export type V3ApprovePaymentInitiationResponse = {
  data: V3ApprovePaymentInitiationResponseData;
};

/** @internal */
export const V3ApprovePaymentInitiationResponseData$inboundSchema: z.ZodType<
  V3ApprovePaymentInitiationResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  taskID: z.string(),
});

/** @internal */
export type V3ApprovePaymentInitiationResponseData$Outbound = {
  taskID: string;
};

/** @internal */
export const V3ApprovePaymentInitiationResponseData$outboundSchema: z.ZodType<
  V3ApprovePaymentInitiationResponseData$Outbound,
  z.ZodTypeDef,
  V3ApprovePaymentInitiationResponseData
> = z.object({
  taskID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ApprovePaymentInitiationResponseData$ {
  /** @deprecated use `V3ApprovePaymentInitiationResponseData$inboundSchema` instead. */
  export const inboundSchema =
    V3ApprovePaymentInitiationResponseData$inboundSchema;
  /** @deprecated use `V3ApprovePaymentInitiationResponseData$outboundSchema` instead. */
  export const outboundSchema =
    V3ApprovePaymentInitiationResponseData$outboundSchema;
  /** @deprecated use `V3ApprovePaymentInitiationResponseData$Outbound` instead. */
  export type Outbound = V3ApprovePaymentInitiationResponseData$Outbound;
}

export function v3ApprovePaymentInitiationResponseDataToJSON(
  v3ApprovePaymentInitiationResponseData:
    V3ApprovePaymentInitiationResponseData,
): string {
  return JSON.stringify(
    V3ApprovePaymentInitiationResponseData$outboundSchema.parse(
      v3ApprovePaymentInitiationResponseData,
    ),
  );
}

export function v3ApprovePaymentInitiationResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<V3ApprovePaymentInitiationResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V3ApprovePaymentInitiationResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ApprovePaymentInitiationResponseData' from JSON`,
  );
}

/** @internal */
export const V3ApprovePaymentInitiationResponse$inboundSchema: z.ZodType<
  V3ApprovePaymentInitiationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => V3ApprovePaymentInitiationResponseData$inboundSchema),
});

/** @internal */
export type V3ApprovePaymentInitiationResponse$Outbound = {
  data: V3ApprovePaymentInitiationResponseData$Outbound;
};

/** @internal */
export const V3ApprovePaymentInitiationResponse$outboundSchema: z.ZodType<
  V3ApprovePaymentInitiationResponse$Outbound,
  z.ZodTypeDef,
  V3ApprovePaymentInitiationResponse
> = z.object({
  data: z.lazy(() => V3ApprovePaymentInitiationResponseData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ApprovePaymentInitiationResponse$ {
  /** @deprecated use `V3ApprovePaymentInitiationResponse$inboundSchema` instead. */
  export const inboundSchema = V3ApprovePaymentInitiationResponse$inboundSchema;
  /** @deprecated use `V3ApprovePaymentInitiationResponse$outboundSchema` instead. */
  export const outboundSchema =
    V3ApprovePaymentInitiationResponse$outboundSchema;
  /** @deprecated use `V3ApprovePaymentInitiationResponse$Outbound` instead. */
  export type Outbound = V3ApprovePaymentInitiationResponse$Outbound;
}

export function v3ApprovePaymentInitiationResponseToJSON(
  v3ApprovePaymentInitiationResponse: V3ApprovePaymentInitiationResponse,
): string {
  return JSON.stringify(
    V3ApprovePaymentInitiationResponse$outboundSchema.parse(
      v3ApprovePaymentInitiationResponse,
    ),
  );
}

export function v3ApprovePaymentInitiationResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3ApprovePaymentInitiationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V3ApprovePaymentInitiationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ApprovePaymentInitiationResponse' from JSON`,
  );
}
