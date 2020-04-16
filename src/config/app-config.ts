export class AppConfig {
  static APP_SERVER_PORT: string = process.env.CAS_APP_SERVER_PORT || '3001';

  static AWS_LOCAL_ENDPOINT: string = process.env.CAS_AWS_ENDPOINT || 'http://localhost:8000';
  static AWS_LOCAL_REGION_NAME: string = process.env.CAS_DEFAULT_REGION_NAME || 'us-east-2';
  static AWS_REMOTE_ENDPOINT: string = process.env.CAS_AWS_ENDPOINT || 'http://localhost:8000';
  static AWS_REMOTE_REGION_NAME: string = process.env.CAS_DEFAULT_REGION_NAME || 'us-east-2';

  static AWS_ACCESS_KEY_ID: string = process.env.CAS_AWS_ACCESS_KEY_ID || 'A?????A';
  static AWS_SECRET_ACCESS_KEY: string = process.env.CAS_AWS_SECRET_ACCESS_KEY || '0?????';

  static APP_MODE_DEV: string = process.env.CAS_APP_MODE_DEV || 'true';
}
