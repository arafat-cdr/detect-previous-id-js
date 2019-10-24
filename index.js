<script>
        $(document).ready(function(){
          // Track the Previous active tab id
          // We are taking the Previous id
          // you can do whatever you want by using the previous id
          // it is using click ...
          // if you have a loop that work also without click just call the function pre_ids_are
          // here we go ...

          // here we first keep the id theat is initally active

          // set up the code ...
          var inital_id_is = "inital_id_here";
          var common_class_is = "common_class_here";


          var pre_id_list = [inital_id_is];
          function pre_ids_are(pre_id){
              // keeping the track
              pre_id_list.push(pre_id);

              // Geting the previous id
              return pre_id_list[pre_id_list.length - 2];
          }


          $(document).on("click", "."+common_class_is, function(){
              var id = $(this).attr("id");
              var pre_id = pre_ids_are(id);

              alert("Previous Tab Id is ---> "+pre_id);
          });
        });
    </script>