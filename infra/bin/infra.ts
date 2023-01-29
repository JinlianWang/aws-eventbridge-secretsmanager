#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SecretsManagerLifecycleExampleStack } from '../lib/secrets-manager-lifecycle-stack';
import { IAMRoleExample } from '../lib/iam-role-creation-stack';

const app = new cdk.App();

//new SecretsManagerLifecycleExampleStack(app, 'SecretsManagerLifecycleExampleStack');
new IAMRoleExample(app, "IAMRoleExampleStack");
