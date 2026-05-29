# AssetHolder2

## Example Usage

```typescript
import { AssetHolder2 } from "@formance/formance-sdk/sdk/models/wallets";

let value: AssetHolder2 = {
  assets: {
    "key": 697160n,
    "key1": 348140n,
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