/*
 * This file is NOT auto-generated and can be freely modified.
*/

import { stringToBase64, stringFromBase64 } from "../base64";

function isBlank(s: string | null | undefined): boolean {
    return s == null || s.trim() === "";
}

/** Base64 encode without padding (no trailing =) to match API expectations. */
function stringToBase64NoPadding(str: string): string {
    return stringToBase64(str).replace(/=+$/, "");
}



/**
 * Builds a Formance Payments account ID given a connector ID and reference.
 *
 * @param connectorId - The identifier of the connector.
 * @param reference - The identifier of the account from the connector's provider.
 * @returns The identifier for the Formance Payments account.
 * @throws {Error} If connectorId is invalid or if reference is null or blank
 */
export function buildAccountId(connectorId: string, reference: string): string {
    if (isBlank(connectorId)) {
        throw new Error("connectorId must not be null or blank");
    }
    if (isBlank(reference)) {
        throw new Error("reference must not be null or blank");
    }

    let decoded: string;
    try {
        decoded = stringFromBase64(connectorId);
    } catch {
        throw new Error("connectorId is invalid");
    }

    let connectorIdJson: unknown;
    try {
        connectorIdJson = JSON.parse(decoded);
    } catch {
        throw new Error("connectorId is invalid");
    }
    if (connectorIdJson == null || typeof connectorIdJson !== "object" || Array.isArray(connectorIdJson)) {
        throw new Error("connectorId is invalid");
    }

    const accountIdToEncode = { ConnectorID: connectorIdJson, Reference: reference };
    return stringToBase64NoPadding(JSON.stringify(accountIdToEncode));
}
