// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type V2CreateTransactionRequest struct {
	// Use an idempotency key
	IdempotencyKey *string `header:"style=simple,explode=false,name=Idempotency-Key"`
	// The request body must contain at least one of the following objects:
	//   - `postings`: suitable for simple transactions
	//   - `script`: enabling more complex transactions with Numscript
	//
	V2PostTransaction components.V2PostTransaction `request:"mediaType=application/json"`
	// Set the dryRun mode. dry run mode doesn't add the logs to the database or publish a message to the message broker.
	DryRun *bool `queryParam:"style=form,explode=true,name=dryRun"`
	// Disable balance checks when passing postings
	Force *bool `queryParam:"style=form,explode=true,name=force"`
	// Name of the ledger.
	Ledger string `pathParam:"style=simple,explode=false,name=ledger"`
}

func (o *V2CreateTransactionRequest) GetIdempotencyKey() *string {
	if o == nil {
		return nil
	}
	return o.IdempotencyKey
}

func (o *V2CreateTransactionRequest) GetV2PostTransaction() components.V2PostTransaction {
	if o == nil {
		return components.V2PostTransaction{}
	}
	return o.V2PostTransaction
}

func (o *V2CreateTransactionRequest) GetDryRun() *bool {
	if o == nil {
		return nil
	}
	return o.DryRun
}

func (o *V2CreateTransactionRequest) GetForce() *bool {
	if o == nil {
		return nil
	}
	return o.Force
}

func (o *V2CreateTransactionRequest) GetLedger() string {
	if o == nil {
		return ""
	}
	return o.Ledger
}

type V2CreateTransactionResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	V2CreateTransactionResponse *components.V2CreateTransactionResponse
}

func (o *V2CreateTransactionResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *V2CreateTransactionResponse) GetV2CreateTransactionResponse() *components.V2CreateTransactionResponse {
	if o == nil {
		return nil
	}
	return o.V2CreateTransactionResponse
}
