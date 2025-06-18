# WorkflowInstanceHistoryStageInput

## Example Usage

```typescript
import { WorkflowInstanceHistoryStageInput } from "@formance/formance-sdk/sdk/models/shared";

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
        plain: "vars {\n"
          + "account $user\n"
          + "}\n"
          + "send [COIN 10] (\n"
          + "	source = @world\n"
          + "	destination = $user\n"
          + ")\n"
          + "",
        vars: {
          "user": "users:042",
        },
      },
    },
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `addAccountMetadata`                                                                          | [shared.ActivityAddAccountMetadata](../../../sdk/models/shared/activityaddaccountmetadata.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `confirmHold`                                                                                 | [shared.ActivityConfirmHold](../../../sdk/models/shared/activityconfirmhold.md)               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createTransaction`                                                                           | [shared.ActivityCreateTransaction](../../../sdk/models/shared/activitycreatetransaction.md)   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `creditWallet`                                                                                | [shared.ActivityCreditWallet](../../../sdk/models/shared/activitycreditwallet.md)             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `debitWallet`                                                                                 | [shared.ActivityDebitWallet](../../../sdk/models/shared/activitydebitwallet.md)               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `getAccount`                                                                                  | [shared.ActivityGetAccount](../../../sdk/models/shared/activitygetaccount.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `getPayment`                                                                                  | [shared.ActivityGetPayment](../../../sdk/models/shared/activitygetpayment.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `getWallet`                                                                                   | [shared.ActivityGetWallet](../../../sdk/models/shared/activitygetwallet.md)                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `listWallets`                                                                                 | [shared.ActivityListWallets](../../../sdk/models/shared/activitylistwallets.md)               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `revertTransaction`                                                                           | [shared.ActivityRevertTransaction](../../../sdk/models/shared/activityreverttransaction.md)   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `stripeTransfer`                                                                              | [shared.ActivityStripeTransfer](../../../sdk/models/shared/activitystripetransfer.md)         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `voidHold`                                                                                    | [shared.ActivityVoidHold](../../../sdk/models/shared/activityvoidhold.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |