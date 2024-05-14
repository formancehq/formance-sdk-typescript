/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListInstancesRequest = {
    /**
     * A workflow id
     */
    workflowID?: string | undefined;
    /**
     * Filter running instances
     */
    running?: boolean | undefined;
};

/** @internal */
export namespace ListInstancesRequest$ {
    export const inboundSchema: z.ZodType<ListInstancesRequest, z.ZodTypeDef, unknown> = z
        .object({
            workflowID: z.string().optional(),
            running: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.workflowID === undefined ? null : { workflowID: v.workflowID }),
                ...(v.running === undefined ? null : { running: v.running }),
            };
        });

    export type Outbound = {
        workflowID?: string | undefined;
        running?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListInstancesRequest> = z
        .object({
            workflowID: z.string().optional(),
            running: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.workflowID === undefined ? null : { workflowID: v.workflowID }),
                ...(v.running === undefined ? null : { running: v.running }),
            };
        });
}
