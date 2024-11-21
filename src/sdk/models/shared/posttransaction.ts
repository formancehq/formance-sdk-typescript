/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Posting,
  Posting$inboundSchema,
  Posting$Outbound,
  Posting$outboundSchema,
} from "./posting.js";

export type PostTransactionScript = {
  plain: string;
  vars?: { [k: string]: any } | undefined;
};

export type PostTransaction = {
  metadata?: { [k: string]: any } | null | undefined;
  postings?: Array<Posting> | undefined;
  reference?: string | undefined;
  script?: PostTransactionScript | undefined;
  timestamp?: Date | undefined;
};

/** @internal */
export const PostTransactionScript$inboundSchema: z.ZodType<
  PostTransactionScript,
  z.ZodTypeDef,
  unknown
> = z.object({
  plain: z.string(),
  vars: z.record(z.any()).optional(),
});

/** @internal */
export type PostTransactionScript$Outbound = {
  plain: string;
  vars?: { [k: string]: any } | undefined;
};

/** @internal */
export const PostTransactionScript$outboundSchema: z.ZodType<
  PostTransactionScript$Outbound,
  z.ZodTypeDef,
  PostTransactionScript
> = z.object({
  plain: z.string(),
  vars: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostTransactionScript$ {
  /** @deprecated use `PostTransactionScript$inboundSchema` instead. */
  export const inboundSchema = PostTransactionScript$inboundSchema;
  /** @deprecated use `PostTransactionScript$outboundSchema` instead. */
  export const outboundSchema = PostTransactionScript$outboundSchema;
  /** @deprecated use `PostTransactionScript$Outbound` instead. */
  export type Outbound = PostTransactionScript$Outbound;
}

export function postTransactionScriptToJSON(
  postTransactionScript: PostTransactionScript,
): string {
  return JSON.stringify(
    PostTransactionScript$outboundSchema.parse(postTransactionScript),
  );
}

export function postTransactionScriptFromJSON(
  jsonString: string,
): SafeParseResult<PostTransactionScript, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostTransactionScript$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostTransactionScript' from JSON`,
  );
}

/** @internal */
export const PostTransaction$inboundSchema: z.ZodType<
  PostTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.nullable(z.record(z.any())).optional(),
  postings: z.array(Posting$inboundSchema).optional(),
  reference: z.string().optional(),
  script: z.lazy(() => PostTransactionScript$inboundSchema).optional(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type PostTransaction$Outbound = {
  metadata?: { [k: string]: any } | null | undefined;
  postings?: Array<Posting$Outbound> | undefined;
  reference?: string | undefined;
  script?: PostTransactionScript$Outbound | undefined;
  timestamp?: string | undefined;
};

/** @internal */
export const PostTransaction$outboundSchema: z.ZodType<
  PostTransaction$Outbound,
  z.ZodTypeDef,
  PostTransaction
> = z.object({
  metadata: z.nullable(z.record(z.any())).optional(),
  postings: z.array(Posting$outboundSchema).optional(),
  reference: z.string().optional(),
  script: z.lazy(() => PostTransactionScript$outboundSchema).optional(),
  timestamp: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostTransaction$ {
  /** @deprecated use `PostTransaction$inboundSchema` instead. */
  export const inboundSchema = PostTransaction$inboundSchema;
  /** @deprecated use `PostTransaction$outboundSchema` instead. */
  export const outboundSchema = PostTransaction$outboundSchema;
  /** @deprecated use `PostTransaction$Outbound` instead. */
  export type Outbound = PostTransaction$Outbound;
}

export function postTransactionToJSON(
  postTransaction: PostTransaction,
): string {
  return JSON.stringify(PostTransaction$outboundSchema.parse(postTransaction));
}

export function postTransactionFromJSON(
  jsonString: string,
): SafeParseResult<PostTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostTransaction' from JSON`,
  );
}
