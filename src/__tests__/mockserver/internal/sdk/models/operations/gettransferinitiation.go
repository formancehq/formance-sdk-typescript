// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type GetTransferInitiationRequest struct {
	// The transfer ID.
	TransferID string `pathParam:"style=simple,explode=false,name=transferId"`
}

func (o *GetTransferInitiationRequest) GetTransferID() string {
	if o == nil {
		return ""
	}
	return o.TransferID
}

type GetTransferInitiationResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	TransferInitiationResponse *components.TransferInitiationResponse
}

func (o *GetTransferInitiationResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetTransferInitiationResponse) GetTransferInitiationResponse() *components.TransferInitiationResponse {
	if o == nil {
		return nil
	}
	return o.TransferInitiationResponse
}
