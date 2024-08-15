# V2WorkflowInstanceHistoryStageInput

## Example Usage

```typescript
import { V2WorkflowInstanceHistoryStageInput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2WorkflowInstanceHistoryStageInput = {
  createTransaction: {
    data: {
      metadata: {
        "admin": "true",
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
        plain: "vars {
      account $user
      }
      send [COIN 10] (
      	source = @world
      	destination = $user
      )
      ",
        vars: {
          "user": "users:042",
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
        "key": "",
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
        "key": "",
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
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `addAccountMetadata`                                                                              | [shared.V2ActivityAddAccountMetadata](../../../sdk/models/shared/v2activityaddaccountmetadata.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `confirmHold`                                                                                     | [shared.V2ActivityConfirmHold](../../../sdk/models/shared/v2activityconfirmhold.md)               | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `createTransaction`                                                                               | [shared.V2ActivityCreateTransaction](../../../sdk/models/shared/v2activitycreatetransaction.md)   | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `creditWallet`                                                                                    | [shared.V2ActivityCreditWallet](../../../sdk/models/shared/v2activitycreditwallet.md)             | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `debitWallet`                                                                                     | [shared.V2ActivityDebitWallet](../../../sdk/models/shared/v2activitydebitwallet.md)               | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `getAccount`                                                                                      | [shared.V2ActivityGetAccount](../../../sdk/models/shared/v2activitygetaccount.md)                 | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `getPayment`                                                                                      | [shared.V2ActivityGetPayment](../../../sdk/models/shared/v2activitygetpayment.md)                 | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `getWallet`                                                                                       | [shared.V2ActivityGetWallet](../../../sdk/models/shared/v2activitygetwallet.md)                   | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `listWallets`                                                                                     | [shared.V2ActivityListWallets](../../../sdk/models/shared/v2activitylistwallets.md)               | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `stripeTransfer`                                                                                  | [shared.V2ActivityStripeTransfer](../../../sdk/models/shared/v2activitystripetransfer.md)         | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `voidHold`                                                                                        | [shared.V2ActivityVoidHold](../../../sdk/models/shared/v2activityvoidhold.md)                     | :heavy_minus_sign:                                                                                | N/A                                                                                               |