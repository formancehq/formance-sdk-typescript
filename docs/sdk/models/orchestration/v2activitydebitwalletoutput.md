# V2ActivityDebitWalletOutput

Result of the activity that debits a wallet

## Example Usage

```typescript
import { V2ActivityDebitWalletOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityDebitWalletOutput = {
  data: {
    description: "fluctuate oof versus sit",
    id: "baf90edb-f381-41b1-b3bc-b52a717f27ed",
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    walletID: "<id>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [orchestration.V2Hold](../../../sdk/models/orchestration/v2hold.md)      | :heavy_check_mark:                                                       | Funds locked by a pending wallet debit, later either confirmed or voided |