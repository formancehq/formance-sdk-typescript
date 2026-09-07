# V3PaymentServiceUserCreateLinkResponse

## Example Usage

```typescript
import { V3PaymentServiceUserCreateLinkResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentServiceUserCreateLinkResponse = {
  attemptID: "<id>",
  link: "https://untimely-stay.org",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `attemptID`                                                  | *string*                                                     | :heavy_check_mark:                                           | Identifier of the link attempt this URL belongs to           |
| `link`                                                       | *string*                                                     | :heavy_check_mark:                                           | URL to send the user to so they can authorise the connection |