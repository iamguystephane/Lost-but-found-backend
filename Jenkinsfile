pipeline {
    agent any

    triggers {
        pollSCM('* * * * *') // Poll SCM every minute (temporary for testing)
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                     url: 'https://github.com/iamguystephane/lost-but-found-backend.git',
                     credentialsId: 'github-pat' // if private repo
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        failure {
            echo "Build failed!"
        }
        success {
            echo "Build passed!"
        }
    }
}