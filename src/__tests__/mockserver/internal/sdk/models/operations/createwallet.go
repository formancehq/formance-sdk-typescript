// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type CreateWalletRequest struct {
	CreateWalletRequest *components.CreateWalletRequest `request:"mediaType=application/json"`
	// Use an idempotency key
	IdempotencyKey *string `header:"style=simple,explode=false,name=Idempotency-Key"`
}

func (o *CreateWalletRequest) GetCreateWalletRequest() *components.CreateWalletRequest {
	if o == nil {
		return nil
	}
	return o.CreateWalletRequest
}

func (o *CreateWalletRequest) GetIdempotencyKey() *string {
	if o == nil {
		return nil
	}
	return o.IdempotencyKey
}

type CreateWalletResponse struct {
	// Wallet created
	CreateWalletResponse *components.CreateWalletResponse
	HTTPMeta             components.HTTPMetadata `json:"-"`
}

func (o *CreateWalletResponse) GetCreateWalletResponse() *components.CreateWalletResponse {
	if o == nil {
		return nil
	}
	return o.CreateWalletResponse
}

func (o *CreateWalletResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}
