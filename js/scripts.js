// Menu section
$(document).ready(function(){
    $(".mm1").mouseover(function(){
      $(".text1").show();
     });
     $(".mm1").mouseout(function(){
      $(".text1").hide();
     });
     $(".mm2").mouseover(function(){
      $(".text2").show();
     });
     $(".mm2").mouseout(function(){
      $(".text2").hide();
     });
     $(".mm3").mouseover(function(){
      $(".text3").show();
     });
     $(".mm3").mouseout(function(){
      $(".text3").hide();
     });
     $(".mm4").mouseover(function(){
      $(".text4").show();
     });
     $(".mm4").mouseout(function(){
      $(".text4").hide();
     });
     $(".mm5").mouseover(function(){
      $(".text5").show();
     });
     $(".mm5").mouseout(function(){
      $(".text5").hide();
     });
     $(".mm6").mouseover(function(){
      $(".text6").show();
     });
     $(".mm6").mouseout(function(){
      $(".text6").hide();
     });
     $(".mm7").mouseover(function(){
        $(".text7").show();
     });
     $(".mm7").mouseout(function(){
      $(".text7").hide();
     });
     $(".mm8").mouseover(function(){
      $(".text8").show();
     });
     $(".mm8").mouseout(function(){
      $(".text8").hide();
     });
  });

//   Order section
$(document).ready(function() {
      $("#checkout").click(function(event) {
        function flavor() {
          var pizzaFlavour = document.getElementById("flavor").value;
          return parseInt(pizzaFlavour);
        }
        function size() {
          var pizzaSize = document.getElementById("size").value;
          return parseInt(pizzaSize);
        }
        function crust() {
          var pizzaCrust = document.getElementById("crust").value;
          return parseInt(pizzaCrust);
        }
        function topping() {
          var pizzaTopping = document.getElementById("topping").value;
          return parseInt(pizzaTopping);
        }
        function number() {
          var pizzaNumber = document.getElementById("number").value;
          return parseInt(pizzaNumber);
        }
        //a constructor to create objects/instances of a user's orders
        function Order(flavor, size, crust, topping, number) {
          this.newFlavor = flavor;
          this.newSize = size;
          this.newCrust = crust;
          this.newTopping = topping;
          this.newNumber = number;
        }
        //an object/instance (of the above constructor) to save the users order
        var userInput = new Order(flavor(), size(), crust(), topping(), number());
        //a variable to store the total expenditure of the user
        var totalCost =
          (userInput.newSize +
            userInput.newCrust +
            userInput.newTopping +
            userInput.newFlavor *
            userInput.newNumber);
        //prompts for the user
        alert("Your charges for Pizza is" + totalCost);
        prompt("enter your email address");
        prompt("enter your phone number");
        prompt("enter your location");
        alert("Your pizza will be delivered");
        //a method to reset the form after all operations have been completed
        $("#text-center").reset();
        event.preventDefault();
      });
    });