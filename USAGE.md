<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
    authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
    const result = await sdk.getOIDCWellKnowns();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->