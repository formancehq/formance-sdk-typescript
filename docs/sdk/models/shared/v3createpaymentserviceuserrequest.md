# V3CreatePaymentServiceUserRequest

## Example Usage

```typescript
import { V3CreatePaymentServiceUserRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: V3CreatePaymentServiceUserRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `address`                                                                               | [shared.V3AddressRequest](../../../sdk/models/shared/v3addressrequest.md)               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `bankAccountIDs`                                                                        | *string*[]                                                                              | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `contactDetails`                                                                        | [shared.V3ContactDetailsRequest](../../../sdk/models/shared/v3contactdetailsrequest.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `metadata`                                                                              | Record<string, *string*>                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |