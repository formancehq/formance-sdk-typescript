// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
)

type PaymentStatus string

const (
	PaymentStatusPending         PaymentStatus = "PENDING"
	PaymentStatusSucceeded       PaymentStatus = "SUCCEEDED"
	PaymentStatusCancelled       PaymentStatus = "CANCELLED"
	PaymentStatusFailed          PaymentStatus = "FAILED"
	PaymentStatusExpired         PaymentStatus = "EXPIRED"
	PaymentStatusRefunded        PaymentStatus = "REFUNDED"
	PaymentStatusRefundedFailure PaymentStatus = "REFUNDED_FAILURE"
	PaymentStatusDispute         PaymentStatus = "DISPUTE"
	PaymentStatusDisputeWon      PaymentStatus = "DISPUTE_WON"
	PaymentStatusDisputeLost     PaymentStatus = "DISPUTE_LOST"
	PaymentStatusOther           PaymentStatus = "OTHER"
)

func (e PaymentStatus) ToPointer() *PaymentStatus {
	return &e
}
func (e *PaymentStatus) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PENDING":
		fallthrough
	case "SUCCEEDED":
		fallthrough
	case "CANCELLED":
		fallthrough
	case "FAILED":
		fallthrough
	case "EXPIRED":
		fallthrough
	case "REFUNDED":
		fallthrough
	case "REFUNDED_FAILURE":
		fallthrough
	case "DISPUTE":
		fallthrough
	case "DISPUTE_WON":
		fallthrough
	case "DISPUTE_LOST":
		fallthrough
	case "OTHER":
		*e = PaymentStatus(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PaymentStatus: %v", v)
	}
}
