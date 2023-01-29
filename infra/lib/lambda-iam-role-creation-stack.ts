const { Role, ServicePrincipal, Policy, PolicyStatement } = require('aws-cdk-lib');
const { Stack, Function } = require('aws-cdk-lib');

class MyStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    
    // Create the IAM role
    const role = new Role(this, 'MyRole', {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com')
    });
    
    // Grant permission to the role
    role.addToPolicy(new Policy(this, 'MyPolicy', {
      statements: [
        new PolicyStatement({
          actions: ['action_name'],
          resources: ['resource_name']
        })
      ]
    }));
    
    // Use the role for a Lambda function
    new Function(this, 'MyFunction', {
      runtime: Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: Code.fromAsset('path/to/code'),
      role: role
    });
  }
}
