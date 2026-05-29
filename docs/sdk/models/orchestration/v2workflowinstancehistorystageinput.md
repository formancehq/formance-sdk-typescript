# V2WorkflowInstanceHistoryStageInput

## Example Usage

```typescript
import { V2WorkflowInstanceHistoryStageInput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WorkflowInstanceHistoryStageInput = {
  v2ActivityCreateTransaction: {
    v2PostTransaction: {
      v2Metadata: {
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
  v2ActivityCreditWallet: {
    v2CreditWalletRequest: {
      v2Monetary: {
        amount: 100n,
        asset: "USD/2",
      },
      metadata: {
        "key": "",
      },
      sources: [],
    },
  },
  v2ActivityDebitWallet: {
    v2DebitWalletRequest: {
      v2Monetary: {
        amount: 100n,
        asset: "USD/2",
      },
      metadata: {
        "key": "",
      },
      pending: true,
    },
  },
  v2CreateTransferInitiationRequest: {
    amount: 100n,
    asset: "USD",
    destination: "acct_1Gqj58KZcSIg2N2q",
    metadata: {},
    provider: "stripe",
  },
  v2StripeTransferRequest: {
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
| `v2ActivityAddAccountMetadata`                                                                                            | [orchestration.V2ActivityAddAccountMetadata](../../../sdk/models/orchestration/v2activityaddaccountmetadata.md)           | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2ActivityConfirmHold`                                                                                                   | [orchestration.V2ActivityConfirmHold](../../../sdk/models/orchestration/v2activityconfirmhold.md)                         | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2ActivityCreateTransaction`                                                                                             | [orchestration.V2ActivityCreateTransaction](../../../sdk/models/orchestration/v2activitycreatetransaction.md)             | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2ActivityCreditWallet`                                                                                                  | [orchestration.V2ActivityCreditWallet](../../../sdk/models/orchestration/v2activitycreditwallet.md)                       | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2ActivityDebitWallet`                                                                                                   | [orchestration.V2ActivityDebitWallet](../../../sdk/models/orchestration/v2activitydebitwallet.md)                         | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2ActivityGetAccount`                                                                                                    | [orchestration.V2ActivityGetAccount](../../../sdk/models/orchestration/v2activitygetaccount.md)                           | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2ActivityGetPayment`                                                                                                    | [orchestration.V2ActivityGetPayment](../../../sdk/models/orchestration/v2activitygetpayment.md)                           | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2ActivityGetWallet`                                                                                                     | [orchestration.V2ActivityGetWallet](../../../sdk/models/orchestration/v2activitygetwallet.md)                             | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2ActivityListWallets`                                                                                                   | [orchestration.V2ActivityListWallets](../../../sdk/models/orchestration/v2activitylistwallets.md)                         | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2ActivityVoidHold`                                                                                                      | [orchestration.V2ActivityVoidHold](../../../sdk/models/orchestration/v2activityvoidhold.md)                               | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2CreateTransferInitiationRequest`                                                                                       | [orchestration.V2CreateTransferInitiationRequest](../../../sdk/models/orchestration/v2createtransferinitiationrequest.md) | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `v2StripeTransferRequest`                                                                                                 | [orchestration.V2StripeTransferRequest](../../../sdk/models/orchestration/v2stripetransferrequest.md)                     | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |