export function createIdentity(
  wallet: string
) {
  return {
    id: crypto.randomUUID(),
    wallet,
    reputation: 100
  };
}
