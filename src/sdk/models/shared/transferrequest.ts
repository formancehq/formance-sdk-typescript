/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TransferRequest = {
  amount: bigint;
  asset: string;
  destination: string;
  source?: string | undefined;
};

/** @internal */
export const TransferRequest$inboundSchema: z.ZodType<
  TransferRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().transform(v => BigInt(v)),
  asset: z.string(),
  destination: z.string(),
  source: z.string().optional(),
});

/** @internal */
export type TransferRequest$Outbound = {
  amount: number;
  asset: string;
  destination: string;
  source?: string | undefined;
};

/** @internal */
export const TransferRequest$outboundSchema: z.ZodType<
  TransferRequest$Outbound,
  z.ZodTypeDef,
  TransferRequest
> = z.object({
  amount: z.bigint().transform(v => Number(v)),
  asset: z.string(),
  destination: z.string(),
  source: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferRequest$ {
  /** @deprecated use `TransferRequest$inboundSchema` instead. */
  export const inboundSchema = TransferRequest$inboundSchema;
  /** @deprecated use `TransferRequest$outboundSchema` instead. */
  export const outboundSchema = TransferRequest$outboundSchema;
  /** @deprecated use `TransferRequest$Outbound` instead. */
  export type Outbound = TransferRequest$Outbound;
}

export function transferRequestToJSON(
  transferRequest: TransferRequest,
): string {
  return JSON.stringify(TransferRequest$outboundSchema.parse(transferRequest));
}

export function transferRequestFromJSON(
  jsonString: string,
): SafeParseResult<TransferRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransferRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransferRequest' from JSON`,
  );
}
