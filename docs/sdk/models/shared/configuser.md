# ConfigUser

## Example Usage

```typescript
import { ConfigUser } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigUser = {
    endpoint: "https://example.com",
    eventTypes: ["TYPE1", "TYPE2"],
    name: "customer_payment",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `endpoint`                       | *string*                         | :heavy_check_mark:               | N/A                              | https://example.com              |
| `eventTypes`                     | *string*[]                       | :heavy_check_mark:               | N/A                              | [<br/>"TYPE1",<br/>"TYPE2"<br/>] |
| `name`                           | *string*                         | :heavy_minus_sign:               | N/A                              | customer_payment                 |
| `secret`                         | *string*                         | :heavy_minus_sign:               | N/A                              | V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3 |