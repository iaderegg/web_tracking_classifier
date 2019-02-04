$('#familiar_button').on('click', function(){

    text = $('#familiar_textarea').val();

    data = {
        "component": "familiar",
        "text": text
    }

    data_string = JSON.stringify(data)

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/",
        
        data: data_string,
        success: function(msg) {
            console.log(msg);

            $('#class_logreg').text(msg.logreg);
            
            $('#class_1').html(msg.doc2vec.class_1.tag);
            $('#prob_1').html(msg.doc2vec.class_1.prob);

            $('#class_2').html(msg.doc2vec.class_2.tag);
            $('#prob_2').html(msg.doc2vec.class_2.prob);

            $('#class_3').html(msg.doc2vec.class_3.tag);
            $('#prob_3').html(msg.doc2vec.class_3.prob);
        },
        error: function(msg) {
            console.log(msg);
        },
        dataType: "json",
    });
});

$('#economic_button').on('click', function(){
    
    text = $('#economic_textarea').val();

    $.ajax({
        type: "POST",
        url: 'http://localhost/classifier_project/index.php',
        data:{
            'component': 'economic',
            'text': text
        },
        success: function(msg) {
            console.log(msg);
        },
        error: function(msg) {
            console.log(msg);
        },
        dataType: "text",
    });
});

$('#individual_button').on('click', function(){

    text = $('#individual_textarea').val();

    $.ajax({
        type: "POST",
        url: 'http://localhost/classifier_project/index.php',
        data:{
            'component': 'individual',
            'text': text
        },
        success: function(msg) {
            console.log(msg);
        },
        error: function(msg) {
            console.log(msg);
        },
        dataType: "text",
    });
});

$('#academic_button').on('click', function(){

    text = $('#academic_textarea').val();

    $.ajax({
        type: "POST",
        url: 'http://localhost/classifier_project/index.php',
        data:{
            'component': 'academic',
            'text': text
        },
        success: function(msg) {
            console.log(msg);
        },
        error: function(msg) {
            console.log(msg);
        },
        dataType: "text",
    });
});

$('#universitarylife_button').on('click', function(){

    text = $('#universitarylife_textarea').val();

    $.ajax({
        type: "POST",
        url: 'http://localhost/classifier_project/index.php',
        data:{
            'component': 'universitarylife',
            'text': text
        },
        success: function(msg) {
            console.log(msg);
        },
        error: function(msg) {
            console.log(msg);
        },
        dataType: "text",
    });
});
