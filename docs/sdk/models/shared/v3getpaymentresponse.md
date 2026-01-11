# V3GetPaymentResponse

## Example Usage

```typescript
import { V3GetPaymentResponse, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetPaymentResponse = {
  data: {
    amount: 241792n,
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2025-03-21T20:04:47.256Z"),
    id: "<id>",
    initialAmount: 121784n,
    provider: "<value>",
    reference: "<value>",
    scheme: "<value>",
    status: V3PaymentStatusEnum.Cancelled,
    type: V3PaymentTypeEnum.Transfer,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V3Payment](../../../sdk/models/shared/v3payment.md) | :heavy_check_mark:                                          | N/A                                                         |