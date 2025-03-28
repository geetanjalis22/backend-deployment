import { connect } from 'mongoose';

export const connectMongodb = async (
  host: string,
  // db: string,
  // parameters: string,
  //   biome-ignore lint:
): Promise<any> => {
  try {
    const dbUri = `${host}`;

    const info = await connect(dbUri);

    return { status: true, data: info, error: null };
  } catch (error) {
    throw error;
  }
};
