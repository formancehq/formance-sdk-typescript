# ActivityGetAccountOutput

## Example Usage

```typescript
import { ActivityGetAccountOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityGetAccountOutput = {
  data: {
    address: "users:001",
    effectiveVolumes: {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
      "EUR": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
    metadata: {
      "admin": "true",
    },
    volumes: {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
      "EUR": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.OrchestrationAccount](../../../sdk/models/shared/orchestrationaccount.md) | :heavy_check_mark:                                                                | N/A                                                                               |