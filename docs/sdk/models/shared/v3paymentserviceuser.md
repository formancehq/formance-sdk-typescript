# V3PaymentServiceUser

## Example Usage

```typescript
import { V3PaymentServiceUser } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentServiceUser = {
  createdAt: new Date("2025-09-30T03:09:54.430Z"),
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `address`                                                                                     | [shared.V3Address](../../../sdk/models/shared/v3address.md)                                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `bankAccountIDs`                                                                              | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `contactDetails`                                                                              | [shared.V3ContactDetails](../../../sdk/models/shared/v3contactdetails.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |