/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AssetHolder = {
  assets: { [k: string]: bigint };
};

/** @internal */
export const AssetHolder$inboundSchema: z.ZodType<
  AssetHolder,
  z.ZodTypeDef,
  unknown
> = z.object({
  assets: z.record(z.number().transform(v => BigInt(v))),
});

/** @internal */
export type AssetHolder$Outbound = {
  assets: { [k: string]: number };
};

/** @internal */
export const AssetHolder$outboundSchema: z.ZodType<
  AssetHolder$Outbound,
  z.ZodTypeDef,
  AssetHolder
> = z.object({
  assets: z.record(z.bigint().transform(v => Number(v))),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssetHolder$ {
  /** @deprecated use `AssetHolder$inboundSchema` instead. */
  export const inboundSchema = AssetHolder$inboundSchema;
  /** @deprecated use `AssetHolder$outboundSchema` instead. */
  export const outboundSchema = AssetHolder$outboundSchema;
  /** @deprecated use `AssetHolder$Outbound` instead. */
  export type Outbound = AssetHolder$Outbound;
}

export function assetHolderToJSON(assetHolder: AssetHolder): string {
  return JSON.stringify(AssetHolder$outboundSchema.parse(assetHolder));
}

export function assetHolderFromJSON(
  jsonString: string,
): SafeParseResult<AssetHolder, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssetHolder$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssetHolder' from JSON`,
  );
}
