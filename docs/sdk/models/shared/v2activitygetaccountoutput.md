# V2ActivityGetAccountOutput

## Example Usage

```typescript
import { V2ActivityGetAccountOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ActivityGetAccountOutput = {
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

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [shared.OrchestrationV2Account](../../../sdk/models/shared/orchestrationv2account.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |