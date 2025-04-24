// MLBB nickname tekshirish (test maqsadida random ism qaytariladi)
exports.verifyNickname = async (req, res) => {
    const { gameId, zoneId } = req.body;
    if (!gameId || !zoneId) {
      return res.status(400).json({ error: 'ID yoki Zone yo‘q' });
    }
  
    // Simulyatsiya qilingan nickname
    const nickname = `Player_${gameId.slice(-4)}`;
    res.json({ nickname });
  };
  
  // To‘lov qilish
  exports.makePayment = async (req, res) => {
    const { cardType, cardNumber, transitCard, receipt } = req.body;
  
    // Bu yerda haqiqiy to‘lov API bilan integratsiya bo‘ladi (hozircha test)
    if (!cardType || !cardNumber || !receipt) {
      return res.status(400).json({ error: 'To‘liq to‘lov ma’lumotlari kerak' });
    }
  
    res.json({ success: true, message: 'To‘lov muvaffaqiyatli qabul qilindi' });
  };
  