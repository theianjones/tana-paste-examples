// Name: tana-quick-add
// Shortcut: CTRL + q

import "@johnlindquist/kit";
import nodeApi, { TanaResponse } from "../scriptUtils/nodeApi";

async function createNode(note: string) {
  const res = await nodeApi.get<TanaResponse>("/addToNode", {
    params: { note },
  });

  if (typeof res.data === "object" && res.data.err) {
    throw new Error(res.data.err);
  }
}
const note = await arg("Type something good...");

createNode(note);
