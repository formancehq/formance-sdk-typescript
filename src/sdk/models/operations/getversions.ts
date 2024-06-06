/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type GetVersionsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * OK
     */
    getVersionsResponse?: shared.GetVersionsResponse | undefined;
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
export namespace GetVersionsResponse$ {
    export const inboundSchema: z.ZodType<GetVersionsResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            GetVersionsResponse: shared.GetVersionsResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                GetVersionsResponse: "getVersionsResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        GetVersionsResponse?: shared.GetVersionsResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetVersionsResponse> = z
        .object({
            contentType: z.string(),
            getVersionsResponse: shared.GetVersionsResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                getVersionsResponse: "GetVersionsResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
