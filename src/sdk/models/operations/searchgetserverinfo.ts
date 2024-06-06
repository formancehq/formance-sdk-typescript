/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type SearchgetServerInfoResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Server information
     */
    serverInfo?: shared.ServerInfo | undefined;
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
export namespace SearchgetServerInfoResponse$ {
    export const inboundSchema: z.ZodType<SearchgetServerInfoResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ServerInfo: shared.ServerInfo$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                ServerInfo: "serverInfo",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        ServerInfo?: shared.ServerInfo$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchgetServerInfoResponse> = z
        .object({
            contentType: z.string(),
            serverInfo: shared.ServerInfo$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                serverInfo: "ServerInfo",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
