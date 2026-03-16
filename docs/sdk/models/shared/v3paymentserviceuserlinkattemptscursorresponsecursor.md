# V3PaymentServiceUserLinkAttemptsCursorResponseCursor

## Example Usage

```typescript
import {
  V3OpenBankingConnectionAttemptStatusEnum,
  V3PaymentServiceUserLinkAttemptsCursorResponseCursor,
} from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentServiceUserLinkAttemptsCursorResponseCursor = {
  data: [
    {
      clientRedirectURL: "https://metallic-behest.org/",
      connectorID: "<id>",
      createdAt: new Date("2024-04-06T02:11:25.340Z"),
      id: "<id>",
      psuID: "<id>",
      status: V3OpenBankingConnectionAttemptStatusEnum.Completed,
    },
  ],
  hasMore: false,
  next: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                    | [shared.V3PaymentServiceUserLinkAttempt](../../../sdk/models/shared/v3paymentserviceuserlinkattempt.md)[] | :heavy_check_mark:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `hasMore`                                                                                                 | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | N/A                                                                                                       | false                                                                                                     |
| `next`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                                              |
| `pageSize`                                                                                                | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | 15                                                                                                        |
| `previous`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                                              |