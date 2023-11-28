function postData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var postedInfo = document.getElementById('postedInfo');

    if (name.trim() !== '') {
        postedInfo.value += 'Name: ' + name + '\n';
        
        postedInfo.value += 'Email: ' + email + '\n';
        postedInfo.value += 'age: ' + age + '\n';

    
        document.getElementById('name').value = '';
        document.getElementById('Email').value = '';
        document.getElementById('age').value = '';
    }
}

