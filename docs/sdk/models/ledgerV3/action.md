# Action

The type of operation to perform. The REST bulk endpoint accepts
these four actions only; account-type actions
(`ADD_ACCOUNT_TYPE` / `REMOVE_ACCOUNT_TYPE`) are gRPC-only and
are rejected here.


## Example Usage

```typescript
import { Action } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: Action = "DELETE_METADATA";
```

## Values

```typescript
"CREATE_TRANSACTION" | "ADD_METADATA" | "REVERT_TRANSACTION" | "DELETE_METADATA"
```