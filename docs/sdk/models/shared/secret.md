# Secret

## Example Usage

```typescript
import { Secret } from "@formance/formance-sdk/sdk/models/shared";

let value: Secret = {
    clear: "<value>",
    id: "<id>",
    lastDigits: "<value>",
    name: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `clear`               | *string*              | :heavy_check_mark:    | N/A                   |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `lastDigits`          | *string*              | :heavy_check_mark:    | N/A                   |
| `metadata`            | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |