/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OrchestrationHold,
  OrchestrationHold$inboundSchema,
  OrchestrationHold$Outbound,
  OrchestrationHold$outboundSchema,
} from "./orchestrationhold.js";

export type ActivityDebitWalletOutput = {
  data: OrchestrationHold;
};

/** @internal */
export const ActivityDebitWalletOutput$inboundSchema: z.ZodType<
  ActivityDebitWalletOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: OrchestrationHold$inboundSchema,
});

/** @internal */
export type ActivityDebitWalletOutput$Outbound = {
  data: OrchestrationHold$Outbound;
};

/** @internal */
export const ActivityDebitWalletOutput$outboundSchema: z.ZodType<
  ActivityDebitWalletOutput$Outbound,
  z.ZodTypeDef,
  ActivityDebitWalletOutput
> = z.object({
  data: OrchestrationHold$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityDebitWalletOutput$ {
  /** @deprecated use `ActivityDebitWalletOutput$inboundSchema` instead. */
  export const inboundSchema = ActivityDebitWalletOutput$inboundSchema;
  /** @deprecated use `ActivityDebitWalletOutput$outboundSchema` instead. */
  export const outboundSchema = ActivityDebitWalletOutput$outboundSchema;
  /** @deprecated use `ActivityDebitWalletOutput$Outbound` instead. */
  export type Outbound = ActivityDebitWalletOutput$Outbound;
}

export function activityDebitWalletOutputToJSON(
  activityDebitWalletOutput: ActivityDebitWalletOutput,
): string {
  return JSON.stringify(
    ActivityDebitWalletOutput$outboundSchema.parse(activityDebitWalletOutput),
  );
}

export function activityDebitWalletOutputFromJSON(
  jsonString: string,
): SafeParseResult<ActivityDebitWalletOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ActivityDebitWalletOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActivityDebitWalletOutput' from JSON`,
  );
}
