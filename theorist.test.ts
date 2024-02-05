import { describe, expect, it } from "vitest";
import { Game } from "./game";
import { Theorist } from "./theorist";
import { Duopoly, PrisonersDilemma } from "./games";

describe("theorist", () => {
  it("will find the best response to an opponent's strategy", () => {
    const theorist = new Theorist(new Game(PrisonersDilemma));
    const result = theorist.getBestResponse(0, 0);
    expect(result).toEqual(1);
  });
  it("will find the strictly dominant strategy", () => {
    const theorist = new Theorist(new Game(PrisonersDilemma));
    const result = theorist.getStrictlyDominantStrategy(1);
    expect(result).toEqual(1);
  });
  it("will identify when there is no strictly dominant strategy", () => {
    const theorist = new Theorist(new Game(Duopoly));
    const result = theorist.getStrictlyDominantStrategy(0);
    expect(result).toEqual(-1);
  });
  it("will solve games by searching for strict dominance", () => {
    const theorist = new Theorist(new Game(PrisonersDilemma));
    const result = theorist.solveByStrictDominance;
    expect(result).toEqual([1, 1]);
  });
  it("will identify when a game cannot be solved by strict dominance", () => {
    const theorist = new Theorist(new Game(Duopoly));
    const result = theorist.solveByStrictDominance;
    expect(result).toEqual(-1);
  });
});