// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
	"time"
)

type V2Ledger struct {
	AddedAt  time.Time         `json:"addedAt"`
	Bucket   string            `json:"bucket"`
	Metadata map[string]string `json:"metadata,omitempty"`
	Name     string            `json:"name"`
}

func (v V2Ledger) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V2Ledger) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V2Ledger) GetAddedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.AddedAt
}

func (o *V2Ledger) GetBucket() string {
	if o == nil {
		return ""
	}
	return o.Bucket
}

func (o *V2Ledger) GetMetadata() map[string]string {
	if o == nil {
		return nil
	}
	return o.Metadata
}

func (o *V2Ledger) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}
