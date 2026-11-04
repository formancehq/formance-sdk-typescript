# WorkflowInstanceHistoryStageInput

Arguments an activity was called with, keyed by activity name

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

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `addAccountMetadata`                                                                                                    | [orchestration.ActivityAddAccountMetadata](../../../sdk/models/orchestration/activityaddaccountmetadata.md)             | :heavy_minus_sign:                                                                                                      | Arguments for the activity that sets metadata on a ledger account                                                       |
| `confirmHold`                                                                                                           | [orchestration.ActivityConfirmHold](../../../sdk/models/orchestration/activityconfirmhold.md)                           | :heavy_minus_sign:                                                                                                      | Arguments for the activity that confirms a wallet hold                                                                  |
| `createTransaction`                                                                                                     | [orchestration.ActivityCreateTransaction](../../../sdk/models/orchestration/activitycreatetransaction.md)               | :heavy_minus_sign:                                                                                                      | Arguments for the activity that writes a transaction to a ledger                                                        |
| `createTransferInitiation`                                                                                              | [orchestration.ActivityCreateTransferInitiation](../../../sdk/models/orchestration/activitycreatetransferinitiation.md) | :heavy_minus_sign:                                                                                                      | Arguments for the activity that initiates a transfer through a connector                                                |
| `creditWallet`                                                                                                          | [orchestration.ActivityCreditWallet](../../../sdk/models/orchestration/activitycreditwallet.md)                         | :heavy_minus_sign:                                                                                                      | Arguments for the activity that credits a wallet                                                                        |
| `debitWallet`                                                                                                           | [orchestration.ActivityDebitWallet](../../../sdk/models/orchestration/activitydebitwallet.md)                           | :heavy_minus_sign:                                                                                                      | Arguments for the activity that debits a wallet                                                                         |
| `getAccount`                                                                                                            | [orchestration.ActivityGetAccount](../../../sdk/models/orchestration/activitygetaccount.md)                             | :heavy_minus_sign:                                                                                                      | Arguments for the activity that reads a ledger account                                                                  |
| `getPayment`                                                                                                            | [orchestration.ActivityGetPayment](../../../sdk/models/orchestration/activitygetpayment.md)                             | :heavy_minus_sign:                                                                                                      | Arguments for the activity that reads a payment                                                                         |
| `getWallet`                                                                                                             | [orchestration.ActivityGetWallet](../../../sdk/models/orchestration/activitygetwallet.md)                               | :heavy_minus_sign:                                                                                                      | Arguments for the activity that reads a wallet                                                                          |
| `listWallets`                                                                                                           | [orchestration.ActivityListWallets](../../../sdk/models/orchestration/activitylistwallets.md)                           | :heavy_minus_sign:                                                                                                      | Arguments for the activity that lists wallets                                                                           |
| `revertTransaction`                                                                                                     | [orchestration.ActivityRevertTransaction](../../../sdk/models/orchestration/activityreverttransaction.md)               | :heavy_minus_sign:                                                                                                      | Arguments for the activity that reverts a ledger transaction                                                            |
| `stripeTransfer`                                                                                                        | [orchestration.ActivityStripeTransfer](../../../sdk/models/orchestration/activitystripetransfer.md)                     | :heavy_minus_sign:                                                                                                      | Arguments for the activity that transfers funds through Stripe                                                          |
| `voidHold`                                                                                                              | [orchestration.ActivityVoidHold](../../../sdk/models/orchestration/activityvoidhold.md)                                 | :heavy_minus_sign:                                                                                                      | Arguments for the activity that releases a wallet hold                                                                  |