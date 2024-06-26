/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Trigger, V2Trigger$ } from "./v2trigger";
import * as z from "zod";

export type V2ReadTriggerResponse = {
    data: V2Trigger;
};

/** @internal */
export namespace V2ReadTriggerResponse$ {
    export const inboundSchema: z.ZodType<V2ReadTriggerResponse, z.ZodTypeDef, unknown> = z.object({
        data: V2Trigger$.inboundSchema,
    });

    export type Outbound = {
        data: V2Trigger$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ReadTriggerResponse> =
        z.object({
            data: V2Trigger$.outboundSchema,
        });
}
