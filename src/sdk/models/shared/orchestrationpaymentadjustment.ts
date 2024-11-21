/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OrchestrationPaymentStatus,
  OrchestrationPaymentStatus$inboundSchema,
  OrchestrationPaymentStatus$outboundSchema,
} from "./orchestrationpaymentstatus.js";

export type OrchestrationPaymentAdjustmentRaw = {};

export type OrchestrationPaymentAdjustment = {
  absolute: boolean;
  amount: bigint;
  date: Date;
  raw: OrchestrationPaymentAdjustmentRaw;
  status: OrchestrationPaymentStatus;
};

/** @internal */
export const OrchestrationPaymentAdjustmentRaw$inboundSchema: z.ZodType<
  OrchestrationPaymentAdjustmentRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type OrchestrationPaymentAdjustmentRaw$Outbound = {};

/** @internal */
export const OrchestrationPaymentAdjustmentRaw$outboundSchema: z.ZodType<
  OrchestrationPaymentAdjustmentRaw$Outbound,
  z.ZodTypeDef,
  OrchestrationPaymentAdjustmentRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrchestrationPaymentAdjustmentRaw$ {
  /** @deprecated use `OrchestrationPaymentAdjustmentRaw$inboundSchema` instead. */
  export const inboundSchema = OrchestrationPaymentAdjustmentRaw$inboundSchema;
  /** @deprecated use `OrchestrationPaymentAdjustmentRaw$outboundSchema` instead. */
  export const outboundSchema =
    OrchestrationPaymentAdjustmentRaw$outboundSchema;
  /** @deprecated use `OrchestrationPaymentAdjustmentRaw$Outbound` instead. */
  export type Outbound = OrchestrationPaymentAdjustmentRaw$Outbound;
}

export function orchestrationPaymentAdjustmentRawToJSON(
  orchestrationPaymentAdjustmentRaw: OrchestrationPaymentAdjustmentRaw,
): string {
  return JSON.stringify(
    OrchestrationPaymentAdjustmentRaw$outboundSchema.parse(
      orchestrationPaymentAdjustmentRaw,
    ),
  );
}

export function orchestrationPaymentAdjustmentRawFromJSON(
  jsonString: string,
): SafeParseResult<OrchestrationPaymentAdjustmentRaw, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrchestrationPaymentAdjustmentRaw$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrchestrationPaymentAdjustmentRaw' from JSON`,
  );
}

/** @internal */
export const OrchestrationPaymentAdjustment$inboundSchema: z.ZodType<
  OrchestrationPaymentAdjustment,
  z.ZodTypeDef,
  unknown
> = z.object({
  absolute: z.boolean(),
  amount: z.number().transform(v => BigInt(v)),
  date: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  raw: z.lazy(() => OrchestrationPaymentAdjustmentRaw$inboundSchema),
  status: OrchestrationPaymentStatus$inboundSchema,
});

/** @internal */
export type OrchestrationPaymentAdjustment$Outbound = {
  absolute: boolean;
  amount: number;
  date: string;
  raw: OrchestrationPaymentAdjustmentRaw$Outbound;
  status: string;
};

/** @internal */
export const OrchestrationPaymentAdjustment$outboundSchema: z.ZodType<
  OrchestrationPaymentAdjustment$Outbound,
  z.ZodTypeDef,
  OrchestrationPaymentAdjustment
> = z.object({
  absolute: z.boolean(),
  amount: z.bigint().transform(v => Number(v)),
  date: z.date().transform(v => v.toISOString()),
  raw: z.lazy(() => OrchestrationPaymentAdjustmentRaw$outboundSchema),
  status: OrchestrationPaymentStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrchestrationPaymentAdjustment$ {
  /** @deprecated use `OrchestrationPaymentAdjustment$inboundSchema` instead. */
  export const inboundSchema = OrchestrationPaymentAdjustment$inboundSchema;
  /** @deprecated use `OrchestrationPaymentAdjustment$outboundSchema` instead. */
  export const outboundSchema = OrchestrationPaymentAdjustment$outboundSchema;
  /** @deprecated use `OrchestrationPaymentAdjustment$Outbound` instead. */
  export type Outbound = OrchestrationPaymentAdjustment$Outbound;
}

export function orchestrationPaymentAdjustmentToJSON(
  orchestrationPaymentAdjustment: OrchestrationPaymentAdjustment,
): string {
  return JSON.stringify(
    OrchestrationPaymentAdjustment$outboundSchema.parse(
      orchestrationPaymentAdjustment,
    ),
  );
}

export function orchestrationPaymentAdjustmentFromJSON(
  jsonString: string,
): SafeParseResult<OrchestrationPaymentAdjustment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrchestrationPaymentAdjustment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrchestrationPaymentAdjustment' from JSON`,
  );
}
