# State

Last recorded ingestion state; it can be stale. paused can represent requested suspension before ingestion exists. finished is successful bounded completion.

## Example Usage

```typescript
import { State } from "@formance/formance-sdk/sdk/models/connectivity";

let value: State = "running";
```

## Values

```typescript
"running" | "error" | "failed" | "stopped" | "paused" | "finished" | "unknown"
```