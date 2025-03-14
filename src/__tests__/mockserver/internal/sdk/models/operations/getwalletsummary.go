// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type GetWalletSummaryRequest struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

func (o *GetWalletSummaryRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

type GetWalletSummaryResponse struct {
	// Wallet summary
	GetWalletSummaryResponse *components.GetWalletSummaryResponse
	HTTPMeta                 components.HTTPMetadata `json:"-"`
}

func (o *GetWalletSummaryResponse) GetGetWalletSummaryResponse() *components.GetWalletSummaryResponse {
	if o == nil {
		return nil
	}
	return o.GetWalletSummaryResponse
}

func (o *GetWalletSummaryResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}
