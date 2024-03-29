/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
import * as z from "zod";

export type V2GetServerInfoResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * General error
     */
    v2Error?: errors.V2Error | undefined;
    /**
     * Server information
     */
    v2ServerInfo?: shared.V2ServerInfo | undefined;
};

/** @internal */
export namespace V2GetServerInfoResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2Error?: errors.V2Error$.Inbound | undefined;
        V2ServerInfo?: shared.V2ServerInfo$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2GetServerInfoResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2Error: errors.V2Error$.inboundSchema.optional(),
            V2ServerInfo: shared.V2ServerInfo$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2Error === undefined ? null : { v2Error: v.V2Error }),
                ...(v.V2ServerInfo === undefined ? null : { v2ServerInfo: v.V2ServerInfo }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2Error?: errors.V2Error$.Outbound | undefined;
        V2ServerInfo?: shared.V2ServerInfo$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2GetServerInfoResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2Error: errors.V2Error$.outboundSchema.optional(),
            v2ServerInfo: shared.V2ServerInfo$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2Error === undefined ? null : { V2Error: v.v2Error }),
                ...(v.v2ServerInfo === undefined ? null : { V2ServerInfo: v.v2ServerInfo }),
            };
        });
}
