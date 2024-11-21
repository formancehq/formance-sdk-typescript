/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Monetary,
  Monetary$inboundSchema,
  Monetary$Outbound,
  Monetary$outboundSchema,
} from "./monetary.js";
import {
  StageSendDestination,
  StageSendDestination$inboundSchema,
  StageSendDestination$Outbound,
  StageSendDestination$outboundSchema,
} from "./stagesenddestination.js";
import {
  StageSendSource,
  StageSendSource$inboundSchema,
  StageSendSource$Outbound,
  StageSendSource$outboundSchema,
} from "./stagesendsource.js";

export type StageSend = {
  amount?: Monetary | undefined;
  destination?: StageSendDestination | undefined;
  metadata?: { [k: string]: string } | undefined;
  source?: StageSendSource | undefined;
  timestamp?: Date | undefined;
};

/** @internal */
export const StageSend$inboundSchema: z.ZodType<
  StageSend,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: Monetary$inboundSchema.optional(),
  destination: StageSendDestination$inboundSchema.optional(),
  metadata: z.record(z.string()).optional(),
  source: StageSendSource$inboundSchema.optional(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type StageSend$Outbound = {
  amount?: Monetary$Outbound | undefined;
  destination?: StageSendDestination$Outbound | undefined;
  metadata?: { [k: string]: string } | undefined;
  source?: StageSendSource$Outbound | undefined;
  timestamp?: string | undefined;
};

/** @internal */
export const StageSend$outboundSchema: z.ZodType<
  StageSend$Outbound,
  z.ZodTypeDef,
  StageSend
> = z.object({
  amount: Monetary$outboundSchema.optional(),
  destination: StageSendDestination$outboundSchema.optional(),
  metadata: z.record(z.string()).optional(),
  source: StageSendSource$outboundSchema.optional(),
  timestamp: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StageSend$ {
  /** @deprecated use `StageSend$inboundSchema` instead. */
  export const inboundSchema = StageSend$inboundSchema;
  /** @deprecated use `StageSend$outboundSchema` instead. */
  export const outboundSchema = StageSend$outboundSchema;
  /** @deprecated use `StageSend$Outbound` instead. */
  export type Outbound = StageSend$Outbound;
}

export function stageSendToJSON(stageSend: StageSend): string {
  return JSON.stringify(StageSend$outboundSchema.parse(stageSend));
}

export function stageSendFromJSON(
  jsonString: string,
): SafeParseResult<StageSend, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StageSend$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StageSend' from JSON`,
  );
}
