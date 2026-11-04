# Diagnostic

## Example Usage

```typescript
import { Diagnostic } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: Diagnostic = {
  code: "<value>",
  kind: "compile",
  message: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `code`                                                | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `endColumn`                                           | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `endLine`                                             | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `kind`                                                | [ledgerV3.Kind](../../../sdk/models/ledgerV3/kind.md) | :heavy_check_mark:                                    | N/A                                                   |
| `message`                                             | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `startColumn`                                         | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `startLine`                                           | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |