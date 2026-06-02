# WorkflowInstanceHistoryStageInput

## Example Usage

```typescript
import { WorkflowInstanceHistoryStageInput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WorkflowInstanceHistoryStageInput = {
  createTransaction: {
    data: {
      metadata: {
        "admin": "true",
      },
      postings: [
        {
          amount: 100n,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
      ],
      reference: "ref:001",
      script: {
        plain:
          "vars {\naccount $user\n}\nsend [COIN 10] (\n\tsource = @world\n\tdestination = $user\n)\n",
        vars: {
          "user": "users:042",
        },
      },
    },
  },
  createTransferInitiation: {
    amount: 100n,
    asset: "USD",
    destination: "acct_1Gqj58KZcSIg2N2q",
    metadata: {},
    provider: "stripe",
  },
  creditWallet: {
    data: {
      amount: {
        amount: 100n,
        asset: "USD/2",
      },
      metadata: {
        "key": "",
      },
      sources: [],
    },
  },
  debitWallet: {
    data: {
      amount: {
        amount: 100n,
        asset: "USD/2",
      },
      metadata: {
        "key": "",
      },
      pending: true,
    },
  },
  stripeTransfer: {
    amount: 100n,
    asset: "USD",
    destination: "acct_1Gqj58KZcSIg2N2q",
    metadata: {},
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `addAccountMetadata`                                                                                                  | [orchestration.ActivityAddAccountMetadata](../../../sdk/models/orchestration/activityaddaccountmetadata.md)           | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `confirmHold`                                                                                                         | [orchestration.ActivityConfirmHold](../../../sdk/models/orchestration/activityconfirmhold.md)                         | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `createTransaction`                                                                                                   | [orchestration.ActivityCreateTransaction](../../../sdk/models/orchestration/activitycreatetransaction.md)             | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `createTransferInitiation`                                                                                            | [orchestration.CreateTransferInitiationRequest](../../../sdk/models/orchestration/createtransferinitiationrequest.md) | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `creditWallet`                                                                                                        | [orchestration.ActivityCreditWallet](../../../sdk/models/orchestration/activitycreditwallet.md)                       | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `debitWallet`                                                                                                         | [orchestration.ActivityDebitWallet](../../../sdk/models/orchestration/activitydebitwallet.md)                         | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `getAccount`                                                                                                          | [orchestration.ActivityGetAccount](../../../sdk/models/orchestration/activitygetaccount.md)                           | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `getPayment`                                                                                                          | [orchestration.ActivityGetPayment](../../../sdk/models/orchestration/activitygetpayment.md)                           | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `getWallet`                                                                                                           | [orchestration.ActivityGetWallet](../../../sdk/models/orchestration/activitygetwallet.md)                             | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `listWallets`                                                                                                         | [orchestration.ActivityListWallets](../../../sdk/models/orchestration/activitylistwallets.md)                         | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `revertTransaction`                                                                                                   | [orchestration.ActivityRevertTransaction](../../../sdk/models/orchestration/activityreverttransaction.md)             | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `stripeTransfer`                                                                                                      | [orchestration.StripeTransferRequest](../../../sdk/models/orchestration/stripetransferrequest.md)                     | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `voidHold`                                                                                                            | [orchestration.ActivityVoidHold](../../../sdk/models/orchestration/activityvoidhold.md)                               | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |