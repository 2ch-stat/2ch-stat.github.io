$(document).ready(function(){
    temp = [];
    $.getJSON("result.json", function(data) {
        $.each(data, function(key, value) {
            temp.push({v:value, k: key});
            countIndexes(key, value);
        });
    }); 

    setTimeout(function(){
        temp.sort(function(a,b) { return b.v -a.v; });
        filterTrash(temp);
        getTrends(temp);

        $(".indexes").append('<div class="well text-center lead bio"><p><abbr title="'+abbr("bio")+'">Биопроблемы</abbr>: <b>'+indexes["bio"]+'</b> </p></div>')
        $(".indexes").append('<div class="well text-center lead polit"><p><abbr title="'+abbr("polit")+'">Политота</abbr>: <b>'+indexes["polit"]+'</b> </p></div>')
        $(".indexes").append('<div class="well text-center lead bydlo"><p><abbr title="'+abbr("bydlo")+'">Быдлоиндекс</abbr>: <b>'+indexes["bydlo"]+'</b> </p></div>')
        $(".indexes").append('<div class="well text-center lead roll"><p><abbr title="'+abbr("roll")+'">Рулеткодебилы</abbr>: <b>'+indexes["roll"]+'</b> </p></div>')
        $(".indexes").append('<div class="well well-sm text-center "><abbr title="'+abbr("huy")+'">Хуйцов</abbr>: <b>'+indexes["huy"]+'</b> </div>')
        $(".indexes").append('<div class="well well-sm text-center "><abbr title="'+abbr("pizda")+'">Пиздятины</abbr>: <b>'+indexes["pizda"]+'</b> </div>')
        $(".indexes").append('<div class="well well-sm text-center "><abbr title="'+abbr("student")+'">Школота/студентопроблемы</abbr>: <b>'+indexes["student"]+'</b> </div>')
        $(".indexes").append('<div class="well well-sm text-center "><abbr title="'+abbr("sage")+'">Сажи</abbr>: <b>'+indexes["sage"]+'</b> </div>')
        $(".indexes").append('<div class="well well-sm text-center "><abbr title="'+abbr("nya")+'">Някающих дебилов</abbr>: <b>'+indexes["nya"]+'</b> </div>')

        $.each(trends, function(key, value) {
            $('.trends').append('<div class="text-center small">'+value.k+' '+value.v+'</div>');
        });

        
        $.each(temp, function(key, obj) {
            if (obj) {
                $(".chart").append('<div class="chart-item" data-count="'+obj.v+'"> ' +obj.k+': '+obj.v+'</div>')
            }
        });

        $(".chart-item").each(function(){
            count = this.attributes[0].value;
            if (count > 69) {
                $(this).addClass('bg-primary big');
            } else if (count > 39) {
                $(this).addClass('bg-danger');
            } else if (count > 19) {
                $(this).addClass('bg-warning');
            } else if (count > 9) {
                $(this).addClass('bg-success');
            } else if (count > 4) {
                $(this).addClass('bg-info');
            } else {
                $(this).addClass('small');
            }
        });
    }, 500);
    
});
