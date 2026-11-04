# RewriteAddressAction

## Example Usage

```typescript
import { RewriteAddressAction } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: RewriteAddressAction = {
  pattern: "<value>",
  replacement: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `pattern`                             | *string*                              | :heavy_check_mark:                    | RE2 pattern (validated at admission). |
| `replacement`                         | *string*                              | :heavy_check_mark:                    | N/A                                   |