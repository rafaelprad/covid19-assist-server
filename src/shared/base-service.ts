import { AppConfig } from "../config/app-config";
import { UtilValidator } from "./util-validator";
import { Constants } from "./constants";
import * as AWS from "aws-sdk";

export class BaseService<BaseType> {

  protected strTableName: string;
  protected strPrimaryKeyFieldname: string;

  findAll(callbackResult: (success: boolean, message: string, data?: any) => void, messageFail?: string, messageSuccess?: string) {
    let awsDocumentClient: AWS.DynamoDB.DocumentClient;
    if (UtilValidator.isEquals(AppConfig.APP_MODE_DEV, Constants.VALUE_TRUE)) {
      awsDocumentClient = new AWS.DynamoDB.DocumentClient({ region: AppConfig.AWS_LOCAL_REGION_NAME, endpoint: AppConfig.AWS_LOCAL_ENDPOINT });
    } else {
      awsDocumentClient = new AWS.DynamoDB.DocumentClient({ region: AppConfig.AWS_REMOTE_REGION_NAME, endpoint: AppConfig.AWS_REMOTE_ENDPOINT });
    }
    awsDocumentClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: this.strTableName
    };

    awsDocumentClient.scan(params, function (err, data) {
      if (err) {
        callbackResult(
          false,
          messageFail);
      } else {
        callbackResult(
          true,
          messageSuccess,
          data);
      }
    });
  }

  findOne(idValue: string, callbackResult: (success: boolean, message: string, data?: any) => void, messageFail?: string, messageSuccess?: string) {
    let awsDocumentClient: AWS.DynamoDB.DocumentClient;
    if (UtilValidator.isEquals(AppConfig.APP_MODE_DEV, Constants.VALUE_TRUE)) {
      awsDocumentClient = new AWS.DynamoDB.DocumentClient({ region: AppConfig.AWS_LOCAL_REGION_NAME, endpoint: AppConfig.AWS_LOCAL_ENDPOINT });
    } else {
      awsDocumentClient = new AWS.DynamoDB.DocumentClient({ region: AppConfig.AWS_REMOTE_REGION_NAME, endpoint: AppConfig.AWS_REMOTE_ENDPOINT });
    }
    awsDocumentClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: this.strTableName,
      KeyConditionExpression: this.strPrimaryKeyFieldname + ' = :id',
      ExpressionAttributeValues: {
        ':id': idValue
      }
    };

    awsDocumentClient.query(params, function (err, data) {
      if (err) {
        callbackResult(
          false,
          messageFail);
      } else {
        callbackResult(
          true,
          messageSuccess,
          data);
      }
    });
  }

  add(value: BaseType, callbackResult: (success: boolean, message: string, data?: any) => void, messageFail?: string, messageSuccess?: string) {
    let awsDocumentClient: AWS.DynamoDB.DocumentClient;
    if (UtilValidator.isEquals(AppConfig.APP_MODE_DEV, Constants.VALUE_TRUE)) {
      awsDocumentClient = new AWS.DynamoDB.DocumentClient({ region: AppConfig.AWS_LOCAL_REGION_NAME, endpoint: AppConfig.AWS_LOCAL_ENDPOINT });
    } else {
      awsDocumentClient = new AWS.DynamoDB.DocumentClient({ region: AppConfig.AWS_REMOTE_REGION_NAME, endpoint: AppConfig.AWS_REMOTE_ENDPOINT });
    }
    awsDocumentClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: this.strTableName,
      Item: value
    };

    awsDocumentClient.put(params, function (err, data) {
      if (err) {
        callbackResult(
          false,
          messageFail);
      } else {
        callbackResult(
          true,
          messageSuccess,
          data);
      }
    });
  }

  update(keyValue: any, value: BaseType, callbackResult: (success: boolean, message: string, data?: any) => void, messageFail?: string, messageSuccess?: string) {
    let awsDocumentClient: AWS.DynamoDB.DocumentClient;
    if (UtilValidator.isEquals(AppConfig.APP_MODE_DEV, Constants.VALUE_TRUE)) {
      awsDocumentClient = new AWS.DynamoDB.DocumentClient({ region: AppConfig.AWS_LOCAL_REGION_NAME, endpoint: AppConfig.AWS_LOCAL_ENDPOINT });
    } else {
      awsDocumentClient = new AWS.DynamoDB.DocumentClient({ region: AppConfig.AWS_REMOTE_REGION_NAME, endpoint: AppConfig.AWS_REMOTE_ENDPOINT });
    }
    awsDocumentClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: this.strTableName,
      Key: keyValue,
      Item: value
    };

    awsDocumentClient.update(params, function (err, data) {
      if (err) {
        callbackResult(
          false,
          messageFail);
      } else {
        callbackResult(
          true,
          messageSuccess,
          data);
      }
    });
  }

  delete(keyValue: any, callbackResult: (success: boolean, message: string, data?: any) => void, messageFail?: string, messageSuccess?: string) {
    let awsDocumentClient: AWS.DynamoDB.DocumentClient;
    if (UtilValidator.isEquals(AppConfig.APP_MODE_DEV, Constants.VALUE_TRUE)) {
      awsDocumentClient = new AWS.DynamoDB.DocumentClient({ region: AppConfig.AWS_LOCAL_REGION_NAME, endpoint: AppConfig.AWS_LOCAL_ENDPOINT });
    } else {
      awsDocumentClient = new AWS.DynamoDB.DocumentClient({ region: AppConfig.AWS_REMOTE_REGION_NAME, endpoint: AppConfig.AWS_REMOTE_ENDPOINT });
    }
    awsDocumentClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: this.strTableName,
      Key: keyValue
    };

    awsDocumentClient.delete(params, function (err, data) {
      if (err) {
        callbackResult(
          false,
          messageFail);
      } else {
        callbackResult(
          true,
          messageSuccess,
          data);
      }
    });
  }
}