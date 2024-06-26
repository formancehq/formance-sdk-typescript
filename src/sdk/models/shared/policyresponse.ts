/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Policy, Policy$ } from "./policy";
import * as z from "zod";

export type PolicyResponse = {
    data: Policy;
};

/** @internal */
export namespace PolicyResponse$ {
    export const inboundSchema: z.ZodType<PolicyResponse, z.ZodTypeDef, unknown> = z.object({
        data: Policy$.inboundSchema,
    });

    export type Outbound = {
        data: Policy$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PolicyResponse> = z.object({
        data: Policy$.outboundSchema,
    });
}
