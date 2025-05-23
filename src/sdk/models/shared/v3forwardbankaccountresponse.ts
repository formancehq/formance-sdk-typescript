/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3ForwardBankAccountResponseData = {
  /**
   * Since this call is asynchronous, the response will contain the ID of the task that was created to forward the bank account to the PSP. You can use the task API to check the status of the task and get the resulting bank account ID.
   *
   * @remarks
   */
  taskID: string;
};

export type V3ForwardBankAccountResponse = {
  data: V3ForwardBankAccountResponseData;
};

/** @internal */
export const V3ForwardBankAccountResponseData$inboundSchema: z.ZodType<
  V3ForwardBankAccountResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  taskID: z.string(),
});

/** @internal */
export type V3ForwardBankAccountResponseData$Outbound = {
  taskID: string;
};

/** @internal */
export const V3ForwardBankAccountResponseData$outboundSchema: z.ZodType<
  V3ForwardBankAccountResponseData$Outbound,
  z.ZodTypeDef,
  V3ForwardBankAccountResponseData
> = z.object({
  taskID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ForwardBankAccountResponseData$ {
  /** @deprecated use `V3ForwardBankAccountResponseData$inboundSchema` instead. */
  export const inboundSchema = V3ForwardBankAccountResponseData$inboundSchema;
  /** @deprecated use `V3ForwardBankAccountResponseData$outboundSchema` instead. */
  export const outboundSchema = V3ForwardBankAccountResponseData$outboundSchema;
  /** @deprecated use `V3ForwardBankAccountResponseData$Outbound` instead. */
  export type Outbound = V3ForwardBankAccountResponseData$Outbound;
}

export function v3ForwardBankAccountResponseDataToJSON(
  v3ForwardBankAccountResponseData: V3ForwardBankAccountResponseData,
): string {
  return JSON.stringify(
    V3ForwardBankAccountResponseData$outboundSchema.parse(
      v3ForwardBankAccountResponseData,
    ),
  );
}

export function v3ForwardBankAccountResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<V3ForwardBankAccountResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ForwardBankAccountResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ForwardBankAccountResponseData' from JSON`,
  );
}

/** @internal */
export const V3ForwardBankAccountResponse$inboundSchema: z.ZodType<
  V3ForwardBankAccountResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => V3ForwardBankAccountResponseData$inboundSchema),
});

/** @internal */
export type V3ForwardBankAccountResponse$Outbound = {
  data: V3ForwardBankAccountResponseData$Outbound;
};

/** @internal */
export const V3ForwardBankAccountResponse$outboundSchema: z.ZodType<
  V3ForwardBankAccountResponse$Outbound,
  z.ZodTypeDef,
  V3ForwardBankAccountResponse
> = z.object({
  data: z.lazy(() => V3ForwardBankAccountResponseData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ForwardBankAccountResponse$ {
  /** @deprecated use `V3ForwardBankAccountResponse$inboundSchema` instead. */
  export const inboundSchema = V3ForwardBankAccountResponse$inboundSchema;
  /** @deprecated use `V3ForwardBankAccountResponse$outboundSchema` instead. */
  export const outboundSchema = V3ForwardBankAccountResponse$outboundSchema;
  /** @deprecated use `V3ForwardBankAccountResponse$Outbound` instead. */
  export type Outbound = V3ForwardBankAccountResponse$Outbound;
}

export function v3ForwardBankAccountResponseToJSON(
  v3ForwardBankAccountResponse: V3ForwardBankAccountResponse,
): string {
  return JSON.stringify(
    V3ForwardBankAccountResponse$outboundSchema.parse(
      v3ForwardBankAccountResponse,
    ),
  );
}

export function v3ForwardBankAccountResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3ForwardBankAccountResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ForwardBankAccountResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ForwardBankAccountResponse' from JSON`,
  );
}
