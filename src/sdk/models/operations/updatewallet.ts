/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type UpdateWalletRequestBody = {
    /**
     * Custom metadata to attach to this wallet.
     */
    metadata: { [k: string]: string };
};

export type UpdateWalletRequest = {
    requestBody?: UpdateWalletRequestBody | undefined;
    id: string;
};

export type UpdateWalletResponse = {
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
export const UpdateWalletRequestBody$inboundSchema: z.ZodType<
    UpdateWalletRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    metadata: z.record(z.string()),
});

/** @internal */
export type UpdateWalletRequestBody$Outbound = {
    metadata: { [k: string]: string };
};

/** @internal */
export const UpdateWalletRequestBody$outboundSchema: z.ZodType<
    UpdateWalletRequestBody$Outbound,
    z.ZodTypeDef,
    UpdateWalletRequestBody
> = z.object({
    metadata: z.record(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWalletRequestBody$ {
    /** @deprecated use `UpdateWalletRequestBody$inboundSchema` instead. */
    export const inboundSchema = UpdateWalletRequestBody$inboundSchema;
    /** @deprecated use `UpdateWalletRequestBody$outboundSchema` instead. */
    export const outboundSchema = UpdateWalletRequestBody$outboundSchema;
    /** @deprecated use `UpdateWalletRequestBody$Outbound` instead. */
    export type Outbound = UpdateWalletRequestBody$Outbound;
}

/** @internal */
export const UpdateWalletRequest$inboundSchema: z.ZodType<
    UpdateWalletRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RequestBody: z.lazy(() => UpdateWalletRequestBody$inboundSchema).optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type UpdateWalletRequest$Outbound = {
    RequestBody?: UpdateWalletRequestBody$Outbound | undefined;
    id: string;
};

/** @internal */
export const UpdateWalletRequest$outboundSchema: z.ZodType<
    UpdateWalletRequest$Outbound,
    z.ZodTypeDef,
    UpdateWalletRequest
> = z
    .object({
        requestBody: z.lazy(() => UpdateWalletRequestBody$outboundSchema).optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWalletRequest$ {
    /** @deprecated use `UpdateWalletRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateWalletRequest$inboundSchema;
    /** @deprecated use `UpdateWalletRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateWalletRequest$outboundSchema;
    /** @deprecated use `UpdateWalletRequest$Outbound` instead. */
    export type Outbound = UpdateWalletRequest$Outbound;
}

/** @internal */
export const UpdateWalletResponse$inboundSchema: z.ZodType<
    UpdateWalletResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type UpdateWalletResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const UpdateWalletResponse$outboundSchema: z.ZodType<
    UpdateWalletResponse$Outbound,
    z.ZodTypeDef,
    UpdateWalletResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWalletResponse$ {
    /** @deprecated use `UpdateWalletResponse$inboundSchema` instead. */
    export const inboundSchema = UpdateWalletResponse$inboundSchema;
    /** @deprecated use `UpdateWalletResponse$outboundSchema` instead. */
    export const outboundSchema = UpdateWalletResponse$outboundSchema;
    /** @deprecated use `UpdateWalletResponse$Outbound` instead. */
    export type Outbound = UpdateWalletResponse$Outbound;
}
