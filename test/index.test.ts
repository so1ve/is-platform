import { describe, expect, it } from "vitest";

import { IS_NODE } from "../src";

describe("should", () => {
  it("be node", () => {
    expect(IS_NODE).toBeTruthy();
  });
});
