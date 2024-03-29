/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { User, User$ } from "./user";
import * as z from "zod";

export type ReadUserResponse = {
    data?: User | undefined;
};

/** @internal */
export namespace ReadUserResponse$ {
    export type Inbound = {
        data?: User$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ReadUserResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: User$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: User$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadUserResponse> = z
        .object({
            data: User$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}
