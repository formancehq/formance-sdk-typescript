# V2RevertTransactionRequest

## Example Usage

```typescript
import { V2RevertTransactionRequest } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2RevertTransactionRequest = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `metadata`                                                               | Record<string, *string*>                                                 | :heavy_minus_sign:                                                       | Metadata to attach to the compensating transaction created by the revert |