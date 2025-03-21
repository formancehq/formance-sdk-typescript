/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  User,
  User$inboundSchema,
  User$Outbound,
  User$outboundSchema,
} from "./user.js";

export type ReadUserResponse = {
  data?: User | undefined;
};

/** @internal */
export const ReadUserResponse$inboundSchema: z.ZodType<
  ReadUserResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: User$inboundSchema.optional(),
});

/** @internal */
export type ReadUserResponse$Outbound = {
  data?: User$Outbound | undefined;
};

/** @internal */
export const ReadUserResponse$outboundSchema: z.ZodType<
  ReadUserResponse$Outbound,
  z.ZodTypeDef,
  ReadUserResponse
> = z.object({
  data: User$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadUserResponse$ {
  /** @deprecated use `ReadUserResponse$inboundSchema` instead. */
  export const inboundSchema = ReadUserResponse$inboundSchema;
  /** @deprecated use `ReadUserResponse$outboundSchema` instead. */
  export const outboundSchema = ReadUserResponse$outboundSchema;
  /** @deprecated use `ReadUserResponse$Outbound` instead. */
  export type Outbound = ReadUserResponse$Outbound;
}

export function readUserResponseToJSON(
  readUserResponse: ReadUserResponse,
): string {
  return JSON.stringify(
    ReadUserResponse$outboundSchema.parse(readUserResponse),
  );
}

export function readUserResponseFromJSON(
  jsonString: string,
): SafeParseResult<ReadUserResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadUserResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadUserResponse' from JSON`,
  );
}
