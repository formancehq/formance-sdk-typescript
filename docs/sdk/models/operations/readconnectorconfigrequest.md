# ReadConnectorConfigRequest

## Example Usage

```typescript
import { ReadConnectorConfigRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ReadConnectorConfigRequest = {
  connector: "MONEYCORP",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | The name of the connector.                                      |