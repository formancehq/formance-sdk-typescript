// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
	"math/big"
	"mockserver/internal/sdk/utils"
	"time"
)

type V2LogType string

const (
	V2LogTypeNewTransaction      V2LogType = "NEW_TRANSACTION"
	V2LogTypeSetMetadata         V2LogType = "SET_METADATA"
	V2LogTypeRevertedTransaction V2LogType = "REVERTED_TRANSACTION"
	V2LogTypeDeleteMetadata      V2LogType = "DELETE_METADATA"
)

func (e V2LogType) ToPointer() *V2LogType {
	return &e
}
func (e *V2LogType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "NEW_TRANSACTION":
		fallthrough
	case "SET_METADATA":
		fallthrough
	case "REVERTED_TRANSACTION":
		fallthrough
	case "DELETE_METADATA":
		*e = V2LogType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for V2LogType: %v", v)
	}
}

type V2Log struct {
	Data map[string]any `json:"data"`
	Date time.Time      `json:"date"`
	Hash string         `json:"hash"`
	ID   *big.Int       `json:"id"`
	Type V2LogType      `json:"type"`
}

func (v V2Log) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V2Log) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V2Log) GetData() map[string]any {
	if o == nil {
		return map[string]any{}
	}
	return o.Data
}

func (o *V2Log) GetDate() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.Date
}

func (o *V2Log) GetHash() string {
	if o == nil {
		return ""
	}
	return o.Hash
}

func (o *V2Log) GetID() *big.Int {
	if o == nil {
		return big.NewInt(0)
	}
	return o.ID
}

func (o *V2Log) GetType() V2LogType {
	if o == nil {
		return V2LogType("")
	}
	return o.Type
}
