# V3ConnectorCapabilityResponse

## Example Usage

```typescript
import { V3ConnectorCapabilityResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ConnectorCapabilityResponse = {
  data: [
    "CREATE_BANK_ACCOUNT",
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [payments.V3Capability](../../../sdk/models/payments/v3capability.md)[] | :heavy_check_mark:                                                      | Operations this connector supports                                      |