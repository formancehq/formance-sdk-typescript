# ResolveAlertRequest

Mark an alert resolved. When `transactionRefs` is non-empty the
resolution kind is recorded as `fixed_by_booking`.


## Example Usage

```typescript
import { ResolveAlertRequest } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: ResolveAlertRequest = {
  by: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `by`               | *string*           | :heavy_check_mark: | N/A                |
| `note`             | *string*           | :heavy_minus_sign: | N/A                |
| `transactionRefs`  | *string*[]         | :heavy_minus_sign: | N/A                |