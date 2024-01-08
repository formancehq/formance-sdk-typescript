/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ReconcileRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    reconciliationRequest: shared.ReconciliationRequest;

    /**
     * The policy ID.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policyID" })
    policyID: string;
}

export class ReconcileResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    reconciliationResponse?: shared.ReconciliationResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Error response
     */
    @SpeakeasyMetadata()
    reconciliationErrorResponse?: shared.ReconciliationErrorResponse;
}
