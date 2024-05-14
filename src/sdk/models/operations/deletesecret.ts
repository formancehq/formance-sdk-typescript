/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteSecretRequest = {
    /**
     * Client ID
     */
    clientId: string;
    /**
     * Secret ID
     */
    secretId: string;
};

export type DeleteSecretResponse = {};

/** @internal */
export namespace DeleteSecretRequest$ {
    export const inboundSchema: z.ZodType<DeleteSecretRequest, z.ZodTypeDef, unknown> = z
        .object({
            clientId: z.string(),
            secretId: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                secretId: v.secretId,
            };
        });

    export type Outbound = {
        clientId: string;
        secretId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSecretRequest> = z
        .object({
            clientId: z.string(),
            secretId: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                secretId: v.secretId,
            };
        });
}

/** @internal */
export namespace DeleteSecretResponse$ {
    export const inboundSchema: z.ZodType<DeleteSecretResponse, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSecretResponse> = z.object(
        {}
    );
}
