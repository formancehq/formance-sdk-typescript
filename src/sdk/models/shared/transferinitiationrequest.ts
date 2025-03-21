/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export enum TransferInitiationRequestType {
  Transfer = "TRANSFER",
  Payout = "PAYOUT",
}

export type TransferInitiationRequest = {
  amount: bigint;
  asset: string;
  connectorID?: string | undefined;
  description: string;
  destinationAccountID: string;
  metadata?: { [k: string]: string } | null | undefined;
  reference: string;
  scheduledAt: Date;
  sourceAccountID: string;
  type: TransferInitiationRequestType;
  validated: boolean;
};

/** @internal */
export const TransferInitiationRequestType$inboundSchema: z.ZodNativeEnum<
  typeof TransferInitiationRequestType
> = z.nativeEnum(TransferInitiationRequestType);

/** @internal */
export const TransferInitiationRequestType$outboundSchema: z.ZodNativeEnum<
  typeof TransferInitiationRequestType
> = TransferInitiationRequestType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationRequestType$ {
  /** @deprecated use `TransferInitiationRequestType$inboundSchema` instead. */
  export const inboundSchema = TransferInitiationRequestType$inboundSchema;
  /** @deprecated use `TransferInitiationRequestType$outboundSchema` instead. */
  export const outboundSchema = TransferInitiationRequestType$outboundSchema;
}

/** @internal */
export const TransferInitiationRequest$inboundSchema: z.ZodType<
  TransferInitiationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().transform(v => BigInt(v)),
  asset: z.string(),
  connectorID: z.string().optional(),
  description: z.string(),
  destinationAccountID: z.string(),
  metadata: z.nullable(z.record(z.string())).optional(),
  reference: z.string(),
  scheduledAt: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  sourceAccountID: z.string(),
  type: TransferInitiationRequestType$inboundSchema,
  validated: z.boolean(),
});

/** @internal */
export type TransferInitiationRequest$Outbound = {
  amount: number;
  asset: string;
  connectorID?: string | undefined;
  description: string;
  destinationAccountID: string;
  metadata?: { [k: string]: string } | null | undefined;
  reference: string;
  scheduledAt: string;
  sourceAccountID: string;
  type: string;
  validated: boolean;
};

/** @internal */
export const TransferInitiationRequest$outboundSchema: z.ZodType<
  TransferInitiationRequest$Outbound,
  z.ZodTypeDef,
  TransferInitiationRequest
> = z.object({
  amount: z.bigint().transform(v => Number(v)),
  asset: z.string(),
  connectorID: z.string().optional(),
  description: z.string(),
  destinationAccountID: z.string(),
  metadata: z.nullable(z.record(z.string())).optional(),
  reference: z.string(),
  scheduledAt: z.date().transform(v => v.toISOString()),
  sourceAccountID: z.string(),
  type: TransferInitiationRequestType$outboundSchema,
  validated: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationRequest$ {
  /** @deprecated use `TransferInitiationRequest$inboundSchema` instead. */
  export const inboundSchema = TransferInitiationRequest$inboundSchema;
  /** @deprecated use `TransferInitiationRequest$outboundSchema` instead. */
  export const outboundSchema = TransferInitiationRequest$outboundSchema;
  /** @deprecated use `TransferInitiationRequest$Outbound` instead. */
  export type Outbound = TransferInitiationRequest$Outbound;
}

export function transferInitiationRequestToJSON(
  transferInitiationRequest: TransferInitiationRequest,
): string {
  return JSON.stringify(
    TransferInitiationRequest$outboundSchema.parse(transferInitiationRequest),
  );
}

export function transferInitiationRequestFromJSON(
  jsonString: string,
): SafeParseResult<TransferInitiationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransferInitiationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransferInitiationRequest' from JSON`,
  );
}
