# Hold

Funds locked by a pending wallet debit, later either confirmed or voided

## Example Usage

```typescript
import { Hold } from "@formance/formance-sdk/sdk/models/orchestration";

let value: Hold = {
  description: "provided gleefully hopelessly internal shyly aha",
  id: "fa49dd57-defa-4ebb-bb3c-22be446f30dc",
  metadata: {},
  walletID: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `description`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | Human-readable reason the funds were held                                        |
| `destination`                                                                    | *orchestration.Subject*                                                          | :heavy_minus_sign:                                                               | The counterparty of a wallet movement, either a ledger account or another wallet |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The unique ID of the hold.                                                       |
| `metadata`                                                                       | Record<string, *string*>                                                         | :heavy_check_mark:                                                               | Metadata associated with the hold.                                               |
| `walletID`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the wallet the hold is associated with.                                |