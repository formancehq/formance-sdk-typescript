// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
	"time"
)

type OrchestrationWallet struct {
	CreatedAt time.Time `json:"createdAt"`
	// The unique ID of the wallet.
	ID     string `json:"id"`
	Ledger string `json:"ledger"`
	// Metadata associated with the wallet.
	Metadata map[string]string `json:"metadata"`
	Name     string            `json:"name"`
}

func (o OrchestrationWallet) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(o, "", false)
}

func (o *OrchestrationWallet) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &o, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *OrchestrationWallet) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *OrchestrationWallet) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *OrchestrationWallet) GetLedger() string {
	if o == nil {
		return ""
	}
	return o.Ledger
}

func (o *OrchestrationWallet) GetMetadata() map[string]string {
	if o == nil {
		return map[string]string{}
	}
	return o.Metadata
}

func (o *OrchestrationWallet) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}
