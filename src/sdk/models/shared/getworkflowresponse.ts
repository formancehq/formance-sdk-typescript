/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Workflow,
  Workflow$inboundSchema,
  Workflow$Outbound,
  Workflow$outboundSchema,
} from "./workflow.js";

export type GetWorkflowResponse = {
  data: Workflow;
};

/** @internal */
export const GetWorkflowResponse$inboundSchema: z.ZodType<
  GetWorkflowResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Workflow$inboundSchema,
});

/** @internal */
export type GetWorkflowResponse$Outbound = {
  data: Workflow$Outbound;
};

/** @internal */
export const GetWorkflowResponse$outboundSchema: z.ZodType<
  GetWorkflowResponse$Outbound,
  z.ZodTypeDef,
  GetWorkflowResponse
> = z.object({
  data: Workflow$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowResponse$ {
  /** @deprecated use `GetWorkflowResponse$inboundSchema` instead. */
  export const inboundSchema = GetWorkflowResponse$inboundSchema;
  /** @deprecated use `GetWorkflowResponse$outboundSchema` instead. */
  export const outboundSchema = GetWorkflowResponse$outboundSchema;
  /** @deprecated use `GetWorkflowResponse$Outbound` instead. */
  export type Outbound = GetWorkflowResponse$Outbound;
}

export function getWorkflowResponseToJSON(
  getWorkflowResponse: GetWorkflowResponse,
): string {
  return JSON.stringify(
    GetWorkflowResponse$outboundSchema.parse(getWorkflowResponse),
  );
}

export function getWorkflowResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetWorkflowResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWorkflowResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWorkflowResponse' from JSON`,
  );
}
