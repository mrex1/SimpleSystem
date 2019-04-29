# backend
### apis
1. login: 'localhost:8000/api/auth/login/'
2. registration: 'localhost:8000/api/auth/register/'
3. jobs: 'localhost:8000/api/users/jobs/'+auth_token
* GET: get the jobs belong to the user with a authetication token
* POST: inset a new job to belong to the user with a authetication token
* DELETE: delete a job with a provided job id only when the job belongs to the user
