$(function() {

	//for a click on add button
	$('#btnadd').on('click', function() {

		var id = $("#txtid").val();
		var country = $("#txtcountry").val();
		var name = $("#txtname").val();
		var edit = "<a class='edit' href='JavaScript:void(0);'>Edit</a>";
		var delet = "<a class='delete' href='JavaScript:void(0);'>Delete</a>";
		if (name == "" || country == "") {
			alert("Name and country Filed are Required!");
		} else {
			var table;
			table = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + country + "</td><td>" + edit + "</td><td>" + delet + "</td></tr>"
			$("#tbldata").append(table);
		}
		clear();

	});

	//for a click on clear button
	$("#btnclear").on("click", function() {
		clear();
	});

	//for a delete a perticular data row into a table
	$("#tbldata").on("click", ".delete", function() {

		if (confirm("Are you sure to want to delete this record")) {
			$(this).closest('tr').remove();
		} else {
			preventDefault();
		}

	});

	//for a edit a perticular data row into a table
	$("#tbldata").on("click", ".edit", function() {

		var row = $(this).closest('tr');
		$("#rowindex").val($(row).index());
		var td = $(row).find("td");
		$('#txtid').val($(td).eq(0).html());
		$('#txtname').val($(td).eq(1).html());
		$('#txtcountry').val($(td).eq(2).html());
		$('#btnadd').hide();
		$('#btnupdate').show();

	});

	//for a update a exits data
	$('#btnupdate').on('click', function() {

		var id = $("#txtid").val();
		var name = $("#txtname").val();
		var country = $("#txtcountry").val();
		$('#tbldata tbody tr').eq($('#rowindex').val()).find('td').eq(1).html(name);
		$('#tbldata tbody tr').eq($('#rowindex').val()).find('td').eq(2).html(country);
		$('#btnadd').show();
		$('#btnupdate').hide();
		clear();

	});

	//clear the all value in input field
	function clear() {

		$("#txtid").val("");
		$("#txtname").val("");
		$("#txtcountry").val("");
		$("#rowindex").val("");
	}

});
