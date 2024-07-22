/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { User, User$inboundSchema, User$Outbound, User$outboundSchema } from "./user.js";
import * as z from "zod";

export type ReadUserResponse = {
    data?: User | undefined;
};

/** @internal */
export const ReadUserResponse$inboundSchema: z.ZodType<ReadUserResponse, z.ZodTypeDef, unknown> =
    z.object({
        data: User$inboundSchema.optional(),
    });

/** @internal */
export type ReadUserResponse$Outbound = {
    data?: User$Outbound | undefined;
};

/** @internal */
export const ReadUserResponse$outboundSchema: z.ZodType<
    ReadUserResponse$Outbound,
    z.ZodTypeDef,
    ReadUserResponse
> = z.object({
    data: User$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadUserResponse$ {
    /** @deprecated use `ReadUserResponse$inboundSchema` instead. */
    export const inboundSchema = ReadUserResponse$inboundSchema;
    /** @deprecated use `ReadUserResponse$outboundSchema` instead. */
    export const outboundSchema = ReadUserResponse$outboundSchema;
    /** @deprecated use `ReadUserResponse$Outbound` instead. */
    export type Outbound = ReadUserResponse$Outbound;
}
