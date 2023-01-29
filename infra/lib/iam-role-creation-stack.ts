const { Role, ServicePrincipal, ManagedPolicy } = require('aws-cdk-lib/aws-iam');
import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';

export class IAMRoleExample extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        new Role(this, 'MyRole', {
            assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
            managedPolicies: [
                ManagedPolicy.fromAwsManagedPolicyName('AmazonS3ReadOnlyAccess')
            ]
        });
    }
}
