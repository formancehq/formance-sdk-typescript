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
    export const inboundSchema: z.ZodType<ListClientsResponse, z.ZodTypeDef, unknown> = z.object({
        data: z.array(Client$.inboundSchema).optional(),
    });

    export type Outbound = {
        data?: Array<Client$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListClientsResponse> = z.object({
        data: z.array(Client$.outboundSchema).optional(),
    });
}
