# V3CreatePaymentResponse

## Example Usage

```typescript
import { V3CreatePaymentResponse, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3CreatePaymentResponse = {
  data: {
    amount: BigInt("762787"),
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2024-08-15T17:52:27.899Z"),
    id: "<id>",
    initialAmount: BigInt("758256"),
    provider: "<value>",
    reference: "<value>",
    scheme: "<value>",
    status: V3PaymentStatusEnum.Succeeded,
    type: V3PaymentTypeEnum.Payout,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V3Payment](../../../sdk/models/shared/v3payment.md) | :heavy_check_mark:                                          | N/A                                                         |