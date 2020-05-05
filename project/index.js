const CLIENT_ID = '592117250627-qolkl5j1dq8rjfda9gn4onmrn225f10i.apps.googleusercontent.com';
const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
function handleClientLoad(){
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        clientId: CLIENT_ID
    }).then(() => {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    });
}

function updateSigninStatus(isSignedIn) {
    if(isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

// Handling login
function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
}

// Handling logout
function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
}
