/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListReconciliationsRequest = {
    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
    /**
     * Parameter used in pagination requests. Maximum page size is set to 15.
     *
     * @remarks
     * Set to the value of next for the next page of results.
     * Set to the value of previous for the previous page of results.
     * No other parameters can be set when this parameter is set.
     *
     */
    cursor?: string | undefined;
};

/** @internal */
export namespace ListReconciliationsRequest$ {
    export const inboundSchema: z.ZodType<ListReconciliationsRequest, z.ZodTypeDef, unknown> = z
        .object({
            pageSize: z.number().int().optional(),
            cursor: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
            };
        });

    export type Outbound = {
        pageSize?: number | undefined;
        cursor?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListReconciliationsRequest> = z
        .object({
            pageSize: z.number().int().optional(),
            cursor: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
            };
        });
}
