# V3UpdateBankAccountMetadataRequest

## Example Usage

```typescript
import { V3UpdateBankAccountMetadataRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: V3UpdateBankAccountMetadataRequest = {
  metadata: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `metadata`                                         | Record<string, *string*>                           | :heavy_check_mark:                                 | Arbitrary key/value pairs attached to the resource |