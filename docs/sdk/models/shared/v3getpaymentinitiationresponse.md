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
    amount: BigInt("414547"),
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2025-07-19T10:08:23.061Z"),
    description: "amongst following in lazily belabor",
    id: "<id>",
    reference: "<value>",
    scheduledAt: new Date("2024-02-17T11:17:08.578Z"),
    status: V3PaymentInitiationStatusEnum.Unknown,
    type: V3PaymentInitiationTypeEnum.Transfer,
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [shared.V3PaymentInitiation](../../../sdk/models/shared/v3paymentinitiation.md) | :heavy_check_mark:                                                              | N/A                                                                             |