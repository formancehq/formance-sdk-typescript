/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V2BulkElementAddMetadata,
  V2BulkElementAddMetadata$inboundSchema,
  V2BulkElementAddMetadata$Outbound,
  V2BulkElementAddMetadata$outboundSchema,
} from "./v2bulkelementaddmetadata.js";
import {
  V2BulkElementCreateTransaction,
  V2BulkElementCreateTransaction$inboundSchema,
  V2BulkElementCreateTransaction$Outbound,
  V2BulkElementCreateTransaction$outboundSchema,
} from "./v2bulkelementcreatetransaction.js";
import {
  V2BulkElementDeleteMetadata,
  V2BulkElementDeleteMetadata$inboundSchema,
  V2BulkElementDeleteMetadata$Outbound,
  V2BulkElementDeleteMetadata$outboundSchema,
} from "./v2bulkelementdeletemetadata.js";
import {
  V2BulkElementRevertTransaction,
  V2BulkElementRevertTransaction$inboundSchema,
  V2BulkElementRevertTransaction$Outbound,
  V2BulkElementRevertTransaction$outboundSchema,
} from "./v2bulkelementreverttransaction.js";

export type V2BulkElement =
  | (V2BulkElementAddMetadata & { action: "ADD_METADATA" })
  | (V2BulkElementCreateTransaction & { action: "CREATE_TRANSACTION" })
  | (V2BulkElementDeleteMetadata & { action: "DELETE_METADATA" })
  | (V2BulkElementRevertTransaction & { action: "REVERT_TRANSACTION" });

/** @internal */
export const V2BulkElement$inboundSchema: z.ZodType<
  V2BulkElement,
  z.ZodTypeDef,
  unknown
> = z.union([
  V2BulkElementAddMetadata$inboundSchema.and(
    z.object({ action: z.literal("ADD_METADATA") }).transform((v) => ({
      action: v.action,
    })),
  ),
  V2BulkElementCreateTransaction$inboundSchema.and(
    z.object({ action: z.literal("CREATE_TRANSACTION") }).transform((v) => ({
      action: v.action,
    })),
  ),
  V2BulkElementDeleteMetadata$inboundSchema.and(
    z.object({ action: z.literal("DELETE_METADATA") }).transform((v) => ({
      action: v.action,
    })),
  ),
  V2BulkElementRevertTransaction$inboundSchema.and(
    z.object({ action: z.literal("REVERT_TRANSACTION") }).transform((v) => ({
      action: v.action,
    })),
  ),
]);

/** @internal */
export type V2BulkElement$Outbound =
  | (V2BulkElementAddMetadata$Outbound & { action: "ADD_METADATA" })
  | (V2BulkElementCreateTransaction$Outbound & { action: "CREATE_TRANSACTION" })
  | (V2BulkElementDeleteMetadata$Outbound & { action: "DELETE_METADATA" })
  | (V2BulkElementRevertTransaction$Outbound & {
    action: "REVERT_TRANSACTION";
  });

/** @internal */
export const V2BulkElement$outboundSchema: z.ZodType<
  V2BulkElement$Outbound,
  z.ZodTypeDef,
  V2BulkElement
> = z.union([
  V2BulkElementAddMetadata$outboundSchema.and(
    z.object({ action: z.literal("ADD_METADATA") }).transform((v) => ({
      action: v.action,
    })),
  ),
  V2BulkElementCreateTransaction$outboundSchema.and(
    z.object({ action: z.literal("CREATE_TRANSACTION") }).transform((v) => ({
      action: v.action,
    })),
  ),
  V2BulkElementDeleteMetadata$outboundSchema.and(
    z.object({ action: z.literal("DELETE_METADATA") }).transform((v) => ({
      action: v.action,
    })),
  ),
  V2BulkElementRevertTransaction$outboundSchema.and(
    z.object({ action: z.literal("REVERT_TRANSACTION") }).transform((v) => ({
      action: v.action,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2BulkElement$ {
  /** @deprecated use `V2BulkElement$inboundSchema` instead. */
  export const inboundSchema = V2BulkElement$inboundSchema;
  /** @deprecated use `V2BulkElement$outboundSchema` instead. */
  export const outboundSchema = V2BulkElement$outboundSchema;
  /** @deprecated use `V2BulkElement$Outbound` instead. */
  export type Outbound = V2BulkElement$Outbound;
}

export function v2BulkElementToJSON(v2BulkElement: V2BulkElement): string {
  return JSON.stringify(V2BulkElement$outboundSchema.parse(v2BulkElement));
}

export function v2BulkElementFromJSON(
  jsonString: string,
): SafeParseResult<V2BulkElement, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2BulkElement$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2BulkElement' from JSON`,
  );
}
