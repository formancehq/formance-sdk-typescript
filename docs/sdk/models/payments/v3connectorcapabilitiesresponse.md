# V3ConnectorCapabilitiesResponse

## Example Usage

```typescript
import { V3ConnectorCapabilitiesResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ConnectorCapabilitiesResponse = {
  data: {
    "key": [
      "CREATE_PAYOUT",
    ],
    "key1": [
      "CREATE_WEBHOOKS",
    ],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | Record<string, [payments.V3Capability](../../../sdk/models/payments/v3capability.md)[]> | :heavy_check_mark:                                                                      | Map of provider name to the capabilities its plugin advertises.                         |