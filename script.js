function inputsAlerts() {
  let Name = document.getElementById('name');
  let Email =  document.getElementById('mail');
  if (Name.value === '') {
    alert('Please write your Name')
  } else if (Email.value === '') {
    alert('Please write your Email')
  }else{
    alert('your data is= '+Name.value+' and Email= '+ Email.value);
  }
}