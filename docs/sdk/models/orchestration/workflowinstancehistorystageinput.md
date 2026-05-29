# WorkflowInstanceHistoryStageInput

## Example Usage

```typescript
import { WorkflowInstanceHistoryStageInput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WorkflowInstanceHistoryStageInput = {
  activityCreateTransaction: {
    postTransaction: {
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
  activityCreditWallet: {
    creditWalletRequest: {
      monetary: {
        amount: 100n,
        asset: "USD/2",
      },
      metadata: {
        "key": "",
      },
      sources: [],
    },
  },
  activityDebitWallet: {
    debitWalletRequest: {
      monetary: {
        amount: 100n,
        asset: "USD/2",
      },
      metadata: {
        "key": "",
      },
      pending: true,
    },
  },
  createTransferInitiationRequest: {
    amount: 100n,
    asset: "USD",
    destination: "acct_1Gqj58KZcSIg2N2q",
    metadata: {},
    provider: "stripe",
  },
  stripeTransferRequest: {
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
| `activityAddAccountMetadata`                                                                                          | [orchestration.ActivityAddAccountMetadata](../../../sdk/models/orchestration/activityaddaccountmetadata.md)           | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `activityConfirmHold`                                                                                                 | [orchestration.ActivityConfirmHold](../../../sdk/models/orchestration/activityconfirmhold.md)                         | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `activityCreateTransaction`                                                                                           | [orchestration.ActivityCreateTransaction](../../../sdk/models/orchestration/activitycreatetransaction.md)             | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `activityCreditWallet`                                                                                                | [orchestration.ActivityCreditWallet](../../../sdk/models/orchestration/activitycreditwallet.md)                       | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `activityDebitWallet`                                                                                                 | [orchestration.ActivityDebitWallet](../../../sdk/models/orchestration/activitydebitwallet.md)                         | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `activityGetAccount`                                                                                                  | [orchestration.ActivityGetAccount](../../../sdk/models/orchestration/activitygetaccount.md)                           | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `activityGetPayment`                                                                                                  | [orchestration.ActivityGetPayment](../../../sdk/models/orchestration/activitygetpayment.md)                           | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `activityGetWallet`                                                                                                   | [orchestration.ActivityGetWallet](../../../sdk/models/orchestration/activitygetwallet.md)                             | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `activityListWallets`                                                                                                 | [orchestration.ActivityListWallets](../../../sdk/models/orchestration/activitylistwallets.md)                         | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `activityRevertTransaction`                                                                                           | [orchestration.ActivityRevertTransaction](../../../sdk/models/orchestration/activityreverttransaction.md)             | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `activityVoidHold`                                                                                                    | [orchestration.ActivityVoidHold](../../../sdk/models/orchestration/activityvoidhold.md)                               | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `createTransferInitiationRequest`                                                                                     | [orchestration.CreateTransferInitiationRequest](../../../sdk/models/orchestration/createtransferinitiationrequest.md) | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `stripeTransferRequest`                                                                                               | [orchestration.StripeTransferRequest](../../../sdk/models/orchestration/stripetransferrequest.md)                     | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |