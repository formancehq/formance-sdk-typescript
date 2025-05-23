// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
)

type TransferInitiationStatus string

const (
	TransferInitiationStatusWaitingForValidation TransferInitiationStatus = "WAITING_FOR_VALIDATION"
	TransferInitiationStatusProcessing           TransferInitiationStatus = "PROCESSING"
	TransferInitiationStatusProcessed            TransferInitiationStatus = "PROCESSED"
	TransferInitiationStatusFailed               TransferInitiationStatus = "FAILED"
	TransferInitiationStatusRejected             TransferInitiationStatus = "REJECTED"
	TransferInitiationStatusValidated            TransferInitiationStatus = "VALIDATED"
	TransferInitiationStatusAskRetried           TransferInitiationStatus = "ASK_RETRIED"
	TransferInitiationStatusAskReversed          TransferInitiationStatus = "ASK_REVERSED"
	TransferInitiationStatusReverseProcessing    TransferInitiationStatus = "REVERSE_PROCESSING"
	TransferInitiationStatusReverseFailed        TransferInitiationStatus = "REVERSE_FAILED"
	TransferInitiationStatusPartiallyReversed    TransferInitiationStatus = "PARTIALLY_REVERSED"
	TransferInitiationStatusReversed             TransferInitiationStatus = "REVERSED"
)

func (e TransferInitiationStatus) ToPointer() *TransferInitiationStatus {
	return &e
}
func (e *TransferInitiationStatus) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "WAITING_FOR_VALIDATION":
		fallthrough
	case "PROCESSING":
		fallthrough
	case "PROCESSED":
		fallthrough
	case "FAILED":
		fallthrough
	case "REJECTED":
		fallthrough
	case "VALIDATED":
		fallthrough
	case "ASK_RETRIED":
		fallthrough
	case "ASK_REVERSED":
		fallthrough
	case "REVERSE_PROCESSING":
		fallthrough
	case "REVERSE_FAILED":
		fallthrough
	case "PARTIALLY_REVERSED":
		fallthrough
	case "REVERSED":
		*e = TransferInitiationStatus(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TransferInitiationStatus: %v", v)
	}
}
