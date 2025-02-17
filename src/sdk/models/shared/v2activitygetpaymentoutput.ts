/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V2Payment,
  V2Payment$inboundSchema,
  V2Payment$Outbound,
  V2Payment$outboundSchema,
} from "./v2payment.js";

export type V2ActivityGetPaymentOutput = {
  data: V2Payment;
};

/** @internal */
export const V2ActivityGetPaymentOutput$inboundSchema: z.ZodType<
  V2ActivityGetPaymentOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: V2Payment$inboundSchema,
});

/** @internal */
export type V2ActivityGetPaymentOutput$Outbound = {
  data: V2Payment$Outbound;
};

/** @internal */
export const V2ActivityGetPaymentOutput$outboundSchema: z.ZodType<
  V2ActivityGetPaymentOutput$Outbound,
  z.ZodTypeDef,
  V2ActivityGetPaymentOutput
> = z.object({
  data: V2Payment$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ActivityGetPaymentOutput$ {
  /** @deprecated use `V2ActivityGetPaymentOutput$inboundSchema` instead. */
  export const inboundSchema = V2ActivityGetPaymentOutput$inboundSchema;
  /** @deprecated use `V2ActivityGetPaymentOutput$outboundSchema` instead. */
  export const outboundSchema = V2ActivityGetPaymentOutput$outboundSchema;
  /** @deprecated use `V2ActivityGetPaymentOutput$Outbound` instead. */
  export type Outbound = V2ActivityGetPaymentOutput$Outbound;
}

export function v2ActivityGetPaymentOutputToJSON(
  v2ActivityGetPaymentOutput: V2ActivityGetPaymentOutput,
): string {
  return JSON.stringify(
    V2ActivityGetPaymentOutput$outboundSchema.parse(v2ActivityGetPaymentOutput),
  );
}

export function v2ActivityGetPaymentOutputFromJSON(
  jsonString: string,
): SafeParseResult<V2ActivityGetPaymentOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ActivityGetPaymentOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ActivityGetPaymentOutput' from JSON`,
  );
}
