/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3InitiatePaymentResponseData = {
  /**
   * Related payment initiation object ID created.
   *
   * @remarks
   */
  paymentInitiationID?: string | undefined;
  /**
   * Will be filled if the noValidation query parameter is set to true. Since this call is asynchronous, the response will contain the ID of the task that was created to create the payment on the PSP. You can use the task API to check the status of the task and get the resulting payment ID
   *
   * @remarks
   */
  taskID?: string | undefined;
};

export type V3InitiatePaymentResponse = {
  data: V3InitiatePaymentResponseData;
};

/** @internal */
export const V3InitiatePaymentResponseData$inboundSchema: z.ZodType<
  V3InitiatePaymentResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  paymentInitiationID: z.string().optional(),
  taskID: z.string().optional(),
});

/** @internal */
export type V3InitiatePaymentResponseData$Outbound = {
  paymentInitiationID?: string | undefined;
  taskID?: string | undefined;
};

/** @internal */
export const V3InitiatePaymentResponseData$outboundSchema: z.ZodType<
  V3InitiatePaymentResponseData$Outbound,
  z.ZodTypeDef,
  V3InitiatePaymentResponseData
> = z.object({
  paymentInitiationID: z.string().optional(),
  taskID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3InitiatePaymentResponseData$ {
  /** @deprecated use `V3InitiatePaymentResponseData$inboundSchema` instead. */
  export const inboundSchema = V3InitiatePaymentResponseData$inboundSchema;
  /** @deprecated use `V3InitiatePaymentResponseData$outboundSchema` instead. */
  export const outboundSchema = V3InitiatePaymentResponseData$outboundSchema;
  /** @deprecated use `V3InitiatePaymentResponseData$Outbound` instead. */
  export type Outbound = V3InitiatePaymentResponseData$Outbound;
}

export function v3InitiatePaymentResponseDataToJSON(
  v3InitiatePaymentResponseData: V3InitiatePaymentResponseData,
): string {
  return JSON.stringify(
    V3InitiatePaymentResponseData$outboundSchema.parse(
      v3InitiatePaymentResponseData,
    ),
  );
}

export function v3InitiatePaymentResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<V3InitiatePaymentResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3InitiatePaymentResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3InitiatePaymentResponseData' from JSON`,
  );
}

/** @internal */
export const V3InitiatePaymentResponse$inboundSchema: z.ZodType<
  V3InitiatePaymentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => V3InitiatePaymentResponseData$inboundSchema),
});

/** @internal */
export type V3InitiatePaymentResponse$Outbound = {
  data: V3InitiatePaymentResponseData$Outbound;
};

/** @internal */
export const V3InitiatePaymentResponse$outboundSchema: z.ZodType<
  V3InitiatePaymentResponse$Outbound,
  z.ZodTypeDef,
  V3InitiatePaymentResponse
> = z.object({
  data: z.lazy(() => V3InitiatePaymentResponseData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3InitiatePaymentResponse$ {
  /** @deprecated use `V3InitiatePaymentResponse$inboundSchema` instead. */
  export const inboundSchema = V3InitiatePaymentResponse$inboundSchema;
  /** @deprecated use `V3InitiatePaymentResponse$outboundSchema` instead. */
  export const outboundSchema = V3InitiatePaymentResponse$outboundSchema;
  /** @deprecated use `V3InitiatePaymentResponse$Outbound` instead. */
  export type Outbound = V3InitiatePaymentResponse$Outbound;
}

export function v3InitiatePaymentResponseToJSON(
  v3InitiatePaymentResponse: V3InitiatePaymentResponse,
): string {
  return JSON.stringify(
    V3InitiatePaymentResponse$outboundSchema.parse(v3InitiatePaymentResponse),
  );
}

export function v3InitiatePaymentResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3InitiatePaymentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3InitiatePaymentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3InitiatePaymentResponse' from JSON`,
  );
}
