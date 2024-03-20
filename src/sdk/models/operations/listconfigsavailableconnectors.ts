/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ListConfigsAvailableConnectorsResponse = {
    /**
     * OK
     */
    connectorsConfigsResponse?: shared.ConnectorsConfigsResponse | undefined;
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
};

/** @internal */
export namespace ListConfigsAvailableConnectorsResponse$ {
    export type Inbound = {
        ConnectorsConfigsResponse?: shared.ConnectorsConfigsResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        ListConfigsAvailableConnectorsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ConnectorsConfigsResponse: shared.ConnectorsConfigsResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.ConnectorsConfigsResponse === undefined
                    ? null
                    : { connectorsConfigsResponse: v.ConnectorsConfigsResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ConnectorsConfigsResponse?: shared.ConnectorsConfigsResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListConfigsAvailableConnectorsResponse
    > = z
        .object({
            connectorsConfigsResponse: shared.ConnectorsConfigsResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.connectorsConfigsResponse === undefined
                    ? null
                    : { ConnectorsConfigsResponse: v.connectorsConfigsResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
