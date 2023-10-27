const crypto = require('crypto');

function encrypt(text) {
  const iv = crypto.randomBytes(16); // Generate a new IV for each encryption
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.alloc(32), iv); // Use an empty buffer for the key
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  console.log('encrypt iv: ', iv);
  return {iv: iv.toString('hex'), encryptedData: encrypted};
}

function decrypt(encryptedPassword, iv) {
  console.log('go to decryption');
  try {
    console.log('iv in decrypt:', iv);
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.alloc(32), Buffer.from(iv, 'hex')); // Use an empty buffer for the key
    console.log('decipher created');
    let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8');
    console.log('next step -> decipher.final');
    decrypted += decipher.final('utf8');
    console.log('decrypt iv: ', iv);
    return decrypted;
  } catch (error) {
    console.error('Decryption error:', error);
    return null;
  }
}


module.exports = {encrypt, decrypt};
