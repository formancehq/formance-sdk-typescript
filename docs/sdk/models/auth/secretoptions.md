# SecretOptions

## Example Usage

```typescript
import { SecretOptions } from "@formance/formance-sdk/sdk/models/auth";

let value: SecretOptions = {
  name: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `metadata`                                         | Record<string, *string*>                           | :heavy_minus_sign:                                 | Arbitrary key/value pairs attached to the resource |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Human-readable name identifying the secret         |