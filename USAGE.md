<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
    const sdk = new SDK({
        authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const result = await sdk.getOIDCWellKnowns();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->