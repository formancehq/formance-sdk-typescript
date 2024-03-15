/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Client, Client$ } from "./client";
import * as z from "zod";

export type ListClientsResponse = {
    data?: Array<Client> | undefined;
};

/** @internal */
export namespace ListClientsResponse$ {
    export type Inbound = {
        data?: Array<Client$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<ListClientsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(Client$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: Array<Client$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListClientsResponse> = z
        .object({
            data: z.array(Client$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}
