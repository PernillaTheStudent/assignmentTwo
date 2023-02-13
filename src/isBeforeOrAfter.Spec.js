import isBeforeOrAfter from "./isBeforeOrAfter.js";
import { parse, set } from "date-fns";

describe("test isBeforeOrAfter function", () => {
    it("should return -1 if the input date is before today", async () => {
        const date = parse("2000-01-01", "yyyy-MM-dd", new Date());
        const beforeOrAfter = isBeforeOrAfter(date);
        expect(beforeOrAfter).toBe(-1);
    });

    it("should return 1 if the input date is after today", async () => {
        const date = parse("2030-01-01", "yyyy-MM-dd", new Date());
        const beforeOrAfter = isBeforeOrAfter(date);
        expect(beforeOrAfter).toBe(1);
    });

    it("should return 0 if the input date is today", async () => {
        const today = set(new Date(), {hours: 0, minutes: 0, seconds: 0, milliseconds: 0});
        const beforeOrAfter = isBeforeOrAfter(today);
        expect(beforeOrAfter).toBe(0);
    });

    it("should return null if the input date is not valid", async () => {
        const date = "2023-03-13";
        const beforeOrAfter = isBeforeOrAfter(date);
        expect(beforeOrAfter).toBe(null);
    });
});

