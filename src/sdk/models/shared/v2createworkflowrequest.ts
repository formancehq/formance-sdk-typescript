/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2CreateWorkflowRequest = {
    name?: string | undefined;
    stages: Array<Record<string, any>>;
};

/** @internal */
export namespace V2CreateWorkflowRequest$ {
    export type Inbound = {
        name?: string | undefined;
        stages: Array<Record<string, any>>;
    };

    export const inboundSchema: z.ZodType<V2CreateWorkflowRequest, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
            stages: z.array(z.record(z.any())),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                stages: v.stages,
            };
        });

    export type Outbound = {
        name?: string | undefined;
        stages: Array<Record<string, any>>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CreateWorkflowRequest> = z
        .object({
            name: z.string().optional(),
            stages: z.array(z.record(z.any())),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                stages: v.stages,
            };
        });
}
