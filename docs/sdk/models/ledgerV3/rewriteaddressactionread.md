# RewriteAddressActionRead

## Example Usage

```typescript
import { RewriteAddressActionRead } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: RewriteAddressActionRead = {
  pattern: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `pattern`                             | *string*                              | :heavy_check_mark:                    | RE2 pattern (validated at admission). |
| `replacement`                         | *string*                              | :heavy_minus_sign:                    | N/A                                   |