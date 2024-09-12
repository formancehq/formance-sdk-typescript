/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2Posting,
  V2Posting$inboundSchema,
  V2Posting$Outbound,
  V2Posting$outboundSchema,
} from "./v2posting.js";

export type OrchestrationV2Transaction = {
  metadata: { [k: string]: string };
  postings: Array<V2Posting>;
  reference?: string | undefined;
  timestamp: Date;
  txid: bigint;
};

/** @internal */
export const OrchestrationV2Transaction$inboundSchema: z.ZodType<
  OrchestrationV2Transaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.string()),
  postings: z.array(V2Posting$inboundSchema),
  reference: z.string().optional(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  txid: z.number().transform(v => BigInt(v)),
});

/** @internal */
export type OrchestrationV2Transaction$Outbound = {
  metadata: { [k: string]: string };
  postings: Array<V2Posting$Outbound>;
  reference?: string | undefined;
  timestamp: string;
  txid: number;
};

/** @internal */
export const OrchestrationV2Transaction$outboundSchema: z.ZodType<
  OrchestrationV2Transaction$Outbound,
  z.ZodTypeDef,
  OrchestrationV2Transaction
> = z.object({
  metadata: z.record(z.string()),
  postings: z.array(V2Posting$outboundSchema),
  reference: z.string().optional(),
  timestamp: z.date().transform(v => v.toISOString()),
  txid: z.bigint().transform(v => Number(v)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrchestrationV2Transaction$ {
  /** @deprecated use `OrchestrationV2Transaction$inboundSchema` instead. */
  export const inboundSchema = OrchestrationV2Transaction$inboundSchema;
  /** @deprecated use `OrchestrationV2Transaction$outboundSchema` instead. */
  export const outboundSchema = OrchestrationV2Transaction$outboundSchema;
  /** @deprecated use `OrchestrationV2Transaction$Outbound` instead. */
  export type Outbound = OrchestrationV2Transaction$Outbound;
}
