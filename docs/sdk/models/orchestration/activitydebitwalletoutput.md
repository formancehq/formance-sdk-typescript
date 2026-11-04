# ActivityDebitWalletOutput

Result of the activity that debits a wallet

## Example Usage

```typescript
import { ActivityDebitWalletOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ActivityDebitWalletOutput = {
  data: {
    description: "which off now lazy alongside tennis",
    id: "c222121e-b1ee-4cde-bbee-679447d1db2c",
    metadata: {
      "key": "<value>",
      "key1": "<value>",
    },
    walletID: "<id>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [orchestration.Hold](../../../sdk/models/orchestration/hold.md)          | :heavy_check_mark:                                                       | Funds locked by a pending wallet debit, later either confirmed or voided |