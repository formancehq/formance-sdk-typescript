# ConnectorsResponseData

## Example Usage

```typescript
import { Connector, ConnectorsResponseData } from "@formance/formance-sdk/sdk/models/payments";

let value: ConnectorsResponseData = {
  connector: Connector.BankingCircle,
  connectorID: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | N/A                                                             |
| `connectorID`                                                   | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `enabled`                                                       | *boolean*                                                       | :heavy_minus_sign:                                              | N/A                                                             |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |