# V2VolumesWithBalance

## Example Usage

```typescript
import { V2VolumesWithBalance } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2VolumesWithBalance = {
  account: "24335396",
  asset: "<value>",
  balance: 220999n,
  input: 445891n,
  output: 774084n,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `account`                                               | *string*                                                | :heavy_check_mark:                                      | The account address these volumes belong to             |
| `asset`                                                 | *string*                                                | :heavy_check_mark:                                      | The asset these volumes are denominated in              |
| `balance`                                               | *BigInt*                                                | :heavy_check_mark:                                      | Net balance for this asset, equal to input minus output |
| `input`                                                 | *BigInt*                                                | :heavy_check_mark:                                      | Total amount credited to the account for this asset     |
| `output`                                                | *BigInt*                                                | :heavy_check_mark:                                      | Total amount debited from the account for this asset    |