# PaymentsCursor

## Example Usage

```typescript
import { PaymentsCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentsCursor = {
    cursor: {
        data: [],
        hasMore: false,
        next: "",
        pageSize: 15,
        previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `cursor`                                                                          | [shared.PaymentsCursorCursor](../../../sdk/models/shared/paymentscursorcursor.md) | :heavy_check_mark:                                                                | N/A                                                                               |