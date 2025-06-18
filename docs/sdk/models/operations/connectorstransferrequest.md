# ConnectorsTransferRequest

## Example Usage

```typescript
import { ConnectorsTransferRequest } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/shared";

let value: ConnectorsTransferRequest = {
  connector: Connector.Stripe,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `transferRequest`                                                       | [shared.TransferRequest](../../../sdk/models/shared/transferrequest.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `connector`                                                             | [shared.Connector](../../../sdk/models/shared/connector.md)             | :heavy_check_mark:                                                      | The name of the connector.                                              |