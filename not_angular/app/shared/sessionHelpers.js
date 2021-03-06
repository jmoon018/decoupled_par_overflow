// Contains methods to aid logging in, getting tokens, and accessing sessionStorage data
console.log("Loading sessionHelpers")
app.service('sessionHelpers', function(){

  this.isLoggedIn = function() {
    if (sessionStorage.user_id){
      return true;
    } else {
      return false;
    }
  };

  this.isOwner = function(owner_id) {
    return (owner_id === parseInt(sessionStorage.user_id));
  };

});
