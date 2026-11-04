# ConfigUser

## Example Usage

```typescript
import { ConfigUser } from "@formance/formance-sdk/sdk/models/webhooks";

let value: ConfigUser = {
  endpoint: "https://example.com",
  eventTypes: [
    "TYPE1",
    "TYPE2",
  ],
  secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `endpoint`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | URL events are delivered to                                                 | https://example.com                                                         |
| `eventTypes`                                                                | *string*[]                                                                  | :heavy_check_mark:                                                          | Types of event that trigger a delivery to this endpoint                     | [<br/>"TYPE1",<br/>"TYPE2"<br/>]                                            |
| `secret`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Secret used to sign delivery payloads. Generated automatically when omitted | V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3                                            |