// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
	"time"
)

type V2StageSend struct {
	Amount      *V2Monetary             `json:"amount,omitempty"`
	Destination *V2StageSendDestination `json:"destination,omitempty"`
	Metadata    map[string]string       `json:"metadata,omitempty"`
	Source      *V2StageSendSource      `json:"source,omitempty"`
	Timestamp   *time.Time              `json:"timestamp,omitempty"`
}

func (v V2StageSend) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V2StageSend) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, true); err != nil {
		return err
	}
	return nil
}

func (o *V2StageSend) GetAmount() *V2Monetary {
	if o == nil {
		return nil
	}
	return o.Amount
}

func (o *V2StageSend) GetDestination() *V2StageSendDestination {
	if o == nil {
		return nil
	}
	return o.Destination
}

func (o *V2StageSend) GetMetadata() map[string]string {
	if o == nil {
		return nil
	}
	return o.Metadata
}

func (o *V2StageSend) GetSource() *V2StageSendSource {
	if o == nil {
		return nil
	}
	return o.Source
}

func (o *V2StageSend) GetTimestamp() *time.Time {
	if o == nil {
		return nil
	}
	return o.Timestamp
}
