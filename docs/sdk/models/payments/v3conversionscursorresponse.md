# V3ConversionsCursorResponse

## Example Usage

```typescript
import { V3ConversionsCursorResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ConversionsCursorResponse = {
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

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                        | [payments.V3ConversionsCursorResponseCursor](../../../sdk/models/payments/v3conversionscursorresponsecursor.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |