/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Client, Client$ } from "./client";
import * as z from "zod";

export type ReadClientResponse = {
    data?: Client | undefined;
};

/** @internal */
export namespace ReadClientResponse$ {
    export type Inbound = {
        data?: Client$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ReadClientResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: Client$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: Client$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadClientResponse> = z
        .object({
            data: Client$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}
