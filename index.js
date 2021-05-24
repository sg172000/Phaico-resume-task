$("#submit").click(function() {
  const name = $("#Name").val();
  const email = $("#Email").val();
  const msg = $("#Message").val();

  if (name == '' || email == '' || msg == '') {
    swal({
      title: "Fields Empty",
      text: "Please check the empty fields!!",
      icon: "warning",
      button: "ok",
    });
  } else {
    swal({
      title: "sent",
      text: "Your message has been send successfully!!",
      icon: "success",
      button: "ok",
    });
  }
});
