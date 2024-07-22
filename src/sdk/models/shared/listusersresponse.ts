/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { User, User$inboundSchema, User$Outbound, User$outboundSchema } from "./user.js";
import * as z from "zod";

export type ListUsersResponse = {
    data?: Array<User> | undefined;
};

/** @internal */
export const ListUsersResponse$inboundSchema: z.ZodType<ListUsersResponse, z.ZodTypeDef, unknown> =
    z.object({
        data: z.array(User$inboundSchema).optional(),
    });

/** @internal */
export type ListUsersResponse$Outbound = {
    data?: Array<User$Outbound> | undefined;
};

/** @internal */
export const ListUsersResponse$outboundSchema: z.ZodType<
    ListUsersResponse$Outbound,
    z.ZodTypeDef,
    ListUsersResponse
> = z.object({
    data: z.array(User$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListUsersResponse$ {
    /** @deprecated use `ListUsersResponse$inboundSchema` instead. */
    export const inboundSchema = ListUsersResponse$inboundSchema;
    /** @deprecated use `ListUsersResponse$outboundSchema` instead. */
    export const outboundSchema = ListUsersResponse$outboundSchema;
    /** @deprecated use `ListUsersResponse$Outbound` instead. */
    export type Outbound = ListUsersResponse$Outbound;
}
