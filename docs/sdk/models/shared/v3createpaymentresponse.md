# V3CreatePaymentResponse

## Example Usage

```typescript
import { V3CreatePaymentResponse, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3CreatePaymentResponse = {
  data: {
    amount: BigInt("663457"),
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2024-07-29T13:48:05.536Z"),
    id: "<id>",
    initialAmount: BigInt("416367"),
    provider: "<value>",
    reference: "<value>",
    scheme: "<value>",
    status: V3PaymentStatusEnum.Pending,
    type: V3PaymentTypeEnum.Payout,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V3Payment](../../../sdk/models/shared/v3payment.md) | :heavy_check_mark:                                          | N/A                                                         |