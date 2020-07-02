admin_state=false
cont_traffic_state=false

document.querySelector("#item-admin").addEventListener('click', function (e,f){
    menu_expand_colapsed("administracion","admin-list-icon","1")
});

document.querySelector("#item-control-trafico").addEventListener('click', function (e,f){
    menu_expand_colapsed("administracion-rutas","admin-list-controlT","2")
});

menu_expand_colapsed = (item,icon,type) =>{
    switch (type) {
        case "1":
            if(admin_state == false){
                document.querySelector("#"+ item).setAttribute("style","display:visible");
                document.querySelector("#" + icon).setAttribute("style","transform:rotate(90deg)");
                admin_state=true
            } else{
                if(admin_state == true){
                    document.querySelector("#"+ item).setAttribute("style","display:none");
                    document.querySelector("#" + icon).setAttribute("style","transform:rotate(0deg)");
                    
                    admin_state=false
                }
            }
            break;
        case "2":
            if(cont_traffic_state == false){
                document.querySelector("#"+ item).setAttribute("style","display:visible");
                document.querySelector("#" + icon).setAttribute("style","transform:rotate(90deg)");
                cont_traffic_state=true
            } else{
                if(cont_traffic_state == true){
                    document.querySelector("#"+ item).setAttribute("style","display:none");
                    document.querySelector("#" + icon).setAttribute("style","transform:rotate(0deg)");    
                    cont_traffic_state=false
                }
            }
            break;
    }
    
}