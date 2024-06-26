/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateClientRequest = {
    description?: string | undefined;
    metadata?: { [k: string]: any } | undefined;
    name: string;
    postLogoutRedirectUris?: Array<string> | undefined;
    public?: boolean | undefined;
    redirectUris?: Array<string> | undefined;
    scopes?: Array<string> | undefined;
    trusted?: boolean | undefined;
};

/** @internal */
export namespace CreateClientRequest$ {
    export const inboundSchema: z.ZodType<CreateClientRequest, z.ZodTypeDef, unknown> = z.object({
        description: z.string().optional(),
        metadata: z.record(z.any()).optional(),
        name: z.string(),
        postLogoutRedirectUris: z.array(z.string()).optional(),
        public: z.boolean().optional(),
        redirectUris: z.array(z.string()).optional(),
        scopes: z.array(z.string()).optional(),
        trusted: z.boolean().optional(),
    });

    export type Outbound = {
        description?: string | undefined;
        metadata?: { [k: string]: any } | undefined;
        name: string;
        postLogoutRedirectUris?: Array<string> | undefined;
        public?: boolean | undefined;
        redirectUris?: Array<string> | undefined;
        scopes?: Array<string> | undefined;
        trusted?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateClientRequest> = z.object({
        description: z.string().optional(),
        metadata: z.record(z.any()).optional(),
        name: z.string(),
        postLogoutRedirectUris: z.array(z.string()).optional(),
        public: z.boolean().optional(),
        redirectUris: z.array(z.string()).optional(),
        scopes: z.array(z.string()).optional(),
        trusted: z.boolean().optional(),
    });
}
