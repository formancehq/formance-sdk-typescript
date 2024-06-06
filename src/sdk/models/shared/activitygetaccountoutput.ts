/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OrchestrationAccount, OrchestrationAccount$ } from "./orchestrationaccount";
import * as z from "zod";

export type ActivityGetAccountOutput = {
    data: OrchestrationAccount;
};

/** @internal */
export namespace ActivityGetAccountOutput$ {
    export const inboundSchema: z.ZodType<ActivityGetAccountOutput, z.ZodTypeDef, unknown> =
        z.object({
            data: OrchestrationAccount$.inboundSchema,
        });

    export type Outbound = {
        data: OrchestrationAccount$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActivityGetAccountOutput> =
        z.object({
            data: OrchestrationAccount$.outboundSchema,
        });
}
