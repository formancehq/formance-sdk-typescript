# V3PaymentServiceUserLinkAttempt

## Example Usage

```typescript
import { V3OpenBankingConnectionAttemptStatusEnum, V3PaymentServiceUserLinkAttempt } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentServiceUserLinkAttempt = {
  v3OpenBankingConnectionAttemptStatusEnum:
    V3OpenBankingConnectionAttemptStatusEnum.Pending,
  clientRedirectURL: "https://dependent-guard.net",
  connectorID: "<id>",
  createdAt: new Date("2024-10-12T17:54:19.672Z"),
  id: "<id>",
  psuID: "<id>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `v3OpenBankingConnectionAttemptStatusEnum`                                                                                    | [payments.V3OpenBankingConnectionAttemptStatusEnum](../../../sdk/models/payments/v3openbankingconnectionattemptstatusenum.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `clientRedirectURL`                                                                                                           | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `connectorID`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `createdAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `error`                                                                                                                       | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `psuID`                                                                                                                       | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |