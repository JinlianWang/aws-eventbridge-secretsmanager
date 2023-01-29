const { Role, ServicePrincipal, ManagedPolicy } = require('aws-cdk-lib/aws-iam');
const { Stack } = require('aws-cdk-lib/aws-cdk');

class IAMRoleExample extends Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        new Role(this, 'MyRole', {
            assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
            managedPolicies: [
                ManagedPolicy.fromAwsManagedPolicyName('AmazonS3ReadOnlyAccess')
            ]
        });
    }
}
