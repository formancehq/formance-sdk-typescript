/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Policy, Policy$inboundSchema, Policy$Outbound, Policy$outboundSchema } from "./policy.js";
import * as z from "zod";

export type PolicyResponse = {
    data: Policy;
};

/** @internal */
export const PolicyResponse$inboundSchema: z.ZodType<PolicyResponse, z.ZodTypeDef, unknown> =
    z.object({
        data: Policy$inboundSchema,
    });

/** @internal */
export type PolicyResponse$Outbound = {
    data: Policy$Outbound;
};

/** @internal */
export const PolicyResponse$outboundSchema: z.ZodType<
    PolicyResponse$Outbound,
    z.ZodTypeDef,
    PolicyResponse
> = z.object({
    data: Policy$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PolicyResponse$ {
    /** @deprecated use `PolicyResponse$inboundSchema` instead. */
    export const inboundSchema = PolicyResponse$inboundSchema;
    /** @deprecated use `PolicyResponse$outboundSchema` instead. */
    export const outboundSchema = PolicyResponse$outboundSchema;
    /** @deprecated use `PolicyResponse$Outbound` instead. */
    export type Outbound = PolicyResponse$Outbound;
}
