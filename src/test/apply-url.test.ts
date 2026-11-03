import { describe, it, expect } from "vitest";
import { APPLY_URL } from "@/content/course";

describe("APPLY_URL", () => {
  it("presencial aponta para o formulário atual da FCS", () => {
    expect(APPLY_URL.presencial).toBe("https://forms.gle/xniCaz9axbyJDorP6");
  });
});
