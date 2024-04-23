export async function getQuiz(limit) {
  return fetch(`/api/quiz?limit=${limit}`,{
    next:{
        revalidate:30
    }
  });
}

export async function getQuizById(id) {
  return fetch(`/api/quiz/${id}`,{
    next:{
        revalidate:30
    }
  });
}

export async function postResults(data) {
  return fetch('/api/take',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'
    }
  });
}

export async function getResults(email,limit) {
  return fetch(`/api/take?email=${email}&limit=${limit}`,{
    next:{
        revalidate:30
    }
  });
}

export async function postQuiz(data) {
  return fetch('/api/create',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'
    }
  });
}

export async function patchQuiz(id,data){
  return fetch(`/api/quiz/${id}`,{
    method:'PATCH',
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'
    }
  });
}

export async function postLogin(data){
  return fetch('/api/users/login',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'
    }
  });
}

export async function postSignUp(data){
  return fetch('/api/users/signup',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'
    }
  });
}