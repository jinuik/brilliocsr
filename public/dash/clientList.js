jQuery(document).ready(function () {
            (function($) {
                $.fn.editable = function() {
                    
                    var textBlock = $(this);
                    textBlock.prevContent = textBlock.html();
                    // Create a new input to allow editing text on double click
                    var textBox = $('<input id="'+textBlock[0].id+'_filter" class="headerFilter"/>');
                    textBox.hide().insertAfter(textBlock).val('');

                    $('.headerFilter').on('keyup', function(){
                        var clientData = MNT.List.clientData;
                        var rowIds = MNT.List.rowIds;
                    });;
                    // Hiding the input and showing the original div
                     textBox.blur(function() {
                        toggleVisiblity(false);
                    });
                    
                    searchGrid = function(){
                        
                    };
                    
                    toggleVisiblity = function(editMode) {
                        if (editMode == true) {
						
                            textBlock.hide();
                            textBox.show().focus();
							textBox.on('keyup', function() {
							var clientData = MNT.List.clientData;
							var rowIds = MNT.List.rowIds;
							if (typeof clientData != "undefined" && typeof rowIds != "undefined") {
								var searchString = $(this).val().toLowerCase();
								$.each(clientData, function(id, row) {
									var show = false;
									$.each(row, function(id, cell) {
										if (cell.toLowerCase().indexOf(searchString) >= 0) {
											show = true;
											return false;
										}
									});
									var $row = $('#' + rowIds[id].id);
									if (show) {
										$row.show();
									} else {
										$row.hide();
									}
								});
							}
						});
                            // workaround, to move the cursor at the end in input box.
                            textBox[0].value = textBox[0].value;
                        }
                        else {
                            textBlock.show();
                            textBox.hide();
							
                            textBlock.html(textBlock.prevContent);
                        }
                    };
                    
                    toggleVisiblity(true);
                };

            })(jQuery);
            MNT.List.onLoad();
                });



