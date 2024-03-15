/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type ReconciliationgetServerInfoResponse = {
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
    /**
     * Error response
     */
    reconciliationErrorResponse?: shared.ReconciliationErrorResponse | undefined;
};

/** @internal */
export namespace ReconciliationgetServerInfoResponse$ {
    export type Inbound = {
        ContentType: string;
        ServerInfo?: shared.ServerInfo$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        reconciliationErrorResponse?: shared.ReconciliationErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        ReconciliationgetServerInfoResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            ServerInfo: shared.ServerInfo$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            reconciliationErrorResponse:
                shared.ReconciliationErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ServerInfo === undefined ? null : { serverInfo: v.ServerInfo }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.reconciliationErrorResponse === undefined
                    ? null
                    : { reconciliationErrorResponse: v.reconciliationErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        ServerInfo?: shared.ServerInfo$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        reconciliationErrorResponse?: shared.ReconciliationErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ReconciliationgetServerInfoResponse
    > = z
        .object({
            contentType: z.string(),
            serverInfo: shared.ServerInfo$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            reconciliationErrorResponse:
                shared.ReconciliationErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.serverInfo === undefined ? null : { ServerInfo: v.serverInfo }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.reconciliationErrorResponse === undefined
                    ? null
                    : { reconciliationErrorResponse: v.reconciliationErrorResponse }),
            };
        });
}
