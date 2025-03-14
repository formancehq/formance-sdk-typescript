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

func pathGetAPIPaymentsV3PaymentInitiations(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "v3ListPaymentInitiations[0]":
			dir.HandlerFunc("v3ListPaymentInitiations", testV3ListPaymentInitiationsV3ListPaymentInitiations0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testV3ListPaymentInitiationsV3ListPaymentInitiations0(w http.ResponseWriter, req *http.Request) {
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
	respBody := &components.V3PaymentInitiationsCursorResponse{
		Cursor: components.V3PaymentInitiationsCursorResponseCursor{
			Data: []components.V3PaymentInitiation{
				components.V3PaymentInitiation{
					Amount:      big.NewInt(203475),
					Asset:       "<value>",
					ConnectorID: "<value>",
					CreatedAt:   types.MustTimeFromString("2024-03-08T03:55:10.091Z"),
					Description: "inside pessimistic small adrenalin reach measly boohoo eek soap amid",
					ID:          "<id>",
					Reference:   "<value>",
					ScheduledAt: types.MustTimeFromString("2025-11-27T20:49:45.578Z"),
					Status:      components.V3PaymentInitiationStatusEnumUnknown,
					Type:        components.V3PaymentInitiationTypeEnumTransfer,
				},
			},
			HasMore:  false,
			Next:     types.String(""),
			PageSize: 15,
			Previous: types.String("YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol="),
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
