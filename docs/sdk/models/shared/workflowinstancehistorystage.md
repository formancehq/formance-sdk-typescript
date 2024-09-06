# WorkflowInstanceHistoryStage

## Example Usage

```typescript
import {
  OrchestrationPaymentScheme,
  OrchestrationPaymentStatus,
  OrchestrationPaymentType,
  WorkflowInstanceHistoryStage,
} from "@formance/formance-sdk/sdk/models/shared";

let value: WorkflowInstanceHistoryStage = {
    attempt: 160538,
    input: {
        createTransaction: {
            data: {
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
                script: {
                    plain:
                        "vars {\n" +
                        "account $user\n" +
                        "}\n" +
                        "send [COIN 10] (\n" +
                        "	source = @world\n" +
                        "	destination = $user\n" +
                        ")\n" +
                        "",
                    vars: {
                        user: "users:042",
                    },
                },
            },
        },
        creditWallet: {
            data: {
                amount: {
                    amount: BigInt("100"),
                    asset: "USD/2",
                },
                metadata: {
                    key: "",
                },
                sources: [
                    {
                        identifier: "<value>",
                        type: "<value>",
                    },
                ],
            },
        },
        debitWallet: {
            data: {
                amount: {
                    amount: BigInt("100"),
                    asset: "USD/2",
                },
                metadata: {
                    key: "",
                },
                pending: true,
            },
        },
        stripeTransfer: {
            amount: BigInt("100"),
            asset: "USD",
            destination: "acct_1Gqj58KZcSIg2N2q",
            metadata: {},
            waitingValidation: false,
        },
    },
    name: "<value>",
    output: {
        createTransaction: {
            data: {
                id: BigInt("796392"),
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
                timestamp: new Date("2022-12-04T21:09:33.258Z"),
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
                        date: new Date("2024-11-17T05:55:05.965Z"),
                        raw: {},
                        status: OrchestrationPaymentStatus.Active,
                    },
                ],
                asset: "USD",
                connectorID: "<value>",
                createdAt: new Date("2023-05-18T02:53:01.141Z"),
                destinationAccountID: "<value>",
                id: "XXX",
                initialAmount: BigInt("100"),
                metadata: {},
                raw: {},
                reference: "<value>",
                scheme: OrchestrationPaymentScheme.Sepa,
                sourceAccountID: "<value>",
                status: OrchestrationPaymentStatus.Failed,
                type: OrchestrationPaymentType.Other,
            },
        },
        listWallets: {
            cursor: {
                data: [
                    {
                        createdAt: new Date("2024-07-29T01:32:11.096Z"),
                        id: "871f99dd-2efd-4121-aa6f-1e674bdb04f1",
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
                id: BigInt("355369"),
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
                timestamp: new Date("2023-05-02T11:47:05.253Z"),
            },
        },
    },
    startedAt: new Date("2023-01-26T22:49:04.906Z"),
    terminated: false,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `attempt`                                                                                                     | *number*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `error`                                                                                                       | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `input`                                                                                                       | [shared.WorkflowInstanceHistoryStageInput](../../../sdk/models/shared/workflowinstancehistorystageinput.md)   | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `lastFailure`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `nextExecution`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `output`                                                                                                      | [shared.WorkflowInstanceHistoryStageOutput](../../../sdk/models/shared/workflowinstancehistorystageoutput.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `startedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `terminated`                                                                                                  | *boolean*                                                                                                     | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `terminatedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |