pipeline {
    agent any

    triggers {
        githubPush() // Optional; for webhook trigger
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/iamguystephane/lost-but-found-backend.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // or composer install, pip install, etc.
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test' // or PHPUnit, pytest, etc.
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
