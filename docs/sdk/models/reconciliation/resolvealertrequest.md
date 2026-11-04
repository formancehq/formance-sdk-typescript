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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `by`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Who is resolving the alert                                                                                           |
| `note`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Free-text note to record with the resolution                                                                         |
| `transactionRefs`                                                                                                    | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | References of the transactions booked to correct the break. Supplying any records the resolution as fixed_by_booking |