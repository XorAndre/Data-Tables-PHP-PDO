$(document).ready(function(){
   $('#empTable').DataTable({
      'processing': true,
      'serverSide': true,
      'serverMethod': 'post',
      'ajax': {
          'url':'ajaxfile.php'
      },
      'columns': [
         { data: 'emp_name' },
         { data: 'email' },
         { data: 'gender' },
         { data: 'salary' },
         { data: 'city' },
      ]
   });
});
