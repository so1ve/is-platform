import { describe, expect, it } from "vitest";

import { isNode } from "../src";

describe("should", () => {
  it("be node", () => {
    expect(isNode()).toEqual(true);
  });
});
