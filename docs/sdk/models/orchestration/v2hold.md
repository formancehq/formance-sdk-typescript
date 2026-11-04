# V2Hold

Funds locked by a pending wallet debit, later either confirmed or voided

## Example Usage

```typescript
import { V2Hold } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2Hold = {
  description: "whose likewise pace nor till ha",
  id: "7ae18307-979c-40d2-be0a-437807ab6138",
  metadata: {},
  walletID: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `description`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | Human-readable reason the funds were held                                        |
| `destination`                                                                    | *orchestration.V2Subject*                                                        | :heavy_minus_sign:                                                               | The counterparty of a wallet movement, either a ledger account or another wallet |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The unique ID of the hold.                                                       |
| `metadata`                                                                       | Record<string, *string*>                                                         | :heavy_check_mark:                                                               | Metadata associated with the hold.                                               |
| `walletID`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the wallet the hold is associated with.                                |