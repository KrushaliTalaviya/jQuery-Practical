$(function(){
    $('#btnadd').on('click',function(){
        var name, id, country;
        id=$("#txtid").val();
        country=$("#txtcountry").val();
        name=$("#txtname").val();
        
        var edit="<a class='edit' href='JavaScript:void(0);'>Edit</a>";
        var delet="<a class='delete' href='JavaScript:void(0);'>Delete</a>";
        if(name==""||country=="")
        {
            alert("Name and country Filed are Required!");
        }
        else{
            var table;
            table="<tr><td>"+id+"</td><td>"+name+"</td><td>"+country+"</td><td>"+edit+"</td><td>"+delet+"</td></tr>"
            $("#tbldata").append(table);
        }
        id=$("#txtid").val("");
        name=$("#txtname").val("");
        country=$("#txtcountry").val("");
        clear();
    });
    $("#btnclear").on("click",function(){
        clear();
    });
    $("#tbldata").on("click",".delete",function(){
        if(confirm("Are you sure to want to delete this record"))
        {
            $(this).closest('tr').remove();
        }
        else
        {
            preventDefault();
        }
    });
    $("#tbldata").on("click",".edit",function(){
        var row=$(this).closest('tr');
        $("#rowindex").val($(row).index());
        var td=$(row).find("td");
        $('#txtid').val($(td).eq(0).html());
        $('#txtname').val($(td).eq(1).html());
        $('#txtcountry').val($(td).eq(2).html());
        $('#btnadd').hide();
        $('#btnupdate').show();
    });
    $('#btnupdate').on('click', function () {
        var name, country, id;
        id = $("#txtid").val();
        name = $("#txtname").val();
        country = $("#txtcountry").val();

        $('#tbldata tbody tr').eq($('#rowindex').val()).find('td').eq(1).html(name);
        $('#tbldata tbody tr').eq($('#rowindex').val()).find('td').eq(2).html(country);

        $('#btnadd').show();
        $('#btnupdate').hide();
        clear();
    });
    function clear(){
        $("#txtid").val("");
        $("#txtname").val("");
        $("#txtcountry").val("");
        $("#rowindex").val("");
    }
});