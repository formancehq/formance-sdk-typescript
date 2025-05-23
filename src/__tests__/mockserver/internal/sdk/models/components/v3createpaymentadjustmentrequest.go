// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"math/big"
	"mockserver/internal/sdk/utils"
	"time"
)

type V3CreatePaymentAdjustmentRequest struct {
	Amount    *big.Int            `json:"amount,omitempty"`
	Asset     *string             `json:"asset,omitempty"`
	CreatedAt time.Time           `json:"createdAt"`
	Metadata  map[string]string   `json:"metadata,omitempty"`
	Reference string              `json:"reference"`
	Status    V3PaymentStatusEnum `json:"status"`
}

func (v V3CreatePaymentAdjustmentRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V3CreatePaymentAdjustmentRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V3CreatePaymentAdjustmentRequest) GetAmount() *big.Int {
	if o == nil {
		return nil
	}
	return o.Amount
}

func (o *V3CreatePaymentAdjustmentRequest) GetAsset() *string {
	if o == nil {
		return nil
	}
	return o.Asset
}

func (o *V3CreatePaymentAdjustmentRequest) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *V3CreatePaymentAdjustmentRequest) GetMetadata() map[string]string {
	if o == nil {
		return nil
	}
	return o.Metadata
}

func (o *V3CreatePaymentAdjustmentRequest) GetReference() string {
	if o == nil {
		return ""
	}
	return o.Reference
}

func (o *V3CreatePaymentAdjustmentRequest) GetStatus() V3PaymentStatusEnum {
	if o == nil {
		return V3PaymentStatusEnum("")
	}
	return o.Status
}
