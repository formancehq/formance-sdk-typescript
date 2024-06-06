/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Trigger, Trigger$ } from "./trigger";
import * as z from "zod";

export type ReadTriggerResponse = {
    data: Trigger;
};

/** @internal */
export namespace ReadTriggerResponse$ {
    export const inboundSchema: z.ZodType<ReadTriggerResponse, z.ZodTypeDef, unknown> = z.object({
        data: Trigger$.inboundSchema,
    });

    export type Outbound = {
        data: Trigger$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadTriggerResponse> = z.object({
        data: Trigger$.outboundSchema,
    });
}
