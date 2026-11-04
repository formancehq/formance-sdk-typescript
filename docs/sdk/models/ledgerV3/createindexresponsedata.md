# CreateIndexResponseData

## Example Usage

```typescript
import { CreateIndexResponseData } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: CreateIndexResponseData = {
  id: "metadata:TARGET_TYPE_ACCOUNT:color",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                  | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | Canonical form of the created IndexID (round-trip normalized),<br/>e.g. `metadata:TARGET_TYPE_ACCOUNT:color` or<br/>`tx_builtin:TX_BUILTIN_INDEX_TIMESTAMP`.<br/> | metadata:TARGET_TYPE_ACCOUNT:color                                                                                                                    |