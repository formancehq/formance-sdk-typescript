/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Version = {
  health: boolean;
  name: string;
  version: string;
};

/** @internal */
export const Version$inboundSchema: z.ZodType<Version, z.ZodTypeDef, unknown> =
  z.object({
    health: z.boolean(),
    name: z.string(),
    version: z.string(),
  });

/** @internal */
export type Version$Outbound = {
  health: boolean;
  name: string;
  version: string;
};

/** @internal */
export const Version$outboundSchema: z.ZodType<
  Version$Outbound,
  z.ZodTypeDef,
  Version
> = z.object({
  health: z.boolean(),
  name: z.string(),
  version: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Version$ {
  /** @deprecated use `Version$inboundSchema` instead. */
  export const inboundSchema = Version$inboundSchema;
  /** @deprecated use `Version$outboundSchema` instead. */
  export const outboundSchema = Version$outboundSchema;
  /** @deprecated use `Version$Outbound` instead. */
  export type Outbound = Version$Outbound;
}

export function versionToJSON(version: Version): string {
  return JSON.stringify(Version$outboundSchema.parse(version));
}

export function versionFromJSON(
  jsonString: string,
): SafeParseResult<Version, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Version$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Version' from JSON`,
  );
}
