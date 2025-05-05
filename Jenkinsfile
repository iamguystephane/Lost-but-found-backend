pipeline {
    agent any

    tools {
        nodejs 'node-18' // Make sure this matches your NodeJS installation in Jenkins
    }
    triggers {
        githubPush() // Optional: only works if GitHub webhook is configured
    }

    environment {
        GIT_CREDENTIALS_ID = 'github-pat' // Make sure this matches your Jenkins credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']], // or the appropriate branch
                    userRemoteConfigs: [[
                        url: 'https://github.com/iamguystephane/lost-but-found-backend.git',
                        credentialsId: "${GIT_CREDENTIALS_ID}"
                    ]]
                ])
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // adjust based on your project
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test' // or other test command
            }
        }
    }

    post {
        failure {
            echo "❌ Build failed!"
        }
        success {
            echo "✅ Build passed!"
        }
    }
}
