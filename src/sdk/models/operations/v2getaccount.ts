/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class V2GetAccountRequest extends SpeakeasyBase {
    /**
     * Exact address of the account. It must match the following regular expressions pattern:
     *
     * @remarks
     * ```
     * ^\w+(:\w+)*$
     * ```
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
    address: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: string;

    /**
     * Name of the ledger.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
    ledger: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pit" })
    pit?: Date;
}

export class V2GetAccountResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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
     * OK
     */
    @SpeakeasyMetadata()
    v2AccountResponse?: shared.V2AccountResponse;

    /**
     * Error
     */
    @SpeakeasyMetadata()
    v2ErrorResponse?: errors.V2ErrorResponse;
}
