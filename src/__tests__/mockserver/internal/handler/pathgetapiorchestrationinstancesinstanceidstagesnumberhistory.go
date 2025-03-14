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

func pathGetAPIOrchestrationInstancesInstanceIDStagesNumberHistory(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "getInstanceStageHistory[0]":
			dir.HandlerFunc("getInstanceStageHistory", testGetInstanceStageHistoryGetInstanceStageHistory0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testGetInstanceStageHistoryGetInstanceStageHistory0(w http.ResponseWriter, req *http.Request) {
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
	respBody := &components.GetWorkflowInstanceHistoryStageResponse{
		Data: []components.WorkflowInstanceHistoryStage{
			components.WorkflowInstanceHistoryStage{
				Attempt: 1195,
				Input: components.WorkflowInstanceHistoryStageInput{
					CreateTransaction: &components.ActivityCreateTransaction{
						Data: &components.OrchestrationPostTransaction{
							Metadata: map[string]string{
								"admin": "true",
							},
							Postings: []components.Posting{
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
							},
							Reference: types.String("ref:001"),
							Script: &components.OrchestrationPostTransactionScript{
								Plain: "vars {\n" +
									"account $user\n" +
									"}\n" +
									"send [COIN 10] (\n" +
									"	source = @world\n" +
									"	destination = $user\n" +
									")\n" +
									"",
								Vars: map[string]any{
									"user": "users:042",
								},
							},
						},
					},
					CreditWallet: &components.ActivityCreditWallet{
						Data: &components.OrchestrationCreditWalletRequest{
							Amount: components.Monetary{
								Amount: big.NewInt(100),
								Asset:  "USD/2",
							},
							Metadata: map[string]string{
								"key": "",
							},
							Sources: []components.Subject{},
						},
					},
					DebitWallet: &components.ActivityDebitWallet{
						Data: &components.DebitWalletRequest{
							Amount: components.Monetary{
								Amount: big.NewInt(100),
								Asset:  "USD/2",
							},
							Metadata: map[string]string{
								"key": "",
							},
							Pending: types.Bool(true),
						},
					},
					StripeTransfer: &components.ActivityStripeTransfer{
						Amount:            big.NewInt(100),
						Asset:             types.String("USD"),
						Destination:       types.String("acct_1Gqj58KZcSIg2N2q"),
						WaitingValidation: types.Bool(false),
					},
				},
				Name: "<value>",
				Output: &components.WorkflowInstanceHistoryStageOutput{
					CreateTransaction: &components.ActivityCreateTransactionOutput{
						Data: components.OrchestrationTransaction{
							ID: big.NewInt(789895),
							Metadata: map[string]string{
								"admin": "true",
							},
							Postings:  []components.Posting{},
							Reference: types.String("ref:001"),
							Reverted:  true,
							Timestamp: types.MustTimeFromString("2023-08-06T02:20:05.010Z"),
						},
					},
					GetAccount: &components.ActivityGetAccountOutput{
						Data: components.OrchestrationAccount{
							Address: "users:001",
							EffectiveVolumes: map[string]components.Volume{
								"USD": components.Volume{
									Balance: big.NewInt(90),
									Input:   big.NewInt(100),
									Output:  big.NewInt(10),
								},
								"EUR": components.Volume{
									Balance: big.NewInt(90),
									Input:   big.NewInt(100),
									Output:  big.NewInt(10),
								},
							},
							Metadata: map[string]string{
								"admin": "true",
							},
							Volumes: map[string]components.Volume{
								"USD": components.Volume{
									Balance: big.NewInt(90),
									Input:   big.NewInt(100),
									Output:  big.NewInt(10),
								},
								"EUR": components.Volume{
									Balance: big.NewInt(90),
									Input:   big.NewInt(100),
									Output:  big.NewInt(10),
								},
							},
						},
					},
					GetPayment: &components.ActivityGetPaymentOutput{
						Data: components.OrchestrationPayment{
							Adjustments: []components.OrchestrationPaymentAdjustment{
								components.OrchestrationPaymentAdjustment{
									Absolute: false,
									Amount:   big.NewInt(100),
									Date:     types.MustTimeFromString("2025-04-08T02:48:47.425Z"),
									Raw:      components.OrchestrationPaymentAdjustmentRaw{},
									Status:   components.OrchestrationPaymentStatusCancelled,
								},
								components.OrchestrationPaymentAdjustment{
									Absolute: true,
									Amount:   big.NewInt(100),
									Date:     types.MustTimeFromString("2025-11-11T02:51:20.511Z"),
									Raw:      components.OrchestrationPaymentAdjustmentRaw{},
									Status:   components.OrchestrationPaymentStatusPending,
								},
							},
							Asset:                "USD",
							ConnectorID:          "<id>",
							CreatedAt:            types.MustTimeFromString("2025-02-01T17:45:57.768Z"),
							DestinationAccountID: "<id>",
							ID:                   "XXX",
							InitialAmount:        big.NewInt(100),
							Metadata:             &components.OrchestrationPaymentMetadata{},
							Raw:                  &components.OrchestrationPaymentRaw{},
							Reference:            "<value>",
							Scheme:               components.OrchestrationPaymentSchemeGooglePay,
							SourceAccountID:      "<id>",
							Status:               components.OrchestrationPaymentStatusTerminated,
							Type:                 components.OrchestrationPaymentTypePayIn,
						},
					},
					ListWallets: &components.OrchestrationListWalletsResponse{
						Cursor: components.OrchestrationListWalletsResponseCursor{
							Data: []components.OrchestrationWallet{
								components.OrchestrationWallet{
									CreatedAt: types.MustTimeFromString("2025-12-06T17:39:27.860Z"),
									ID:        "ffbd66e8-3ce0-4c96-a10c-8f8e0fc37bf1",
									Ledger:    "<value>",
									Metadata:  map[string]string{},
									Name:      "<value>",
								},
								components.OrchestrationWallet{
									CreatedAt: types.MustTimeFromString("2023-10-08T10:30:27.460Z"),
									ID:        "cc38d81a-72b4-44c3-9e12-1021e7d24c49",
									Ledger:    "<value>",
									Metadata: map[string]string{
										"key":  "<value>",
										"key1": "<value>",
										"key2": "<value>",
									},
									Name: "<value>",
								},
								components.OrchestrationWallet{
									CreatedAt: types.MustTimeFromString("2023-08-19T00:05:57.472Z"),
									ID:        "52b35c03-d99a-4510-8a1f-81f33c690889",
									Ledger:    "<value>",
									Metadata:  map[string]string{},
									Name:      "<value>",
								},
							},
							HasMore:  types.Bool(false),
							Next:     types.String(""),
							PageSize: 15,
							Previous: types.String("YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol="),
						},
					},
					RevertTransaction: &components.ActivityRevertTransactionOutput{
						Data: components.OrchestrationTransaction{
							ID: big.NewInt(619586),
							Metadata: map[string]string{
								"admin": "true",
							},
							Postings: []components.Posting{
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
							},
							Reference: types.String("ref:001"),
							Reverted:  false,
							Timestamp: types.MustTimeFromString("2023-05-29T15:10:35.259Z"),
						},
					},
				},
				StartedAt:  types.MustTimeFromString("2023-07-02T11:58:56.305Z"),
				Terminated: false,
			},
			components.WorkflowInstanceHistoryStage{
				Attempt: 626222,
				Input: components.WorkflowInstanceHistoryStageInput{
					CreateTransaction: &components.ActivityCreateTransaction{
						Data: &components.OrchestrationPostTransaction{
							Metadata: map[string]string{
								"admin": "true",
							},
							Postings: []components.Posting{
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
							},
							Reference: types.String("ref:001"),
							Script: &components.OrchestrationPostTransactionScript{
								Plain: "vars {\n" +
									"account $user\n" +
									"}\n" +
									"send [COIN 10] (\n" +
									"	source = @world\n" +
									"	destination = $user\n" +
									")\n" +
									"",
								Vars: map[string]any{
									"user": "users:042",
								},
							},
						},
					},
					CreditWallet: &components.ActivityCreditWallet{
						Data: &components.OrchestrationCreditWalletRequest{
							Amount: components.Monetary{
								Amount: big.NewInt(100),
								Asset:  "USD/2",
							},
							Metadata: map[string]string{
								"key": "",
							},
							Sources: []components.Subject{},
						},
					},
					DebitWallet: &components.ActivityDebitWallet{
						Data: &components.DebitWalletRequest{
							Amount: components.Monetary{
								Amount: big.NewInt(100),
								Asset:  "USD/2",
							},
							Metadata: map[string]string{
								"key": "",
							},
							Pending: types.Bool(true),
						},
					},
					StripeTransfer: &components.ActivityStripeTransfer{
						Amount:            big.NewInt(100),
						Asset:             types.String("USD"),
						Destination:       types.String("acct_1Gqj58KZcSIg2N2q"),
						WaitingValidation: types.Bool(false),
					},
				},
				Name: "<value>",
				Output: &components.WorkflowInstanceHistoryStageOutput{
					CreateTransaction: &components.ActivityCreateTransactionOutput{
						Data: components.OrchestrationTransaction{
							ID: big.NewInt(378579),
							Metadata: map[string]string{
								"admin": "true",
							},
							Postings: []components.Posting{
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
							},
							Reference: types.String("ref:001"),
							Reverted:  false,
							Timestamp: types.MustTimeFromString("2024-04-15T17:34:05.615Z"),
						},
					},
					GetAccount: &components.ActivityGetAccountOutput{
						Data: components.OrchestrationAccount{
							Address: "users:001",
							EffectiveVolumes: map[string]components.Volume{
								"USD": components.Volume{
									Balance: big.NewInt(90),
									Input:   big.NewInt(100),
									Output:  big.NewInt(10),
								},
								"EUR": components.Volume{
									Balance: big.NewInt(90),
									Input:   big.NewInt(100),
									Output:  big.NewInt(10),
								},
							},
							Metadata: map[string]string{
								"admin": "true",
							},
							Volumes: map[string]components.Volume{
								"USD": components.Volume{
									Balance: big.NewInt(90),
									Input:   big.NewInt(100),
									Output:  big.NewInt(10),
								},
								"EUR": components.Volume{
									Balance: big.NewInt(90),
									Input:   big.NewInt(100),
									Output:  big.NewInt(10),
								},
							},
						},
					},
					GetPayment: &components.ActivityGetPaymentOutput{
						Data: components.OrchestrationPayment{
							Adjustments: []components.OrchestrationPaymentAdjustment{
								components.OrchestrationPaymentAdjustment{
									Absolute: true,
									Amount:   big.NewInt(100),
									Date:     types.MustTimeFromString("2023-09-29T18:17:48.825Z"),
									Raw:      components.OrchestrationPaymentAdjustmentRaw{},
									Status:   components.OrchestrationPaymentStatusFailed,
								},
								components.OrchestrationPaymentAdjustment{
									Absolute: false,
									Amount:   big.NewInt(100),
									Date:     types.MustTimeFromString("2025-10-19T21:59:00.100Z"),
									Raw:      components.OrchestrationPaymentAdjustmentRaw{},
									Status:   components.OrchestrationPaymentStatusTerminated,
								},
								components.OrchestrationPaymentAdjustment{
									Absolute: true,
									Amount:   big.NewInt(100),
									Date:     types.MustTimeFromString("2024-08-27T16:14:46.808Z"),
									Raw:      components.OrchestrationPaymentAdjustmentRaw{},
									Status:   components.OrchestrationPaymentStatusTerminated,
								},
							},
							Asset:                "USD",
							ConnectorID:          "<id>",
							CreatedAt:            types.MustTimeFromString("2025-01-07T21:12:58.328Z"),
							DestinationAccountID: "<id>",
							ID:                   "XXX",
							InitialAmount:        big.NewInt(100),
							Metadata:             &components.OrchestrationPaymentMetadata{},
							Raw:                  &components.OrchestrationPaymentRaw{},
							Reference:            "<value>",
							Scheme:               components.OrchestrationPaymentSchemeAch,
							SourceAccountID:      "<id>",
							Status:               components.OrchestrationPaymentStatusPending,
							Type:                 components.OrchestrationPaymentTypeTransfer,
						},
					},
					ListWallets: &components.OrchestrationListWalletsResponse{
						Cursor: components.OrchestrationListWalletsResponseCursor{
							Data: []components.OrchestrationWallet{
								components.OrchestrationWallet{
									CreatedAt: types.MustTimeFromString("2025-04-30T04:49:25.662Z"),
									ID:        "3b1509a5-fe8d-4e70-9916-180485cfaa61",
									Ledger:    "<value>",
									Metadata: map[string]string{
										"key": "<value>",
									},
									Name: "<value>",
								},
								components.OrchestrationWallet{
									CreatedAt: types.MustTimeFromString("2025-06-23T23:43:36.792Z"),
									ID:        "a6d8edb3-a103-4920-bfca-b898a403e10c",
									Ledger:    "<value>",
									Metadata:  map[string]string{},
									Name:      "<value>",
								},
							},
							HasMore:  types.Bool(false),
							Next:     types.String(""),
							PageSize: 15,
							Previous: types.String("YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol="),
						},
					},
					RevertTransaction: &components.ActivityRevertTransactionOutput{
						Data: components.OrchestrationTransaction{
							ID: big.NewInt(155282),
							Metadata: map[string]string{
								"admin": "true",
							},
							Postings: []components.Posting{
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
								components.Posting{
									Amount:      big.NewInt(100),
									Asset:       "COIN",
									Destination: "users:002",
									Source:      "users:001",
								},
							},
							Reference: types.String("ref:001"),
							Reverted:  false,
							Timestamp: types.MustTimeFromString("2023-12-07T07:38:05.268Z"),
						},
					},
				},
				StartedAt:  types.MustTimeFromString("2023-12-17T14:52:10.553Z"),
				Terminated: true,
			},
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
