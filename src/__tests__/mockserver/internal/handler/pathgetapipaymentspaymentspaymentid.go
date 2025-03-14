// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"fmt"
	"log"
	"math/big"
	"mockserver/internal/handler/assert"
	"mockserver/internal/logging"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/types"
	"mockserver/internal/sdk/utils"
	"mockserver/internal/tracking"
	"net/http"
)

func pathGetAPIPaymentsPaymentsPaymentID(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "getPayment[0]":
			dir.HandlerFunc("getPayment", testGetPaymentGetPayment0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testGetPaymentGetPayment0(w http.ResponseWriter, req *http.Request) {
	if err := assert.SecurityAuthorizationHeader(req, true, "Bearer"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	if err := assert.AcceptHeader(req, []string{"application/json"}); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.HeaderExists(req, "User-Agent"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	respBody := &components.PaymentResponse{
		Data: components.Payment{
			Adjustments: []components.PaymentAdjustment{
				components.PaymentAdjustment{
					Amount:    big.NewInt(100),
					CreatedAt: types.MustTimeFromString("2025-11-19T01:14:15.129Z"),
					Raw:       components.PaymentAdjustmentRaw{},
					Reference: "<value>",
					Status:    components.PaymentStatusExpired,
				},
			},
			Amount:               big.NewInt(100),
			Asset:                "USD",
			ConnectorID:          "<id>",
			CreatedAt:            types.MustTimeFromString("2024-02-18T17:18:36.576Z"),
			DestinationAccountID: "<id>",
			ID:                   "XXX",
			InitialAmount:        big.NewInt(100),
			Metadata: map[string]string{
				"key":  "<value>",
				"key1": "<value>",
			},
			Raw:             &components.Raw{},
			Reference:       "<value>",
			Scheme:          components.PaymentSchemeUnionpay,
			SourceAccountID: "<id>",
			Status:          components.PaymentStatusDispute,
			Type:            components.PaymentTypeTransfer,
		},
	}
	respBodyBytes, err := utils.MarshalJSON(respBody, "", true)

	if err != nil {
		http.Error(
			w,
			"Unable to encode response body as JSON: "+err.Error(),
			http.StatusInternalServerError,
		)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(respBodyBytes)
}
