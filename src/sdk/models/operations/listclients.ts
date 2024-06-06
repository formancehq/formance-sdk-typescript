/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type ListClientsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * List of clients
     */
    listClientsResponse?: shared.ListClientsResponse | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace ListClientsResponse$ {
    export const inboundSchema: z.ZodType<ListClientsResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ListClientsResponse: shared.ListClientsResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                ListClientsResponse: "listClientsResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        ListClientsResponse?: shared.ListClientsResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListClientsResponse> = z
        .object({
            contentType: z.string(),
            listClientsResponse: shared.ListClientsResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                listClientsResponse: "ListClientsResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
