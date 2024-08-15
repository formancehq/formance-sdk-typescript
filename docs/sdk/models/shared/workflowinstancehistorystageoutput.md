# WorkflowInstanceHistoryStageOutput

## Example Usage

```typescript
import {
  OrchestrationPaymentScheme,
  OrchestrationPaymentStatus,
  OrchestrationPaymentType,
  WorkflowInstanceHistoryStageOutput,
} from "@formance/formance-sdk/sdk/models/shared";

let value: WorkflowInstanceHistoryStageOutput = {
    createTransaction: {
        data: {
            id: BigInt("391774"),
            metadata: {
                admin: "true",
            },
            postings: [
                {
                    amount: BigInt("100"),
                    asset: "COIN",
                    destination: "users:002",
                    source: "users:001",
                },
            ],
            reference: "ref:001",
            reverted: false,
            timestamp: new Date("2022-01-18T21:30:17.962Z"),
        },
    },
    getAccount: {
        data: {
            address: "users:001",
            effectiveVolumes: {
                USD: {
                    balance: BigInt("90"),
                    input: BigInt("100"),
                    output: BigInt("10"),
                },
                EUR: {
                    balance: BigInt("90"),
                    input: BigInt("100"),
                    output: BigInt("10"),
                },
            },
            metadata: {
                admin: "true",
            },
            volumes: {
                USD: {
                    balance: BigInt("90"),
                    input: BigInt("100"),
                    output: BigInt("10"),
                },
                EUR: {
                    balance: BigInt("90"),
                    input: BigInt("100"),
                    output: BigInt("10"),
                },
            },
        },
    },
    getPayment: {
        data: {
            adjustments: [
                {
                    absolute: false,
                    amount: BigInt("100"),
                    date: new Date("2023-08-06T21:45:39.178Z"),
                    raw: {},
                    status: OrchestrationPaymentStatus.Active,
                },
            ],
            asset: "USD",
            connectorID: "<value>",
            createdAt: new Date("2024-07-15T12:17:18.712Z"),
            destinationAccountID: "<value>",
            id: "XXX",
            initialAmount: BigInt("100"),
            metadata: {},
            raw: {},
            reference: "<value>",
            scheme: OrchestrationPaymentScheme.SepaDebit,
            sourceAccountID: "<value>",
            status: OrchestrationPaymentStatus.Failed,
            type: OrchestrationPaymentType.Other,
        },
    },
    listWallets: {
        cursor: {
            data: [
                {
                    createdAt: new Date("2024-01-16T13:49:34.250Z"),
                    id: "19f1d170-5133-49d0-8086-a1840394c260",
                    ledger: "<value>",
                    metadata: {
                        key: "<value>",
                    },
                    name: "<value>",
                },
            ],
            hasMore: false,
            next: "",
            pageSize: 15,
            previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
        },
    },
    revertTransaction: {
        data: {
            id: BigInt("491025"),
            metadata: {
                admin: "true",
            },
            postings: [
                {
                    amount: BigInt("100"),
                    asset: "COIN",
                    destination: "users:002",
                    source: "users:001",
                },
            ],
            reference: "ref:001",
            reverted: false,
            timestamp: new Date("2022-05-07T13:41:55.821Z"),
        },
    },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `createTransaction`                                                                                       | [shared.ActivityCreateTransactionOutput](../../../sdk/models/shared/activitycreatetransactionoutput.md)   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `debitWallet`                                                                                             | [shared.ActivityDebitWalletOutput](../../../sdk/models/shared/activitydebitwalletoutput.md)               | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `getAccount`                                                                                              | [shared.ActivityGetAccountOutput](../../../sdk/models/shared/activitygetaccountoutput.md)                 | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `getPayment`                                                                                              | [shared.ActivityGetPaymentOutput](../../../sdk/models/shared/activitygetpaymentoutput.md)                 | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `getWallet`                                                                                               | [shared.ActivityGetWalletOutput](../../../sdk/models/shared/activitygetwalletoutput.md)                   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `listWallets`                                                                                             | [shared.OrchestrationListWalletsResponse](../../../sdk/models/shared/orchestrationlistwalletsresponse.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `revertTransaction`                                                                                       | [shared.ActivityRevertTransactionOutput](../../../sdk/models/shared/activityreverttransactionoutput.md)   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |