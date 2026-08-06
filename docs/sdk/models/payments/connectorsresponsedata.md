# ConnectorsResponseData

## Example Usage

```typescript
import { ConnectorsResponseData } from "@formance/formance-sdk/sdk/models/payments";

let value: ConnectorsResponseData = {
  connectorID: "<id>",
  name: "<value>",
  provider: "BANKING-CIRCLE",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connectorID`                                                   | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `enabled`                                                       | *boolean*                                                       | :heavy_minus_sign:                                              | N/A                                                             |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `provider`                                                      | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | N/A                                                             |