import { JWTPayload, jwtVerify, SignJWT } from 'jose';

const SECRET_KEY = process.env.NEXT_PUBLIC_SESSION_SECRET;
const ENCODED_SECRET_KEY = new TextEncoder().encode(SECRET_KEY);

const secrets = {
  async encrypt(payload: JWTPayload) {
    return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(ENCODED_SECRET_KEY);
  },

  async verify(session: string = '') {
    try {
      const { payload } = await jwtVerify(session, ENCODED_SECRET_KEY, { algorithms: ['HS256'] });

      return payload;
    } catch (error) {
      console.error(`[SECRETS SERVICE] verify - failed to verify session: ${error}`);

      return null;
    }
  },
};

export default secrets;
