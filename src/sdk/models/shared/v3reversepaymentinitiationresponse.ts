/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3ReversePaymentInitiationResponseData = {
  /**
   * Related payment initiation reversal object ID created.
   *
   * @remarks
   */
  paymentInitiationReversalID?: string | undefined;
  /**
   * Since this call is asynchronous, the response will contain the ID of the task that was created to reverse the payment initiation. You can use the task API to check the status of the task and get the resulting payment ID.
   *
   * @remarks
   */
  taskID?: string | undefined;
};

export type V3ReversePaymentInitiationResponse = {
  data: V3ReversePaymentInitiationResponseData;
};

/** @internal */
export const V3ReversePaymentInitiationResponseData$inboundSchema: z.ZodType<
  V3ReversePaymentInitiationResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  paymentInitiationReversalID: z.string().optional(),
  taskID: z.string().optional(),
});

/** @internal */
export type V3ReversePaymentInitiationResponseData$Outbound = {
  paymentInitiationReversalID?: string | undefined;
  taskID?: string | undefined;
};

/** @internal */
export const V3ReversePaymentInitiationResponseData$outboundSchema: z.ZodType<
  V3ReversePaymentInitiationResponseData$Outbound,
  z.ZodTypeDef,
  V3ReversePaymentInitiationResponseData
> = z.object({
  paymentInitiationReversalID: z.string().optional(),
  taskID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ReversePaymentInitiationResponseData$ {
  /** @deprecated use `V3ReversePaymentInitiationResponseData$inboundSchema` instead. */
  export const inboundSchema =
    V3ReversePaymentInitiationResponseData$inboundSchema;
  /** @deprecated use `V3ReversePaymentInitiationResponseData$outboundSchema` instead. */
  export const outboundSchema =
    V3ReversePaymentInitiationResponseData$outboundSchema;
  /** @deprecated use `V3ReversePaymentInitiationResponseData$Outbound` instead. */
  export type Outbound = V3ReversePaymentInitiationResponseData$Outbound;
}

export function v3ReversePaymentInitiationResponseDataToJSON(
  v3ReversePaymentInitiationResponseData:
    V3ReversePaymentInitiationResponseData,
): string {
  return JSON.stringify(
    V3ReversePaymentInitiationResponseData$outboundSchema.parse(
      v3ReversePaymentInitiationResponseData,
    ),
  );
}

export function v3ReversePaymentInitiationResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<V3ReversePaymentInitiationResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V3ReversePaymentInitiationResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ReversePaymentInitiationResponseData' from JSON`,
  );
}

/** @internal */
export const V3ReversePaymentInitiationResponse$inboundSchema: z.ZodType<
  V3ReversePaymentInitiationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => V3ReversePaymentInitiationResponseData$inboundSchema),
});

/** @internal */
export type V3ReversePaymentInitiationResponse$Outbound = {
  data: V3ReversePaymentInitiationResponseData$Outbound;
};

/** @internal */
export const V3ReversePaymentInitiationResponse$outboundSchema: z.ZodType<
  V3ReversePaymentInitiationResponse$Outbound,
  z.ZodTypeDef,
  V3ReversePaymentInitiationResponse
> = z.object({
  data: z.lazy(() => V3ReversePaymentInitiationResponseData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ReversePaymentInitiationResponse$ {
  /** @deprecated use `V3ReversePaymentInitiationResponse$inboundSchema` instead. */
  export const inboundSchema = V3ReversePaymentInitiationResponse$inboundSchema;
  /** @deprecated use `V3ReversePaymentInitiationResponse$outboundSchema` instead. */
  export const outboundSchema =
    V3ReversePaymentInitiationResponse$outboundSchema;
  /** @deprecated use `V3ReversePaymentInitiationResponse$Outbound` instead. */
  export type Outbound = V3ReversePaymentInitiationResponse$Outbound;
}

export function v3ReversePaymentInitiationResponseToJSON(
  v3ReversePaymentInitiationResponse: V3ReversePaymentInitiationResponse,
): string {
  return JSON.stringify(
    V3ReversePaymentInitiationResponse$outboundSchema.parse(
      v3ReversePaymentInitiationResponse,
    ),
  );
}

export function v3ReversePaymentInitiationResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3ReversePaymentInitiationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V3ReversePaymentInitiationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ReversePaymentInitiationResponse' from JSON`,
  );
}