var MNT = MNT || {};
MNT.List = {
    clientData : null,
    rowIds : null,
    onLoad : function() {
        var data = {"clients" : [
                                 {
                                     "id": "1b72caaf-1ut32-4d9d-8a7c-d2f28fb53bf4",
                                     "firstName": "Erika",
                                     "lastName": "Samuels",
                                     "accountNumber": 819267899,
                                     "platform": "Web",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },{
                                     "id": "1b72caaf-1332-4d9d-8a7c-d2f28fb53bf4",
                                     "firstName": "Twila",
                                     "lastName": "Ramirez",
                                     "accountNumber": 819266189,
                                     "platform": "Web",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "9f4e4048-39d1-4744-a755-74eddc0f9dd2",
                                     "firstName": "Berg",
                                     "lastName": "Odonnell",
                                     "accountNumber": 983991364,
                                     "platform": "Tablet",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "650709b5-a499-4190-81b8-6fd1cf7f5d2f",
                                     "firstName": "Marcie",
                                     "lastName": "Matthews",
                                     "accountNumber": 595412887,
                                     "platform": "Phone",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "18e255c1-885c-4b27-9c70-62f68fdc1809",
                                     "firstName": "Annie",
                                     "lastName": "Sweet",
                                     "accountNumber": 647194668,
                                     "platform": "Tablet",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "5e88c5d1-1fc4-4509-8fff-9c011522dce8",
                                     "firstName": "Simmons",
                                     "lastName": "Black",
                                     "accountNumber": 342926945,
                                     "platform": "Tablet",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "9a864be1-bed6-4f79-94e6-d71b8af62ddc",
                                     "firstName": "Patrick",
                                     "lastName": "Blankenship",
                                     "accountNumber": 899344051,
                                     "platform": "Phone",
                                     "reason": "Open a Safe Deposit",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "e69349a1-28a1-457e-b641-10e422a8943e",
                                     "firstName": "Russell",
                                     "lastName": "Velasquez",
                                     "accountNumber": 63102497,
                                     "platform": "Web",
                                     "reason": "Open a Safe Deposit",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "10690cc9-d2a4-447c-8b57-8c56b0127028",
                                     "firstName": "Mccarty",
                                     "lastName": "Macdonald",
                                     "accountNumber": 46988161,
                                     "platform": "Phone",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "c42ac915-3434-406c-8708-9e50041f6108",
                                     "firstName": "Maxine",
                                     "lastName": "Trujillo",
                                     "accountNumber": 940488677,
                                     "platform": "Web",
                                     "reason": "Open a Safe Deposit",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "125f7c65-412b-4aba-b074-025dcc9155be",
                                     "firstName": "Candice",
                                     "lastName": "Valencia",
                                     "accountNumber": 866708303,
                                     "platform": "Tablet",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "cfa2ca29-d5f3-4774-ac52-0aff28a4a1c9",
                                     "firstName": "Foster",
                                     "lastName": "Washington",
                                     "accountNumber": 822945100,
                                     "platform": "Tablet",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "bc13f2c8-e577-4f60-ba9b-025f475e6796",
                                     "firstName": "Bond",
                                     "lastName": "Gates",
                                     "accountNumber": 300021651,
                                     "platform": "Phone",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "89113326-88fc-4119-bb8e-37c6478e5238",
                                     "firstName": "Glenn",
                                     "lastName": "Drake",
                                     "accountNumber": 429029641,
                                     "platform": "Tablet",
                                     "reason": "Open an Account",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "b400edab-f746-4947-8073-7cd6411f3018",
                                     "firstName": "Caroline",
                                     "lastName": "Mills",
                                     "accountNumber": 341439088,
                                     "platform": "Web",
                                     "reason": "Open a Safe Deposit",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "9df15f75-56ea-42ec-8e9b-1851b04cddd5",
                                     "firstName": "Russo",
                                     "lastName": "Sharpe",
                                     "accountNumber": 903670599,
                                     "platform": "Phone",
                                     "reason": "Open a Safe Deposit",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "f3ec6f2b-a8a0-454b-b9b3-8150f5ad7bdb",
                                     "firstName": "Henrietta",
                                     "lastName": "Kidd",
                                     "accountNumber": 139721904,
                                     "platform": "Tablet",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "be778095-5bb0-41f2-8747-86c027b77146",
                                     "firstName": "Francis",
                                     "lastName": "Martinez",
                                     "accountNumber": 601909860,
                                     "platform": "Phone",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "ff6b8ebd-513d-4987-92ce-a02ac6167435",
                                     "firstName": "Bethany",
                                     "lastName": "Robbins",
                                     "accountNumber": 221094625,
                                     "platform": "Tablet",
                                     "reason": "Open an Account",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "875f3dae-7af6-405a-8453-8afcd3e6795e",
                                     "firstName": "Pamela",
                                     "lastName": "Waters",
                                     "accountNumber": 267723034,
                                     "platform": "Tablet",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "7fa9cce7-d3f1-429b-89e8-ef6743787013",
                                     "firstName": "Cleo",
                                     "lastName": "Ayers",
                                     "accountNumber": 443848105,
                                     "platform": "Web",
                                     "reason": "Open an Account",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "465e652a-14be-4cb5-961f-5867aed701fa",
                                     "firstName": "Dena",
                                     "lastName": "Schwartz",
                                     "accountNumber": 174421854,
                                     "platform": "Tablet",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "f1cbe4a8-1071-48cd-acd7-5cdc18efaa9c",
                                     "firstName": "Verna",
                                     "lastName": "Harper",
                                     "accountNumber": 553553394,
                                     "platform": "Web",
                                     "reason": "Open a Safe Deposit",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "b19609e3-2a9c-4851-a457-df3b01b8228f",
                                     "firstName": "Ayers",
                                     "lastName": "Langley",
                                     "accountNumber": 498876799,
                                     "platform": "Tablet",
                                     "reason": "Open an Account",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "4237b114-4958-444a-9c14-768d9d728c0b",
                                     "firstName": "Lois",
                                     "lastName": "Noble",
                                     "accountNumber": 818246076,
                                     "platform": "Phone",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "4c9b7f5b-9bda-4fdd-a5d2-85de182a07b1",
                                     "firstName": "Krista",
                                     "lastName": "Brooks",
                                     "accountNumber": 992209377,
                                     "platform": "Web",
                                     "reason": "Open an Account",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "e52a802c-a92c-4d31-8c93-c93487f46744",
                                     "firstName": "Richard",
                                     "lastName": "Mullen",
                                     "accountNumber": 957455569,
                                     "platform": "Web",
                                     "reason": "Open an Account",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "f4fc4234-8e1e-40c8-a6f4-cbd7d6f95414",
                                     "firstName": "Valencia",
                                     "lastName": "Yang",
                                     "accountNumber": 474706866,
                                     "platform": "Tablet",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "294f4234-c32e-438a-9eb9-a22920857ce5",
                                     "firstName": "Lucy",
                                     "lastName": "Manning",
                                     "accountNumber": 637425287,
                                     "platform": "Phone",
                                     "reason": "Open a Safe Deposit",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "67e8c7c4-c37f-4c76-b920-5df237151ab2",
                                     "firstName": "Marquita",
                                     "lastName": "Tanner",
                                     "accountNumber": 711150019,
                                     "platform": "Tablet",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "44520e49-bb9a-4263-ae54-77adb826edb2",
                                     "firstName": "Tamera",
                                     "lastName": "Collins",
                                     "accountNumber": 606155889,
                                     "platform": "Web",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "d57fc9c9-b951-47b3-901d-70727c0f2af2",
                                     "firstName": "Margret",
                                     "lastName": "Pickett",
                                     "accountNumber": 442229715,
                                     "platform": "Phone",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "19bd7d17-23cc-43f2-8c45-0c8d3cc5e50b",
                                     "firstName": "Cline",
                                     "lastName": "Dillard",
                                     "accountNumber": 299725838,
                                     "platform": "Tablet",
                                     "reason": "Open an Account",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "ad79dae4-3f54-477f-84c1-086a84ea3ca3",
                                     "firstName": "Bonner",
                                     "lastName": "Munoz",
                                     "accountNumber": 585259963,
                                     "platform": "Phone",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "da43a6a2-2133-461d-8e1f-8e745aa21493",
                                     "firstName": "Parker",
                                     "lastName": "Payne",
                                     "accountNumber": 454505005,
                                     "platform": "Tablet",
                                     "reason": "Open a Safe Deposit",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "7ed06102-a4a6-450f-ae85-a7e5c384c658",
                                     "firstName": "Veronica",
                                     "lastName": "Bowen",
                                     "accountNumber": 567663538,
                                     "platform": "Web",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "24b71cff-03e3-4791-b4d4-224d6b3d1635",
                                     "firstName": "Scott",
                                     "lastName": "Acosta",
                                     "accountNumber": 665522012,
                                     "platform": "Tablet",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "0193cfd4-42e7-4edc-ba04-d6e3b276e84f",
                                     "firstName": "Lakeisha",
                                     "lastName": "Prince",
                                     "accountNumber": 322445054,
                                     "platform": "Web",
                                     "reason": "Open an Account",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "368fd4b1-f393-4ff1-af4b-789e49af26a0",
                                     "firstName": "Tyler",
                                     "lastName": "Brock",
                                     "accountNumber": 972602377,
                                     "platform": "Web",
                                     "reason": "Open a Safe Deposit",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "b98d64c2-573d-4e1e-88e4-db0f2ad58fe6",
                                     "firstName": "Sheri",
                                     "lastName": "Randolph",
                                     "accountNumber": 374607311,
                                     "platform": "Web",
                                     "reason": "Credit Card Inquiry",
                                     "dataPoint": "Lorem Ipsum"
                                 },
                                 {
                                     "id": "88339eb0-6d39-4b7f-89fb-77d0936ffe1e",
                                     "firstName": "Mcbride",
                                     "lastName": "Holloway",
                                     "accountNumber": 350091216,
                                     "platform": "Phone",
                                     "reason": "Mortgage Rates",
                                     "dataPoint": "Lorem Ipsum"
                                 }
                             ]
                             };
			
        $("#clientList").jqGrid(
                {
                    datastr:data,
                    datatype: "jsonstring",
                    /*url : 'data.json',
                    contentType : "application/json",
                    datatype : "json",
                    
                    mtype : "GET",*/
                    jsonReader : {
                        root : "clients",
                        id : "id",
                        repeatitems : false
                    },
                    // altRows : true,
                    gridComplete : function() {
                        $(".jqgrow:odd").addClass("alternate-rows");
                        $('#clientList').jqGrid('setLabel', 'firstName',
                                '<span class="gridHeader" onclick="MNT.List.onColumnfilter(\'firstName\');">First Name<img src=images/searchClientsIcon.png width=16 height=16 class="headerSearch" ></span>');
                        $('#clientList').jqGrid('setLabel', 'lastName',
                                '<span class="gridHeader" onclick="MNT.List.onColumnfilter(\'lastName\');">Last Name<img src=images/searchClientsIcon.png width=16 height=16 class="headerSearch" ></span>');
                        $('#clientList').jqGrid('setLabel', 'accountNumber',
                                '<span class="gridHeader" onclick="MNT.List.onColumnfilter(\'accountNumber\');">Account Number<img style="margin-left:13px;"src=images/searchClientsIcon.png width=16 height=16 class="headerSearch" ></span>');
						 $('#clientList').jqGrid('setLabel', 'platform',
                                '<span class="gridHeader" >Platform<img style="margin-left:65px;" src=images/sortIcon.png width=15 height=15 class="headerSearch" ></span>');
                        $('#clientList').jqGrid('setLabel', 'reason',
                                '<span class="gridHeader" >Reason/Need<img  style="margin-left:35px;"src=images/sortIcon.png width=15 height=15 class="headerSearch" ></span>');
                        $('#clientList').jqGrid('setLabel', 'dataPoint',
                                '<span class="gridHeader" >DataPoint<img src=images/sortIcon.png width=15 height=15 class="headerSearch" ></span>');
						
                    },
                    loadComplete : function(data) {
                        var grid = $("#clientList");
                        var clientData = grid.jqGrid('getRowData');
                        MNT.List.clientData = clientData;
                        var rowIds = null;
                        for ( var key in clientData[0]) {
                            rowIds = grid.jqGrid('getCol', key, true);
                            break;
                        }
                        MNT.List.rowIds = rowIds;
                    },
					 onSelectRow: function(ids) { 
					
							
									 var myGrid = $('#clientList'),
										selRowId = myGrid.jqGrid ('getGridParam', 'selrow'),
										firstName = myGrid.jqGrid ('getCell', selRowId, 'firstName');
										lastName = myGrid.jqGrid ('getCell', selRowId, 'lastName');
										
										
											window.open("client-Details.html?firstname="+firstName+"&lastname="+lastName,'_self');
									
									
								
						},
                    autoWidth : true,
                    gridview : true,
                    colNames : [ 'First Name', 'Last Name', 'Account Number', 'Platform', 'Reason/Need', 'Data Point' ], // define column names
                    colModel : [/*
                                 * { name : 'id', index : 'id', hidden : true key : true, width : 50 },
                                 */{
                        name : 'firstName',
                        index : 'firstName',
                        align : 'left',
                        sortable : false
                    }, {
                        name : 'lastName',
                        index : 'lastName',
                        sortable : false
                    }, {
                        name : 'accountNumber',
                        index : 'accountNumber',
                        sortable : false
                    }, {
                        name : 'platform',
                        index : 'platform',
                        sortable : true,
                        search : false
                    }, {
                        name : 'reason',
                        index : 'reason',
                        sortable : true,
                        search : false
                    }, {
                        name : 'dataPoint',
                        index : 'dataPoint',
                        sortable : true,
                        search : false
                    } ],
                    loadonce : true, // to enable sorting on client side
                    //sortable : true,
                    rowNum : 25,
                    ignoreCase : true
                });
        // jQuery("#clientList").jqGrid('filterToolbar', { searchOperators: false, searchOnEnter: false, autosearch: true });
        /*for(var i=0;i<=data.length;i++)
            jQuery("#clientList").jqGrid('addRowData',i+1,mydata[i]);*/
        this.addEvents();
    },
    addEvents : function() {
        $(window).bind('resize', function() {
            // set to 0 so grid does not continually grow
            $('#clientList').setGridWidth(0);
            // resize to our container's width
			
            $('#clientList').setGridWidth($('#clientListWrapper').width());
            $('#clientList').setGridHeight(457);
        }).trigger('resize');
        this.addHeaderClickEvent();
        this.addSearchEvent();
    },
    addSearchEvent : function() {
        $('#searchClients').on('keyup', function() {
            var clientData = MNT.List.clientData;
            var rowIds = MNT.List.rowIds;
            if (typeof clientData != "undefined" && typeof rowIds != "undefined") {
                var searchString = $(this).val().toLowerCase();
                $.each(clientData, function(id, row) {
                    var show = false;
                    $.each(row, function(id, cell) {
                        if (cell.toLowerCase().indexOf(searchString) >= 0) {
                            show = true;
                            return false;
                        }
                    });
                    var $row = $('#' + rowIds[id].id);
                    if (show) {
                        $row.show();
                    } else {
                        $row.hide();
                    }
                });
            }
        });
    },
    onColumnfilter : function(e) {
        
        $('#clientList_' + e).editable();

		
        
    },
    addHeaderClickEvent : function() {
        $('#clientListWrapper table thead th').click(function(e) {
            console.log($(this)[0].id);
            var id = $(this)[0].id;
            /*
             * console.log(this); console.log($(this).target);
             */
            // $(id).editable();
        });
    }
};