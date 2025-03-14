// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"math/big"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type RevertTransactionRequest struct {
	// Allow to disable balances checks
	DisableChecks *bool `queryParam:"style=form,explode=true,name=disableChecks"`
	// Name of the ledger.
	Ledger string `pathParam:"style=simple,explode=false,name=ledger"`
	// Transaction ID.
	Txid *big.Int `pathParam:"style=simple,explode=false,name=txid"`
}

func (r RevertTransactionRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(r, "", false)
}

func (r *RevertTransactionRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &r, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *RevertTransactionRequest) GetDisableChecks() *bool {
	if o == nil {
		return nil
	}
	return o.DisableChecks
}

func (o *RevertTransactionRequest) GetLedger() string {
	if o == nil {
		return ""
	}
	return o.Ledger
}

func (o *RevertTransactionRequest) GetTxid() *big.Int {
	if o == nil {
		return big.NewInt(0)
	}
	return o.Txid
}

type RevertTransactionResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	TransactionResponse *components.TransactionResponse
}

func (o *RevertTransactionResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *RevertTransactionResponse) GetTransactionResponse() *components.TransactionResponse {
	if o == nil {
		return nil
	}
	return o.TransactionResponse
}
