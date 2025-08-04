# ConnectorsTransferRequest

## Example Usage

```typescript
import { ConnectorsTransferRequest } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/shared";

let value: ConnectorsTransferRequest = {
  transferRequest: {
    amount: 100n,
    asset: "USD",
    destination: "acct_1Gqj58KZcSIg2N2q",
    source: "acct_1Gqj58KZcSIg2N2q",
  },
  connector: Connector.Stripe,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `transferRequest`                                                       | [shared.TransferRequest](../../../sdk/models/shared/transferrequest.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `connector`                                                             | [shared.Connector](../../../sdk/models/shared/connector.md)             | :heavy_check_mark:                                                      | The name of the connector.                                              |