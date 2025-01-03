/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OrchestrationPayment,
  OrchestrationPayment$inboundSchema,
  OrchestrationPayment$Outbound,
  OrchestrationPayment$outboundSchema,
} from "./orchestrationpayment.js";

export type ActivityGetPaymentOutput = {
  data: OrchestrationPayment;
};

/** @internal */
export const ActivityGetPaymentOutput$inboundSchema: z.ZodType<
  ActivityGetPaymentOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: OrchestrationPayment$inboundSchema,
});

/** @internal */
export type ActivityGetPaymentOutput$Outbound = {
  data: OrchestrationPayment$Outbound;
};

/** @internal */
export const ActivityGetPaymentOutput$outboundSchema: z.ZodType<
  ActivityGetPaymentOutput$Outbound,
  z.ZodTypeDef,
  ActivityGetPaymentOutput
> = z.object({
  data: OrchestrationPayment$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityGetPaymentOutput$ {
  /** @deprecated use `ActivityGetPaymentOutput$inboundSchema` instead. */
  export const inboundSchema = ActivityGetPaymentOutput$inboundSchema;
  /** @deprecated use `ActivityGetPaymentOutput$outboundSchema` instead. */
  export const outboundSchema = ActivityGetPaymentOutput$outboundSchema;
  /** @deprecated use `ActivityGetPaymentOutput$Outbound` instead. */
  export type Outbound = ActivityGetPaymentOutput$Outbound;
}

export function activityGetPaymentOutputToJSON(
  activityGetPaymentOutput: ActivityGetPaymentOutput,
): string {
  return JSON.stringify(
    ActivityGetPaymentOutput$outboundSchema.parse(activityGetPaymentOutput),
  );
}

export function activityGetPaymentOutputFromJSON(
  jsonString: string,
): SafeParseResult<ActivityGetPaymentOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ActivityGetPaymentOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActivityGetPaymentOutput' from JSON`,
  );
}
