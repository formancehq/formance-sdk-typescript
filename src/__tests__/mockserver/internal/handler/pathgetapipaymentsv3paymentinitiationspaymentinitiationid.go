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

func pathGetAPIPaymentsV3PaymentInitiationsPaymentInitiationID(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "v3GetPaymentInitiation[0]":
			dir.HandlerFunc("v3GetPaymentInitiation", testV3GetPaymentInitiationV3GetPaymentInitiation0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testV3GetPaymentInitiationV3GetPaymentInitiation0(w http.ResponseWriter, req *http.Request) {
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
	respBody := &components.V3GetPaymentInitiationResponse{
		Data: components.V3PaymentInitiation{
			Amount:      big.NewInt(42625),
			Asset:       "<value>",
			ConnectorID: "<value>",
			CreatedAt:   types.MustTimeFromString("2025-07-18T19:40:16.233Z"),
			Description: "off of between vacantly though instead gazebo",
			ID:          "<id>",
			Reference:   "<value>",
			ScheduledAt: types.MustTimeFromString("2025-04-28T02:58:21.926Z"),
			Status:      components.V3PaymentInitiationStatusEnumReverseFailed,
			Type:        components.V3PaymentInitiationTypeEnumTransfer,
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
