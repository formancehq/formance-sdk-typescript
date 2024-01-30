/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type StageWaitEvent = {
    event: string;
};

/** @internal */
export namespace StageWaitEvent$ {
    export type Inbound = {
        event: string;
    };

    export const inboundSchema: z.ZodType<StageWaitEvent, z.ZodTypeDef, Inbound> = z
        .object({
            event: z.string(),
        })
        .transform((v) => {
            return {
                event: v.event,
            };
        });

    export type Outbound = {
        event: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StageWaitEvent> = z
        .object({
            event: z.string(),
        })
        .transform((v) => {
            return {
                event: v.event,
            };
        });
}