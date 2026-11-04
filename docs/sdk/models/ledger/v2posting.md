# V2Posting

## Example Usage

```typescript
import { V2Posting } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2Posting = {
  amount: 100n,
  asset: "COIN",
  destination: "users:002",
  source: "users:001",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `amount`                                                                                 | *BigInt*                                                                                 | :heavy_check_mark:                                                                       | Amount to move, as an arbitrary-precision integer expressed in the asset's smallest unit | 100                                                                                      |
| `asset`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | The asset being moved, optionally carrying a scale suffix such as USD/2                  | COIN                                                                                     |
| `destination`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | Address of the account credited by this posting                                          | users:002                                                                                |
| `source`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | Address of the account debited by this posting                                           | users:001                                                                                |