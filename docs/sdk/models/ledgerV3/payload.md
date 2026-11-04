# Payload

Named system payload variants are preserved as supplied, including
nested fields and future sibling variants. Only apply is typed here;
other variants remain open-ended (EN-2781).


## Example Usage

```typescript
import { Payload } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: Payload = {
  apply: {
    log: {
      data: {
        "targetType": "ACCOUNT",
        "targetId": "users:alice",
        "metadata": {
          "category": "premium",
        },
      },
      type: "SET_METADATA",
    },
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `additionalProperties`                                  | Record<string, *any*>                                   | :heavy_minus_sign:                                      | N/A                                                     |
| `apply`                                                 | [ledgerV3.Apply](../../../sdk/models/ledgerV3/apply.md) | :heavy_minus_sign:                                      | N/A                                                     |