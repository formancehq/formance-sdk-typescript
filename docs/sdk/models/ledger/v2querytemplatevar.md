# V2QueryTemplateVar

## Example Usage

```typescript
import { V2QueryTemplateVar } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2QueryTemplateVar = {
  type: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `default`                                                  | *any*                                                      | :heavy_minus_sign:                                         | Value used when the variable is not supplied at query time |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | Type of the variable                                       |