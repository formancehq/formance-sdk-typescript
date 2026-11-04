# RemoveAccountTypeRequest

## Example Usage

```typescript
import { RemoveAccountTypeRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: RemoveAccountTypeRequest = {
  ledgerName: "<value>",
  typeName: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `ledgerName`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | Name of the ledger                                                        |
| `typeName`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | Account type name, URL-encoded as one path segment. Decoded exactly once. |