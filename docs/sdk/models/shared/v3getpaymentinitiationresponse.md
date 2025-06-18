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
    amount: 582036n,
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2023-03-24T10:08:14.033Z"),
    description: "vaguely row hello",
    id: "<id>",
    provider: "<value>",
    reference: "<value>",
    scheduledAt: new Date("2025-02-05T06:41:14.397Z"),
    status: V3PaymentInitiationStatusEnum.ReverseFailed,
    type: V3PaymentInitiationTypeEnum.Payout,
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [shared.V3PaymentInitiation](../../../sdk/models/shared/v3paymentinitiation.md) | :heavy_check_mark:                                                              | N/A                                                                             |