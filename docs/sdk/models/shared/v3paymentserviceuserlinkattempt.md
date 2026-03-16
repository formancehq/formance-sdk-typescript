# V3PaymentServiceUserLinkAttempt

## Example Usage

```typescript
import { V3OpenBankingConnectionAttemptStatusEnum, V3PaymentServiceUserLinkAttempt } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentServiceUserLinkAttempt = {
  clientRedirectURL: "https://uncommon-convection.info/",
  connectorID: "<id>",
  createdAt: new Date("2026-03-26T12:08:12.230Z"),
  id: "<id>",
  psuID: "<id>",
  status: V3OpenBankingConnectionAttemptStatusEnum.Pending,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `clientRedirectURL`                                                                                                       | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `connectorID`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `createdAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                             | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `error`                                                                                                                   | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `id`                                                                                                                      | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `psuID`                                                                                                                   | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `status`                                                                                                                  | [shared.V3OpenBankingConnectionAttemptStatusEnum](../../../sdk/models/shared/v3openbankingconnectionattemptstatusenum.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |