# BalanceWithAssets

## Example Usage

```typescript
import { BalanceWithAssets } from "@formance/formance-sdk/sdk/models/shared";

let value: BalanceWithAssets = {
  assets: {
    "key": BigInt("553450"),
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `assets`                                                                                      | Record<string, *BigInt*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priority`                                                                                    | *BigInt*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |