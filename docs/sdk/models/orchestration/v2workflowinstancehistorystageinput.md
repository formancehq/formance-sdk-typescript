# V2WorkflowInstanceHistoryStageInput

## Example Usage

```typescript
import { V2WorkflowInstanceHistoryStageInput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WorkflowInstanceHistoryStageInput = {
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

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `addAccountMetadata`                                                                                                      | [orchestration.V2ActivityAddAccountMetadata](../../../sdk/models/orchestration/v2activityaddaccountmetadata.md)           | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `confirmHold`                                                                                                             | [orchestration.V2ActivityConfirmHold](../../../sdk/models/orchestration/v2activityconfirmhold.md)                         | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `createTransaction`                                                                                                       | [orchestration.V2ActivityCreateTransaction](../../../sdk/models/orchestration/v2activitycreatetransaction.md)             | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `createTransferInitiation`                                                                                                | [orchestration.V2CreateTransferInitiationRequest](../../../sdk/models/orchestration/v2createtransferinitiationrequest.md) | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `creditWallet`                                                                                                            | [orchestration.V2ActivityCreditWallet](../../../sdk/models/orchestration/v2activitycreditwallet.md)                       | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `debitWallet`                                                                                                             | [orchestration.V2ActivityDebitWallet](../../../sdk/models/orchestration/v2activitydebitwallet.md)                         | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `getAccount`                                                                                                              | [orchestration.V2ActivityGetAccount](../../../sdk/models/orchestration/v2activitygetaccount.md)                           | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `getPayment`                                                                                                              | [orchestration.V2ActivityGetPayment](../../../sdk/models/orchestration/v2activitygetpayment.md)                           | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `getWallet`                                                                                                               | [orchestration.V2ActivityGetWallet](../../../sdk/models/orchestration/v2activitygetwallet.md)                             | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `listWallets`                                                                                                             | [orchestration.V2ActivityListWallets](../../../sdk/models/orchestration/v2activitylistwallets.md)                         | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `stripeTransfer`                                                                                                          | [orchestration.V2StripeTransferRequest](../../../sdk/models/orchestration/v2stripetransferrequest.md)                     | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `voidHold`                                                                                                                | [orchestration.V2ActivityVoidHold](../../../sdk/models/orchestration/v2activityvoidhold.md)                               | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |