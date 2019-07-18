function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  console.log(id_token);
  fetch("/api/auth/google", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id_token })
  })
    .then(result => {
      console.log(result.body.json());
      console.log("Success");
    })
    .catch(err => {
      console.log(err);
    });
}
