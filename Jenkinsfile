// pipeline {
//    agent {  docker { image 'mcr.microsoft.com/playwright:v1.44.1-jammy' } }
//    environment {
//         PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin"
//     }
//    stages {
//       stage('e2e-tests') {
//          steps {
//             sh 'docker --version'
//             sh 'npm ci'
//             sh 'npx playwright test'
//          }
//       }
//    }
// }
pipeline {
    agent {  docker { image 'mcr.microsoft.com/playwright:v1.44.1-jammy' } }
    environment {
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin"
    }
    stages {
        stage('Run Docker') {
            steps {
                script {
                    sh 'docker --version'
                }
            }
        }
    }
}


