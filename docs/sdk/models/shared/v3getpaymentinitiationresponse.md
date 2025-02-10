# V3GetPaymentInitiationResponse

## Example Usage

```typescript
import {
  V3GetPaymentInitiationResponse,
  V3PaymentInitiationStatusEnum,
  V3PaymentInitiationTypeEnum,
} from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetPaymentInitiationResponse = {
  data: {
    amount: BigInt("241750"),
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2023-07-25T19:06:35.622Z"),
    description: "gladly since gee whoever beside prance",
    id: "<id>",
    reference: "<value>",
    scheduledAt: new Date("2024-07-08T05:45:55.648Z"),
    status: V3PaymentInitiationStatusEnum.Processing,
    type: V3PaymentInitiationTypeEnum.Unknown,
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [shared.V3PaymentInitiation](../../../sdk/models/shared/v3paymentinitiation.md) | :heavy_check_mark:                                                              | N/A                                                                             |