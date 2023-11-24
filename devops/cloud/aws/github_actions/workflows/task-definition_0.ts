module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "appointments-0335",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-appointschedule-0335-appointments:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8011",
                    "protocol": "tcp",
                    "hostPort": "8011"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@appointschedule.local:27017/appointschedule_0335?authSource=admin"},{"name":"MONGO_DOMAIN","value":"appointschedule.local"},{"name":"CAMUNDAPOD_URL","value":"http://appointschedule.local:8080"},{"name":"SECURITYURL","value":"http://appointschedule.local:8003"},{"name":"AUTHPROXYURL","value":"http://appointschedule.local:8001"},{"name":"ADMINURL","value":"http://appointschedule.local:8004"},{"name":"CAMUNDAURL","value":"http://appointschedule.local:8002"},{"name":"GCAMURL","value":"http://appointschedule.local:8007"},{"name":"APIGATEWAY","value":"http://appointschedule.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "appointschedule"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/appointschedule",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "invoice-0335",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-appointschedule-0335-invoice:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8012",
                    "protocol": "tcp",
                    "hostPort": "8012"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@appointschedule.local:27017/appointschedule_0335?authSource=admin"},{"name":"MONGO_DOMAIN","value":"appointschedule.local"},{"name":"CAMUNDAPOD_URL","value":"http://appointschedule.local:8080"},{"name":"SECURITYURL","value":"http://appointschedule.local:8003"},{"name":"AUTHPROXYURL","value":"http://appointschedule.local:8001"},{"name":"ADMINURL","value":"http://appointschedule.local:8004"},{"name":"CAMUNDAURL","value":"http://appointschedule.local:8002"},{"name":"GCAMURL","value":"http://appointschedule.local:8007"},{"name":"APIGATEWAY","value":"http://appointschedule.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "appointschedule"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/appointschedule",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "customer-0335",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-appointschedule-0335-customer:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8013",
                    "protocol": "tcp",
                    "hostPort": "8013"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@appointschedule.local:27017/appointschedule_0335?authSource=admin"},{"name":"MONGO_DOMAIN","value":"appointschedule.local"},{"name":"CAMUNDAPOD_URL","value":"http://appointschedule.local:8080"},{"name":"SECURITYURL","value":"http://appointschedule.local:8003"},{"name":"AUTHPROXYURL","value":"http://appointschedule.local:8001"},{"name":"ADMINURL","value":"http://appointschedule.local:8004"},{"name":"CAMUNDAURL","value":"http://appointschedule.local:8002"},{"name":"GCAMURL","value":"http://appointschedule.local:8007"},{"name":"APIGATEWAY","value":"http://appointschedule.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "appointschedule"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/appointschedule",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "notification-0335",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-appointschedule-0335-notification:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8014",
                    "protocol": "tcp",
                    "hostPort": "8014"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@appointschedule.local:27017/appointschedule_0335?authSource=admin"},{"name":"MONGO_DOMAIN","value":"appointschedule.local"},{"name":"CAMUNDAPOD_URL","value":"http://appointschedule.local:8080"},{"name":"SECURITYURL","value":"http://appointschedule.local:8003"},{"name":"AUTHPROXYURL","value":"http://appointschedule.local:8001"},{"name":"ADMINURL","value":"http://appointschedule.local:8004"},{"name":"CAMUNDAURL","value":"http://appointschedule.local:8002"},{"name":"GCAMURL","value":"http://appointschedule.local:8007"},{"name":"APIGATEWAY","value":"http://appointschedule.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "appointschedule"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/appointschedule",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "provider-0335",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-appointschedule-0335-provider:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8015",
                    "protocol": "tcp",
                    "hostPort": "8015"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@appointschedule.local:27017/appointschedule_0335?authSource=admin"},{"name":"MONGO_DOMAIN","value":"appointschedule.local"},{"name":"CAMUNDAPOD_URL","value":"http://appointschedule.local:8080"},{"name":"SECURITYURL","value":"http://appointschedule.local:8003"},{"name":"AUTHPROXYURL","value":"http://appointschedule.local:8001"},{"name":"ADMINURL","value":"http://appointschedule.local:8004"},{"name":"CAMUNDAURL","value":"http://appointschedule.local:8002"},{"name":"GCAMURL","value":"http://appointschedule.local:8007"},{"name":"APIGATEWAY","value":"http://appointschedule.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "appointschedule"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/appointschedule",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "works-0335",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-appointschedule-0335-works:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8016",
                    "protocol": "tcp",
                    "hostPort": "8016"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@appointschedule.local:27017/appointschedule_0335?authSource=admin"},{"name":"MONGO_DOMAIN","value":"appointschedule.local"},{"name":"CAMUNDAPOD_URL","value":"http://appointschedule.local:8080"},{"name":"SECURITYURL","value":"http://appointschedule.local:8003"},{"name":"AUTHPROXYURL","value":"http://appointschedule.local:8001"},{"name":"ADMINURL","value":"http://appointschedule.local:8004"},{"name":"CAMUNDAURL","value":"http://appointschedule.local:8002"},{"name":"GCAMURL","value":"http://appointschedule.local:8007"},{"name":"APIGATEWAY","value":"http://appointschedule.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "appointschedule"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/appointschedule",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "exchange-0335",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-appointschedule-0335-exchange:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8017",
                    "protocol": "tcp",
                    "hostPort": "8017"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@appointschedule.local:27017/appointschedule_0335?authSource=admin"},{"name":"MONGO_DOMAIN","value":"appointschedule.local"},{"name":"CAMUNDAPOD_URL","value":"http://appointschedule.local:8080"},{"name":"SECURITYURL","value":"http://appointschedule.local:8003"},{"name":"AUTHPROXYURL","value":"http://appointschedule.local:8001"},{"name":"ADMINURL","value":"http://appointschedule.local:8004"},{"name":"CAMUNDAURL","value":"http://appointschedule.local:8002"},{"name":"GCAMURL","value":"http://appointschedule.local:8007"},{"name":"APIGATEWAY","value":"http://appointschedule.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "appointschedule"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/appointschedule",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "appointschedule",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "appointschedule0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
