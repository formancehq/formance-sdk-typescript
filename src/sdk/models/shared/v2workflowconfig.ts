/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2WorkflowConfig = {
    name?: string | undefined;
    stages: Array<{ [k: string]: any }>;
};

/** @internal */
export namespace V2WorkflowConfig$ {
    export const inboundSchema: z.ZodType<V2WorkflowConfig, z.ZodTypeDef, unknown> = z
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
        stages: Array<{ [k: string]: any }>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2WorkflowConfig> = z
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
