// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type V2UpdateLedgerMetadataRequest struct {
	RequestBody map[string]string `request:"mediaType=application/json"`
	// Name of the ledger.
	Ledger string `pathParam:"style=simple,explode=false,name=ledger"`
}

func (o *V2UpdateLedgerMetadataRequest) GetRequestBody() map[string]string {
	if o == nil {
		return nil
	}
	return o.RequestBody
}

func (o *V2UpdateLedgerMetadataRequest) GetLedger() string {
	if o == nil {
		return ""
	}
	return o.Ledger
}

type V2UpdateLedgerMetadataResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Error
	V2ErrorResponse *components.V2ErrorResponse
}

func (o *V2UpdateLedgerMetadataResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *V2UpdateLedgerMetadataResponse) GetV2ErrorResponse() *components.V2ErrorResponse {
	if o == nil {
		return nil
	}
	return o.V2ErrorResponse
}
