// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type GetWalletRequest struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

func (o *GetWalletRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

type GetWalletResponse struct {
	// Wallet
	GetWalletResponse *components.GetWalletResponse
	HTTPMeta          components.HTTPMetadata `json:"-"`
}

func (o *GetWalletResponse) GetGetWalletResponse() *components.GetWalletResponse {
	if o == nil {
		return nil
	}
	return o.GetWalletResponse
}

func (o *GetWalletResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}
