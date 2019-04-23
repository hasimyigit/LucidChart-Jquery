$(document).ready(function () {  
    var users = $('#users'); 
    var user = $('#user'); 
    var albums = $('#albums'); 
    var photos = $('#photos'); 
    var posts = $('#posts');
    var todos = $('#todos');
    var comments = $('#comments');
    var commentstitle = $('#commentstitle');
    var todoedit = $('#todoedit'); 
 $(function () {  
    $.ajax({  
        type: 'GET',  
        url: 'https://jsonplaceholder.typicode.com/users',  
        dataType: 'json',  
        success: function (data) {  
            users.empty();  
            $.each(data, function (index, val) {  
                
                users.append('<button class="dropdown-item" type="button" onclick="$.UserDetail.userdetail('+ val.id +')" >' + val.name + '</button>') 
     
          
            });  
        }  

    });  

})

$.UserDetail = {
userdetail: (function (id) {  
    $.ajax({  
        type: 'GET',  
        url: 'https://jsonplaceholder.typicode.com/users/'+id,  
        dataType: 'json',  
        success: function (data) {  
            user.empty();  
         user.append('<li class="list-group-item disabled" aria-disabled="true">User Detail</li>','<li class="list-group-item">Username:  '+ data.username + '</li>','<li class="list-group-item">Email: '+ data.email + '</li>','<li class="list-group-item">Address: '+ data.address.street+ '/'+ data.address.suite + '/'+ data.address.city  + '</li>') 
         
        }  

    });  
$.GetAlbums.getalbums(id);
$.GetPosts.getposts(id);
$.GetTodos.gettodos(id);
})
}


$.GetAlbums = {
    getalbums: (function (id) {  
        $.ajax({  
            type: 'GET',  
            url: 'https://jsonplaceholder.typicode.com/albums?userId='+id,  
            dataType: 'json',  
            success: function (data) {  
              albums.empty();
              $.each(data, function (index, val) {  
                
                albums.append('<button class="dropdown-item" type="button"  onclick="$.GetPhotos.getphotos('+ val.id +')" >' + val.title + '</button>') 
     
          
            });  
   
            }  
    
        });  
    
    })
    }
    $.GetTodos = {
        gettodos: (function (id) {  
            $.ajax({  
                type: 'GET',  
                url: 'https://jsonplaceholder.typicode.com/todos?userId='+id,  
                dataType: 'json',  
                success: function (data) {  
                  todos.empty();
                  $.each(data, function (index, val) {  
                    
                    todos.append('<tr><td><input type="checkbox"  checked="checked"  > </td><td>'+val.title +'</td><td><img class="detailicon"  onclick="$.GetTodoById.gettodo('+ val.id +')" src="data:image/png;base64,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" alt="..."><img class="detailicon" onclick="$.DialogDelete.dialogdelete()" src="https://img3.stockfresh.com/files/a/ahasoft/m/54/7282470_stock-vector-trash-can-flat-black-color-rounded-vector-icon.jpg" alt="..."></td></tr>') 
         
              
                });  
       
                }  
        
            });  
        
        })
        }
        $.GetTodoById = {
            gettodo: (function (id) {  
                $.ajax({  
                    type: 'GET',  
                    url: 'https://jsonplaceholder.typicode.com/todos/'+id,  
                    dataType: 'json',  
                    success: function (data) {  
                        todoedit.empty();
                        todoedit.append('Text : <input id="todoedit" type="text" value="'+data.title+'" >')
                               $.DialogEdit.dialogedit();
                    }  
            
                });  
             
            })

            }
    $.GetPhotos = {
        getphotos: (function (id) {  
            $.ajax({  
                type: 'GET',  
                url: 'https://jsonplaceholder.typicode.com/photos?albumId='+id,  
                dataType: 'json',  
                success: function (data) {  
                  photos.empty();
                  $.each(data, function (index, val) {  
                    
                    photos.append('<div class="carousel-item active" ><img src='+val.url+' class="d-block w-100" alt="..."></div>') 
         
              
                });  
       
                }  
        
            });  
        
        })
        }
        $.GetPosts = {
            getposts: (function (id) {  
                $.ajax({  
                    type: 'GET',  
                    url: 'https://jsonplaceholder.typicode.com/posts?userId='+id,  
                    dataType: 'json',  
                    success: function (data) {  
                      posts.empty();
                      $.each(data, function (index, val) {  
                        
                        posts.append('<tr><td>'+val.id +'</td><td>'+val.title +'</td><td><img class="detailicon" onclick="$.GetPostById.getpost('+ val.id +')" src="https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-512.png" alt="..."></td></tr>') 
             
                  
                    });  
           $.GetComments.getcomments(id);
                    }  
            
                });  
            
            })
            }
           
                $.GetPostById = {
                    getpost: (function (id) {  
                        $.ajax({  
                            type: 'GET',  
                            url: 'https://jsonplaceholder.typicode.com/posts/'+id,  
                            dataType: 'json',  
                            success: function (data) {  
                                $.GetComments.getcomments(id);
                            commentstitle.empty();
                                commentstitle.append(data.title)
                                       $.DialogDetail.dialogdetail();
                            }  
                    
                        });  
                     
                    })

                    }
                    $.GetComments = {
                        getcomments: (function (id) {  
                            $.ajax({  
                                type: 'GET',  
                                url: 'https://jsonplaceholder.typicode.com/comments?postId='+id,  
                                dataType: 'json',  
                                success: function (data) {  
                                  comments.empty();
                                  $.each(data, function (index, val) {  
                                    
                                   comments.append('<p><b>'+val.email+'</b><br />'+ val.body+'</p>')
                              
                                });  
                       
                                }  
                        
                            });  
                        
                        })
                        }
                $.DialogDetail = {
                    dialogdetail: (function() {
                        $( "#dialog" ).dialog({
                            maxHeight: 300,
                            minWidth: 400
                          })
                    

                    })
                }
                $.DialogDelete = {
                    dialogdelete: (function() {
                        $( "#dialogdelete" ).dialog({
                            maxHeight: 300,
                            minWidth: 400
                          })
                    

                    })
                }
                $.DialogEdit = {
                    dialogedit: (function() {
                        $( "#dialogedit" ).dialog({
                            maxHeight: 300,
                            minWidth: 400
                          })
                    

                    })
                }
                $.DialogCon = {
                    dialogcon: (function() {
                        $( "#dialogcon" ).dialog({
                            maxHeight: 300,
                            minWidth: 400
                          })
                    

                    })
                }
          
                $('input[type="checkbox"]').change(function(){
                    if($(this).is(":checked")){
                        alert("Checkbox is checked.");
                    }
                    else if($(this).is(":not(:checked)")){
                        alert("Checkbox is unchecked.");
                    }
                });
     
});

