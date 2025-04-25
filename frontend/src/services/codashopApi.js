export async function verifyMLBBID(gameId, zoneId) {
  // Mock Codashop tekshiruv
  if (gameId === "12345678" && zoneId === "12345") {
    return { success: true, nickname: "CodashopKing" };
  }
  // Boshqa ID'lar uchun false
  return { success: false };
}