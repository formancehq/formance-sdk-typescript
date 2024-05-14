/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeletePoolRequest = {
    /**
     * The pool ID.
     */
    poolId: string;
};

export type DeletePoolResponse = {};

/** @internal */
export namespace DeletePoolRequest$ {
    export const inboundSchema: z.ZodType<DeletePoolRequest, z.ZodTypeDef, unknown> = z
        .object({
            poolId: z.string(),
        })
        .transform((v) => {
            return {
                poolId: v.poolId,
            };
        });

    export type Outbound = {
        poolId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeletePoolRequest> = z
        .object({
            poolId: z.string(),
        })
        .transform((v) => {
            return {
                poolId: v.poolId,
            };
        });
}

/** @internal */
export namespace DeletePoolResponse$ {
    export const inboundSchema: z.ZodType<DeletePoolResponse, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeletePoolResponse> = z.object(
        {}
    );
}
