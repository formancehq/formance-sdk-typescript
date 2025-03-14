// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"math/big"
	"mockserver/internal/sdk/utils"
	"time"
)

type V3PaymentAdjustmentRaw struct {
}

type V3PaymentAdjustment struct {
	Amount    *big.Int               `json:"amount,omitempty"`
	Asset     *string                `json:"asset,omitempty"`
	CreatedAt time.Time              `json:"createdAt"`
	ID        string                 `json:"id"`
	Metadata  map[string]string      `json:"metadata,omitempty"`
	Raw       V3PaymentAdjustmentRaw `json:"raw"`
	Reference string                 `json:"reference"`
	Status    V3PaymentStatusEnum    `json:"status"`
}

func (v V3PaymentAdjustment) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V3PaymentAdjustment) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V3PaymentAdjustment) GetAmount() *big.Int {
	if o == nil {
		return nil
	}
	return o.Amount
}

func (o *V3PaymentAdjustment) GetAsset() *string {
	if o == nil {
		return nil
	}
	return o.Asset
}

func (o *V3PaymentAdjustment) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *V3PaymentAdjustment) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *V3PaymentAdjustment) GetMetadata() map[string]string {
	if o == nil {
		return nil
	}
	return o.Metadata
}

func (o *V3PaymentAdjustment) GetRaw() V3PaymentAdjustmentRaw {
	if o == nil {
		return V3PaymentAdjustmentRaw{}
	}
	return o.Raw
}

func (o *V3PaymentAdjustment) GetReference() string {
	if o == nil {
		return ""
	}
	return o.Reference
}

func (o *V3PaymentAdjustment) GetStatus() V3PaymentStatusEnum {
	if o == nil {
		return V3PaymentStatusEnum("")
	}
	return o.Status
}
