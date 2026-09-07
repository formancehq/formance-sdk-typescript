# V3PaymentServiceUserUpdateLinkResponse

## Example Usage

```typescript
import { V3PaymentServiceUserUpdateLinkResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentServiceUserUpdateLinkResponse = {
  attemptID: "<id>",
  link: "https://curly-freezing.name/",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `attemptID`                                              | *string*                                                 | :heavy_check_mark:                                       | Identifier of the link attempt this URL belongs to       |
| `link`                                                   | *string*                                                 | :heavy_check_mark:                                       | URL to send the user to so they can renew the connection |