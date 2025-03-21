// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"math/big"
	"mockserver/internal/sdk/utils"
	"time"
)

type V3PaymentInitiationAdjustment struct {
	Amount    *big.Int                      `json:"amount,omitempty"`
	Asset     *string                       `json:"asset,omitempty"`
	CreatedAt time.Time                     `json:"createdAt"`
	Error     *string                       `json:"error,omitempty"`
	ID        string                        `json:"id"`
	Metadata  map[string]string             `json:"metadata,omitempty"`
	Status    V3PaymentInitiationStatusEnum `json:"status"`
}

func (v V3PaymentInitiationAdjustment) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V3PaymentInitiationAdjustment) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V3PaymentInitiationAdjustment) GetAmount() *big.Int {
	if o == nil {
		return nil
	}
	return o.Amount
}

func (o *V3PaymentInitiationAdjustment) GetAsset() *string {
	if o == nil {
		return nil
	}
	return o.Asset
}

func (o *V3PaymentInitiationAdjustment) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *V3PaymentInitiationAdjustment) GetError() *string {
	if o == nil {
		return nil
	}
	return o.Error
}

func (o *V3PaymentInitiationAdjustment) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *V3PaymentInitiationAdjustment) GetMetadata() map[string]string {
	if o == nil {
		return nil
	}
	return o.Metadata
}

func (o *V3PaymentInitiationAdjustment) GetStatus() V3PaymentInitiationStatusEnum {
	if o == nil {
		return V3PaymentInitiationStatusEnum("")
	}
	return o.Status
}
