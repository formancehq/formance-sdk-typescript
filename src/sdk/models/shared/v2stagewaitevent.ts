/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2StageWaitEvent = {
    event: string;
};

/** @internal */
export namespace V2StageWaitEvent$ {
    export const inboundSchema: z.ZodType<V2StageWaitEvent, z.ZodTypeDef, unknown> = z.object({
        event: z.string(),
    });

    export type Outbound = {
        event: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2StageWaitEvent> = z.object({
        event: z.string(),
    });
}
