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

export type ListWorkflowsResponse = {
  data: Array<Workflow>;
};

/** @internal */
export const ListWorkflowsResponse$inboundSchema: z.ZodType<
  ListWorkflowsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Workflow$inboundSchema),
});

/** @internal */
export type ListWorkflowsResponse$Outbound = {
  data: Array<Workflow$Outbound>;
};

/** @internal */
export const ListWorkflowsResponse$outboundSchema: z.ZodType<
  ListWorkflowsResponse$Outbound,
  z.ZodTypeDef,
  ListWorkflowsResponse
> = z.object({
  data: z.array(Workflow$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWorkflowsResponse$ {
  /** @deprecated use `ListWorkflowsResponse$inboundSchema` instead. */
  export const inboundSchema = ListWorkflowsResponse$inboundSchema;
  /** @deprecated use `ListWorkflowsResponse$outboundSchema` instead. */
  export const outboundSchema = ListWorkflowsResponse$outboundSchema;
  /** @deprecated use `ListWorkflowsResponse$Outbound` instead. */
  export type Outbound = ListWorkflowsResponse$Outbound;
}

export function listWorkflowsResponseToJSON(
  listWorkflowsResponse: ListWorkflowsResponse,
): string {
  return JSON.stringify(
    ListWorkflowsResponse$outboundSchema.parse(listWorkflowsResponse),
  );
}

export function listWorkflowsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListWorkflowsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWorkflowsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWorkflowsResponse' from JSON`,
  );
}
