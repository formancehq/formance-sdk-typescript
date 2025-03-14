# V3GetPaymentResponse

## Example Usage

```typescript
import { V3GetPaymentResponse, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetPaymentResponse = {
  data: {
    amount: BigInt("763869"),
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2023-02-06T16:03:22.644Z"),
    id: "<id>",
    initialAmount: BigInt("38622"),
    provider: "<value>",
    reference: "<value>",
    scheme: "<value>",
    status: V3PaymentStatusEnum.Pending,
    type: V3PaymentTypeEnum.Transfer,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V3Payment](../../../sdk/models/shared/v3payment.md) | :heavy_check_mark:                                          | N/A                                                         |