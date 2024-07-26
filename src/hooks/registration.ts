import { Hooks } from "./types";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export function initHooks(hooks: Hooks) {
  hooks.registerBeforeCreateRequestHook({
    beforeCreateRequest(_, input) {
      const nextUrl = new URL(input.url);
      // Rewrite any path components containing "%3A" to ":"
      nextUrl.pathname = nextUrl.pathname.replace(/%3A/g, ":");
      return { ...input, url: nextUrl };
    },
  });
}