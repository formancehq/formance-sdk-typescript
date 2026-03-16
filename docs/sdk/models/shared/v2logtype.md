# V2LogType

The type of operation this log represents

## Example Usage

```typescript
import { V2LogType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LogType = V2LogType.DeleteMetadata;
```

## Values

| Name                  | Value                 |
| --------------------- | --------------------- |
| `NewTransaction`      | NEW_TRANSACTION       |
| `SetMetadata`         | SET_METADATA          |
| `RevertedTransaction` | REVERTED_TRANSACTION  |
| `DeleteMetadata`      | DELETE_METADATA       |
| `InsertedSchema`      | INSERTED_SCHEMA       |