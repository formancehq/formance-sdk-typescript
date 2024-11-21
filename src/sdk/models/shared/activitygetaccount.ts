/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ActivityGetAccount = {
  id: string;
  ledger: string;
};

/** @internal */
export const ActivityGetAccount$inboundSchema: z.ZodType<
  ActivityGetAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  ledger: z.string(),
});

/** @internal */
export type ActivityGetAccount$Outbound = {
  id: string;
  ledger: string;
};

/** @internal */
export const ActivityGetAccount$outboundSchema: z.ZodType<
  ActivityGetAccount$Outbound,
  z.ZodTypeDef,
  ActivityGetAccount
> = z.object({
  id: z.string(),
  ledger: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityGetAccount$ {
  /** @deprecated use `ActivityGetAccount$inboundSchema` instead. */
  export const inboundSchema = ActivityGetAccount$inboundSchema;
  /** @deprecated use `ActivityGetAccount$outboundSchema` instead. */
  export const outboundSchema = ActivityGetAccount$outboundSchema;
  /** @deprecated use `ActivityGetAccount$Outbound` instead. */
  export type Outbound = ActivityGetAccount$Outbound;
}

export function activityGetAccountToJSON(
  activityGetAccount: ActivityGetAccount,
): string {
  return JSON.stringify(
    ActivityGetAccount$outboundSchema.parse(activityGetAccount),
  );
}

export function activityGetAccountFromJSON(
  jsonString: string,
): SafeParseResult<ActivityGetAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ActivityGetAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActivityGetAccount' from JSON`,
  );
}
