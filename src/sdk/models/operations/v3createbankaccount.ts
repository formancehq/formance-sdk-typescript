/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3CreateBankAccountResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * Created
   */
  v3CreateBankAccountResponse?: shared.V3CreateBankAccountResponse | undefined;
};

/** @internal */
export const V3CreateBankAccountResponse$inboundSchema: z.ZodType<
  V3CreateBankAccountResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3CreateBankAccountResponse: shared.V3CreateBankAccountResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3CreateBankAccountResponse": "v3CreateBankAccountResponse",
  });
});

/** @internal */
export type V3CreateBankAccountResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3CreateBankAccountResponse?:
    | shared.V3CreateBankAccountResponse$Outbound
    | undefined;
};

/** @internal */
export const V3CreateBankAccountResponse$outboundSchema: z.ZodType<
  V3CreateBankAccountResponse$Outbound,
  z.ZodTypeDef,
  V3CreateBankAccountResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3CreateBankAccountResponse: shared.V3CreateBankAccountResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3CreateBankAccountResponse: "V3CreateBankAccountResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3CreateBankAccountResponse$ {
  /** @deprecated use `V3CreateBankAccountResponse$inboundSchema` instead. */
  export const inboundSchema = V3CreateBankAccountResponse$inboundSchema;
  /** @deprecated use `V3CreateBankAccountResponse$outboundSchema` instead. */
  export const outboundSchema = V3CreateBankAccountResponse$outboundSchema;
  /** @deprecated use `V3CreateBankAccountResponse$Outbound` instead. */
  export type Outbound = V3CreateBankAccountResponse$Outbound;
}

export function v3CreateBankAccountResponseToJSON(
  v3CreateBankAccountResponse: V3CreateBankAccountResponse,
): string {
  return JSON.stringify(
    V3CreateBankAccountResponse$outboundSchema.parse(
      v3CreateBankAccountResponse,
    ),
  );
}

export function v3CreateBankAccountResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3CreateBankAccountResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3CreateBankAccountResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3CreateBankAccountResponse' from JSON`,
  );
}
