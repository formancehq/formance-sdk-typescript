/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteConfigRequest = {
    /**
     * Config ID
     */
    id: string;
};

export type DeleteConfigResponse = {};

/** @internal */
export namespace DeleteConfigRequest$ {
    export const inboundSchema: z.ZodType<DeleteConfigRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteConfigRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace DeleteConfigResponse$ {
    export const inboundSchema: z.ZodType<DeleteConfigResponse, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteConfigResponse> = z.object(
        {}
    );
}
