/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Trigger, Trigger$ } from "./trigger";
import * as z from "zod";

export type CreateTriggerResponse = {
    data: Trigger;
};

/** @internal */
export namespace CreateTriggerResponse$ {
    export const inboundSchema: z.ZodType<CreateTriggerResponse, z.ZodTypeDef, unknown> = z
        .object({
            data: Trigger$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: Trigger$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTriggerResponse> = z
        .object({
            data: Trigger$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
