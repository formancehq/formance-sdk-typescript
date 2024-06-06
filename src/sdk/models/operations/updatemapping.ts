/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type UpdateMappingRequest = {
    mapping: shared.Mapping | null;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type UpdateMappingResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * OK
     */
    mappingResponse?: shared.MappingResponse | undefined;
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
export namespace UpdateMappingRequest$ {
    export const inboundSchema: z.ZodType<UpdateMappingRequest, z.ZodTypeDef, unknown> = z
        .object({
            Mapping: z.nullable(shared.Mapping$.inboundSchema),
            ledger: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                Mapping: "mapping",
            });
        });

    export type Outbound = {
        Mapping: shared.Mapping$.Outbound | null;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateMappingRequest> = z
        .object({
            mapping: z.nullable(shared.Mapping$.outboundSchema),
            ledger: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                mapping: "Mapping",
            });
        });
}

/** @internal */
export namespace UpdateMappingResponse$ {
    export const inboundSchema: z.ZodType<UpdateMappingResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            MappingResponse: shared.MappingResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                MappingResponse: "mappingResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        MappingResponse?: shared.MappingResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateMappingResponse> = z
        .object({
            contentType: z.string(),
            mappingResponse: shared.MappingResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                mappingResponse: "MappingResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
