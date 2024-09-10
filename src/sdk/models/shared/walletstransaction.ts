/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Posting,
  Posting$inboundSchema,
  Posting$Outbound,
  Posting$outboundSchema,
} from "./posting.js";
import {
  WalletsVolume,
  WalletsVolume$inboundSchema,
  WalletsVolume$Outbound,
  WalletsVolume$outboundSchema,
} from "./walletsvolume.js";

export type WalletsTransaction = {
  id: number;
  ledger?: string | undefined;
  /**
   * Metadata associated with the wallet.
   */
  metadata: { [k: string]: string };
  postCommitVolumes?:
    | { [k: string]: { [k: string]: WalletsVolume } }
    | undefined;
  postings: Array<Posting>;
  preCommitVolumes?:
    | { [k: string]: { [k: string]: WalletsVolume } }
    | undefined;
  reference?: string | undefined;
  timestamp: Date;
};

/** @internal */
export const WalletsTransaction$inboundSchema: z.ZodType<
  WalletsTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  ledger: z.string().optional(),
  metadata: z.record(z.string()),
  postCommitVolumes: z.record(z.record(WalletsVolume$inboundSchema)).optional(),
  postings: z.array(Posting$inboundSchema),
  preCommitVolumes: z.record(z.record(WalletsVolume$inboundSchema)).optional(),
  reference: z.string().optional(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type WalletsTransaction$Outbound = {
  id: number;
  ledger?: string | undefined;
  metadata: { [k: string]: string };
  postCommitVolumes?:
    | { [k: string]: { [k: string]: WalletsVolume$Outbound } }
    | undefined;
  postings: Array<Posting$Outbound>;
  preCommitVolumes?:
    | { [k: string]: { [k: string]: WalletsVolume$Outbound } }
    | undefined;
  reference?: string | undefined;
  timestamp: string;
};

/** @internal */
export const WalletsTransaction$outboundSchema: z.ZodType<
  WalletsTransaction$Outbound,
  z.ZodTypeDef,
  WalletsTransaction
> = z.object({
  id: z.number().int(),
  ledger: z.string().optional(),
  metadata: z.record(z.string()),
  postCommitVolumes: z.record(z.record(WalletsVolume$outboundSchema))
    .optional(),
  postings: z.array(Posting$outboundSchema),
  preCommitVolumes: z.record(z.record(WalletsVolume$outboundSchema)).optional(),
  reference: z.string().optional(),
  timestamp: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsTransaction$ {
  /** @deprecated use `WalletsTransaction$inboundSchema` instead. */
  export const inboundSchema = WalletsTransaction$inboundSchema;
  /** @deprecated use `WalletsTransaction$outboundSchema` instead. */
  export const outboundSchema = WalletsTransaction$outboundSchema;
  /** @deprecated use `WalletsTransaction$Outbound` instead. */
  export type Outbound = WalletsTransaction$Outbound;
}
