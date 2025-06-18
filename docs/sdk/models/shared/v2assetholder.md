# V2AssetHolder

## Example Usage

```typescript
import { V2AssetHolder } from "@formance/formance-sdk/sdk/models/shared";

let value: V2AssetHolder = {
  assets: {
    "key": 593549n,
    "key1": 643183n,
    "key2": 402873n,
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `assets`                 | Record<string, *BigInt*> | :heavy_check_mark:       | N/A                      |