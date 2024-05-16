/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CancelEventRequest = {
    /**
     * The instance id
     */
    instanceID: string;
};

export type CancelEventResponse = {};

/** @internal */
export namespace CancelEventRequest$ {
    export const inboundSchema: z.ZodType<CancelEventRequest, z.ZodTypeDef, unknown> = z
        .object({
            instanceID: z.string(),
        })
        .transform((v) => {
            return {
                instanceID: v.instanceID,
            };
        });

    export type Outbound = {
        instanceID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CancelEventRequest> = z
        .object({
            instanceID: z.string(),
        })
        .transform((v) => {
            return {
                instanceID: v.instanceID,
            };
        });
}

/** @internal */
export namespace CancelEventResponse$ {
    export const inboundSchema: z.ZodType<CancelEventResponse, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CancelEventResponse> = z.object(
        {}
    );
}
